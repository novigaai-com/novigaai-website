import { Link } from "react-router-dom";

const columns = [
  {
    title: "Products",
    links: [
      { label: "Case Management", href: "/products/case-management" },
      { label: "Signal Detection", href: "/products/signal-detection" },
      { label: "Regulatory Reporting", href: "/products/regulatory-reporting" },
      // { label: "Signal Investigation", href: "/products/signal-investigation" },
      // { label: "Literature Intelligence", href: "/products/literature-intelligence" },
      // { label: "Safety Analytics", href: "/products/safety-analytics" },
      // { label: "All products", href: "/products/" },
    ],
  },
  {
    title: "Solutions",
    links: [
      // { label: "By use case", href: "/solutions/" },
      { label: "For safety scientists", href: "/solutions/safety-scientists" },
      { label: "For PV operations", href: "/solutions/pv-operations" },
      // { label: "For leadership", href: "/solutions/leadership" },
      { label: "Pharma & biotech", href: "/solutions/pharma-biotech" },
      // { label: "CROs & service providers", href: "/solutions/cros" },
    ],
  },
  {
    title: "Platform",
    links: [
      // { label: "Architecture", href: "/platform/architecture" },
      { label: "AI & agentic workflows", href: "/platform/ai-agentic" },
      // { label: "Data sources", href: "/platform/data-sources" },
      // { label: "Security & governance", href: "/platform/security" },
      // { label: "Enterprise integrations", href: "/platform/integrations" },
      // { label: "Services", href: "/services/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About NovigaAI", href: "/about-us/" },
      // { label: "Leadership", href: "/about-us/leadership" },
      { label: "Careers", href: "/about-us/careers" },
      // { label: "Resources", href: "/resources/" },
      { label: "FAQ", href: "/resources/faq" },
      { label: "Contact", href: "/contact/" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="footer-logo" aria-label="NovigaAI home">
              <img src="/assets/logo.png" alt="NovigaAI — Intelligent. Connected. Safer." />
            </Link>
            <p>
              AI-native safety intelligence that connects adverse-event reports,
              scientific literature, real-world data and digital channels into one
              traceable pharmacovigilance platform.
            </p>
            <div className="footer-contact">
              <a href="mailto:contact@novigaai.com">contact@novigaai.com</a>
              <a
                href="https://www.linkedin.com/company/noviga-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
                aria-label="NovigaAI on LinkedIn (opens in a new tab)"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05a4.16 4.16 0 0 1 3.75-2.06c4 0 4.74 2.63 4.74 6.05V21h-4v-5.5c0-1.31-.02-3-1.83-3-1.84 0-2.12 1.43-2.12 2.9V21h-4V9Z" />
                </svg>
              </a>
            </div>
          </div>

          <nav className="footer-columns" aria-label="Footer navigation">
            {columns.map((column) => (
              <div className="footer-column" key={column.title}>
                <h2>{column.title}</h2>
                <ul>
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link to={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} NovigaAI Technologies Pvt Ltd. All rights reserved.
          </p>
          <nav aria-label="Legal navigation">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
            <Link to="/contact/">Contact</Link>
          </nav>
          <p className="footer-tagline">Smarter Safety. Healthier Tomorrow.</p>
        </div>
      </div>
    </footer>
  );
}
