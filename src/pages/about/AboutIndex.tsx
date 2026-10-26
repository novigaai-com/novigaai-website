import { Link } from "react-router-dom";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import CTASection from "../../components/common/CTASection";

const principles = [
  {
    title: "Evidence first",
    description:
      "Every capability starts with the question: what is the evidence, and can a reviewer trace it? Provenance is part of the data model, not documentation added afterwards.",
  },
  {
    title: "Human judgment",
    description:
      "AI prepares and recommends. Case coding, signal validation, report approval and submission remain with authorised people who record their reasoning.",
  },
  {
    title: "Regulated by design",
    description:
      "GVP, ICH and 21 CFR Part 11 expectations shape the workflow, the audit trail and the validation evidence rather than being retrofitted.",
  },
  {
    title: "Isolation by construction",
    description:
      "Tenant data is separated at the database, analytics, vector and artifact layers. Isolation is verified continuously, not assumed.",
  },
  {
    title: "Operational realism",
    description:
      "Safety teams work under deadlines with incomplete information. The platform is designed to make the next decision clearer, not to add another dashboard.",
  },
  {
    title: "Accessible by default",
    description:
      "Keyboard navigation, screen-reader support and clear semantics are part of the interface standard, because safety teams are diverse.",
  },
];

const disciplines = [
  { title: "Pharmacovigilance", description: "Signal management, case processing, literature surveillance, aggregate reporting and risk management." },
  { title: "Clinical & medical", description: "Medical review, causality assessment and benefit–risk reasoning across therapeutic areas." },
  { title: "Engineering & data", description: "Domain-driven services, event systems, analytical stores, graph and retrieval infrastructure." },
  { title: "Quality & validation", description: "Computer-system validation, GxP controls, audit readiness and regulated change management." },
];

export default function AboutIndex() {
  return (
    <>
      <PageMeta
        title="About NovigaAI — safety intelligence built for regulated work"
        description="Learn about NovigaAI's mission, principles and the disciplines behind our AI-native pharmacovigilance platform."
      />

      <PageHero
        eyebrow="ABOUT NOVIGAAI"
        title={<>Smarter safety. <span className="text-gradient">Healthier tomorrow.</span></>}
        description={
          <p>
            NovigaAI is an AI-native pharmacovigilance and safety intelligence platform built by
            people who have worked inside regulated safety operations. We connect evidence, AI
            assistance and human judgment so every safety decision is traceable and defensible.
          </p>
        }
        actions={
          <>
            <Link className="button button-primary button-large" to="/contact/#demo">
              Talk to our team <span aria-hidden="true">→</span>
            </Link>
            <Link className="button button-outline-dark" to="/about-us/careers">
              See how we work
            </Link>
          </>
        }
      />

      <div className="about-index-page">
        <div className="wrap">
          <section className="detail-section">
            <p className="section-kicker">OUR MISSION</p>
            <h2>Close the gap between safety data and safety decisions</h2>
            <p className="lead-copy">
              Pharmacovigilance has always been about connecting evidence to decisions. As sources
              multiply — spontaneous reports, literature, trial registries, social channels and
              real-world data — the gap between information and insight widens.
            </p>
            <p className="lead-copy">
              NovigaAI closes that gap by unifying structured and unstructured safety data, applying
              transparent statistical and AI-assisted analysis, and presenting every conclusion with
              its provenance. Reviewers see the evidence, the AI contribution and the human decision
              in one place.
            </p>
          </section>

          <section className="detail-section">
            <p className="section-kicker">PRINCIPLES</p>
            <h2>What we build around</h2>
            <div className="capability-grid">
              {principles.map((principle) => (
                <article className="capability-card" key={principle.title}>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="detail-section">
            <p className="section-kicker">DISCIPLINES</p>
            <h2>Built by people who understand the work</h2>
            <p className="lead-copy">
              Building for regulated safety requires more than software engineering. Our teams bring
              together safety practice, clinical review, platform engineering and quality validation.
            </p>
            <div className="leadership-functions">
              {disciplines.map((discipline) => (
                <article className="leadership-function" key={discipline.title}>
                  <h2>{discipline.title}</h2>
                  <p>{discipline.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="detail-section">
            <p className="section-kicker">HOW WE WORK</p>
            <h2>Direct, evidence-led and accountable</h2>
            <div className="capability-grid">
              <article className="capability-card">
                <h3>Close to the problem</h3>
                <p>We design with safety practitioners, not at a distance from them. Configuration and workflow decisions are tested against real operational constraints.</p>
              </article>
              <article className="capability-card">
                <h3>Clear about limits</h3>
                <p>We do not claim that AI removes accountability or that a platform eliminates regulatory judgment. We are explicit about what the product does and does not decide.</p>
              </article>
              <article className="capability-card">
                <h3>Built for scrutiny</h3>
                <p>Evidence, version history and audit records are treated as core features because safety work is reviewed by regulators, quality teams and the public.</p>
              </article>
              <article className="capability-card">
                <h3>Long-term partnership</h3>
                <p>Implementation is the start of the relationship. We support configuration, validation and operational improvement as safety obligations change.</p>
              </article>
            </div>
            <div className="page-hero-actions" style={{ marginTop: "var(--space-xl)" }}>
              <Link className="button button-primary" to="/about-us/leadership">
                Leadership & governance <span aria-hidden="true">→</span>
              </Link>
              <Link className="button button-outline" to="/about-us/careers">
                Careers <span aria-hidden="true">→</span>
              </Link>
            </div>
          </section>
        </div>
      </div>

      <CTASection
        title={<>Bring us your hardest safety workflow.</>}
        description="We would rather show how the platform handles a difficult process than give a generic overview. Tell us what your team is trying to solve."
        primary={{ label: "Request a demo", href: "/contact/#demo" }}
        secondary={{ label: "Explore products", href: "/products/" }}
      />
    </>
  );
}
