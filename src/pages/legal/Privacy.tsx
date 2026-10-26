import { Link } from "react-router-dom";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";

export default function Privacy() {
  return (
    <>
      <PageMeta
        title="Privacy notice — NovigaAI"
        description="How NovigaAI handles personal information collected through this website and in the course of business."
      />

      <PageHero
        eyebrow="LEGAL"
        title="Privacy notice"
        description={
          <p>
            This notice explains what personal information we collect through this website and how
            we use it. It does not replace any contractual or customer-specific data processing
            agreement.
          </p>
        }
        compact
      />

      <div className="legal-page">
        <div className="wrap legal-layout">
          <aside className="detail-sidebar" aria-label="On this page">
            <p className="detail-sidebar-title">On this page</p>
            <nav>
              <a href="#who-we-are">Who we are</a>
              <a href="#information">Information we collect</a>
              <a href="#use">How we use it</a>
              <a href="#sharing">Sharing</a>
              <a href="#retention">Retention</a>
              <a href="#rights">Your rights</a>
              <a href="#security">Security</a>
              <a href="#contact">Contact</a>
            </nav>
          </aside>

          <main className="legal-content">
            <p className="legal-updated">Last updated: 25 October 2026</p>

            <h2 id="who-we-are">Who we are</h2>
            <p>
              This website is operated by NovigaAI Technologies Pvt Ltd ("NovigaAI", "we", "us").
              We provide pharmacovigilance and safety intelligence software and related services to
              organisations. In this notice, "personal information" means information that relates to
              an identified or identifiable individual.
            </p>

            <h2 id="information">Information we collect</h2>
            <p>We collect information in three main ways:</p>
            <ul>
              <li><strong>Information you provide.</strong> When you submit an enquiry, request a demo or contact us, we collect your name, work email address, company, job title and the content of your message.</li>
              <li><strong>Technical information.</strong> Our hosting and security infrastructure may record IP address, browser type, device information, requested pages and timestamps for security and diagnostic purposes.</li>
              <li><strong>Business information.</strong> If you become a customer, we process account and contract information and the data required to provide the service under the applicable agreement.</li>
            </ul>
            <p>
              We do not intentionally collect special-category personal information through this
              website, and we ask that you do not include patient-identifiable information in website
              enquiries. Customer safety data is handled under separate contractual and security terms.
            </p>

            <h2 id="use">How we use information</h2>
            <ul>
              <li>To respond to your enquiry and provide requested information or demonstrations.</li>
              <li>To operate, secure and improve this website and our services.</li>
              <li>To manage customer relationships, contracts and support.</li>
              <li>To meet legal, regulatory and accounting obligations.</li>
              <li>To send relevant business communications where permitted, with an unsubscribe route.</li>
            </ul>
            <p>
              Where applicable law requires a legal basis, we rely on your consent for marketing
              communications, our legitimate interests in operating and securing our business, and
              contractual necessity where we are providing services to you.
            </p>

            <h2 id="sharing">Sharing</h2>
            <p>
              We do not sell personal information. We may share it with service providers who support
              hosting, communications, security and business operations, under agreements that require
              appropriate protection. We may also disclose information where required by law or to
              protect our rights, users or the public.
            </p>

            <h2 id="retention">Retention</h2>
            <p>
              We retain enquiry information for as long as needed to respond and maintain a record of
              the business relationship, then for the period required by applicable law. Customer data
              is retained according to the relevant agreement and regulatory obligations.
            </p>

            <h2 id="rights">Your rights</h2>
            <p>
              Depending on your location, you may have the right to access, correct, delete or restrict
              the processing of your personal information, to object to processing, or to request
              portability. You may also have the right to withdraw consent or lodge a complaint with a
              supervisory authority.
            </p>
            <p>
              To exercise a right, contact us using the details below. We may need to verify your
              identity before acting on a request.
            </p>

            <h2 id="security">Security</h2>
            <p>
              We apply administrative, technical and organisational measures appropriate to the
              sensitivity of the information we handle. These include access control, encryption in
              transit, monitoring and incident response procedures. No internet transmission is
              completely secure, but we work to protect information throughout its lifecycle.
            </p>

            <h2 id="contact">Contact</h2>
            <p>
              For privacy questions or requests, email{" "}
              <a className="text-link" href="mailto:contact@novigaai.com">contact@novigaai.com</a>{" "}
              or use our <Link className="text-link" to="/contact/">contact page</Link>.
            </p>
            <p>
              We may update this notice as our services or legal obligations change. The date at the
              top of the page shows the latest revision.
            </p>
          </main>
        </div>
      </div>
    </>
  );
}
