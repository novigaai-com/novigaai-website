import { Link } from "react-router-dom";
import type { ResourceData } from "../../data/resources";
import { resourcesData } from "../../data/resources";
import { solutionsData } from "../../data/solutions";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import CTASection from "../../components/common/CTASection";

const slug = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-");

interface RelatedItem {
  id: string;
  name: string;
  summary: string;
  label: string;
  href: string;
}

export default function ResourceDetail({ resource }: { resource: ResourceData }) {
  const related: RelatedItem[] = resource.related.flatMap((id) => {
    const item = resourcesData[id];
    if (item) {
      return [{ id, name: item.name, summary: item.summary, label: item.category, href: `/resources/${id}` }];
    }
    const solution = solutionsData[id];
    if (solution) {
      return [{ id, name: solution.name, summary: solution.summary, label: "Solution", href: `/solutions/${id}` }];
    }
    return [];
  });

  return (
    <>
      <PageMeta
        title={`${resource.name} — Resources`}
        description={resource.summary}
        type="article"
      />

      <PageHero
        eyebrow={resource.category.toUpperCase()}
        title={resource.name}
        description={<p>{resource.summary}</p>}
        compact
        meta={
          <>
            <span className="page-hero-chip">{resource.kind}</span>
            <span className="page-hero-chip">NovigaAI</span>
          </>
        }
      />

      <div className="detail-page">
        <div className="wrap detail-layout">
          <aside className="detail-sidebar" aria-label="On this page">
            <p className="detail-sidebar-title">On this page</p>
            <nav>
              {resource.sections.map((section) => (
                <a key={section.heading} href={`#${slug(section.heading)}`}>{section.heading}</a>
              ))}
              {resource.takeaways && <a href="#takeaways">Key takeaways</a>}
              <a href="#related">Related resources</a>
            </nav>
            <div className="detail-sidebar-card">
              <h2>Need a walkthrough?</h2>
              <p>See how the platform applies these concepts with your workflows.</p>
              <Link to="/contact/#demo" className="button button-primary button-block">
                Request a demo
              </Link>
            </div>
          </aside>

          <main className="detail-main">
            <section className="detail-section">
              <p className="lead-copy">{resource.intro}</p>
            </section>

            {resource.sections.map((section) => (
              <section className="article-section" id={slug(section.heading)} key={section.heading}>
                <h2>{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul>
                    {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                )}
              </section>
            ))}

            {resource.takeaways && (
              <div className="takeaways" id="takeaways">
                <h2>Key takeaways</h2>
                <ul>
                  {resource.takeaways.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            )}

            <section className="detail-section" id="related" style={{ marginTop: "var(--space-3xl)" }}>
              <p className="section-kicker">RELATED</p>
              <h2>Continue reading</h2>
              <div className="related-grid">
                {related.map((item) => (
                  <Link className="related-card" to={item.href} key={item.id}>
                    <span className="related-card-category">{item.label}</span>
                    <h3>{item.name}</h3>
                    <p>{item.summary}</p>
                    <span className="text-link">Open resource <span aria-hidden="true">→</span></span>
                  </Link>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>

      <CTASection
        title={<>Put this guidance into practice.</>}
        description="See how NovigaAI supports the workflow you have just read about, using realistic safety scenarios."
        primary={{ label: "Request a demo", href: "/contact/#demo" }}
        secondary={{ label: "All resources", href: "/resources/" }}
      />
    </>
  );
}
