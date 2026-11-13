import { useEffect, useRef, useState, type FormEvent } from 'react';
import PageMeta from '../components/common/PageMeta';

type Status = 'idle' | 'sending' | 'success' | 'error';
const interests = ['Pharmacovigilance', 'Literature Intelligence', 'Social Media Intelligence', 'Clinical Trials', 'Compliance', 'General enquiry'];

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [feedback, setFeedback] = useState('');
  const submittingRef = useRef(false);
  const feedbackRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (feedback && (status === 'success' || status === 'error')) {
      feedbackRef.current?.focus();
    }
  }, [feedback, status]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submittingRef.current) return;
    const form = event.currentTarget;
    const payload = Object.fromEntries(
      Array.from(new FormData(form).entries(), ([name, value]) =>
        [name, typeof value === 'string' ? value.trim() : value]),
    );
    if (!payload.name || !payload.email || !payload.company || !payload.interest) {
      setStatus('error');
      setFeedback('Please complete your name, work email, company and area of interest.');
      return;
    }
    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT || '/api/contact';

    submittingRef.current = true;
    setStatus('sending');
    setFeedback('');
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(20_000),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || (!import.meta.env.VITE_CONTACT_ENDPOINT && result?.success !== true)) {
        setStatus('error');
        setFeedback(typeof result?.error === 'string'
          ? result.error
          : 'We could not submit your request. Please try again or email contact@novigaai.com.');
        return;
      }
      form.reset();
      setStatus('success');
      setFeedback('Thank you. Your request has been sent to the NovigaAI team.');
    } catch {
      setStatus('error');
      setFeedback('We could not submit your request. Please try again or email contact@novigaai.com.');
    } finally {
      submittingRef.current = false;
    }
  }
  return (
    <>
      <PageMeta
        title="Contact NovigaAI — request a demo"
        description="Talk to the NovigaAI team about pharmacovigilance, signal management, literature surveillance, case processing or a platform demo."
      />
      <section className="contact-hero">
        <div className="wrap contact-hero-inner">
          <p className="eyebrow">CONTACT NOVIGAAI</p>
          <h1>Let's build a safer<br /><span>tomorrow, together.</span></h1>
          <p>Have a question or want to see NovigaAI in action? Tell us about your safety workflows and we'll help you explore the possibilities.</p>
        </div>
      </section>
      <section className="contact-main" id="demo">
        <div className="wrap contact-layout">
          <div className="contact-intro">
            <p className="contact-kicker">LET'S CONNECT</p>
            <h2>See how NovigaAI can support your team.</h2>
            <p>Whether you're exploring AI-assisted pharmacovigilance or looking to connect your existing safety operations, we'd love to hear what matters most to you.</p>
            <div className="contact-benefits">
              <div><span className="contact-benefit-icon">01</span><div><strong>Explore the platform</strong><p>Get an introduction to the capabilities relevant to your work.</p></div></div>
              <div><span className="contact-benefit-icon">02</span><div><strong>Discuss your workflows</strong><p>Share your team's challenges, requirements, and priorities.</p></div></div>
              <div><span className="contact-benefit-icon">03</span><div><strong>Plan the next steps</strong><p>Talk through potential approaches with the NovigaAI team.</p></div></div>
            </div>
            <div className="contact-note"><span aria-hidden="true">✦</span><p>AI-native safety intelligence, designed to support human expertise.</p></div>
          </div>
          <div className="contact-form-card">
            <div className="contact-form-heading"><span className="contact-form-mark" aria-hidden="true">✦</span><div><h2>Request a Demo</h2><p>Fill in your details and tell us what you're looking for.</p></div></div>
            <form onSubmit={handleSubmit} aria-busy={status === 'sending'} aria-describedby={feedback ? 'contact-feedback' : undefined}>
              <div hidden aria-hidden="true"><label>Website<input name="website" type="text" tabIndex={-1} autoComplete="off" maxLength={200}/></label></div>
              <div className="contact-fields-two">
                <label><span className="contact-label-text">Full name <span className="contact-required" aria-hidden="true">*</span></span><input name="name" disabled={status === 'sending'} type="text" autoComplete="name" placeholder="Your full name" required maxLength={120}/></label>
                <label><span className="contact-label-text">Work email <span className="contact-required" aria-hidden="true">*</span></span><input name="email" disabled={status === 'sending'} type="email" autoComplete="email" placeholder="you@company.com" required maxLength={254}/></label>
              </div>
              <div className="contact-fields-two">
                <label><span className="contact-label-text">Company <span className="contact-required" aria-hidden="true">*</span></span><input name="company" disabled={status === 'sending'} type="text" autoComplete="organization" placeholder="Company name" required maxLength={160}/></label>
                <label>Job title<input name="jobTitle" disabled={status === 'sending'} type="text" autoComplete="organization-title" placeholder="Your role" maxLength={120}/></label>
              </div>
              <label><span className="contact-label-text">Area of interest <span className="contact-required" aria-hidden="true">*</span></span><select name="interest" disabled={status === 'sending'} defaultValue="" required><option value="" disabled>Select an area</option>{interests.map(interest => <option key={interest} value={interest}>{interest}</option>)}</select></label>
              <label>How can we help?<textarea name="message" disabled={status === 'sending'} placeholder="Tell us about your use case, challenges, or questions..." rows={5} maxLength={4000}/></label>
              <div className="contact-form-bottom"><p>By submitting, you agree to be contacted about your enquiry.</p><button type="submit" className="button button-primary" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send Request'} <span aria-hidden="true">→</span></button></div>
              {feedback && <p id="contact-feedback" ref={feedbackRef} tabIndex={-1} className={`contact-feedback ${status}`} role="status" aria-live="polite" aria-atomic="true">{feedback}</p>}
            </form>
          </div>
        </div>
      </section>
      <section className="contact-bottom"><div className="wrap"><p className="eyebrow">NovigaAI</p><h2>Smarter Safety. <span>Healthier Tomorrow.</span></h2><p>Connected intelligence for modern safety operations.</p></div></section>
    </>
  );
}
