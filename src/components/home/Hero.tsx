import { Link } from "react-router-dom";

const features = [
  { glyph: "⚙", label: "Evidence-Led", sub: "AI Assistance" },
  { glyph: "⬡", label: "Multi-Tenant", sub: "& Secure" },
  { glyph: "♢", label: "Traceable", sub: "Reviews" },
  { glyph: "◎", label: "Human", sub: "Oversight" },
];

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap hero-layout">
        <div className="hero-text">
          <p className="eyebrow">AI-NATIVE SAFETY INTELLIGENCE PLATFORM</p>
          <h1 id="hero-title">
            Smarter Safety.
            <br />
            <span>Healthier Tomorrow.</span>
          </h1>
          <p className="hero-desc">
            End-to-end pharmacovigilance, rebuilt around signals instead of paperwork.
            Bring adverse-event reports, literature and social channels into one platform
            for case processing, safety analysis and reporting.
          </p>
          <div className="hero-cta">
            <Link className="button button-primary button-large" to="/contact/#demo">
              Request a Demo
              <span aria-hidden="true">→</span>
            </Link>
            <a className="button button-outline-dark button-large" href="#safety-workflow">
              See How It Works <span aria-hidden="true">→</span>
            </a>
          </div>
          <ul className="hero-features" aria-label="Platform principles">
            {features.map((feature) => (
              <li key={feature.label}>
                <span>
                  <b aria-hidden="true">{feature.glyph}</b> {feature.label}
                  <br />
                  {feature.sub}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="dashboard-image-wrap">
          <img
            src="/assets/dashboard2.png"
            alt="NovigaAI safety intelligence dashboard showing signal analytics, case workflows and evidence review panels"
            width="1536"
            height="1024"
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
