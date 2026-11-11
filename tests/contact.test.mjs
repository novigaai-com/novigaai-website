import { test, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import handler from '../api/contact.js';

const originalFetch = globalThis.fetch;
const originalEnv = { RESEND_API_KEY: process.env.RESEND_API_KEY, CONTACT_FROM_EMAIL: process.env.CONTACT_FROM_EMAIL };
afterEach(() => {
  globalThis.fetch = originalFetch;
  for (const [name, value] of Object.entries(originalEnv)) {
    if (value === undefined) delete process.env[name];
    else process.env[name] = value;
  }
});

const valid = { name: 'Test Visitor', email: 'visitor@example.com', company: 'Example Company', jobTitle: 'PV Lead', interest: 'Pharmacovigilance', message: 'Please arrange a demo.' };
function request(payload = valid, options = {}) {
  return new Request('https://www.novigaai.com/api/contact', {
    method: 'POST', headers: { 'Content-Type': 'application/json', Origin: 'https://www.novigaai.com' },
    body: JSON.stringify(payload), ...options,
  });
}
function configured() {
  process.env.RESEND_API_KEY = 'test-key';
  process.env.CONTACT_FROM_EMAIL = 'NovigaAI Website <website@novigaai.com>';
}

test('sends to the fixed inbox with the visitor in Reply-To', async () => {
  configured();
  let sent;
  globalThis.fetch = async (url, options) => {
    assert.equal(url, 'https://api.resend.com/emails');
    assert.equal(options.headers.Authorization, 'Bearer test-key');
    sent = JSON.parse(options.body);
    return Response.json({ id: 'email-test-id' });
  };
  const response = await handler.fetch(request({ ...valid, to: 'other@example.com', from: 'other@example.com' }));
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { success: true });
  assert.deepEqual(sent.to, ['contact@novigaai.com']);
  assert.equal(sent.reply_to, valid.email);
  assert.equal(sent.from, process.env.CONTACT_FROM_EMAIL);
  assert.ok(sent.text.includes(valid.message));
});

test('rejects invalid fields and header injection without sending', async () => {
  globalThis.fetch = () => { throw new Error('Must not send'); };
  for (const payload of [null, [], { ...valid, name: ' ' }, { ...valid, email: 'invalid' }, { ...valid, company: 'Example\r\nBcc: other@example.com' }, { ...valid, message: 'a'.repeat(4001) }, { ...valid, name: {} }]) {
    assert.equal((await handler.fetch(request(payload))).status, 400);
  }
});

test('rejects unsupported methods, cross-origin and non-JSON submissions', async () => {
  assert.equal((await handler.fetch(new Request('https://www.novigaai.com/api/contact'))).status, 405);
  assert.equal((await handler.fetch(request(valid, { headers: { Origin: 'https://other.example', 'Content-Type': 'application/json' } }))).status, 403);
  assert.equal((await handler.fetch(request(valid, { headers: { 'Content-Type': 'text/plain' } }))).status, 415);
});

test('rejects malformed JSON and oversized request bodies', async () => {
  assert.equal((await handler.fetch(request(valid, { body: '{' }))).status, 400);
  assert.equal((await handler.fetch(request(valid, { body: 'a'.repeat(20_001) }))).status, 413);
});

test('ignores honeypot submissions without sending', async () => {
  globalThis.fetch = () => { throw new Error('Must not send'); };
  assert.equal((await handler.fetch(request({ ...valid, website: 'spam.example' }))).status, 200);
});

test('missing credentials do not report success', async () => {
  delete process.env.RESEND_API_KEY;
  delete process.env.CONTACT_FROM_EMAIL;
  assert.equal((await handler.fetch(request())).status, 503);
});

test('provider and network failures do not report success or expose private errors', async () => {
  configured();
  for (const mock of [
    async () => Response.json({ message: 'private provider details' }, { status: 403 }),
    async () => Response.json({}),
    async () => new Response('not JSON'),
    async () => { throw new Error('private provider details'); },
  ]) {
    globalThis.fetch = mock;
    const response = await handler.fetch(request());
    assert.equal(response.status, 502);
    assert.ok(!(await response.text()).includes('private provider details'));
  }
});

test('SPA fallback preserves pages and excludes API routes', () => {
  const config = JSON.parse(readFileSync(new URL('../vercel.json', import.meta.url), 'utf8'));
  const fallback = new RegExp(`^${config.rewrites[0].source}$`);
  for (const path of ['/', '/contact/', '/products/case-management', '/platform/architecture']) assert.ok(fallback.test(path), path);
  for (const path of ['/api', '/api/contact', '/api/other']) assert.ok(!fallback.test(path), path);
});
