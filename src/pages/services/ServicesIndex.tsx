import { Link } from "react-router-dom";
import OverviewIcon, { type OverviewIconName } from "../../components/home/OverviewIcon";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import CTASection from "../../components/common/CTASection";

const services = [
  {
    id: "implementation",
    name: "Implementation & Onboarding",
    summary:
      "Guided deployment, data migration, tenant configuration and user training for your NovigaAI instance.",
    icon: "building" as OverviewIconName,
    details: [
      "Phased rollout planning aligned with your PV processes",
      "Historical data migration from legacy safety databases",
      "Tenant configuration: workflows, coding dictionaries, user roles",
      "Administrator and end-user training",
      "Go-live support and a defined hypercare period",
    ],
  },
  {
    id: "integration",
    name: "Integration Services",
    summary:
      "Connect NovigaAI to your safety ecosystem — safety databases, regulatory feeds, identity and document systems.",
    icon: "cases" as OverviewIconName,
    details: [
      "E2B(R2/R3) gateway configuration for case exchange",
      "FAERS and JADER automated download scheduling",
      "Literature source configuration (PubMed, OpenAlex, licensed feeds)",
      "SSO, SAML and OIDC integration with your identity provider",
      "Custom API development for unique data sources",
    ],
  },
  {
    id: "configuration",
    name: "Workflow Configuration",
    summary:
      "Tailor workflows to your SOPs — triage rules, signal parameters, review hierarchies and escalation paths.",
    icon: "shield" as OverviewIconName,
    details: [
      "Signal detection configuration (PRR, ROR, IC and EBGM thresholds)",
      "Case triage and routing by seriousness, product and geography",
      "Review workflow design, mandatory fields and approval gates",
      "Escalation matrices for priority signals and expedited reports",
      "Report template configuration (PSUR, PBRER, CIOMS, RMP)",
    ],
  },
  {
    id: "validation",
    name: "Validation & Compliance",
    summary:
      "Computer-system validation support, IQ/OQ/PQ documentation and audit preparation.",
    icon: "review" as OverviewIconName,
    details: [
      "Validation plan and requirements traceability",
      "Installation and operational qualification support",
      "Performance qualification with your data and workflows",
      "21 CFR Part 11 compliance evidence package",
      "GVP Module VI and IX alignment documentation",
    ],
  },
  {
    id: "managed-services",
    name: "Managed Safety Services",
    summary:
      "Literature screening, case processing and signal support delivered by safety specialists on the NovigaAI platform.",
    icon: "teams" as OverviewIconName,
    details: [
      "Dedicated safety specialists using NovigaAI",
      "Literature screening with AI-assisted relevance assessment",
      "Case intake, coding and narrative preparation",
      "Signal detection runs and triage support",
      "Aggregate report authoring support (PSUR/PBRER/RMP)",
    ],
  },
  {
    id: "support",
    name: "Ongoing Support & Success",
    summary:
      "Technical support, platform updates, health reviews and continuous optimisation of your workflows.",
    icon: "accessibility" as OverviewIconName,
    details: [
      "Tiered support models, including critical incident cover",
      "Quarterly service reviews with usage and outcome metrics",
      "Platform updates with agreed regression testing",
      "Configuration optimisation as processes evolve",
      "Named customer success contact for enterprise engagements",
    ],
  },
];

export default function ServicesIndex() {
  return (
    <>
      <PageMeta
        title="Services — implementation, integration, validation and support"
        description="NovigaAI services cover implementation, integration, workflow configuration, computer-system validation, managed safety services and ongoing support."
      />

      <PageHero
        eyebrow="SERVICES"
        title={<>Expertise beyond <span className="text-gradient">the software.</span></>}
        description={
          <p>
            A platform is only part of a successful safety transformation. Our services help you
            configure, validate and operate NovigaAI in line with your processes and obligations.
          </p>
        }
        actions={
          <>
            <Link className="button button-primary button-large" to="/contact/#demo">
              Discuss your programme <span aria-hidden="true">→</span>
            </Link>
            <Link className="button button-outline-dark" to="/platform/">
              See the platform
            </Link>
          </>
        }
      />

      <div className="index-page">
        <div className="wrap">
          <div className="index-grid">
            {services.map((service, index) => (
              <article className="index-card" key={service.id}>
                <span className={`index-card-icon accent-${(index % 3) + 1}`}>
                  <OverviewIcon name={service.icon} />
                </span>
                <h3>{service.name}</h3>
                <p>{service.summary}</p>
                <details className="faq-item" style={{ marginTop: "auto" }}>
                  <summary>
                    What's included
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </summary>
                  <ul className="check-list" style={{ padding: "0 var(--space-md) var(--space-md)" }}>
                    {service.details.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                </details>
                <Link className="index-card-link" to="/contact/#demo" style={{ marginTop: "var(--space-md)" }}>
                  Discuss this service <OverviewIcon name="arrow" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>

      <CTASection
        title={<>Need something tailored?</>}
        description="We will design a service package around your requirements, timeline and internal capacity — including joint delivery with your team."
        primary={{ label: "Start a conversation", href: "/contact/#demo" }}
        secondary={{ label: "Browse resources", href: "/resources/" }}
      />
    </>
  );
}
