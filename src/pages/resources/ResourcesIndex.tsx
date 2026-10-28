import { Link } from "react-router-dom";
import { resourceCategories } from "../../data/resources";
import OverviewIcon, { type OverviewIconName } from "../../components/home/OverviewIcon";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import CTASection from "../../components/common/CTASection";

const icons: Record<string, OverviewIconName> = {
  "platform-overview": "cases",
  "product-guides": "literature",
  "api-reference": "signal",
  "integration-guides": "cases",
  webinars: "literature",
  "video-tutorials": "ai",
  "best-practices": "shield",
  "case-studies": "review",
  faq: "review",
  "release-notes": "cases",
  blog: "literature",
  glossary: "signal",
};

const slug = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function ResourcesIndex() {
  return (
    <>
      <PageMeta
        title="Resources — documentation, guides and pharmacovigilance insights"
        description="Access NovigaAI platform documentation, product guides, API and integration references, webinars, best practices, FAQs and glossary."
      />

      <PageHero
        eyebrow="RESOURCES"
        title={<>Understand the platform. <span className="text-gradient">Apply it with confidence.</span></>}
        description={
          <p>
            Documentation, working guidance and reference material for safety, technology and
            quality teams evaluating or operating NovigaAI.
          </p>
        }
        actions={
          <>
            <Link className="button button-primary button-large" to="/contact/#demo">
              Ask a question <span aria-hidden="true">→</span>
            </Link>
            <Link className="button button-outline-dark" to="/products/">
              Explore products
            </Link>
          </>
        }
      />

      <div className="index-page">
        <div className="wrap">
          <nav className="category-nav" aria-label="Resource categories">
            {resourceCategories.map((category) => (
              <a href={`#${slug(category.title)}`} key={category.title}>{category.title}</a>
            ))}
          </nav>

          {resourceCategories.map((category, categoryIndex) => (
            <section
              className="index-category"
              id={slug(category.title)}
              key={category.title}
              aria-labelledby={`resource-cat-${categoryIndex}`}
            >
              <div className="index-category-head">
                <span className="index-category-number" aria-hidden="true">
                  {String(categoryIndex + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 id={`resource-cat-${categoryIndex}`}>{category.title}</h2>
                  <p>{category.resources.length} resources</p>
                </div>
              </div>

              <div className="index-grid">
                {category.resources.map((item) => (
                  <article className="index-card" key={item.id}>
                    <span className={`index-card-icon accent-${categoryIndex + 1}`}>
                      <OverviewIcon name={icons[item.id] ?? "cases"} />
                    </span>
                    <h3>{item.name}</h3>
                    <p>{item.summary}</p>
                    <div className="index-card-tags">
                      <span>{item.kind}</span>
                    </div>
                    <Link className="index-card-link" to={`/resources/${item.id}`}>
                      Open resource <OverviewIcon name="arrow" />
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <CTASection
        title={<>Looking for something specific?</>}
        description="If you cannot find the documentation or answer you need, tell us what you are trying to resolve and we will point you to the right material."
        primary={{ label: "Contact the team", href: "/contact/" }}
        secondary={{ label: "View platform", href: "/platform/" }}
      />
    </>
  );
}
