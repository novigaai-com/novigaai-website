import { Link } from "react-router-dom";
import PageMeta from "../components/common/PageMeta";

export default function NotFound() {
  return (
    <>
      <PageMeta
        title="Page not found"
        description="The page you are looking for is not available. Explore NovigaAI products, solutions, platform and resources."
        noIndex
      />
      <section className="inner-page-hero not-found-hero">
        <div className="wrap">
          <p className="eyebrow">404</p>
          <h1>Page not found</h1>
          <p>The page you're looking for isn't available. It may have been moved or doesn't exist.</p>
        </div>
      </section>
      <section className="not-found-content inner-page-content">
        <div className="wrap">
          <div className="not-found-card">
            <div className="not-found-code">404</div>
            <h2>Sorry, we couldn't find that page</h2>
            <p>You might have followed an outdated link or typed the URL incorrectly.</p>
            <div className="not-found-actions">
              <Link to="/" className="button button-primary">
                Back to Home <span aria-hidden="true">→</span>
              </Link>
              <Link to="/products/" className="button button-outline">
                Browse Products <span aria-hidden="true">→</span>
              </Link>
              <Link to="/contact/" className="button button-outline">
                Contact Us <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="not-found-help">
              <p>Or explore our main sections:</p>
              <nav className="not-found-nav">
                <Link to="/products/">Products</Link>
                <Link to="/solutions/">Solutions</Link>
                <Link to="/platform/">Platform</Link>
                <Link to="/resources/">Resources</Link>
                <Link to="/about-us/">About Us</Link>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}