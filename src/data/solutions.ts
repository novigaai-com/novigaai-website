export interface SolutionApproach {
  title: string;
  description: string;
}

export interface SolutionData {
  id: string;
  name: string;
  category: "By Use Case" | "By Role" | "By Organization";
  summary: string;
  overview: string;
  challenges: string[];
  approach: SolutionApproach[];
  outcomes: string[];
  products: string[];
  audiences: string[];
  faqs: { question: string; answer: string }[];
}

const sharedSolutionsFaqs = [
  {
    question: "Do we have to adopt the whole platform at once?",
    answer:
      "No. Each NovigaAI product is a domain service with its own APIs and workflows. You can start with the module that addresses the most urgent need and connect additional modules later, because they share the same tenant model, terminology service and audit trail.",
  },
  {
    question: "How do AI recommendations stay under human control?",
    answer:
      "AI prepares, people decide. Recommendations are shown with their evidence, confidence and model version, and consequential actions such as case coding, signal validation, report approval and submission require an authorised reviewer to approve, edit or reject them.",
  },
  {
    question: "How is our data isolated from other customers?",
    answer:
      "Isolation is structural rather than procedural: PostgreSQL row-level security, tenant-scoped analytical queries, per-tenant vector collections and tenant-prefixed artifact storage. Administrative actions are audited, and isolation is verified continuously.",
  },
];

function solution(input: SolutionData): SolutionData {
  return input;
}

