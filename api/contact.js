const recipient = 'contact@novigaai.com';
const maxBodyBytes = 20_000;
const limits = { name: 120, email: 254, company: 160, jobTitle: 120, interest: 100, message: 4000, website: 200 };
const required = ['name', 'email', 'company', 'interest'];
const emailPattern = /^[^\s<>@]+@[^\s<>@]+\.[^\s<>@]+$/;

function json(status, body, headers = {}) {
  return Response.json(body, { status, headers: { 'Cache-Control': 'no-store', ...headers } });
}

export default {
  async fetch(request) {
    if (request.method !== 'POST') return json(405, { error: 'Method not allowed.' }, { Allow: 'POST' });
    const origin = request.headers.get('origin');
    if (origin && origin !== new URL(request.url).origin) {
      return json(403, { error: 'Submission origin is not allowed.' });
    }
    if (request.headers.get('content-type')?.split(';')[0].trim() !== 'application/json') {
      return json(415, { error: 'Please send a JSON submission.' });
    }

    let payload;
    try {
      // Bound the body before parsing, including requests without Content-Length.
      const reader = request.body?.getReader();
      if (!reader) return json(400, { error: 'A submission is required.' });
      const chunks = [];
      let size = 0;
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        size += value.byteLength;
        if (size > maxBodyBytes) {
          await reader.cancel();
          return json(413, { error: 'The submission is too large.' });
        }
        chunks.push(value);
      }
      payload = JSON.parse(Buffer.concat(chunks).toString('utf8'));
    } catch {
      return json(400, { error: 'The submission could not be read.' });
    }
    if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
      return json(400, { error: 'Invalid submission.' });
    }

    const data = {};
    for (const [field, max] of Object.entries(limits)) {
      const value = payload[field] ?? '';
      if (typeof value !== 'string' || value.length > max || (field !== 'message' && /[\r\n\u0000]/.test(value))) {
        return json(400, { error: 'Please check the form fields and try again.' });
      }
      data[field] = value.trim();
    }
    // Ignore simple form-filling bots without sending an email.
    if (data.website) return json(200, { success: true });
    if (required.some(field => !data[field]) || !emailPattern.test(data.email)) {
      return json(400, { error: 'Please provide your name, a valid email, company and area of interest.' });
    }

    const key = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM_EMAIL;
    if (!key || !from || /[\r\n]/.test(from)) {
      return json(503, { error: 'Sending is temporarily unavailable. Please email contact@novigaai.com.' });
    }
    const text = [
      'New NovigaAI website enquiry', '',
      `Name: ${data.name}`, `Email: ${data.email}`, `Company: ${data.company}`,
      `Job title: ${data.jobTitle || 'Not provided'}`, `Area of interest: ${data.interest}`,
      '', 'Message:', data.message || 'No additional message provided.',
    ].join('\n');

    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ from, to: [recipient], reply_to: data.email, subject: `Website enquiry — ${data.company}`, text }),
        signal: AbortSignal.timeout(10_000),
      });
      const result = await response.json();
      if (!response.ok || !result.id) throw new Error('Email was not accepted');
      return json(200, { success: true });
    } catch {
      // Do not expose provider credentials, errors or personal enquiry data.
      return json(502, { error: 'We could not send your request. Please try again or email contact@novigaai.com.' });
    }
  },
};
