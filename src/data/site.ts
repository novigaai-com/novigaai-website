export interface NavChild {
  label: string;
  href: string;
  description?: string;
}

export interface NavCategory {
  title: string;
  items: NavChild[];
}

export interface NavItem {
  label: string;
  href: string;
  id: string;
  megaMenu?: NavCategory[];
  children?: NavChild[];
}

export const navigation: NavItem[] = [
  { label: "Home", href: "/", id: "home" },
  {
    label: "Products",
    href: "/products/",
    id: "products",
    megaMenu: [
      {
        title: "Safety Intelligence",
        items: [
          { label: "Signal Detection", href: "/products/signal-detection", description: "PRR, ROR, IC and EBGM with sequential-testing safeguards" },
          { label: "Signal Investigation", href: "/products/signal-investigation", description: "Bradford Hill assessment, evidence dossiers and cluster analysis" },
          { label: "Risk Intelligence", href: "/products/risk-intelligence", description: "Benefit-risk context, risk minimisation and lifecycle tracking" },
          { label: "Evidence & Research", href: "/products/evidence-research", description: "Literature and real-world evidence synthesis with provenance" },
        ],
      },
      {
        title: "Case Operations",
        items: [
          { label: "Case Management", href: "/products/case-management", description: "End-to-end ICSR processing, coding and narrative generation" },
          { label: "Case Intake & Triage", href: "/products/case-intake", description: "Multi-source intake with E2B(R2/R3) validation and P1–P4 triage" },
          { label: "Literature Intelligence", href: "/products/literature-intelligence", description: "Automated screening of PubMed, OpenAlex and trial registries" },
          { label: "Partner Intake", href: "/products/partner-intake", description: "Partner and distributor safety data exchange through one gateway" },
          { label: "Regulatory Reporting", href: "/products/regulatory-reporting", description: "PSUR/PBRER, CIOMS, RMP and expedited deadline management" },
        ],
      },
      {
        title: "Analytics & AI",
        items: [
          { label: "Safety Analytics", href: "/products/safety-analytics", description: "Portfolio dashboards, trends, KPIs and AI safety briefings" },
          { label: "AI Agents & Automation", href: "/products/ai-agents", description: "Orchestrated agents with evidence and human approval gates" },
          { label: "Evidence Graph", href: "/products/evidence-graph", description: "Drug–target–pathway–disease knowledge with provenance" },
          { label: "Social Media Intelligence", href: "/products/social-media-intelligence", description: "Digital safety listening, PII scrubbing and signal extraction" },
        ],
      },
      {
        title: "Enterprise Platform",
        items: [
          { label: "Integrations & Data Sources", href: "/products/integrations", description: "FAERS, JADER, E2B, literature, clinical trials and identity" },
          { label: "Compliance & Auditability", href: "/products/compliance", description: "GVP, ICH and 21 CFR Part 11 aligned controls and audit trails" },
          { label: "Administration", href: "/products/administration", description: "Multi-tenant isolation, RBAC and configurable workflows" },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions/",
    id: "solutions",
    megaMenu: [
      {
        title: "By Use Case",
        items: [
          { label: "Earlier Signal Identification", href: "/solutions/earlier-signal-identification", description: "Continuous surveillance that shortens time to detection" },
          { label: "Evidence-Based Assessment", href: "/solutions/evidence-based-assessment", description: "Connect every decision to traceable evidence" },
          { label: "Literature Intelligence", href: "/solutions/literature-intelligence", description: "Screening with AI assistance and documented human review" },
          { label: "Drug & Target Safety", href: "/solutions/drug-target-safety", description: "Mechanism-based safety intelligence across the portfolio" },
          { label: "AI-Assisted Investigation", href: "/solutions/ai-assisted-investigation", description: "Agents that prepare; experts who decide" },
          { label: "Safety Risk Prioritisation", href: "/solutions/safety-risk-prioritization", description: "Severity, impact and regulatory urgency in one score" },
        ],
      },
      {
        title: "By Role",
        items: [
          { label: "Safety Scientists", href: "/solutions/safety-scientists", description: "Deep analytical tools for signal evaluation" },
          { label: "PV Operations", href: "/solutions/pv-operations", description: "Streamlined case processing and reporting" },
          { label: "Quality & Compliance", href: "/solutions/quality-compliance", description: "Inspection-ready documentation and audit trails" },
          { label: "Leadership", href: "/solutions/leadership", description: "Portfolio oversight and executive safety briefings" },
        ],
      },
      {
        title: "By Organization",
        items: [
          { label: "Pharma & Biotech", href: "/solutions/pharma-biotech", description: "Scalable safety operations for every stage" },
          { label: "CROs & Service Providers", href: "/solutions/cros", description: "Multi-client management with strict data isolation" },
          { label: "Regulatory Agencies", href: "/solutions/regulatory-agencies", description: "Public-health surveillance and signal monitoring" },
        ],
      },
    ],
  },
  {
    label: "Platform",
    href: "/platform/",
    id: "platform",
    children: [
      { label: "Architecture", href: "/platform/architecture", description: "Domain-driven services and polyglot persistence" },
      { label: "AI & Agentic Workflows", href: "/platform/ai-agentic", description: "Retrieval-grounded AI with governance built in" },
      { label: "Data Sources", href: "/platform/data-sources", description: "Regulatory, literature and clinical-trial coverage" },
      { label: "Security & Governance", href: "/platform/security", description: "Tenant isolation, audit trails and access control" },
      { label: "Enterprise Integrations", href: "/platform/integrations", description: "Identity, monitoring and workflow integrations" },
    ],
  },
  {
    label: "Resources",
    href: "/resources/",
    id: "resources",
    children: [
      { label: "Documentation", href: "/resources/platform-overview", description: "Platform, product and API documentation" },
      { label: "Product Guides", href: "/resources/product-guides", description: "Configuration and workflow guides" },
      { label: "Webinars & Events", href: "/resources/webinars", description: "Live and on-demand safety intelligence sessions" },
      { label: "Blog", href: "/resources/blog", description: "Pharmacovigilance and AI perspectives" },
      { label: "FAQ", href: "/resources/faq", description: "Answers on security, validation and deployment" },
    ],
  },
  { label: "Services", href: "/services/", id: "services" },
  {
    label: "About Us",
    href: "/about-us/",
    id: "about",
    children: [
      { label: "Company", href: "/about-us/", description: "Our mission, principles and journey" },
      { label: "Leadership", href: "/about-us/leadership", description: "The team behind NovigaAI" },
      { label: "Careers", href: "/about-us/careers", description: "Open roles and how we work" },
      { label: "Contact", href: "/contact/", description: "Talk to the NovigaAI team" },
    ],
  },
];

export const organisation = {
  name: "NovigaAI",
  legalName: "NovigaAI Technologies Pvt Ltd",
  email: "contact@novigaai.com",
  linkedIn: "https://www.linkedin.com/company/noviga-ai/",
  tagline: "Intelligent. Connected. Safer.",
  url: "https://www.novigaai.com",
};
