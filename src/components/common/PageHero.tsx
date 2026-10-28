import type { ReactNode } from "react";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  crumbs?: Crumb[];
  actions?: ReactNode;
  meta?: ReactNode;
  compact?: boolean;
}

export default function PageHero({ eyebrow, title, description, crumbs, actions, meta, compact = false }: PageHeroProps) {
  return (
    <section className={`inner-page-hero${compact ? " inner-page-hero-compact" : ""}`}>
      <div className="inner-page-hero-glow" aria-hidden="true" />
      <div className="wrap">
        {crumbs && <Breadcrumbs items={crumbs} />}
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <div className="inner-page-hero-desc">{description}</div>
        {meta && <div className="page-hero-meta">{meta}</div>}
        {actions && <div className="page-hero-actions">{actions}</div>}
      </div>
    </section>
  );
}
