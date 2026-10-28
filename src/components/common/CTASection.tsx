import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface CTASectionProps {
  eyebrow?: string;
  title: ReactNode;
  description: ReactNode;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}

export default function CTASection({
  eyebrow = "READY TO SEE NOVIGAAI IN ACTION?",
  title,
  description,
  primary = { label: "Request a Demo", href: "/contact/#demo" },
  secondary = { label: "Talk to our team", href: "/contact/" },
}: CTASectionProps) {
  return (
    <section className="cta-section" aria-labelledby="cta-heading">
      <div className="wrap cta-section-inner">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 id="cta-heading">{title}</h2>
          <p>{description}</p>
        </div>
        <div className="cta-section-actions">
          <Link className="button button-primary button-large" to={primary.href}>
            {primary.label} <span aria-hidden="true">→</span>
          </Link>
          <Link className="button button-outline-dark" to={secondary.href}>
            {secondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
