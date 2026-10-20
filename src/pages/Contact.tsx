import { useState, type FormEvent } from 'react';
import './Contact.scss';

type Status = 'idle' | 'sending' | 'success' | 'error';
const interests = ['Pharmacovigilance', 'Literature Intelligence', 'Social Media Intelligence', 'Clinical Trials', 'Compliance', 'General enquiry'];

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [feedback, setFeedback] = useState('');
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;
    if (!endpoint) {
      setStatus('error');
      setFeedback('The contact form is not connected yet. Please configure VITE_CONTACT_ENDPOINT to enable submissions.');
      return;
    }
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    setStatus('sending');
    setFeedback('');
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error('Submission failed');
      form.reset();
      setStatus('success');
      setFeedback('Thank you. Your request has been submitted successfully.');
    } catch {
      setStatus('error');
      setFeedback('We could not submit your request. Please try again later.');
    }
  }
  return (
    <>
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
            <form onSubmit={handleSubmit}>
              <div className="contact-fields-two">
                <label>Full name <span>*</span><input name="name" type="text" autoComplete="name" placeholder="Your full name" required maxLength={120}/></label>
                <label>Work email <span>*</span><input name="email" type="email" autoComplete="email" placeholder="you@company.com" required maxLength={254}/></label>
              </div>
              <div className="contact-fields-two">
                <label>Company <span>*</span><input name="company" type="text" autoComplete="organization" placeholder="Company name" required maxLength={160}/></label>
                <label>Job title<input name="jobTitle" type="text" autoComplete="organization-title" placeholder="Your role" maxLength={120}/></label>
              </div>
              <label>Area of interest <span>*</span><select name="interest" defaultValue="" required><option value="" disabled>Select an area</option>{interests.map(interest => <option key={interest} value={interest}>{interest}</option>)}</select></label>
              <label>How can we help?<textarea name="message" placeholder="Tell us about your use case, challenges, or questions..." rows={5} maxLength={4000}/></label>
              <div className="contact-form-bottom"><p>By submitting, you agree to be contacted about your enquiry.</p><button type="submit" className="button button-primary" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send Request'} <span aria-hidden="true">→</span></button></div>
              {feedback && <p className={`contact-feedback ${status}`} role="status" aria-live="polite">{feedback}</p>}
            </form>
          </div>
        </div>
      </section>
      <section className="contact-bottom"><div className="wrap"><p className="eyebrow">NovigaAI</p><h2>Smarter Safety. <span>Healthier Tomorrow.</span></h2><p>Connected intelligence for modern safety operations.</p></div></section>
    </>
  );
}
