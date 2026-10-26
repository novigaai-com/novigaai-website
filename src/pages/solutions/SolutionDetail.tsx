import { Link } from "react-router-dom";
import type { SolutionData } from "../../data/solutions";
import { solutionsData } from "../../data/solutions";
import { getProductById } from "../products/productData";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import CTASection from "../../components/common/CTASection";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "challenges", label: "Challenges" },
  { id: "approach", label: "How it works" },
  { id: "outcomes", label: "Outcomes" },
  { id: "products", label: "Included products" },
  { id: "faq", label: "FAQs" },
];

export default function SolutionDetail({ solution }: { solution: SolutionData }) {
  const products = solution.products.map(getProductById).filter(Boolean);
  const related = Object.values(solutionsData)
    .filter((item) => item.category === solution.category && item.id !== solution.id)
    .slice(0, 3);

  return (
    <>
      <PageMeta
        title={`${solution.name} — ${solution.category}`}
        description={solution.summary}
        type="article"
      />

      <PageHero
        eyebrow={solution.category.toUpperCase()}
        title={solution.name}
        description={<p>{solution.summary}</p>}
        actions={
          <>
            <Link className="button button-primary button-large" to="/contact/#demo">
              Discuss this solution <span aria-hidden="true">→</span>
            </Link>
            <Link className="button button-outline-dark" to="/solutions/">
              All solutions
            </Link>
          </>
        }
        meta={
          <>
            {solution.audiences.map((audience) => (
              <span className="page-hero-chip" key={audience}>{audience}</span>
            ))}
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
              <h2>Map it to your workflow</h2>
              <p>Bring a current process and we will walk through how this solution would apply.</p>
              <Link to="/contact/#demo" className="button button-primary button-block">
                Book a working session
              </Link>
            </div>
          </aside>

          <main className="detail-main">
            <section id="overview" className="detail-section">
              <p className="section-kicker">OVERVIEW</p>
              <h2>What this solution addresses</h2>
              <p className="lead-copy">{solution.overview}</p>
              <dl className="detail-facts">
                <div>
                  <dt>Designed for</dt>
                  <dd>{solution.audiences.join(", ")}</dd>
                </div>
                <div>
                  <dt>Solution type</dt>
                  <dd>{solution.category}</dd>
                </div>
                <div>
                  <dt>Platform modules</dt>
                  <dd>{products.map((product) => product!.name).join(" · ")}</dd>
                </div>
              </dl>
            </section>

            <section id="challenges" className="detail-section">
              <p className="section-kicker">THE CHALLENGE</p>
              <h2>Why this is hard today</h2>
              <ul className="check-list">
                {solution.challenges.map((challenge) => (
                  <li key={challenge}>{challenge}</li>
                ))}
              </ul>
            </section>

            <section id="approach" className="detail-section">
              <p className="section-kicker">THE APPROACH</p>
              <h2>How the workflow fits together</h2>
              <div className="capability-grid">
                {solution.approach.map((item) => (
                  <article className="capability-card" key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="outcomes" className="detail-section">
              <p className="section-kicker">OUTCOMES</p>
              <h2>What teams can expect</h2>
              <ul className="check-list">
                {solution.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </section>

            <section id="products" className="detail-section">
              <p className="section-kicker">INCLUDED PRODUCTS</p>
              <h2>Modules used in this solution</h2>
              <div className="related-grid">
                {products.map((product) => (
                  <Link className="related-card" to={`/products/${product!.id}`} key={product!.id}>
                    <span className="related-card-category">{product!.category}</span>
                    <h3>{product!.name}</h3>
                    <p>{product!.shortDescription}</p>
                    <span className="text-link">Explore {product!.name} <span aria-hidden="true">→</span></span>
                  </Link>
                ))}
              </div>
            </section>

            <section id="faq" className="detail-section">
              <p className="section-kicker">FAQS</p>
              <h2>Common questions</h2>
              <div className="faq-list">
                {solution.faqs.map((faq) => (
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
                <p className="section-kicker">RELATED SOLUTIONS</p>
                <h2>Explore similar challenges</h2>
                <div className="related-grid">
                  {related.map((item) => (
                    <Link className="related-card" to={`/solutions/${item.id}`} key={item.id}>
                      <span className="related-card-category">{item.category}</span>
                      <h3>{item.name}</h3>
                      <p>{item.summary}</p>
                      <span className="text-link">View solution <span aria-hidden="true">→</span></span>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </main>
        </div>
      </div>

      <CTASection
        title={<>See how this works with your data.</>}
        description="We will walk through the workflow, configuration and evidence model against your current process — without a generic slide deck."
        primary={{ label: "Request a demo", href: "/contact/#demo" }}
        secondary={{ label: "Browse all solutions", href: "/solutions/" }}
      />
    </>
  );
}
