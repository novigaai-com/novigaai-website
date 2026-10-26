import { Link } from "react-router-dom";
import { solutionCategories } from "../../data/solutions";
import { getProductById } from "../products/productData";
import OverviewIcon, { type OverviewIconName } from "../../components/home/OverviewIcon";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import CTASection from "../../components/common/CTASection";

const icons: Record<string, OverviewIconName> = {
  "earlier-signal-identification": "signal",
  "evidence-based-assessment": "review",
  "literature-intelligence": "literature",
  "drug-target-safety": "signal",
  "ai-assisted-investigation": "ai",
  "safety-risk-prioritization": "shield",
  "safety-scientists": "review",
  "pv-operations": "cases",
  "quality-compliance": "shield",
  leadership: "building",
  "pharma-biotech": "building",
  cros: "teams",
  "regulatory-agencies": "shield",
};

const slug = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function SolutionsIndex() {
  return (
    <>
      <PageMeta
        title="Solutions — pharmacovigilance workflows by use case, role and organisation"
        description="Explore NovigaAI solutions for earlier signal identification, evidence-based assessment, literature surveillance, PV operations, quality and leadership."
      />

      <PageHero
        eyebrow="SOLUTIONS"
        title={<>Built for the way <span className="text-gradient">safety teams work.</span></>}
        description={
          <p>
            Every safety organisation has a different starting point. These solutions combine
            NovigaAI products into coherent workflows for a specific challenge, role or type of
            organisation.
          </p>
        }
        actions={
          <>
            <Link className="button button-primary button-large" to="/contact/#demo">
              Discuss your use case <span aria-hidden="true">→</span>
            </Link>
            <Link className="button button-outline-dark" to="/products/">
              Explore products
            </Link>
          </>
        }
      />

      <div className="index-page">
        <div className="wrap">
          <nav className="category-nav" aria-label="Solution categories">
            {solutionCategories.map((category) => (
              <a href={`#${slug(category.title)}`} key={category.title}>{category.title}</a>
            ))}
          </nav>

          {solutionCategories.map((category, categoryIndex) => (
            <section
              className="index-category"
              id={slug(category.title)}
              key={category.title}
              aria-labelledby={`solution-cat-${categoryIndex}`}
            >
              <div className="index-category-head">
                <span className="index-category-number" aria-hidden="true">
                  {String(categoryIndex + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 id={`solution-cat-${categoryIndex}`}>{category.title}</h2>
                  <p>{category.solutions.length} solutions</p>
                </div>
              </div>

              <div className="index-grid">
                {category.solutions.map((item) => (
                  <article className="index-card" key={item.id}>
                    <span className={`index-card-icon accent-${categoryIndex + 1}`}>
                      <OverviewIcon name={icons[item.id] ?? "shield"} />
                    </span>
                    <h3>{item.name}</h3>
                    <p>{item.summary}</p>
                    <div className="index-card-tags">
                      {item.products.slice(0, 3).map((product) => (
                        <span key={product}>{getProductById(product)?.name ?? product.replace(/-/g, " ")}</span>
                      ))}
                    </div>
                    <Link className="index-card-link" to={`/solutions/${item.id}`}>
                      Explore solution <OverviewIcon name="arrow" />
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <CTASection
        title={<>Don't see your exact use case?</>}
        description="NovigaAI is modular. Tell us how your team works today and we will map the right combination of products, configuration and services to your obligations."
        primary={{ label: "Discuss your requirements", href: "/contact/#demo" }}
        secondary={{ label: "Explore the platform", href: "/platform/" }}
      />
    </>
  );
}
