import { Link } from "react-router-dom";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";

export default function Terms() {
  return (
    <>
      <PageMeta
        title="Website terms of use — NovigaAI"
        description="Terms governing use of the NovigaAI website. Product and service use is governed by separate agreements."
      />

      <PageHero
        eyebrow="LEGAL"
        title="Website terms of use"
        description={
          <p>
            These terms govern your use of this website. Access to NovigaAI products and services is
            governed by separate written agreements.
          </p>
        }
        compact
      />

      <div className="legal-page">
        <div className="wrap legal-layout">
          <aside className="detail-sidebar" aria-label="On this page">
            <p className="detail-sidebar-title">On this page</p>
            <nav>
              <a href="#acceptance">Acceptance</a>
              <a href="#use">Permitted use</a>
              <a href="#content">Content and IP</a>
              <a href="#accuracy">Accuracy</a>
              <a href="#third-party">Third-party links</a>
              <a href="#liability">Liability</a>
              <a href="#changes">Changes</a>
              <a href="#contact">Contact</a>
            </nav>
          </aside>

          <main className="legal-content">
            <p className="legal-updated">Last updated: 25 October 2026</p>

            <h2 id="acceptance">Acceptance</h2>
            <p>
              By accessing or using this website, you agree to these terms. If you do not agree,
              please do not use the website. If you are using the website on behalf of an organisation,
              you confirm that you are authorised to do so.
            </p>

            <h2 id="use">Permitted use</h2>
            <p>You may use this website for lawful business and informational purposes. You must not:</p>
            <ul>
              <li>Attempt to gain unauthorised access to the website, systems or data.</li>
              <li>Interfere with the availability, integrity or security of the website.</li>
              <li>Use automated means to scrape or extract content at a volume that disrupts service.</li>
              <li>Use the website to distribute unlawful, misleading or harmful material.</li>
              <li>Submit patient-identifiable or other sensitive personal information through general enquiry forms.</li>
            </ul>

            <h2 id="content">Content and intellectual property</h2>
            <p>
              The website and its content — including text, design, graphics, product descriptions and
              code — are owned by or licensed to NovigaAI and are protected by applicable intellectual
              property laws. You may view and print pages for internal evaluation, but you may not
              reproduce, modify, distribute or commercially exploit content without written permission.
            </p>
            <p>
              Product names, logos and marks are the property of their respective owners. Third-party
              names are used for identification only and do not imply endorsement.
            </p>

            <h2 id="accuracy">Accuracy of information</h2>
            <p>
              We aim to keep website content accurate and current, but it is provided for general
              information. It does not constitute regulatory, medical, legal or validation advice, and
              it may not reflect the configuration or regulatory status applicable to your organisation.
              Product capabilities described on the website are subject to the terms of the applicable
              agreement.
            </p>

            <h2 id="third-party">Third-party links</h2>
            <p>
              The website may link to third-party sites. We do not control those sites and are not
              responsible for their content, availability or privacy practices. Following a third-party
              link is at your own discretion.
            </p>

            <h2 id="liability">Liability</h2>
            <p>
              To the maximum extent permitted by law, the website is provided "as is" and NovigaAI
              excludes liability for indirect, incidental or consequential loss arising from use of the
              website. Nothing in these terms excludes liability that cannot lawfully be excluded.
            </p>

            <h2 id="changes">Changes</h2>
            <p>
              We may update these terms from time to time. The date at the top of the page shows the
              latest revision. Continued use of the website after an update constitutes acceptance of
              the revised terms.
            </p>

            <h2 id="contact">Contact</h2>
            <p>
              Questions about these terms can be sent to{" "}
              <a className="text-link" href="mailto:contact@novigaai.com">contact@novigaai.com</a>{" "}
              or through our <Link className="text-link" to="/contact/">contact page</Link>.
            </p>
          </main>
        </div>
      </div>
    </>
  );
}
