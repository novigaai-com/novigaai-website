import { Link } from "react-router-dom";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import CTASection from "../../components/common/CTASection";

const functions = [
  {
    title: "Pharmacovigilance & signal science",
    description:
      "Safety scientists and PV specialists who understand case processing, signal management, literature surveillance and aggregate reporting.",
  },
  {
    title: "Clinical & medical",
    description:
      "Clinicians and medical reviewers who can judge causality, benefit–risk and the practical limits of AI assistance in regulated decisions.",
  },
  {
    title: "Platform engineering",
    description:
      "Backend, frontend, data and infrastructure engineers interested in domain-driven systems, reliable events, analytical stores and retrieval-grounded AI.",
  },
  {
    title: "Quality & validation",
    description:
      "Quality professionals who can build validation evidence, controlled change and inspection readiness into the delivery process.",
  },
  {
    title: "Security & data governance",
    description:
      "Security and privacy specialists who take tenant isolation, access control, data residency and incident response seriously.",
  },
  {
    title: "Product & customer success",
    description:
      "People who can translate operational safety problems into product decisions and help customers adopt the platform without overpromising.",
  },
];

export default function Careers() {
  return (
    <>
      <PageMeta
        title="Careers — build accountable safety technology at NovigaAI"
        description="NovigaAI hires across pharmacovigilance, clinical, engineering, quality, security and product. Learn how we work and how to get in touch."
      />

      <PageHero
        eyebrow="CAREERS"
        title={<>Work on software that has to <span className="text-gradient">be right.</span></>}
        description={
          <p>
            Pharmacovigilance software carries real consequences. We are looking for people who
            combine technical depth with care for evidence, clarity and the people who rely on the
            system.
          </p>
        }
        actions={
          <>
            <a className="button button-primary button-large" href="mailto:contact@novigaai.com?subject=Careers%20enquiry">
              Introduce yourself <span aria-hidden="true">→</span>
            </a>
            <Link className="button button-outline-dark" to="/about-us/">
              About NovigaAI
            </Link>
          </>
        }
      />

      <div className="careers-page">
        <div className="wrap">
          <section className="detail-section">
            <p className="section-kicker">HOW WE WORK</p>
            <h2>Small teams, high trust, clear accountability</h2>
            <div className="capability-grid">
              <article className="capability-card">
                <h3>Direct access to the problem</h3>
                <p>Engineers and product people work with safety practitioners and customer workflows, not abstract requirements.</p>
              </article>
              <article className="capability-card">
                <h3>Evidence over assertion</h3>
                <p>We expect claims to be supported. That applies to product marketing and to technical design decisions.</p>
              </article>
              <article className="capability-card">
                <h3>Ownership with context</h3>
                <p>People own outcomes, understand why the work matters and can explain the trade-offs they made.</p>
              </article>
              <article className="capability-card">
                <h3>Regulated pace, modern tools</h3>
                <p>We move quickly where risk allows and deliberately where validation, security or safety require it.</p>
              </article>
            </div>
          </section>

          <section className="detail-section">
            <p className="section-kicker">DISCIPLINES</p>
            <h2>Where we hire</h2>
            <p className="lead-copy">
              We do not maintain a list of invented open roles. If your experience fits one of these
              areas and you want to work on accountable safety technology, send us a short introduction
              and tell us what you would like to work on.
            </p>
            <div className="careers-grid">
              {functions.map((item) => (
                <article className="career-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a
                    className="career-card-link"
                    href={`mailto:contact@novigaai.com?subject=${encodeURIComponent(`Careers — ${item.title}`)}`}
                  >
                    Start a conversation <span aria-hidden="true">→</span>
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section className="detail-section">
            <p className="section-kicker">HIRING PROCESS</p>
            <h2>What to expect</h2>
            <ol className="detail-steps">
              <li>
                <span className="detail-step-number" aria-hidden="true">01</span>
                <div>
                  <h3>Introduction</h3>
                  <p>A conversation about your experience, what you want to work on and what the role actually involves.</p>
                </div>
              </li>
              <li>
                <span className="detail-step-number" aria-hidden="true">02</span>
                <div>
                  <h3>Practical discussion</h3>
                  <p>A focused discussion or exercise relevant to the role — reviewing a real problem, design or piece of work.</p>
                </div>
              </li>
              <li>
                <span className="detail-step-number" aria-hidden="true">03</span>
                <div>
                  <h3>Team conversations</h3>
                  <p>Meet the people you would work with across the relevant disciplines, including safety or quality where appropriate.</p>
                </div>
              </li>
              <li>
                <span className="detail-step-number" aria-hidden="true">04</span>
                <div>
                  <h3>Decision and offer</h3>
                  <p>Clear feedback and a transparent discussion of scope, expectations and terms.</p>
                </div>
              </li>
            </ol>
          </section>

          <div className="careers-note">
            <h2>Speculative applications are welcome</h2>
            <p>
              If there is no perfect match today, write to{" "}
              <a className="text-link" href="mailto:contact@novigaai.com">contact@novigaai.com</a>{" "}
              with a short note about your background and the problems you want to solve. We read every message.
            </p>
          </div>
        </div>
      </div>

      <CTASection
        title={<>Not looking for a role, but want to talk?</>}
        description="We are always interested in conversations with safety practitioners, reviewers and quality leaders who want to improve how the industry handles evidence."
        primary={{ label: "Contact us", href: "/contact/" }}
        secondary={{ label: "Leadership & governance", href: "/about-us/leadership" }}
      />
    </>
  );
}
