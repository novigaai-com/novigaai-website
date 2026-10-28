import { Link } from "react-router-dom";
import { productCategories } from "./productData";
import OverviewIcon, { type OverviewIconName } from "../../components/home/OverviewIcon";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import CTASection from "../../components/common/CTASection";

const iconFor: Record<string, OverviewIconName> = {
  "signal-detection": "signal",
  "signal-investigation": "review",
  "risk-intelligence": "shield",
  "evidence-research": "literature",
  "case-management": "cases",
  "case-intake": "cases",
  "literature-intelligence": "literature",
  "partner-intake": "teams",
  "regulatory-reporting": "reporting",
  "safety-analytics": "cases",
  "ai-agents": "ai",
  "evidence-graph": "signal",
  "social-media-intelligence": "social",
  integrations: "cases",
  compliance: "shield",
  administration: "building",
};

const slug = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function ProductsIndex() {
  return (
    <>
      <PageMeta
        title="Products — AI-native pharmacovigilance platform"
        description="Explore NovigaAI products for signal detection, case management, literature intelligence, regulatory reporting, safety analytics and enterprise governance."
      />

      <PageHero
        eyebrow="PRODUCTS"
        title={<>One platform. <span className="text-gradient">Every safety workflow.</span></>}
        description={
          <p>
            Start with the module you need today and connect the rest as your safety
            operations grow. Every product shares the same tenant isolation, evidence
            model and audit trail.
          </p>
        }
        actions={
          <>
            <Link className="button button-primary button-large" to="/contact/#demo">
              Request a demo <span aria-hidden="true">→</span>
            </Link>
            <Link className="button button-outline-dark" to="/platform/">
              See the platform
            </Link>
          </>
        }
      />

      <div className="index-page">
        <div className="wrap">
          <nav className="category-nav" aria-label="Product categories">
            {productCategories.map((category) => (
              <a href={`#${slug(category.title)}`} key={category.title}>{category.title}</a>
            ))}
          </nav>

          {productCategories.map((category, categoryIndex) => (
            <section className="index-category" id={slug(category.title)} key={category.title} aria-labelledby={`product-cat-${categoryIndex}`}>
              <div className="index-category-head">
                <span className="index-category-number" aria-hidden="true">
                  {String(categoryIndex + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 id={`product-cat-${categoryIndex}`}>{category.title}</h2>
                  <p>{category.products.length} products</p>
                </div>
              </div>

              <div className="index-grid">
                {category.products.map((product) => (
                  <article className="index-card" key={product.id}>
                    <span className={`index-card-icon accent-${categoryIndex + 1}`}>
                      <OverviewIcon name={iconFor[product.id] ?? "cases"} />
                    </span>
                    <h3>{product.name}</h3>
                    <p>{product.shortDescription}</p>
                    <div className="index-card-tags">
                      {product.standards.slice(0, 2).map((standard) => (
                        <span key={standard}>{standard}</span>
                      ))}
                    </div>
                    <Link className="index-card-link" to={`/products/${product.id}`}>
                      Explore {product.name} <OverviewIcon name="arrow" />
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <CTASection
        title={<>Not sure which module fits?</>}
        description="Tell us how your safety team works today. We'll map the right combination of products to your processes, systems and reporting obligations."
        primary={{ label: "Discuss your requirements", href: "/contact/#demo" }}
        secondary={{ label: "Explore solutions", href: "/solutions/" }}
      />
    </>
  );
}
