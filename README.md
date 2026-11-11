# NovigaAI React website

AI-NATIVE SAFETY INTELLIGENCE PLATFORM

## Run

```sh
npm install
npm run dev
```



## Build

```sh
npm run build
```

## Contact form email delivery

The contact form posts to `/api/contact`, a Vercel Node.js Function that sends
enquiries through Resend to **contact@novigaai.com**. The destination is fixed
on the server. Replies go to the visitor's email address.

### Enable production sending

1. Create a Resend account, verify a sending domain you control (for example,
   `novigaai.com`) using the DNS records provided by Resend, and create a sending
   API key.
2. Add these server-only variables in your Vercel project's environment settings:
   - `RESEND_API_KEY`: your Resend sending API key.
   - `CONTACT_FROM_EMAIL`: for example, `NovigaAI Website <website@novigaai.com>`.
     The sender domain must be verified in Resend. See `.env.example`.
3. Leave `VITE_CONTACT_ENDPOINT` unset to use the bundled endpoint. An existing
   separately hosted form endpoint can still be configured with that setting.
4. Redeploy, submit an enquiry and check the receiving inbox and Resend delivery
   logs. Provider acceptance does not guarantee inbox placement.

Never put mail credentials in `VITE_` variables; those are public browser values.
The form retains input on errors and reports success only after the API accepts
the submission. It does not automatically open a visitor's email app.

The endpoint validates input and request size, rejects cross-origin browser
submissions and includes a honeypot. Configure a Vercel Firewall rate-limit rule
for `POST /api/contact` to control automated submission volume. The honeypot is
only basic spam protection.

### Local development and validation

`npm run dev` serves the frontend only. Use `vercel dev` (with the Vercel CLI and
server environment variables) or a Vercel preview deployment to exercise the API.
Plain static hosting cannot execute the function; use a separately hosted
endpoint via `VITE_CONTACT_ENDPOINT` if deploying outside Vercel.

```sh
npm test
npx tsc -b
npm run build
```

Tests mock Resend and send no real emails. Reference:
[Resend send-email API](https://resend.com/docs/api-reference/emails/send-email)
and [Vercel Node.js Functions](https://vercel.com/docs/functions/runtimes/node-js).
