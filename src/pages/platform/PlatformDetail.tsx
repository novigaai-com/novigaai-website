import { Link } from "react-router-dom";
import type { PlatformData } from "../../data/platform";
import { platformData } from "../../data/platform";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import CTASection from "../../components/common/CTASection";

export default function PlatformDetail({ detail }: { detail: PlatformData }) {
  const related = detail.related
    .map((id) => platformData[id])
    .filter(Boolean);

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "capabilities", label: "Capabilities" },
    ...(detail.layers ? [{ id: "architecture", label: "Architecture" }] : []),
    { id: "standards", label: "Standards" },
    { id: "faq", label: "FAQs" },
  ];

  return (
    <>
      <PageMeta
        title={`${detail.name} — Platform`}
        description={detail.summary}
        type="article"
      />

      <PageHero
        eyebrow="PLATFORM"
        title={detail.name}
        description={<p>{detail.summary}</p>}
        actions={
          <>
            <Link className="button button-primary button-large" to="/contact/#demo">
              Book a technical deep-dive <span aria-hidden="true">→</span>
            </Link>
            <Link className="button button-outline-dark" to="/platform/">
              Platform overview
            </Link>
          </>
        }
        meta={detail.standards.slice(0, 3).map((standard) => (
          <span className="page-hero-chip" key={standard}>{standard}</span>
        ))}
      />

      <div className="detail-page">
        <div className="wrap detail-layout">
          <aside className="detail-sidebar" aria-label="On this page">
            <p className="detail-sidebar-title">On this page</p>
            <nav>
              {sections.map((section) => (
                <a key={section.id} href={`#${section.id}`}>{section.label}</a>
              ))}
            </nav>
            <div className="detail-sidebar-card">
              <h2>Talk to a platform engineer</h2>
              <p>Review deployment, security and integration architecture with the team that builds it.</p>
              <Link to="/contact/#demo" className="button button-primary button-block">
                Request a technical session
              </Link>
            </div>
          </aside>

          <main className="detail-main">
            <section id="overview" className="detail-section">
              <p className="section-kicker">OVERVIEW</p>
              <h2>How this part of the platform works</h2>
              <p className="lead-copy">{detail.overview}</p>
            </section>

            <section id="capabilities" className="detail-section">
              <p className="section-kicker">CAPABILITIES</p>
              <h2>What it provides</h2>
              <div className="capability-grid">
                {detail.capabilities.map((capability) => (
                  <article className="capability-card" key={capability.title}>
                    <h3>{capability.title}</h3>
                    <p>{capability.description}</p>
                    {capability.details && capability.details.length > 0 && (
                      <ul className="check-list">
                        {capability.details.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    )}
                  </article>
                ))}
              </div>
            </section>

            {detail.layers && (
              <section id="architecture" className="detail-section">
                <p className="section-kicker">ARCHITECTURE</p>
                <h2>Layered by responsibility</h2>
                <p className="lead-copy">
                  Each layer has a clear responsibility and a defined contract with the layers around it.
                  Domain services own their data; shared infrastructure provides identity, messaging and storage.
                </p>
                <ol className="detail-steps">
                  {detail.layers.map((layer, index) => (
                    <li key={layer.name}>
                      <span className="detail-step-number" aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3>{layer.name}</h3>
                        <p>{layer.description}</p>
                        <div className="pill-group">
                          {layer.items.map((item) => (
                            <span className="pill" key={item}>{item}</span>
                          ))}
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            <section id="standards" className="detail-section">
              <p className="section-kicker">STANDARDS</p>
              <h2>Regulatory and technical alignment</h2>
              <div className="standards-panel">
                <div className="pill-group">
                  {detail.standards.map((standard) => (
                    <span className="pill pill-strong" key={standard}>{standard}</span>
                  ))}
                </div>
              </div>
              <p>
                Alignment describes the frameworks and expectations the platform is designed against.
                Validation and regulatory applicability remain specific to each organisation's deployment and processes.
              </p>
            </section>

            <section id="faq" className="detail-section">
              <p className="section-kicker">FAQS</p>
              <h2>Common questions</h2>
              <div className="faq-list">
                {detail.faqs.map((faq) => (
                  <details className="faq-item" key={faq.question}>
                    <summary>
                      {faq.question}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            {related.length > 0 && (
              <section className="detail-section">
                <p className="section-kicker">RELATED</p>
                <h2>Explore the platform further</h2>
                <div className="related-grid">
                  {related.map((item) => (
                    <Link className="related-card" to={`/platform/${item!.id}`} key={item!.id}>
                      <span className="related-card-category">Platform</span>
                      <h3>{item!.name}</h3>
                      <p>{item!.summary}</p>
                      <span className="text-link">View {item!.name} <span aria-hidden="true">→</span></span>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </main>
        </div>
      </div>

      <CTASection
        title={<>See the architecture behind the workflow.</>}
        description="Bring your security, data and integration questions to a working session with our platform team."
        primary={{ label: "Request a technical demo", href: "/contact/#demo" }}
        secondary={{ label: "Back to platform", href: "/platform/" }}
      />
    </>
  );
}
