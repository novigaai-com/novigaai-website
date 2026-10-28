import { Link } from "react-router-dom";
import type { ProductData } from "./productData";
import { getAllProducts } from "./productData";
import OverviewIcon from "../../components/home/OverviewIcon";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import CTASection from "../../components/common/CTASection";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "capabilities", label: "Capabilities" },
  { id: "workflow", label: "How it works" },
  { id: "ai", label: "AI & oversight" },
  { id: "integration", label: "Integration" },
  { id: "faq", label: "FAQs" },
];

function relatedProduct(id: string) {
  return getAllProducts().find((product) => product.id === id);
}

export default function ProductDetail({ product }: { product: ProductData }) {
  const related = product.relatedProducts.map(relatedProduct).filter(Boolean) as ProductData[];

  return (
    <>
      <PageMeta
        title={`${product.name} — ${product.category}`}
        description={product.shortDescription}
        type="article"
      />

      <PageHero
        eyebrow={product.category}
        title={product.name}
        description={<p>{product.shortDescription}</p>}
        actions={
          <>
            <Link className="button button-primary button-large" to="/contact/#demo">
              Request a Demo <span aria-hidden="true">→</span>
            </Link>
            <Link className="button button-outline-dark" to="/products/">
              View all products
            </Link>
          </>
        }
        meta={
          <>
            <span className="page-hero-chip">For: {product.targetUsers.join(" · ")}</span>
            <span className="page-hero-chip">{product.standards.slice(0, 2).join(" · ")}</span>
          </>
        }
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
              <h2>See it in context</h2>
              <p>Walk through this workflow with your own safety scenarios.</p>
              <Link to="/contact/#demo" className="button button-primary button-block">
                Book a technical demo
              </Link>
            </div>
          </aside>

          <main className="detail-main">
            <section id="overview" className="detail-section">
              <p className="section-kicker">OVERVIEW</p>
              <h2>{product.name} in the NovigaAI platform</h2>
              <p className="lead-copy">{product.fullDescription}</p>
              {product.heroImage && (
                <figure className="product-screenshot">
                  <img
                    src={product.heroImage}
                    alt={`Illustrative NovigaAI dashboard for ${product.name}`}
                    width="1536"
                    height="1024"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption>Illustrative interface. Configuration and data shown are examples.</figcaption>
                </figure>
              )}
              <dl className="detail-facts">
                <div>
                  <dt>Built for</dt>
                  <dd>{product.targetUsers.join(", ")}</dd>
                </div>
                <div>
                  <dt>Regulatory alignment</dt>
                  <dd>{product.standards.join(" · ")}</dd>
                </div>
                <div>
                  <dt>Works with</dt>
                  <dd>{product.integrations.slice(0, 4).join(" · ")}</dd>
                </div>
              </dl>
            </section>

            <section id="capabilities" className="detail-section">
              <p className="section-kicker">CAPABILITIES</p>
              <h2>What {product.name} does</h2>
              <div className="capability-grid">
                {product.capabilities.map((capability) => (
                  <article className="capability-card" key={capability.title}>
                    <h3>{capability.title}</h3>
                    <p>{capability.description}</p>
                    {capability.details && capability.details.length > 0 && (
                      <ul className="check-list">
                        {capability.details.map((detail) => <li key={detail}>{detail}</li>)}
                      </ul>
                    )}
                  </article>
                ))}
              </div>
            </section>

            {product.workflowSteps.length > 0 && (
              <section id="workflow" className="detail-section">
                <p className="section-kicker">HOW IT WORKS</p>
                <h2>From intake to a documented decision</h2>
                <ol className="detail-steps">
                  {product.workflowSteps.map((step) => (
                    <li key={step.step}>
                      <span className="detail-step-number" aria-hidden="true">
                        {String(step.step).padStart(2, "0")}
                      </span>
                      <div>
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {product.aiFeatures.length > 0 && (
              <section id="ai" className="detail-section">
                <p className="section-kicker">AI & OVERSIGHT</p>
                <h2>AI prepares. People decide.</h2>
                <p className="lead-copy">
                  Every recommendation is shown with its evidence, confidence and model version.
                  Critical steps require an authorised reviewer to approve, edit or reject the output.
                </p>
                <div className="ai-feature-grid">
                  {product.aiFeatures.map((feature) => (
                    <article className="ai-feature-card" key={feature.title}>
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                      <dl>
                        <div>
                          <dt>Human review</dt>
                          <dd>{feature.humanReview}</dd>
                        </div>
                        <div>
                          <dt>Evidence</dt>
                          <dd>{feature.evidence}</dd>
                        </div>
                      </dl>
                    </article>
                  ))}
                </div>
              </section>
            )}

            <section id="integration" className="detail-section">
              <p className="section-kicker">INTEGRATION</p>
              <h2>Where it fits</h2>
              <div className="io-grid">
                <div className="io-card">
                  <h3>Inputs</h3>
                  <ul className="check-list">
                    {product.inputs.map((input) => <li key={input}>{input}</li>)}
                  </ul>
                </div>
                <div className="io-card">
                  <h3>Outputs</h3>
                  <ul className="check-list">
                    {product.outputs.map((output) => <li key={output}>{output}</li>)}
                  </ul>
                </div>
              </div>
              <div className="pill-group">
                {product.integrations.map((integration) => (
                  <span className="pill" key={integration}>{integration}</span>
                ))}
              </div>
              <div className="standards-panel">
                <h3>Regulatory alignment</h3>
                <div className="pill-group">
                  {product.standards.map((standard) => (
                    <span className="pill pill-strong" key={standard}>{standard}</span>
                  ))}
                </div>
              </div>
            </section>

            {product.faqs.length > 0 && (
              <section id="faq" className="detail-section">
                <p className="section-kicker">FAQS</p>
                <h2>Common questions</h2>
                <div className="faq-list">
                  {product.faqs.map((faq) => (
                    <details className="faq-item" key={faq.question}>
                      <summary>{faq.question} <OverviewIcon name="chevron" /></summary>
                      <p>{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {related.length > 0 && (
              <section className="detail-section">
                <p className="section-kicker">RELATED</p>
                <h2>Works well with</h2>
                <div className="related-grid">
                  {related.map((item) => (
                    <Link className="related-card" to={`/products/${item.id}`} key={item.id}>
                      <span className="related-card-category">{item.category}</span>
                      <h3>{item.name}</h3>
                      <p>{item.shortDescription}</p>
                      <span className="text-link">Explore {item.name} <span aria-hidden="true">→</span></span>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </main>
        </div>
      </div>

      <CTASection
        title={<>See {product.name} with your own data.</>}
        description="We will map this module to your current workflows, systems and reporting obligations in a focused technical session."
        secondary={{ label: "Browse all products", href: "/products/" }}
      />
    </>
  );
}
