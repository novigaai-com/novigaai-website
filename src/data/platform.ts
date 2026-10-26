export interface PlatformCapability {
  title: string;
  description: string;
  details?: string[];
}

export interface PlatformLayer {
  name: string;
  description: string;
  items: string[];
}

export interface PlatformData {
  id: string;
  name: string;
  category: string;
  summary: string;
  overview: string;
  capabilities: PlatformCapability[];
  layers?: PlatformLayer[];
  standards: string[];
  related: string[];
  faqs: { question: string; answer: string }[];
}

const sharedPlatformFaqs = [
  {
    question: "Can NovigaAI be deployed in our own environment?",
    answer:
      "The platform is container-native and Kubernetes-orchestrated. Deployment topology — managed, private cloud or air-gapped — is agreed during implementation based on data residency and security requirements.",
  },
  {
    question: "How is tenant isolation implemented?",
    answer:
      "Isolation is structural: PostgreSQL row-level security, tenant-scoped analytical queries, per-tenant vector collections and tenant-prefixed artifact storage. Administrative actions are audited and isolation checks run continuously.",
  },
];

export const platformData: Record<string, PlatformData> = {
  architecture: {
    id: "architecture",
    name: "Platform Architecture",
    category: "Platform",
    summary:
      "Domain-driven safety services, an event backbone and polyglot persistence designed for regulated, multi-tenant operation.",
    overview:
      "NovigaAI is built as a set of domain services rather than one monolithic application. Case processing, signal detection, literature, ingestion, reporting, portfolio, notification and AI retrieval each own their data and communicate through a reliable event backbone. Transactional, analytical, vector and graph workloads use storage engines suited to each access pattern, while a single API gateway provides consistent authentication and routing.",
    capabilities: [
      {
        title: "Independent domain services",
        description:
          "Each safety domain owns its schema, business rules and release cadence, so a change in one area does not destabilise another.",
        details: [
          "Case processing and ICSR lifecycle",
          "Signal detection and investigation",
          "Literature and social-media ingestion",
          "Reporting, portfolio and notification",
          "AI retrieval and agent orchestration",
        ],
      },
      {
        title: "Reliable event backbone",
        description:
          "NATS JetStream carries domain events with idempotent consumers, so retries do not create duplicate cases or double-counted signals.",
        details: [
          "At-least-once delivery with idempotent handling",
          "Event sourcing for critical state changes",
          "CQRS projections for read models",
        ],
      },
      {
        title: "Polyglot persistence",
        description:
          "Each workload uses the store that fits it: transactional records, analytical aggregates, vector embeddings and graph relationships.",
        details: [
          "PostgreSQL for transactional safety data",
          "ClickHouse for tenant-scoped analytics",
          "Qdrant for per-tenant vector collections",
          "Memgraph for evidence relationships",
          "S3 / MinIO for documents and artifacts",
        ],
      },
      {
        title: "Controlled onboarding",
        description:
          "Tenant provisioning is migration-driven, so every environment converges to the expected schema instead of drifting.",
        details: [
          "Versioned schema migrations",
          "Repeatable tenant provisioning",
          "Consistent configuration across environments",
        ],
      },
    ],
    layers: [
      {
        name: "Experience",
        description: "Role-based interfaces for safety, operations, quality and administration.",
        items: ["Safety workspace", "Operations queues", "Analytics dashboards", "Administration console"],
      },
      {
        name: "API gateway",
        description: "One entry point for authentication, authorisation, rate limiting and routing.",
        items: ["REST / GraphQL", "OIDC / SAML", "Tenant context", "Rate limiting"],
      },
      {
        name: "Domain services",
        description: "Independent services with owned data and explicit contracts.",
        items: ["Case", "Signal", "Literature", "Ingestion", "Reporting", "Portfolio", "Notification", "AI retrieval"],
      },
      {
        name: "Data layer",
        description: "Purpose-built stores for transactional, analytical, vector, graph and artifact workloads.",
        items: ["PostgreSQL", "ClickHouse", "Qdrant", "Memgraph", "S3 / MinIO"],
      },
      {
        name: "Event backbone",
        description: "Durable messaging with idempotent consumers and projection rebuilds.",
        items: ["NATS JetStream", "Idempotent consumers", "Event sourcing", "Read projections"],
      },
      {
        name: "Infrastructure",
        description: "Container-native deployment with environment parity and controlled releases.",
        items: ["Kubernetes", "GitOps delivery", "Regional deployment", "Air-gapped option"],
      },
    ],
    standards: ["GVP Modules VI & IX", "ICH E2A / E2B(R3) / E2C(R2)", "21 CFR Part 11", "HL7 FHIR alignment"],
    related: ["ai-agentic", "security", "data-sources"],
    faqs: [
      {
        question: "Does every service need to be deployed together?",
        answer:
          "No. Services have explicit contracts and can be scaled or upgraded independently, provided shared platform services such as identity, tenancy and audit are available.",
      },
      ...sharedPlatformFaqs,
    ],
  },

  "ai-agentic": {
    id: "ai-agentic",
    name: "AI & Agentic Workflows",
    category: "Platform",
    summary:
      "Retrieval-grounded agents with evidence citations, model versioning and human approval gates at every consequential step.",
    overview:
      "NovigaAI agents are specialised workers, not autonomous decision-makers. A literature agent screens, a case agent prepares, a signal agent triages and a compliance agent checks required steps. They share tenant-scoped context through the platform and hand work to people at defined gates. Every interaction records the model, prompt version, parameters, retrieved sources and confidence, so an output can be reproduced and challenged.",
    capabilities: [
      {
        title: "Retrieval-augmented generation",
        description:
          "Answers are grounded in tenant cases, signals, literature and reference labels rather than general model knowledge.",
        details: [
          "Per-tenant vector collections",
          "Source citations on every statement",
          "Explicit uncertainty when evidence is missing",
        ],
      },
      {
        title: "Task-specific agents",
        description:
          "Agents are scoped to one job with a defined data boundary and output contract.",
        details: [
          "Literature screening and extraction",
          "Case entity extraction and coding suggestions",
          "Signal triage and evidence synthesis",
          "Compliance completeness checks",
        ],
      },
      {
        title: "Human approval gates",
        description:
          "Organisations configure which actions require review, who may approve and what evidence must be visible.",
        details: [
          "Role-based approval authority",
          "Mandatory rationale on override",
          "Separate AI and human decision records",
        ],
      },
      {
        title: "Model governance",
        description:
          "Model and prompt versions are recorded per interaction, with evaluation results and rollback available.",
        details: [
          "Prompt and parameter versioning",
          "Per-tenant evaluation tracking",
          "Controlled rollout and rollback",
        ],
      },
    ],
    standards: [
      "GVP Modules VI & IX",
      "ICH E2A / E2B(R3) / E2C(R2)",
      "21 CFR Part 11",
      "ISO/IEC 42001 aligned AI governance",
    ],
    related: ["architecture", "security", "data-sources"],
    faqs: [
      {
        question: "Can we use our own model provider?",
        answer:
          "The AI gateway supports approved external providers and self-hosted models. Tenant data handling is governed by the deployment configuration and your agreements with the provider.",
      },
      {
        question: "Do agents make regulatory decisions?",
        answer:
          "No. Agents prepare and recommend. Regulatory and medical decisions remain with authorised people, who record their rationale separately.",
      },
      ...sharedPlatformFaqs,
    ],
  },

  "data-sources": {
    id: "data-sources",
    name: "Data Sources & Integrations",
    category: "Platform",
    summary:
      "Monitored connectors for regulatory feeds, literature, trial registries, terminology and enterprise systems.",
    overview:
      "Safety insight depends on complete, current source data. The integration layer retrieves regulatory datasets, literature and trial records on schedule; keeps coding dictionaries current; and connects enterprise identity, storage and workflow systems. Each connector reports health, last successful run and volume, so a failed feed is visible before it becomes a compliance gap.",
    capabilities: [
      {
        title: "Regulatory data feeds",
        description:
          "Scheduled retrieval and validation of major spontaneous reporting datasets.",
        details: ["FDA FAERS", "PMDA JADER", "EudraVigilance", "Health Canada", "WHO VigiBase where licensed"],
      },
      {
        title: "Literature and trials",
        description:
          "Stable adapters for bibliographic and clinical-trial sources with deduplication.",
        details: ["PubMed", "OpenAlex", "Europe PMC", "ClinicalTrials.gov", "Licensed databases"],
      },
      {
        title: "Terminology services",
        description:
          "Current coding dictionaries and reference ontologies exposed consistently across modules.",
        details: ["MedDRA", "WHO Drug", "RxNorm", "ChEMBL", "UniProt"],
      },
      {
        title: "Enterprise connectivity",
        description:
          "Standard protocols for case exchange, identity, storage and workflow integration.",
        details: ["E2B(R2/R3) gateway", "HL7 FHIR", "SFTP / S3", "REST / GraphQL", "SAML / OIDC / SCIM"],
      },
    ],
    standards: ["ICH E2B(R3)", "HL7 FHIR", "21 CFR Part 11", "GVP Module VI"],
    related: ["architecture", "ai-agentic", "security"],
    faqs: [
      {
        question: "How are connector failures handled?",
        answer:
          "Each connector records health, last successful run, validation failures and retries. Alerts route to the operations team, and failed batches can be reprocessed with idempotent handling.",
      },
      {
        question: "Can we connect a custom source?",
        answer:
          "Yes. Custom sources can be integrated through the API, SFTP/S3 or a purpose-built adapter, with validation and monitoring configured for that feed.",
      },
      ...sharedPlatformFaqs,
    ],
  },

  security: {
    id: "security",
    name: "Security & Governance",
    category: "Platform",
    summary:
      "Tenant isolation, least-privilege access, immutable audit trails and validation evidence for regulated operation.",
    overview:
      "Security in a pharmacovigilance platform is not only about access control; it is about proving that data stayed isolated, actions were authorised and records were not altered. NovigaAI applies isolation at each storage layer, scopes access by role and tenant, records administrative and user actions in append-only audit trails, and maintains validation evidence for computer-system validation.",
    capabilities: [
      {
        title: "Structural tenant isolation",
        description:
          "Every tenant's data is separated at the storage and query layer, not by application filters alone.",
        details: [
          "PostgreSQL row-level security",
          "Tenant-scoped ClickHouse queries",
          "Per-tenant Qdrant collections",
          "Tenant-prefixed encrypted artifacts",
        ],
      },
      {
        title: "Identity and access",
        description:
          "Least-privilege roles with segregation of duties and enterprise identity integration.",
        details: ["SAML 2.0 / OIDC", "SCIM provisioning", "Role-based permissions", "Session and access review"],
      },
      {
        title: "Audit and signatures",
        description:
          "Append-only records of material actions, with electronic signatures linked to record versions.",
        details: ["Actor, time and rationale", "Before/after values", "21 CFR Part 11 aligned signatures", "Inspection exports"],
      },
      {
        title: "Validation and assurance",
        description:
          "Documentation and evidence to support CSV, plus continuous checks of isolation and configuration.",
        details: ["Requirements traceability", "Test evidence", "Change history", "Isolation verification"],
      },
    ],
    standards: [
      "21 CFR Part 11",
      "GVP Modules VI & IX",
      "ICH E2A / E2B(R3) / E2C(R2)",
      "ISO 27001 aligned controls",
      "SOC 2 Type II programme",
    ],
    related: ["architecture", "ai-agentic", "data-sources"],
    faqs: [
      {
        question: "Is NovigaAI SOC 2 certified?",
        answer:
          "The platform operates an ISO 27001 aligned control framework and a SOC 2 Type II programme. Current status and reports are available to customers under NDA.",
      },
      {
        question: "Can we bring our own identity provider?",
        answer:
          "Yes. SAML 2.0, OIDC and SCIM provisioning are supported with common providers, including Microsoft Entra ID and Okta.",
      },
      ...sharedPlatformFaqs,
    ],
  },

  integrations: {
    id: "integrations",
    name: "Enterprise Integrations",
    category: "Platform",
    summary:
      "Identity, monitoring, alerting, workflow and document integrations that fit NovigaAI into your operating environment.",
    overview:
      "A safety platform has to work with the systems around it. NovigaAI connects to enterprise identity for single sign-on and provisioning, observability tools for operational monitoring, alerting channels for incident response, workflow systems for task hand-off and document platforms for controlled report artifacts. Integrations are configured per tenant and monitored like any other operational dependency.",
    capabilities: [
      {
        title: "Identity and access",
        description:
          "Single sign-on, provisioning and group-to-role mapping with enterprise identity providers.",
        details: ["SAML 2.0 and OIDC", "SCIM provisioning", "Microsoft Entra ID", "Okta", "Ping Identity"],
      },
      {
        title: "Observability",
        description:
          "Metrics, logs and traces exported to your monitoring platform.",
        details: ["Prometheus / Grafana", "Datadog", "New Relic", "Custom webhooks"],
      },
      {
        title: "Alerting and workflow",
        description:
          "Route operational alerts and safety tasks into the tools teams already use.",
        details: ["PagerDuty", "Opsgenie", "Slack", "Microsoft Teams", "Jira / ServiceNow"],
      },
      {
        title: "Document management",
        description:
          "Controlled export and retrieval of report artifacts from approved repositories.",
        details: ["SharePoint", "Confluence", "Box", "Google Drive"],
      },
    ],
    standards: ["SAML 2.0", "OIDC", "SCIM 2.0", "HL7 FHIR"],
    related: ["data-sources", "security", "architecture"],
    faqs: [
      {
        question: "Are integrations included in validation?",
        answer:
          "Integration configuration and data exchange are included in the validation approach agreed for your deployment, with requirements and test evidence scoped to the interfaces you use.",
      },
      ...sharedPlatformFaqs,
    ],
  },
};

export const platformSections = Object.values(platformData);

export function getPlatformById(id: string): PlatformData | undefined {
  return platformData[id];
}
