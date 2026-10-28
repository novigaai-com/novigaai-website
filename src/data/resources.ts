export interface ResourceSection {
  heading: string;
  body: string[];
  bullets?: string[];
}

export interface ResourceData {
  id: string;
  name: string;
  category: "Documentation" | "Learning" | "Community";
  kind: string;
  summary: string;
  intro: string;
  sections: ResourceSection[];
  takeaways?: string[];
  related: string[];
}

const sharedReferences = [
  {
    question: "Where should we start if we are new to NovigaAI?",
    answer:
      "Start with the platform overview, then review the product guide for the workflow closest to your current priority. A technical demo is the fastest way to see how configuration maps to your process.",
  },
];

export const resourcesData: Record<string, ResourceData> = {
  "platform-overview": {
    id: "platform-overview",
    name: "Platform Documentation",
    category: "Documentation",
    kind: "Documentation",
    summary:
      "A structured introduction to NovigaAI capabilities, architecture, workflows and governance model.",
    intro:
      "This overview is intended for safety, technology and quality stakeholders evaluating how NovigaAI fits their operating model. It describes what the platform does, how the services are organised and where human accountability sits.",
    sections: [
      {
        heading: "What the platform covers",
        body: [
          "NovigaAI supports the pharmacovigilance lifecycle from intake and case processing through signal management, literature surveillance, aggregate reporting and enterprise governance. Each capability is delivered as a domain service, so organisations can adopt the modules that match their priorities and connect others later.",
        ],
        bullets: [
          "Case intake, processing, coding, duplicate detection and narrative preparation",
          "Quantitative and qualitative signal detection, investigation and risk management",
          "Literature and social-media surveillance with documented human review",
          "PSUR/PBRER, CIOMS, RMP and expedited reporting support",
          "Portfolio analytics, executive briefings and enterprise administration",
        ],
      },
      {
        heading: "How the services fit together",
        body: [
          "Every module shares the same tenant model, terminology services, identity layer and audit trail. That shared foundation is what makes cross-module workflows possible: a literature candidate can become a case, a case can contribute to a signal, a signal can inform a risk profile, and a report can draw on all of them with provenance intact.",
          "Services communicate through an event backbone with idempotent consumers. A failure in one workflow does not silently duplicate records in another, and processing can be retried without distorting counts.",
        ],
      },
      {
        heading: "Where AI is used",
        body: [
          "AI is applied to preparation and retrieval: extracting entities, proposing codes, screening literature, summarising evidence and suggesting triage. Consequential decisions remain with authorised reviewers. Every AI output records its sources, confidence and model version, and human decisions are stored separately from the recommendation.",
        ],
      },
      {
        heading: "Governance and validation",
        body: [
          "The platform provides append-only audit trails, electronic signatures aligned with 21 CFR Part 11 expectations, configurable controls and validation documentation. Regulatory alignment includes GVP Modules VI and IX, ICH E2A/E2B(R3)/E2C(R2) and regional reporting obligations supported by the configured workflows.",
        ],
      },
    ],
    takeaways: [
      "NovigaAI is modular: adopt one domain service or connect the full lifecycle.",
      "Shared tenancy, terminology and audit services make cross-module work coherent.",
      "AI prepares; authorised people make and record every consequential decision.",
      "Validation evidence and audit records are platform capabilities, not add-ons.",
    ],
    related: ["product-guides", "api-reference", "integration-guides"],
  },

  "product-guides": {
    id: "product-guides",
    name: "Product Guides",
    category: "Documentation",
    kind: "Documentation",
    summary:
      "Configuration and workflow guidance for each NovigaAI product module.",
    intro:
      "Product guides describe how each module is configured, which decisions require human review and how the module interacts with the rest of the platform. They are written for implementation leads, administrators and experienced users.",
    sections: [
      {
        heading: "What each guide covers",
        body: [
          "Guides follow a consistent structure so teams can compare modules and plan adoption. Each guide covers the workflow, the data it consumes, the outputs it produces, the configuration decisions that matter and the controls that should be in place before go-live.",
        ],
        bullets: [
          "Workflow stages, roles and approval gates",
          "Required reference data and terminology",
          "Configuration options and their operational impact",
          "Integration points and data contracts",
          "Audit events, reports and validation considerations",
        ],
      },
      {
        heading: "Signal and risk modules",
        body: [
          "Signal Detection, Signal Investigation and Risk Intelligence share a common evidence model. Configuration covers statistical methods and thresholds, prioritisation weights, review queues, causality frameworks and the actions tracked through closure.",
        ],
      },
      {
        heading: "Operations modules",
        body: [
          "Case Intake, Case Management, Partner Intake, Literature Intelligence and Regulatory Reporting cover the operational pipeline. Configuration covers validation rules, coding dictionaries, duplicate matching, review routing, deadline rules and report templates.",
        ],
      },
      {
        heading: "Platform modules",
        body: [
          "Integrations, Compliance, Administration, AI Agents and Safety Analytics define how the platform is operated. Their guides focus on connector health, access design, audit configuration, model governance and analytical measures.",
        ],
      },
    ],
    takeaways: [
      "Every module documents its workflow, controls and configuration decisions.",
      "Approval gates and audit events are part of the product design.",
      "Integration and validation requirements are identified before go-live.",
    ],
    related: ["platform-overview", "integration-guides", "best-practices"],
  },

  "api-reference": {
    id: "api-reference",
    name: "API Reference",
    category: "Documentation",
    kind: "Documentation",
    summary:
      "REST and GraphQL interface patterns for authentication, case exchange, signals and reporting.",
    intro:
      "The API reference is intended for integration engineers and technical administrators. It describes authentication, tenant context, resource patterns, error handling and the supported exchange formats for safety data.",
    sections: [
      {
        heading: "Authentication and tenant context",
        body: [
          "API clients authenticate through the platform identity layer using OIDC. Access tokens carry tenant and role context, and every request is evaluated against the same permission model used by the user interface. Service credentials are scoped to the minimum resources required for the integration.",
        ],
      },
      {
        heading: "Core resource patterns",
        body: [
          "Resources are organised around the safety domains: cases, case revisions, signals, literature results, reports, reference data and administrative configuration. Collections support filtering, pagination and explicit ordering so clients can build reliable synchronisation jobs.",
        ],
        bullets: [
          "Case and ICSR exchange using E2B(R2/R3) where applicable",
          "Signal and evidence resources for investigation workflows",
          "Literature and trial registry result resources",
          "Reporting and submission status resources",
          "Reference and terminology lookup endpoints",
        ],
      },
      {
        heading: "Errors, retries and idempotency",
        body: [
          "The API uses standard HTTP status codes and structured error payloads with a stable code, human-readable message and field-level detail. Clients should treat retries as expected and use idempotency keys for create operations so a network failure does not produce duplicate records.",
        ],
      },
      {
        heading: "Versioning and change management",
        body: [
          "API versions are explicit, and breaking changes follow a documented deprecation window. Tenant-specific configuration is not embedded in the API version, so clients should discover capabilities and reference data through the relevant endpoints rather than hard-coding them.",
        ],
      },
    ],
    takeaways: [
      "The API uses the same tenant and role model as the interface.",
      "Create operations support idempotency for safe retries.",
      "Versioning and deprecation are documented before changes ship.",
    ],
    related: ["integration-guides", "platform-overview", "product-guides"],
  },

  "integration-guides": {
    id: "integration-guides",
    name: "Integration Guides",
    category: "Documentation",
    kind: "Documentation",
    summary:
      "Step-by-step guidance for connecting regulatory feeds, literature sources, identity and enterprise systems.",
    intro:
      "Integration guides help implementation teams connect NovigaAI to the sources and systems that surround it. Each guide covers prerequisites, configuration, validation and ongoing monitoring.",
    sections: [
      {
        heading: "Regulatory and literature feeds",
        body: [
          "Connector setup begins with credentials, schedule and data-scope decisions. After configuration, a controlled test run validates file structure, mappings and deduplication before the feed is enabled for production.",
        ],
        bullets: [
          "FAERS and JADER download and ingestion",
          "E2B(R2/R3) gateway configuration",
          "PubMed, OpenAlex and Europe PMC search profiles",
          "ClinicalTrials.gov and regional trial registries",
        ],
      },
      {
        heading: "Identity and access",
        body: [
          "Single sign-on is configured through SAML 2.0 or OIDC, with group-to-role mapping agreed before rollout. SCIM provisioning keeps user lifecycle changes aligned with your directory, and access reviews confirm that role assignments remain appropriate.",
        ],
      },
      {
        heading: "Enterprise workflow and documents",
        body: [
          "Monitoring, alerting, ticketing and document repositories connect through standard APIs and webhooks. Each integration has an owner, a failure mode and a defined operational response, so a dependency failure does not go unnoticed.",
        ],
      },
      {
        heading: "Test, monitor and validate",
        body: [
          "Every integration is tested with representative data before production use. Monitoring covers health, last successful run, volume, validation failures and retries. Where the interface supports a regulated process, its requirements and test evidence form part of the validation package.",
        ],
      },
    ],
    takeaways: [
      "Configure, test and validate each connector before production use.",
      "Define an owner and failure response for every integration.",
      "Connector health and volume are monitored continuously.",
    ],
    related: ["api-reference", "platform-overview", "best-practices"],
  },

  webinars: {
    id: "webinars",
    name: "Webinars & Events",
    category: "Learning",
    kind: "Learning",
    summary:
      "Live and on-demand sessions on signal management, literature surveillance, AI governance and regulatory practice.",
    intro:
      "Our sessions are designed for working safety teams. Each session focuses on a specific operational problem, the evidence behind the approach and the decisions teams need to make when adopting new workflows.",
    sections: [
      {
        heading: "Session themes",
        body: [
          "The programme covers quantitative signal management, literature screening operations, AI governance in regulated workflows, case processing quality and reporting readiness.",
        ],
        bullets: [
          "Designing a reproducible signal review cycle",
          "Reducing literature noise without losing oversight",
          "Human-in-the-loop AI: what evidence reviewers need",
          "Preparing for inspection with traceable records",
          "From case data to portfolio-level insight",
        ],
      },
      {
        heading: "Who should attend",
        body: [
          "Sessions are intended for safety scientists, PV operations leads, quality and compliance professionals, medical reviewers and technology partners supporting pharmacovigilance.",
        ],
      },
      {
        heading: "On-demand access",
        body: [
          "Recordings and summary notes are shared with registered attendees. If you would like access to a previous session or to suggest a topic, contact the team and we will include you in the next invitation.",
        ],
      },
    ],
    takeaways: [
      "Sessions are practical and focused on operational decisions.",
      "Recordings and summaries are shared with registered attendees.",
      "Topic suggestions are welcome from safety teams.",
    ],
    related: ["video-tutorials", "best-practices", "blog"],
  },

  "video-tutorials": {
    id: "video-tutorials",
    name: "Video Tutorials",
    category: "Learning",
    kind: "Learning",
    summary:
      "Short walkthroughs of case processing, signal triage, literature screening and report preparation.",
    intro:
      "Video tutorials demonstrate specific workflows in the platform. They are intended as a quick orientation before a guided demo or as a refresher for configured users.",
    sections: [
      {
        heading: "Case workflow tutorials",
        body: [
          "Walkthroughs cover intake validation, AI-assisted extraction, coding review, duplicate handling, narrative preparation and submission readiness. Each tutorial highlights the reviewer decisions and audit events produced along the way.",
        ],
      },
      {
        heading: "Signal workflow tutorials",
        body: [
          "Signal tutorials show how to inspect statistical output, review a prioritised queue, assemble an evidence dossier and complete a structured causality assessment.",
        ],
      },
      {
        heading: "Administration tutorials",
        body: [
          "Administrator tutorials cover user roles, workflow configuration, dictionary updates, connector health and audit review. They are designed to support controlled change rather than ad-hoc configuration.",
        ],
      },
    ],
    takeaways: [
      "Tutorials focus on decisions and audit events, not just screens.",
      "They are suitable for pre-demo orientation and user refreshers.",
      "Administrator content supports controlled configuration change.",
    ],
    related: ["webinars", "product-guides", "platform-overview"],
  },

  "best-practices": {
    id: "best-practices",
    name: "Best Practices",
    category: "Learning",
    kind: "Learning",
    summary:
      "Practical guidance for signal management, literature screening, AI governance and inspection readiness.",
    intro:
      "These guides summarise practices that regulated safety teams commonly use to make their work reproducible and defensible. They are general guidance, not a substitute for your SOPs or regulatory advice.",
    sections: [
      {
        heading: "Signal management",
        body: [
          "Define the review cycle, statistical methods and thresholds before reviewing data. Record why a configuration was chosen, review it periodically and keep the analysis parameters with the signal so conclusions can be reproduced.",
        ],
        bullets: [
          "Document method selection and thresholds",
          "Use sequential-testing safeguards for repeated review",
          "Preserve disagreements between sources rather than averaging them",
          "Record validate, monitor and refute decisions with rationale",
        ],
      },
      {
        heading: "Literature surveillance",
        body: [
          "Search profiles should be specific enough to be reproducible and broad enough to meet the obligation. Record inclusion and exclusion reasons consistently, and track day-zero timestamps so expedited reporting clocks are visible.",
        ],
      },
      {
        heading: "AI governance",
        body: [
          "Treat AI as preparation, not decision-making. Require citations, record model and prompt versions, define approval gates and evaluate performance against reviewer outcomes. Make it possible to explain an AI suggestion months after it was produced.",
        ],
      },
      {
        heading: "Inspection readiness",
        body: [
          "Keep process, configuration and evidence aligned. If a workflow changes, update the SOP, the configuration record and the validation evidence together. Periodically test whether an independent reviewer can reconstruct a decision from the record.",
        ],
      },
    ],
    takeaways: [
      "Reproducibility depends on recording method and configuration, not just results.",
      "Consistent exclusion reasons make screening defensible.",
      "AI governance needs versioning, citations and defined approval gates.",
      "Inspection readiness is a continuous alignment activity.",
    ],
    related: ["quality-compliance", "platform-overview", "webinars"],
  },

  "case-studies": {
    id: "case-studies",
    name: "Case Studies",
    category: "Learning",
    kind: "Learning",
    summary:
      "Illustrative workflow scenarios showing how safety teams can apply NovigaAI capabilities.",
    intro:
      "The scenarios below are illustrative composites, not customer endorsements. They describe how a team might structure a workflow and what the platform would record at each stage.",
    sections: [
      {
        heading: "Scenario: shorter time to signal triage",
        body: [
          "A mid-sized safety team reviews spontaneous data quarterly. By scheduling ingestion, applying consistent statistical screening and routing candidates into priority queues, the team reviews current data more often without increasing reviewer load. The record shows which pairs were reviewed, the configured thresholds and the rationale for each decision.",
        ],
      },
      {
        heading: "Scenario: literature backlog reduction",
        body: [
          "A literature team faces growing search volumes. Staged screening reduces the number of results requiring deep review, while reviewers confirm every inclusion and exclusion. Exclusion reasons and day-zero timestamps create a complete screening record, and eligible articles move directly into intake.",
        ],
      },
      {
        heading: "Scenario: governed AI assistance",
        body: [
          "An organisation wants to use AI for case preparation but must demonstrate control. They configure approval gates for extraction and coding, require citations on summaries and record model versions. Reviewers validate every field before finalisation, and the audit trail separates AI suggestions from human decisions.",
        ],
      },
    ],
    takeaways: [
      "Scenarios are illustrative and should be tailored to your operating model.",
      "Consistent configuration and rationale are central to each workflow.",
      "Audit records capture both AI suggestions and human decisions.",
    ],
    related: ["best-practices", "pv-operations", "ai-assisted-investigation"],
  },

  faq: {
    id: "faq",
    name: "Frequently Asked Questions",
    category: "Community",
    kind: "FAQ",
    summary:
      "Answers on deployment, security, validation, AI governance, integration and working with NovigaAI.",
    intro:
      "These are the questions teams ask most often during evaluation. If your question is not covered, contact us and we will answer it directly.",
    sections: [
      {
        heading: "Platform and deployment",
        body: [
          "NovigaAI is a container-native, multi-tenant platform. It can be operated as a managed service or deployed in a controlled environment agreed during implementation, including private cloud and air-gapped arrangements where required.",
        ],
      },
      {
        heading: "Security and data isolation",
        body: [
          "Tenant isolation is enforced at every storage layer: PostgreSQL row-level security, tenant-scoped analytical queries, per-tenant vector collections and tenant-prefixed artifact storage. Access is role-based, administrative actions are audited and isolation checks are continuous.",
        ],
      },
      {
        heading: "Validation and compliance",
        body: [
          "The platform provides validation documentation, requirements traceability and test evidence to support your computer-system validation. Workflows are aligned with GVP Modules VI and IX, ICH E2A/E2B(R3)/E2C(R2) and 21 CFR Part 11 expectations. Final validation responsibility remains with the regulated organisation.",
        ],
      },
      {
        heading: "AI governance",
        body: [
          "AI prepares and recommends; people decide. Outputs carry citations, confidence and model version. Consequential actions require an authorised reviewer, and human decisions are recorded separately from AI suggestions.",
        ],
      },
      {
        heading: "Integration and migration",
        body: [
          "Regulatory feeds, literature sources, identity providers, document systems and custom sources connect through standard protocols. Historical data migration is planned during implementation, with validation of mappings and reconciled counts.",
        ],
      },
    ],
    takeaways: [
      "Deployment models are agreed around security and residency needs.",
      "Isolation is structural and continuously verified.",
      "Validation remains a shared responsibility with the regulated organisation.",
      "AI never holds decision authority.",
    ],
    related: ["platform-overview", "integration-guides", "best-practices"],
  },

  "release-notes": {
    id: "release-notes",
    name: "Release Notes",
    category: "Community",
    kind: "Release notes",
    summary:
      "A summary of how NovigaAI communicates platform changes, improvements and deprecations.",
    intro:
      "Release notes describe what changed, why it matters and any action required before or after an upgrade. They are written for administrators and operational owners who plan change.",
    sections: [
      {
        heading: "What a release note includes",
        body: [
          "Each note identifies the services affected, the user-visible change, configuration impact, migration steps and any validation or training implications.",
        ],
        bullets: [
          "New and improved capabilities",
          "Behaviour changes that affect workflows",
          "Configuration and migration requirements",
          "Deprecations and removal dates",
          "Known issues and workarounds",
        ],
      },
      {
        heading: "How changes are delivered",
        body: [
          "Changes follow the agreed release and change-control process for your deployment. Regulated customers receive the information needed to assess impact, update documentation and, where required, extend validation evidence before adoption.",
        ],
      },
      {
        heading: "Staying informed",
        body: [
          "Release notifications are sent to nominated administrators. If you are unsure who receives them in your organisation, contact the team and we will confirm the distribution list.",
        ],
      },
    ],
    takeaways: [
      "Release notes cover impact, migration and validation implications.",
      "Change delivery follows the agreed controlled process.",
      "Nominated administrators receive release notifications.",
    ],
    related: ["platform-overview", "product-guides", "faq"],
  },

  blog: {
    id: "blog",
    name: "Blog",
    category: "Community",
    kind: "Perspectives",
    summary:
      "Perspectives on pharmacovigilance operations, evidence, AI governance and regulatory practice.",
    intro:
      "Our writing focuses on the practical questions safety teams face when they modernise operations. We aim to be specific about what technology can and cannot do in a regulated environment.",
    sections: [
      {
        heading: "Signals, evidence and uncertainty",
        body: [
          "Statistical association is a starting point, not a conclusion. Articles in this theme examine how teams can combine quantitative methods, clinical context and mechanistic evidence without overstating certainty or hiding disagreement between sources.",
        ],
      },
      {
        heading: "AI in regulated workflows",
        body: [
          "AI can reduce the effort of retrieval, extraction and drafting. It cannot absorb accountability. These articles explore approval gates, provenance, model versioning and the practical evidence reviewers need before they trust an AI-assisted output.",
        ],
      },
      {
        heading: "Operating model and inspection readiness",
        body: [
          "Technology only helps when process, configuration and evidence stay aligned. Articles in this theme cover reproducible analysis, consistent exclusion reasons, controlled configuration change and the records inspectors actually ask for.",
        ],
      },
      {
        heading: "Emerging sources",
        body: [
          "Literature, trial registries, social media and real-world data each bring different strengths and limitations. We examine how to incorporate them without confusing volume with insight or signal with noise.",
        ],
      },
    ],
    takeaways: [
      "Evidence quality matters more than the size of a signal list.",
      "AI accountability stays with authorised people.",
      "Inspection readiness depends on aligned process, configuration and evidence.",
    ],
    related: ["best-practices", "webinars", "platform-overview"],
  },

  glossary: {
    id: "glossary",
    name: "Glossary",
    category: "Community",
    kind: "Reference",
    summary:
      "Definitions of pharmacovigilance, statistical and AI terms used across the NovigaAI platform.",
    intro:
      "This glossary explains terms as they are used in NovigaAI documentation. Definitions are intentionally concise; regulatory obligations should always be confirmed against the applicable guidance.",
    sections: [
      {
        heading: "Pharmacovigilance",
        body: [
          "Core terms used in case processing, signal management and reporting.",
        ],
        bullets: [
          "ICSR — Individual Case Safety Report: a report of an adverse event associated with a medicinal product.",
          "Signal — information suggesting a new potentially causal association, or a new aspect of a known association, that warrants further assessment.",
          "GVP — Good Pharmacovigilance Practices: EU guidance covering safety monitoring, signal management and risk management.",
          "PSUR/PBRER — Periodic Safety Update Report / Periodic Benefit-Risk Evaluation Report.",
          "RMP — Risk Management Plan: the structured plan for identifying, characterising, preventing and minimising risks.",
        ],
      },
      {
        heading: "Statistics",
        body: [
          "Quantitative methods used to screen for disproportionate reporting.",
        ],
        bullets: [
          "PRR — Proportional Reporting Ratio: the ratio of a reaction's reporting proportion for a drug to that for all other drugs.",
          "ROR — Reporting Odds Ratio: an odds-ratio measure of disproportionate reporting.",
          "IC — Information Component: a Bayesian measure of observed versus expected reporting.",
          "EBGM — Empirical Bayes Geometric Mean: an empirical Bayes shrinkage estimate used in disproportionality analysis.",
          "Sequential testing — repeated statistical testing with alpha-spending boundaries to control false positives.",
        ],
      },
      {
        heading: "AI and data",
        body: [
          "Terms describing how AI assistance and data handling work in the platform.",
        ],
        bullets: [
          "RAG — Retrieval-Augmented Generation: grounding model output in retrieved source documents.",
          "Provenance — the record of where information came from and how it was processed.",
          "Human-in-the-loop — a workflow where a person reviews and approves an AI output before it has effect.",
          "Tenant isolation — structural separation of one customer's data from another's.",
          "MedDRA — the Medical Dictionary for Regulatory Activities, used to code adverse events.",
        ],
      },
    ],
    takeaways: [
      "Definitions are concise and intended for product context.",
      "Confirm regulatory obligations against applicable guidance.",
      "Statistical terms describe screening measures, not causality.",
    ],
    related: ["platform-overview", "best-practices", "faq"],
  },
};

export const resourceCategories: { title: string; resources: ResourceData[] }[] = [
  "Documentation",
  "Learning",
  "Community",
].map((title) => ({
  title,
  resources: Object.values(resourcesData).filter((item) => item.category === title),
}));

export function getResourceById(id: string): ResourceData | undefined {
  return resourcesData[id];
}