export const solutionsData: Record<string, SolutionData> = {
  "earlier-signal-identification": solution({
    id: "earlier-signal-identification",
    name: "Earlier Signal Identification",
    category: "By Use Case",
    summary:
      "Continuous surveillance across spontaneous reports, literature and public sources so weak but meaningful safety signals surface sooner.",
    overview:
      "Time to detection depends on how often you look, which sources you look at and how quickly reviewers can act. This solution combines scheduled regulatory and literature ingestion, quantitative screening and human triage into a repeating surveillance cycle. Rather than one annual review of a static extract, safety scientists work from current data with transparent thresholds and a documented record of every decision.",
    challenges: [
      "Quarterly data loads create blind spots between reporting periods.",
      "Signal review backlogs hide the pairs that most need attention.",
      "Sources are screened separately, so concordance across them is missed.",
      "Threshold changes are hard to reproduce during inspection.",
    ],
    approach: [
      {
        title: "Automated, monitored ingestion",
        description:
          "FAERS, JADER, literature and internal ICSRs are retrieved on a schedule, validated and deduplicated. Connector health and last successful runs are visible to operations.",
      },
      {
        title: "Complementary statistical screening",
        description:
          "PRR, ROR, Information Component and EBGM are computed with confidence intervals and sequential-testing safeguards, so repeated review does not inflate false positives.",
      },
      {
        title: "Multi-source concordance",
        description:
          "Each candidate is compared across spontaneous data, literature and digital sources. Agreement raises priority; disagreement is preserved rather than averaged away.",
      },
      {
        title: "Reviewer-led triage",
        description:
          "A transparent priority score routes candidates into P1–P4 queues. Scientists record validate, monitor or refute decisions with rationale and evidence.",
      },
    ],
    outcomes: [
      "A shorter, documented cycle from data arrival to triage decision",
      "Fewer high-priority signals delayed behind low-value pairs",
      "Reproducible analyses that stand up to inspection",
      "A complete record of what was reviewed, when and why",
    ],
    products: ["signal-detection", "signal-investigation", "literature-intelligence", "safety-analytics"],
    audiences: ["Signal management teams", "PV physicians", "Risk management leads"],
    faqs: [
      {
        question: "Does more frequent screening create more false positives?",
        answer:
          "Repeated testing increases the chance of a false positive if no adjustment is made. NovigaAI supports alpha-spending boundaries and configurable agreement rules so screening frequency and statistical rigour are balanced explicitly.",
      },
      ...sharedSolutionsFaqs,
    ],
  }),

  "evidence-based-assessment": solution({
    id: "evidence-based-assessment",
    name: "Evidence-Based Safety Assessment",
    category: "By Use Case",
    summary:
      "Connect every safety conclusion to its supporting evidence, with provenance preserved from source document to final decision.",
    overview:
      "A safety assessment is only as strong as the evidence behind it and the record of how that evidence was weighed. This solution brings statistical output, literature, clinical data and mechanistic context into one versioned dossier. Reviewers assess causality criterion by criterion, record uncertainty and attach their rationale, so conclusions can be defended months or years later.",
    challenges: [
      "Evidence is scattered across email, shared drives and separate tools.",
      "Assessments reference sources that cannot be traced after the fact.",
      "Causality reasoning is recorded in free text with no consistent structure.",
      "Reviewers revisit the same literature for related signals.",
    ],
    approach: [
      {
        title: "One evidence dossier",
        description:
          "Statistical results, literature, clinical observations and graph context are assembled into a single versioned record for the signal under review.",
      },
      {
        title: "Structured causality assessment",
        description:
          "A guided Bradford Hill workflow captures evidence for each criterion, the strength of that evidence and the reviewer's explicit conclusion.",
      },
      {
        title: "Provenance on every statement",
        description:
          "Each claim links to its source document, retrieval date and extraction record. AI-drafted text is separated from human-approved text.",
      },
      {
        title: "Actions tracked to closure",
        description:
          "Label updates, risk-minimisation changes, communications and commitments are assigned, dated and tracked through implementation.",
      },
    ],
    outcomes: [
      "Assessment dossiers that can be reconstructed during inspection",
      "Consistent causality reasoning across reviewers and products",
      "Less duplicated literature retrieval for related questions",
      "Clear visibility of open regulatory commitments",
    ],
    products: ["signal-investigation", "evidence-research", "evidence-graph", "compliance"],
    audiences: ["Medical reviewers", "Signal scientists", "Regulatory affairs"],
    faqs: [
      {
        question: "Does the platform decide causality for us?",
        answer:
          "No. The platform structures the assessment and surfaces evidence, but the qualified reviewer records the causality conclusion and its rationale. AI can draft summaries, never the decision.",
      },
      ...sharedSolutionsFaqs,
    ],
  }),

  // "literature-intelligence": solution({
  //   id: "literature-intelligence",
  //   name: "Literature Intelligence",
  //   category: "By Use Case",
  //   summary:
  //     "Systematic literature surveillance with AI-assisted relevance scoring, ICSR eligibility checks and reviewable exclusion reasons.",
  //   overview:
  //     "Literature screening is high volume, deadline-driven and difficult to evidence when it is done in spreadsheets. This solution schedules searches across bibliographic and trial sources, filters noise in stages and asks a qualified reviewer to confirm every inclusion and exclusion. Day-zero timestamps and 15-day reporting windows stay visible, and each decision carries the rationale that supports it.",
  //   challenges: [
  //     "Search volumes grow faster than reviewer capacity.",
  //     "Exclusion decisions are inconsistently documented.",
  //     "Reportable cases are identified late in the screening cycle.",
  //     "Screening SLAs and expedited deadlines are tracked manually.",
  //   ],
  //   approach: [
  //     {
  //       title: "Scheduled, reproducible searches",
  //       description:
  //         "Search profiles are defined per product and reaction, then run on a schedule across PubMed, OpenAlex, Europe PMC and trial registries.",
  //     },
  //     {
  //       title: "Staged relevance screening",
  //       description:
  //         "Fast filtering, deeper relevance assessment and regulatory-potential scoring reduce noise while keeping every result auditable.",
  //     },
  //     {
  //       title: "ICSR eligibility assessment",
  //       description:
  //         "The four ICSR criteria are checked explicitly, and eligible articles become case candidates with source text attached.",
  //     },
  //     {
  //       title: "Documented human decisions",
  //       description:
  //         "Reviewers confirm or reverse AI suggestions and record a reason for every exclusion, producing an inspection-ready screening record.",
  //     },
  //   ],
  //   outcomes: [
  //     "Higher screening throughput without reducing reviewer control",
  //     "A complete, reason-coded record of inclusions and exclusions",
  //     "Earlier identification of reportable literature cases",
  //     "Visibility of screening SLAs and expedited deadlines",
  //   ],
  //   products: ["literature-intelligence", "case-intake", "case-management", "evidence-research"],
  //   audiences: ["Literature teams", "PV operations", "Medical reviewers"],
  //   faqs: [
  //     {
  //       question: "Which sources are supported?",
  //       answer:
  //         "PubMed, OpenAlex, Europe PMC and ClinicalTrials.gov are supported out of the box. Licensed databases and custom feeds can be connected through the integration layer.",
  //     },
  //     ...sharedSolutionsFaqs,
  //   ],
  // }),

  // "drug-target-safety": solution({
  //   id: "drug-target-safety",
  //   name: "Drug & Target Safety Intelligence",
  //   category: "By Use Case",
  //   summary:
  //     "Mechanism-aware safety intelligence that traverses drugs, targets, pathways, diseases and phenotypes with evidence on every relationship.",
  //   overview:
  //     "Statistical association tells you that something happened; mechanism can help explain why. This solution connects safety data to a curated knowledge graph so scientists can explore plausible biological explanations, compare compounds in a class and identify risks that may generalise across a portfolio. Graph paths are hypotheses with provenance, never automatic conclusions.",
  //   challenges: [
  //     "Mechanistic context lives with R&D, not safety.",
  //     "Class effects are rediscovered product by product.",
  //     "Literature on targets and pathways is difficult to connect to safety questions.",
  //     "Hypotheses are not retained alongside the signal record.",
  //   ],
  //   approach: [
  //     {
  //       title: "Connected entity graph",
  //       description:
  //         "Drugs, targets, genes, pathways, diseases and phenotypes are linked with source, evidence type and confidence recorded on each edge.",
  //     },
  //     {
  //       title: "Guided traversal",
  //       description:
  //         "Start from a drug, reaction or signal and explore relationships with filters for evidence strength and mechanism.",
  //     },
  //     {
  //       title: "Portfolio and class views",
  //       description:
  //         "Compare related products by target, pathway or therapeutic class to identify potential class effects and differentiated risk.",
  //     },
  //     {
  //       title: "Hypotheses attached to the record",
  //       description:
  //         "Promising paths are saved to the signal dossier with the reviewer's note, so mechanism reasoning is part of the audit trail.",
  //     },
  //   ],
  //   outcomes: [
  //     "Better mechanistic context for signal evaluation",
  //     "Earlier awareness of potential class effects",
  //     "Reuse of target and pathway knowledge across products",
  //     "Mechanism hypotheses retained with their evidence",
  //   ],
  //   products: ["evidence-graph", "signal-investigation", "evidence-research", "safety-analytics"],
  //   audiences: ["R&D safety teams", "Translational safety", "Signal scientists"],
  //   faqs: [
  //     {
  //       question: "Is graph output treated as evidence?",
  //       answer:
  //         "Graph paths generate hypotheses. Reviewers must evaluate the underlying sources and record their own conclusion; the graph never asserts causality.",
  //     },
  //     ...sharedSolutionsFaqs,
  //   ],
  // }),

  "ai-assisted-investigation": solution({
    id: "ai-assisted-investigation",
    name: "AI-Assisted Investigation",
    category: "By Use Case",
    summary:
      "Specialised agents prepare evidence, drafts and triage recommendations while named reviewers retain every consequential decision.",
    overview:
      "Most safety work involves assembling context before an expert can decide. This solution delegates retrieval, extraction, summarisation and first-pass classification to purpose-built agents, each scoped to permitted tenant data. Agents hand work to people at defined approval gates, and every output records its sources, model version, prompt version and confidence.",
    challenges: [
      "Reviewers spend significant time assembling rather than assessing.",
      "Generic AI tools cannot show provenance or reproduce an output.",
      "Automation risks are hard to govern without clear approval boundaries.",
      "Model changes can alter behaviour without anyone noticing.",
    ],
    approach: [
      {
        title: "Specialised, narrow agents",
        description:
          "Literature, case, signal, evidence and compliance agents each own a defined task and a defined data scope.",
      },
      {
        title: "Retrieval-grounded output",
        description:
          "Agents answer from tenant records and approved references, with citations and confidence shown against each statement.",
      },
      {
        title: "Configurable approval gates",
        description:
          "Decide which actions require review, who may approve and what evidence must be visible before approval.",
      },
      {
        title: "Reproducible model history",
        description:
          "Model, prompt and parameter versions are stored per interaction, with evaluation and rollback tracked over time.",
      },
    ],
    outcomes: [
      "Less reviewer time spent on retrieval and first drafts",
      "AI output that can be traced, reproduced and challenged",
      "Clear boundaries between preparation and decision",
      "Governed change management for models and prompts",
    ],
    products: ["ai-agents", "case-management", "literature-intelligence", "signal-detection"],
    audiences: ["Safety scientists", "PV operations", "AI governance leads"],
    faqs: [
      {
        question: "Can agents take regulatory actions on their own?",
        answer:
          "No. Agents prepare and recommend. Coding, validation, report approval and submission require authorised human reviewers, whose decisions are recorded separately from the AI output.",
      },
      ...sharedSolutionsFaqs,
    ],
  }),

  "safety-risk-prioritization": solution({
    id: "safety-risk-prioritization",
    name: "Safety Risk Prioritisation",
    category: "By Use Case",
    summary:
      "A transparent priority score that combines statistical strength, clinical seriousness, novelty and regulatory urgency.",
    overview:
      "Long signal lists are not the same as good risk management. This solution turns multiple inputs into a defensible order of work: statistical strength, seriousness of the reaction, novelty, cross-source concordance and portfolio context. Weights are configured per tenant and every score can be decomposed, so reviewers can explain why a signal is at the top of the queue.",
    challenges: [
      "Review queues are ordered by volume or arrival time, not risk.",
      "Different teams score the same signal differently.",
      "Priority criteria are implicit and difficult to audit.",
      "Leadership lacks a portfolio view of the most material risks.",
    ],
    approach: [
      {
        title: "Multi-dimensional scoring",
        description:
          "Statistical strength, seriousness, novelty, concordance and product context are normalised into a single explainable score.",
      },
      {
        title: "Tenant-specific weighting",
        description:
          "Safety and risk leads agree the weights and thresholds that reflect their portfolio and regulatory obligations.",
      },
      {
        title: "Priority routing",
        description:
          "P1–P4 queues are applied in the database query as well as the interface, so urgent work cannot be buried by pagination.",
      },
      {
        title: "Portfolio oversight",
        description:
          "Aggregated views show where the most material risks sit across products, regions and therapeutic areas.",
      },
    ],
    outcomes: [
      "Review capacity focused on the most consequential signals",
      "Priority decisions that can be explained and reproduced",
      "Consistent triage across teams and regions",
      "A portfolio view for safety leadership",
    ],
    products: ["signal-detection", "risk-intelligence", "safety-analytics", "signal-investigation"],
    audiences: ["Signal management", "Risk management", "Safety leadership"],
    faqs: [
      {
        question: "Can we change the prioritisation weights?",
        answer:
          "Yes. Weights, thresholds and queue rules are tenant-configurable. Every change is recorded so historical prioritisation can be reconstructed.",
      },
      ...sharedSolutionsFaqs,
    ],
  }),

  "safety-scientists": solution({
    id: "safety-scientists",
    name: "For Safety Scientists",
    category: "By Role",
    summary:
      "Deep analytical tools for signal evaluation: stratified statistics, Bradford Hill assessment, temporal trends and cross-source concordance.",
    overview:
      "Safety scientists need to move between statistical output, clinical detail and literature without losing the thread. This solution gives them a single workspace for stratified analysis, causality assessment, evidence retrieval and documentation. Computations, filters and source versions are retained with the conclusion, so analysis can be repeated rather than rebuilt.",
    challenges: [
      "Analysis is split across statistical tools, spreadsheets and documents.",
      "Stratified results are difficult to reproduce months later.",
      "Literature and clinical context are retrieved separately from the statistics.",
      "Conclusions are recorded without the analysis that produced them.",
    ],
    approach: [
      {
        title: "Transparent statistics",
        description:
          "Inspect contingency tables, confidence intervals and stratification by age, sex, geography and time for every candidate.",
      },
      {
        title: "Structured causality",
        description:
          "Assess Bradford Hill criteria with evidence grading, rationale and an explicit confidence statement.",
      },
      {
        title: "Evidence at hand",
        description:
          "Search literature, trial registries and internal documents without leaving the investigation, with citations retained.",
      },
      {
        title: "Reproducible analysis",
        description:
          "Filters, thresholds and data versions are stored with the signal so an analysis can be re-run exactly.",
      },
    ],
    outcomes: [
      "Less time rebuilding analyses and gathering sources",
      "Consistent, defensible causality documentation",
      "Faster exploration of subgroups and temporal patterns",
      "Analysis that can be reproduced during inspection",
    ],
    products: ["signal-investigation", "signal-detection", "evidence-research", "evidence-graph"],
    audiences: ["Safety scientists", "Medical reviewers", "Epidemiologists"],
    faqs: [
      {
        question: "Can we export our analyses?",
        answer:
          "Yes. Analysis results, evidence dossiers and assessments can be exported through the API and into approved document-management systems.",
      },
      ...sharedSolutionsFaqs,
    ],
  }),

  "pv-operations": solution({
    id: "pv-operations",
    name: "For PV Operations",
    category: "By Role",
    summary:
      "Streamlined intake, case processing, literature screening and reporting with fewer manual hand-offs and clear workload visibility.",
    overview:
      "PV operations carries the operational burden of safety: every source, every case, every deadline. This solution connects intake, triage, processing, literature screening and reporting into one pipeline with shared status, ownership and audit history. AI assists with extraction and preparation, while reviewers remain accountable for the case record.",
    challenges: [
      "Cases arrive through multiple channels with inconsistent validation.",
      "Duplicate and follow-up detection is manual and inconsistent.",
      "Deadlines are tracked in spreadsheets rather than the workflow.",
      "Workload and backlog are difficult to see across teams.",
    ],
    approach: [
      {
        title: "One controlled intake",
        description:
          "E2B, partner, literature, email and manual reports enter a single queue with source-specific validation.",
      },
      {
        title: "AI-prepared cases",
        description:
          "Entities, codes, seriousness and narratives are proposed with confidence and source spans for reviewer validation.",
      },
      {
        title: "Deadline-aware workflow",
        description:
          "Priority, due dates and submission obligations are part of the case, not a separate tracking sheet.",
      },
      {
        title: "Operational visibility",
        description:
          "Dashboards show volumes, backlog, timeliness and SLA performance with drill-down to the underlying records.",
      },
    ],
    outcomes: [
      "Fewer manual hand-offs between intake and processing",
      "More consistent duplicate and follow-up handling",
      "Deadline risk visible before it becomes a late submission",
      "Workload balanced using current operational data",
    ],
    products: ["case-intake", "case-management", "literature-intelligence", "regulatory-reporting"],
    audiences: ["Case processors", "PV associates", "PV operations leads"],
    faqs: [
      {
        question: "Does this replace our existing safety database?",
        answer:
          "NovigaAI can act as the safety system of record or connect to an existing database through E2B and APIs. The right model depends on your operating and validation strategy.",
      },
      ...sharedSolutionsFaqs,
    ],
  }),

  "quality-compliance": solution({
    id: "quality-compliance",
    name: "For Quality & Compliance",
    category: "By Role",
    summary:
      "Inspection-ready audit trails, electronic signatures, validation evidence and configurable controls aligned to GVP and 21 CFR Part 11.",
    overview:
      "Quality teams need to demonstrate that the process was followed, not just that the output exists. This solution records every material action — AI recommendation, human decision, data change, signature and submission — with actor, time and rationale. Controls are configurable so they can map to your SOPs while still producing consistent evidence for inspections.",
    challenges: [
      "Audit evidence is reconstructed after the fact from multiple systems.",
      "AI involvement is not always visible in the decision record.",
      "Signatures and approvals are stored separately from the signed record.",
      "Configuration changes are difficult to trace and review.",
    ],
    approach: [
      {
        title: "Append-only audit trails",
        description:
          "Material actions and decisions are recorded with actor, timestamp, before/after values and rationale.",
      },
      {
        title: "21 CFR Part 11 aligned signatures",
        description:
          "Electronic signatures are linked to the signed record and version, with meaning and authority captured.",
      },
      {
        title: "Configurable controls",
        description:
          "Approval gates, segregation of duties, mandatory fields and escalation paths map to your SOPs.",
      },
      {
        title: "Validation evidence",
        description:
          "Requirements traceability, test evidence and change records are maintained in one place for CSV support.",
      },
    ],
    outcomes: [
      "Inspection packs that can be assembled quickly",
      "Clear separation of AI recommendation and human decision",
      "Controls that reflect actual SOPs rather than workarounds",
      "Traceable configuration and change history",
    ],
    products: ["compliance", "administration", "regulatory-reporting", "ai-agents"],
    audiences: ["Quality assurance", "Regulatory affairs", "Computer-system validation"],
    faqs: [
      {
        question: "Is NovigaAI a validated system?",
        answer:
          "NovigaAI provides validation documentation, requirements traceability and test evidence to support your computer-system validation. Final validation responsibility remains with the regulated organisation.",
      },
      ...sharedSolutionsFaqs,
    ],
  }),

  // leadership: solution({
  //   id: "leadership",
  //   name: "For Leadership",
  //   category: "By Role",
  //   summary:
  //     "Portfolio-level safety oversight with current KPIs, emerging risk visibility and evidence-grounded executive briefings.",
  //   overview:
  //     "Safety leadership needs to know where risk is accumulating, whether operations are keeping pace and what changed since the last review. This solution brings portfolio metrics, signal activity, backlog and SLA performance into a consistent view, with AI-drafted briefings that cite the underlying records. Leaders see the same evidence as their teams, at the level of detail they need.",
  //   challenges: [
  //     "Executive reporting is assembled manually from inconsistent sources.",
  //     "Portfolio risk is reviewed periodically rather than continuously.",
  //     "Operational metrics and safety outcomes are reported separately.",
  //     "Briefings describe activity without linking to evidence.",
  //   ],
  //   approach: [
  //     {
  //       title: "One portfolio view",
  //       description:
  //         "Case volumes, timeliness, signal activity, priority mix and literature SLAs are presented in a shared operational view.",
  //     },
  //     {
  //       title: "Risk heatmaps",
  //       description:
  //         "Compare products, regions and periods to see where risk and workload are concentrated.",
  //     },
  //     {
  //       title: "Grounded briefings",
  //       description:
  //         "AI drafts period summaries from tenant data; a safety lead reviews and approves before distribution.",
  //     },
  //     {
  //       title: "Traceable metrics",
  //       description:
  //         "Every figure links to its query and underlying records, so leadership questions can be answered with evidence.",
  //     },
  //   ],
  //   outcomes: [
  //     "Less time spent assembling recurring reports",
  //     "Earlier visibility of portfolio-level risk concentration",
  //     "Consistent metrics across operations and safety",
  //     "Briefings that can be traced back to source data",
  //   ],
  //   products: ["safety-analytics", "risk-intelligence", "signal-detection", "ai-agents"],
  //   audiences: ["VP Safety", "Head of PV", "Chief Medical Officer"],
  //   faqs: [
  //     {
  //       question: "Can leaders see data across all tenants?",
  //       answer:
  //         "No. Access is scoped by role within a tenant. Cross-tenant reporting is not enabled by default and requires an explicitly governed arrangement.",
  //     },
  //     ...sharedSolutionsFaqs,
  //   ],
  // }),

  "pharma-biotech": solution({
    id: "pharma-biotech",
    name: "Pharma & Biotech",
    category: "By Organization",
    summary:
      "Scalable safety operations for organisations moving from a first submission to a global portfolio.",
    overview:
      "Safety operations change shape as a company grows. A biotech may need a focused signal and literature capability; a global manufacturer needs multi-region processing and reporting. This solution starts with the modules that match your current stage and adds capability without re-platforming, using the same tenant model, evidence layer and audit trail throughout.",
    challenges: [
      "Small teams must cover a broad regulatory remit.",
      "Systems adopted early become constraints later.",
      "Global requirements differ by region and affiliate.",
      "Data residency and access requirements vary by market.",
    ],
    approach: [
      {
        title: "Start where the need is",
        description:
          "Adopt signal, literature, case or reporting modules independently, then connect them as the portfolio grows.",
      },
      {
        title: "Configurable per region",
        description:
          "Queues, thresholds, templates and reporting obligations are configurable per tenant and operating model.",
      },
      {
        title: "Controlled growth",
        description:
          "Migration-driven provisioning and role-based access support new products, teams and affiliates without ad-hoc changes.",
      },
      {
        title: "Validation-ready from the start",
        description:
          "Audit trails, signatures and validation evidence are part of the platform rather than a later project.",
      },
    ],
    outcomes: [
      "A safety capability that fits the current stage and can grow",
      "Lower operational overhead for small teams",
      "Consistent governance across regions and affiliates",
      "A clear validation and audit story from day one",
    ],
    products: ["signal-detection", "case-management", "literature-intelligence", "regulatory-reporting"],
    audiences: ["Global safety", "Regional PV", "Biotech clinical teams"],
    faqs: [
      {
        question: "Can we deploy in a specific region?",
        answer:
          "Deployment topology is agreed during implementation. Container-native services support regional and, where required, air-gapped arrangements.",
      },
      ...sharedSolutionsFaqs,
    ],
  }),

  // cros: solution({
  //   id: "cros",
  //   name: "CROs & Service Providers",
  //   category: "By Organization",
  //   summary:
  //     "Run multiple client safety programmes on one platform with structural isolation and auditable engagement boundaries.",
  //   overview:
  //     "Service providers need efficiency across clients without any risk of data crossover. This solution uses tenant isolation at the storage and query layers, per-client workflows and role scoping to keep engagements separate. Operators get a consistent processing model across clients, while each client retains its own configuration, data and audit history.",
  //   challenges: [
  //     "Client data must never mix, including in analytics and AI retrieval.",
  //     "Each client expects its own workflows, templates and terminology.",
  //     "Demonstrating isolation to clients and auditors is time-consuming.",
  //     "Operational efficiency falls when every client runs a separate instance.",
  //   ],
  //   approach: [
  //     {
  //       title: "Structural tenant isolation",
  //       description:
  //         "Row-level security, tenant-scoped analytics, per-tenant vector collections and tenant-prefixed storage.",
  //     },
  //     {
  //       title: "Per-client configuration",
  //       description:
  //         "Workflows, queues, thresholds, report templates and dictionaries are configured for each engagement.",
  //     },
  //     {
  //       title: "Role-scoped access",
  //       description:
  //         "Staff access is limited to the clients and functions they are authorised to support, with segregation of duties.",
  //     },
  //     {
  //       title: "Auditable boundaries",
  //       description:
  //         "Administrative actions, access changes and configuration history are recorded for client and regulator review.",
  //     },
  //   ],
  //   outcomes: [
  //     "One operating model across multiple clients",
  //     "Isolation that can be demonstrated, not just asserted",
  //     "Client-specific workflows without separate infrastructure",
  //     "Consistent audit evidence across engagements",
  //   ],
  //   products: ["administration", "compliance", "case-management", "safety-analytics"],
  //   audiences: ["PV service providers", "Outsourcing managers", "Client governance teams"],
  //   faqs: [
  //     {
  //       question: "Can client administrators see other clients?",
  //       answer:
  //         "No. Access is scoped within a tenant. Cross-tenant visibility is not available through standard roles and would require a separately governed arrangement.",
  //     },
  //     ...sharedSolutionsFaqs,
  //   ],
  // }),

  "regulatory-agencies": solution({
    id: "regulatory-agencies",
    name: "Regulatory Agencies",
    category: "By Organization",
    summary:
      "Public-health signal monitoring with reproducible statistics, evidence review and clear separation of analysis from regulatory action.",
    overview:
      "Agencies need to review large volumes of reports consistently, explain their methods and retain the evidence behind a decision. This solution supports scheduled disproportionality analysis, structured signal assessment and documented review, with role-based access and audit history. Analysis and regulatory action remain separate steps, each with its own accountable owner.",
    challenges: [
      "Large report volumes with limited specialist capacity.",
      "Statistical methods must be reproducible and explainable.",
      "Evidence and decisions are held in disconnected systems.",
      "Access to sensitive data must be tightly controlled and audited.",
    ],
    approach: [
      {
        title: "Reproducible surveillance",
        description:
          "Scheduled analyses with stored parameters, data versions and sequential-testing safeguards.",
      },
      {
        title: "Structured assessment",
        description:
          "Evidence dossiers and causality frameworks give reviewers a consistent way to evaluate candidates.",
      },
      {
        title: "Controlled access",
        description:
          "Role-based permissions, tenant isolation and audited administrative actions protect sensitive data.",
      },
      {
        title: "Decision separation",
        description:
          "Analysis, expert review and regulatory action are distinct, independently recorded steps.",
      },
    ],
    outcomes: [
      "Consistent, explainable statistical surveillance",
      "A traceable path from data to expert recommendation",
      "Strong access control and audit evidence",
      "Capacity focused on the highest-priority assessments",
    ],
    products: ["signal-detection", "signal-investigation", "compliance", "safety-analytics"],
    audiences: ["Regulatory reviewers", "Public-health surveillance teams", "Data governance"],
    faqs: [
      {
        question: "Can the platform run fully on-premises?",
        answer:
          "The architecture is container-native and supports controlled deployment topologies, including air-gapped environments where required.",
      },
      ...sharedSolutionsFaqs,
    ],
  }),
};

export const solutionCategories: { title: string; solutions: SolutionData[] }[] = [
  "By Use Case",
  "By Role",
  "By Organization",
].map((title) => ({
  title,
  solutions: Object.values(solutionsData).filter((item) => item.category === title),
}));

export function getSolutionById(id: string): SolutionData | undefined {
  return solutionsData[id];
}
