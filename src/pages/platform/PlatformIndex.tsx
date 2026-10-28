import { Link } from "react-router-dom";
import { platformData } from "../../data/platform";
import OverviewIcon, { type OverviewIconName } from "../../components/home/OverviewIcon";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import CTASection from "../../components/common/CTASection";

const icons: Record<string, OverviewIconName> = {
  architecture: "building",
  "ai-agentic": "ai",
  "data-sources": "cases",
  security: "shield",
  integrations: "teams",
};

const architecture = platformData.architecture.layers ?? [];

export default function PlatformIndex() {
  const sections = platformData.architecture ? [
    platformData.architecture,
    platformData["ai-agentic"],
    platformData["data-sources"],
    platformData.security,
    platformData.integrations,
  ] : [];

  return (
    <>
      <PageMeta
        title="Platform — architecture, AI, security and integrations"
        description="Understand the NovigaAI platform: domain-driven services, retrieval-grounded AI, data sources, tenant isolation, security and enterprise integrations."
      />

      <PageHero
        eyebrow="PLATFORM"
        title={<>One platform. <span className="text-gradient">Evidence at every layer.</span></>}
        description={
          <p>
            NovigaAI is built as independent safety services on a shared, isolated data foundation.
            AI is grounded in tenant evidence, every material action is auditable, and the same
            platform supports processing, analytics and reporting.
          </p>
        }
        actions={
          <>
            <Link className="button button-primary button-large" to="/contact/#demo">
              Request a technical demo <span aria-hidden="true">→</span>
            </Link>
            <Link className="button button-outline-dark" to="/products/">
              See the products
            </Link>
          </>
        }
      />

      <div className="index-page">
        <div className="wrap">
          <section className="index-category" aria-labelledby="platform-capabilities">
            <div className="index-category-head">
              <span className="index-category-number" aria-hidden="true">01</span>
              <div>
                <h2 id="platform-capabilities">Platform capabilities</h2>
                <p>Architecture, AI, data, security and integration</p>
              </div>
            </div>
            <div className="index-grid">
              {sections.map((section) => (
                <article className="index-card" key={section.id}>
                  <span className="index-card-icon accent-1">
                    <OverviewIcon name={icons[section.id] ?? "building"} />
                  </span>
                  <h3>{section.name}</h3>
                  <p>{section.summary}</p>
                  <div className="index-card-tags">
                    {section.standards.slice(0, 2).map((standard) => (
                      <span key={standard}>{standard}</span>
                    ))}
                  </div>
                  <Link className="index-card-link" to={`/platform/${section.id}`}>
                    Explore {section.name} <OverviewIcon name="arrow" />
                  </Link>
                </article>
              ))}
            </div>
          </section>

          {architecture.length > 0 && (
            <section className="index-category" aria-labelledby="platform-architecture">
              <div className="index-category-head">
                <span className="index-category-number" aria-hidden="true">02</span>
                <div>
                  <h2 id="platform-architecture">Architecture at a glance</h2>
                  <p>Six layers, explicit responsibilities</p>
                </div>
              </div>
              <ol className="detail-steps">
                {architecture.map((layer, index) => (
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
              <p style={{ marginTop: "var(--space-lg)", fontSize: "var(--text-sm)" }}>
                Read the full detail in <Link className="text-link" to="/platform/architecture">Platform Architecture →</Link>
              </p>
            </section>
          )}

          <section className="index-category" aria-labelledby="platform-principles">
            <div className="index-category-head">
              <span className="index-category-number" aria-hidden="true">03</span>
              <div>
                <h2 id="platform-principles">Design principles</h2>
                <p>What stays consistent across every module</p>
              </div>
            </div>
            <div className="capability-grid">
              {[
                ["Evidence first", "Every AI output cites its sources. Conclusions trace back to cases, literature or reference data — never to an unexplained model response."],
                ["Human accountability", "Case coding, signal validation, report approval and submission require an authorised person to decide and record their rationale."],
                ["Structural isolation", "Tenant data is separated at the database, analytics, vector and artifact layers, and isolation is verified continuously."],
                ["Regulatory alignment", "Workflows map to GVP, ICH and 21 CFR Part 11 expectations, with validation evidence maintained as part of the platform."],
                ["Open integration", "REST and GraphQL APIs, E2B(R2/R3) exchange, HL7 FHIR alignment and standard enterprise identity protocols."],
                ["Operational transparency", "Connector health, queue status, audit history and model versions are visible to the people responsible for them."],
              ].map(([title, description]) => (
                <article className="capability-card" key={title}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>

      <CTASection
        title={<>Want the architecture in detail?</>}
        description="Review the service model, data stores, deployment topology and integration approach with our platform engineers."
        primary={{ label: "Request a technical session", href: "/contact/#demo" }}
        secondary={{ label: "Explore products", href: "/products/" }}
      />
    </>
  );
}
