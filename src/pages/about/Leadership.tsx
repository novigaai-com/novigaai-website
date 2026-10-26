import { Link } from "react-router-dom";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import CTASection from "../../components/common/CTASection";

const commitments = [
  {
    title: "Safety accountability stays with safety experts",
    description:
      "Product decisions are reviewed against pharmacovigilance practice and regulatory expectation. AI features are accepted only when reviewers can see the evidence and retain authority over the outcome.",
  },
  {
    title: "Security and isolation are non-negotiable",
    description:
      "Architecture, deployment and access decisions are governed with security leadership. Tenant isolation, audit integrity and data residency requirements are reviewed before capability expansion.",
  },
  {
    title: "Quality is part of delivery",
    description:
      "Validation, change control and documentation are planned alongside product work. Claims about regulatory alignment are supported by evidence, not marketing language.",
  },
  {
    title: "Operational reality informs the roadmap",
    description:
      "Priorities are shaped by the people processing cases, screening literature and defending decisions to regulators — not only by what is technically interesting.",
  },
];

const governance = [
  ["Product & clinical governance", "Reviews new capabilities against safety practice, usability and the boundaries of AI decision authority."],
  ["Security & privacy governance", "Reviews architecture, access models, tenant isolation, incident response and data-handling obligations."],
  ["Quality & validation governance", "Reviews controlled changes, validation impact and the evidence needed to support regulated use."],
  ["AI governance", "Reviews model selection, evaluation, prompt and model versioning, monitoring and approval gates."],
];

export default function Leadership() {
  return (
    <>
      <PageMeta
        title="Leadership & governance — NovigaAI"
        description="How NovigaAI governs product, clinical, security, quality and AI decisions for regulated pharmacovigilance work."
      />

      <PageHero
        eyebrow="LEADERSHIP"
        title={<>Accountable by <span className="text-gradient">design.</span></>}
        description={
          <p>
            NovigaAI is led across pharmacovigilance, clinical, engineering, security and quality.
            Our governance model is deliberately explicit: every material product decision has an
            accountable discipline behind it.
          </p>
        }
        actions={
          <>
            <Link className="button button-primary button-large" to="/contact/">
              Contact the team <span aria-hidden="true">→</span>
            </Link>
            <Link className="button button-outline-dark" to="/about-us/careers">
              Careers at NovigaAI
            </Link>
          </>
        }
      />

      <div className="leadership-page">
        <div className="wrap">
          <div className="leadership-intro">
            <p className="section-kicker">OUR APPROACH</p>
            <h2 style={{ fontSize: "var(--text-3xl)", marginBottom: "var(--space-md)" }}>
              Leadership is distributed across the disciplines that carry the risk
            </h2>
            <p>
              Safety software cannot be governed by engineering alone, and it cannot be governed by
              clinical expertise alone. We bring the relevant disciplines into the decision and record
              who approved what. That is also how we design the product: clear ownership, visible
              evidence and a record of the decision.
            </p>
          </div>

          <section className="detail-section">
            <p className="section-kicker">COMMITMENTS</p>
            <h2>What we hold ourselves to</h2>
            <div className="capability-grid">
              {commitments.map((commitment) => (
                <article className="capability-card" key={commitment.title}>
                  <h3>{commitment.title}</h3>
                  <p>{commitment.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="detail-section">
            <p className="section-kicker">GOVERNANCE</p>
            <h2>How decisions are reviewed</h2>
            <div className="leadership-functions">
              {governance.map(([title, description]) => (
                <article className="leadership-function" key={title}>
                  <h2>{title}</h2>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="detail-section">
            <p className="section-kicker">CONTACT</p>
            <h2>Speak to the right discipline</h2>
            <p className="lead-copy">
              Evaluations usually involve safety, technology and quality stakeholders. Tell us what
              you need to assess and we will bring the appropriate people into the conversation.
            </p>
            <div className="page-hero-actions" style={{ marginTop: "var(--space-lg)" }}>
              <Link className="button button-primary" to="/contact/#demo">
                Request a working session <span aria-hidden="true">→</span>
              </Link>
              <a className="button button-outline" href="mailto:contact@novigaai.com">
                contact@novigaai.com
              </a>
            </div>
          </section>
        </div>
      </div>

      <CTASection
        title={<>Interested in building this with us?</>}
        description="We hire across pharmacovigilance, clinical, engineering and quality. If you care about evidence and accountable technology, we would like to hear from you."
        primary={{ label: "See careers", href: "/about-us/careers" }}
        secondary={{ label: "About NovigaAI", href: "/about-us/" }}
      />
    </>
  );
}
