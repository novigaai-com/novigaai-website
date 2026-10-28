export interface ProductCapability {
  title: string;
  description: string;
  details?: string[];
}

export interface ProductWorkflowStep {
  step: number;
  title: string;
  description: string;
}

export interface ProductAIFeature {
  title: string;
  description: string;
  humanReview: string;
  evidence: string;
}

export interface ProductData {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  heroImage?: string;
  capabilities: ProductCapability[];
  workflowSteps: ProductWorkflowStep[];
  aiFeatures: ProductAIFeature[];
  inputs: string[];
  outputs: string[];
  integrations: string[];
  standards: string[];
  targetUsers: string[];
  relatedProducts: string[];
  faqs: { question: string; answer: string }[];
}

const sharedFaqs = [
  {
    question: "How does NovigaAI keep humans in control?",
    answer:
      "Every AI recommendation is presented as a suggestion with confidence and citations. Case coding, signal validation, report finalisation and submission require explicit reviewer approval, with electronic signatures and a full audit trail.",
  },
  {
    question: "Can this module be used independently?",
    answer:
      "Yes. Each product is a domain service with its own APIs and workflows. Modules share tenant, terminology and audit services, so they can be adopted independently and connected later without re-implementation.",
  },
];

function product(input: Partial<ProductData> & Pick<ProductData, "id" | "name" | "category" | "shortDescription" | "fullDescription">): ProductData {
  return {
    heroImage: "/assets/dashboard2.png",
    capabilities: [],
    workflowSteps: [],
    aiFeatures: [],
    inputs: ["E2B(R2/R3) case data", "Tenant safety database", "MedDRA and WHO Drug dictionaries"],
    outputs: ["Auditable safety records", "Reviewer-ready evidence", "Regulatory submission artefacts"],
    integrations: ["NovigaAI Case Management", "NovigaAI Safety Analytics", "MedDRA terminology service"],
    standards: ["GVP Module VI", "GVP Module IX", "ICH E2A / E2B(R3) / E2C(R2)", "21 CFR Part 11"],
    targetUsers: ["Pharmacovigilance teams", "Medical reviewers", "Regulatory affairs"],
    relatedProducts: [],
    faqs: sharedFaqs,
    ...input,
  };
}

export const productsData: Record<string, ProductData> = {
  "signal-detection": product({
    id: "signal-detection",
    name: "Signal Detection",
    category: "Safety Intelligence",
    shortDescription:
      "Quantitative signal detection using PRR, ROR, Information Component and EBGM, with sequential-testing safeguards and multi-dimensional prioritisation.",
    fullDescription:
      "NovigaAI Signal Detection continuously evaluates the drug–reaction pairs in your safety data. Each pair is measured with complementary disproportionality methods, stratified where the data allow, and compared across regulatory and literature sources. A transparent priority score combines statistical strength, clinical seriousness, novelty and concordance so reviewers see the signals that matter first — not the longest list. Every computation, threshold and configuration change is stored with the signal so conclusions can be reproduced during inspection.",
    capabilities: [
      { title: "Four complementary metrics", description: "PRR, ROR, Information Component and EBGM with confidence intervals, computed from the tenant's own 2×2 contingency tables.", details: ["Stratification by age, sex, geography and time", "Automatic zero-cell correction", "Minimum case thresholds per configuration"] },
      { title: "Sequential-testing safeguards", description: "Alpha-spending boundaries prevent false positives when the same data are reviewed repeatedly.", details: ["Lan–DeMets alpha spending", "O'Brien–Fleming and Pocock boundaries", "Documented stopping rules"] },
      { title: "Two-algorithm agreement", description: "Align with ICH E2C(R2) practice by requiring agreement between statistical methods before a signal is promoted.", details: ["Configurable agreement rules", "Method-level audit snapshots", "Explicit no-result handling — never a fabricated zero"] },
      { title: "Multi-dimensional prioritisation", description: "A single priority score combining statistical strength, seriousness, novelty and cross-source concordance.", details: ["Tenant-specific weights", "Percentile normalisation", "P1–P4 routing into reviewer queues"] },
    ],
    workflowSteps: [
      { step: 1, title: "Ingest and validate", description: "Scheduled FAERS and JADER downloads are ingested, validated and deduplicated against existing cases." },
      { step: 2, title: "Build drug–reaction pairs", description: "Cases are coded to MedDRA and WHO Drug, then expanded across the PT, HLT and SOC hierarchy." },
      { step: 3, title: "Compute statistics", description: "PRR, ROR, IC and EBGM run for every pair that meets the configured minimum case count." },
      { step: 4, title: "Triage and review", description: "Priority scoring routes signals to reviewers, who record a validate, monitor or refute decision." },
    ],
    aiFeatures: [
      { title: "Signal Triage Agent", description: "Summarises the statistical and clinical context for a candidate signal and proposes an initial priority.", humanReview: "A safety scientist validates or overrides the priority before review begins.", evidence: "Every summary cites the underlying case counts, metric values and literature." },
    ],
    inputs: ["FAERS quarterly data", "JADER quarterly data", "Tenant ICSRs", "MedDRA and WHO Drug dictionaries"],
    outputs: ["Prioritised signal list", "Reproducible statistical analyses", "Signal review records", "Regulatory signal packages"],
    integrations: ["FAERS and JADER pipelines", "Signal Investigation", "Safety Analytics", "Evidence Graph"],
    targetUsers: ["Signal management scientists", "PV physicians", "Risk management leads"],
    relatedProducts: ["signal-investigation", "safety-analytics", "evidence-graph"],
    faqs: [
      { question: "Which disproportionality methods are supported?", answer: "PRR, ROR, Information Component and EBGM, with frequentist and Bayesian confidence intervals. Thresholds and agreement rules are configurable per tenant." },
      { question: "What happens when there is not enough data?", answer: "The platform records that no statistic was computed and why. It never presents a fabricated zero or an unqualified result." },
      sharedFaqs[0],
    ],
  }),

  "signal-investigation": product({
    id: "signal-investigation",
    name: "Signal Investigation",
    category: "Safety Intelligence",
    shortDescription:
      "A structured workspace for assessing validated signals with Bradford Hill causality, evidence dossiers, cluster analysis and regulatory action tracking.",
    fullDescription:
      "Signal Investigation turns a statistical association into a documented safety decision. Reviewers work from a single evidence dossier containing the statistical output, relevant literature, clinical and post-marketing data, and mechanism-based context from the evidence graph. Bradford Hill criteria are assessed criterion by criterion, with rationale and uncertainty recorded. Actions, owners and regulatory commitments are tracked through closure, giving inspection teams a complete narrative from detection to decision.",
    capabilities: [
      { title: "Single evidence dossier", description: "Statistical, literature, clinical, real-world and mechanistic evidence in one versioned record." },
      { title: "Bradford Hill workflow", description: "Guided assessment across all nine criteria with evidence grading, rationale and an explicit causality conclusion." },
      { title: "Cluster analysis", description: "Group related signals by drug class, mechanism, reaction SOC, geography or patient population." },
      { title: "Action and commitment tracking", description: "Record label updates, RMP changes, DHPCs and correspondence, with owners and due dates." },
    ],
    workflowSteps: [
      { step: 1, title: "Open investigation", description: "A validated signal is promoted from detection or created from literature, with an assigned lead reviewer." },
      { step: 2, title: "Assemble evidence", description: "Literature search, clinical data and graph traversal populate the dossier with source references." },
      { step: 3, title: "Assess causality", description: "The reviewer completes the Bradford Hill assessment and records confidence and unresolved uncertainty." },
      { step: 4, title: "Recommend and track", description: "Actions are agreed, assigned and tracked through regulatory implementation and closure." },
    ],
    aiFeatures: [
      { title: "Evidence Synthesis Agent", description: "Drafts structured evidence summaries from literature and clinical sources.", humanReview: "The reviewer edits or rejects each AI-drafted section before it enters the dossier.", evidence: "Each sentence links to source documents with relevance and extraction confidence." },
      { title: "Cluster Detection Agent", description: "Suggests related signals by shared mechanism, class or reaction using graph paths.", humanReview: "An expert confirms whether a suggested cluster is clinically meaningful.", evidence: "Graph paths, shared targets and literature support are shown for each cluster." },
    ],
    outputs: ["Signal investigation report", "Bradford Hill assessment", "Regulatory action recommendation", "Evidence dossier"],
    integrations: ["Signal Detection", "Literature Intelligence", "Evidence Graph", "Regulatory Reporting"],
    targetUsers: ["Signal investigators", "PV physicians", "Risk management leads"],
    relatedProducts: ["signal-detection", "evidence-graph", "regulatory-reporting"],
    faqs: [
      { question: "How is this different from Signal Detection?", answer: "Detection identifies statistical associations. Investigation is the expert-led evaluation of an association, including causality, evidence synthesis and regulatory action planning." },
      ...sharedFaqs,
    ],
  }),

  "risk-intelligence": product({
    id: "risk-intelligence",
    name: "Risk Intelligence",
    category: "Safety Intelligence",
    shortDescription:
      "Benefit–risk context and risk-minimisation planning that keeps the safety profile of every product under continuous, documented review.",
    fullDescription:
      "Risk Intelligence connects the safety questions raised in signal management with the risk-management commitments that follow. Teams maintain an up-to-date product safety profile, map risks to minimisation measures, monitor effectiveness and prepare the evidence needed for periodic benefit–risk evaluation. The module shares cases, signals, labels and literature with the rest of the platform, so the record reflects the current evidence rather than a snapshot taken months earlier.",
    capabilities: [
      { title: "Living product safety profile", description: "Important identified and potential risks, missing information and their supporting evidence in one maintained view." },
      { title: "Risk-minimisation planning", description: "Map risks to routine and additional measures, owners and effectiveness indicators." },
      { title: "Benefit–risk evidence", description: "Bring benefit, risk and uncertainty together for periodic review and regulatory discussion." },
      { title: "Effectiveness monitoring", description: "Track whether minimisation measures are working and record decisions when plans change." },
    ],
    workflowSteps: [
      { step: 1, title: "Define the safety profile", description: "Consolidate risks from labels, signals, literature and aggregate reports." },
      { step: 2, title: "Plan minimisation", description: "Agree measures, target populations and measurable effectiveness indicators." },
      { step: 3, title: "Monitor and review", description: "Review signal and analytics trends against the current risk profile." },
      { step: 4, title: "Update commitments", description: "Record changes, update RMP sections and track implementation." },
    ],
    aiFeatures: [
      { title: "Risk Summary Agent", description: "Drafts a current risk summary from approved sources for reviewer validation.", humanReview: "Risk management owners approve all changes to the safety profile.", evidence: "Every risk statement cites its label, signal or literature source." },
    ],
    targetUsers: ["Risk management teams", "PV physicians", "Regulatory affairs"],
    relatedProducts: ["signal-investigation", "regulatory-reporting", "safety-analytics"],
    faqs: [
      { question: "Does this replace our RMP document system?", answer: "No. Risk Intelligence maintains the structured evidence and commitments that feed your controlled RMP documents and workflows." },
      ...sharedFaqs,
    ],
  }),

  "evidence-research": product({
    id: "evidence-research",
    name: "Evidence & Research",
    category: "Safety Intelligence",
    shortDescription:
      "Evidence synthesis across scientific literature, trial registries and real-world sources, with provenance preserved for every conclusion.",
    fullDescription:
      "Evidence & Research helps safety teams answer the questions that sit between a signal and a decision: what has been published, what is being studied, what does the mechanism suggest and where is the evidence thin? Search results are screened, classified and linked to the product, reaction or mechanism under review. Reviewers can see the source, the extraction and the confidence behind every statement, and export an evidence summary that stands up to regulatory scrutiny.",
    capabilities: [
      { title: "Federated evidence search", description: "Search literature, trial registries and internal documents from a single query." },
      { title: "Screening and classification", description: "Classify results by relevance, study type, population and safety outcome." },
      { title: "Evidence synthesis", description: "Build structured summaries with citations, certainty notes and outstanding questions." },
      { title: "Provenance by default", description: "Retain source identifiers, retrieval dates and extraction records for every statement." },
    ],
    workflowSteps: [
      { step: 1, title: "Frame the question", description: "Define the product, population, outcome and decision the evidence must support." },
      { step: 2, title: "Retrieve and screen", description: "Search connected sources and screen results against explicit inclusion criteria." },
      { step: 3, title: "Extract and synthesise", description: "Structured extraction feeds a reviewable evidence summary." },
      { step: 4, title: "Link and retain", description: "Attach the synthesis to the relevant signal, risk or report with full provenance." },
    ],
    aiFeatures: [
      { title: "Evidence Retrieval Agent", description: "Runs multi-source queries and proposes relevant passages with citations.", humanReview: "An evidence specialist confirms inclusion and extraction.", evidence: "Source title, identifier, date and quoted passage accompany every suggestion." },
    ],
    targetUsers: ["Medical writing teams", "Signal scientists", "Regulatory affairs"],
    relatedProducts: ["literature-intelligence", "evidence-graph", "signal-investigation"],
    faqs: [
      { question: "Which literature sources are available?", answer: "PubMed, OpenAlex, Europe PMC and ClinicalTrials.gov are supported out of the box, with licensed sources and custom feeds available through integration." },
      ...sharedFaqs,
    ],
  }),

  "case-management": product({
    id: "case-management",
    name: "Case Management",
    category: "Case Operations",
    shortDescription:
      "End-to-end ICSR processing with AI-assisted extraction, MedDRA coding, duplicate detection, narrative generation and 21 CFR Part 11 audit trails.",
    fullDescription:
      "Case Management handles the complete individual case safety report lifecycle. Cases arrive from E2B files, partners, literature or manual entry and move through validation, coding, medical review, quality control and submission. AI prepares the case — extracting entities, proposing codes and drafting narratives — while reviewers make every consequential decision. Duplicate detection combines deterministic fingerprints with semantic similarity, and every change is captured in an immutable audit trail.",
    capabilities: [
      { title: "AI-assisted extraction", description: "Extract drugs, reactions, seriousness, causality and demographics with confidence scores.", details: ["Named-entity extraction for drugs and events", "MedDRA LLT/PT coding suggestions", "WHO Drug mapping", "Seriousness criteria detection"] },
      { title: "Three-tier deduplication", description: "Deterministic fingerprints, fuzzy matching and semantic similarity work together to find duplicates and follow-ups.", details: ["Case-number and reporter matching", "Patient + drug + event fingerprints", "Embedding similarity", "Reviewer merge, link or reject"] },
      { title: "Narrative generation", description: "Draft CIOMS-style narratives from structured data for medical-writer review.", details: ["Timeline reconstruction", "Dechallenge and rechallenge formatting", "Editable, versioned output"] },
      { title: "Follow-up management", description: "Link follow-ups to the parent case and surface exactly what changed.", details: ["Automated follow-up detection", "Information delta highlighting", "Cumulative case view"] },
    ],
    workflowSteps: [
      { step: 1, title: "Intake and validation", description: "Receive E2B or manual entry, validate against the ICSR four criteria and assign a case number." },
      { step: 2, title: "Extraction and coding", description: "AI proposes entities and codes; the reviewer validates them before they become part of the case." },
      { step: 3, title: "Duplicate check", description: "Run deterministic and semantic matching and present ranked candidates for a reviewer decision." },
      { step: 4, title: "Review and submit", description: "Complete medical review, finalise the narrative, sign electronically and submit through the gateway." },
    ],
    aiFeatures: [
      { title: "Case Extraction Agent", description: "Extracts structured fields from unstructured narratives and proposes MedDRA and WHO Drug codes.", humanReview: "Every extraction is validated by a case reviewer before finalisation.", evidence: "Confidence scores and source-text highlights are shown against each suggestion." },
      { title: "Duplicate Detection Agent", description: "Ranks possible duplicate and follow-up cases with the fields that matched.", humanReview: "A reviewer confirms or rejects each match.", evidence: "Match type, matching fields and similarity scores are recorded." },
    ],
    inputs: ["E2B(R2/R3) files", "Manual case entry", "Partner safety data", "Literature case candidates"],
    outputs: ["Completed ICSRs", "E2B(R3) submissions", "CIOMS forms", "Aggregate report contributions"],
    integrations: ["E2B gateway", "MedDRA", "WHO Drug", "Document management", "Regulatory gateways"],
    targetUsers: ["Case processors", "Medical reviewers", "PV associates"],
    relatedProducts: ["case-intake", "literature-intelligence", "regulatory-reporting"],
    faqs: [
      { question: "Which E2B versions are supported?", answer: "Both E2B(R2) and E2B(R3) import and export are supported, with round-trip fidelity for supported fields." },
      { question: "How accurate is the extraction?", answer: "Accuracy varies by field. Extraction is presented as a suggestion with confidence, and no field is finalised without reviewer validation." },
      ...sharedFaqs,
    ],
  }),

  "case-intake": product({
    id: "case-intake",
    name: "Case Intake & Triage",
    category: "Case Operations",
    shortDescription:
      "Multi-source intake with E2B(R2/R3) parsing, validation and priority triage that puts P1 cases at the front of the queue.",
    fullDescription:
      "Case Intake & Triage is the controlled front door for safety information. It accepts E2B files, partner exchanges, email, literature candidates and manual reports, validates each against ICH requirements and identifies missing information before the case enters processing. Triage assigns priority using seriousness, expectedness, product and geography, and orders queues so the most urgent cases are always reviewed first — including in the database query, not just the interface.",
    capabilities: [
      { title: "Multi-source intake", description: "One queue for E2B, partner, literature, email and manual reports with source-specific validation." },
      { title: "ICH validation", description: "Check the four ICSR criteria and mandatory E2B fields before a case becomes reviewable." },
      { title: "Priority triage", description: "Rank P1–P4 using seriousness, expectedness, regulatory deadline and portfolio context." },
      { title: "Queue integrity", description: "Priority-ordered queues are applied before pagination so urgent work cannot be hidden on page two." },
    ],
    workflowSteps: [
      { step: 1, title: "Receive", description: "Capture the source, raw document and reporter details in a traceable intake record." },
      { step: 2, title: "Validate", description: "Run schema, business-rule and four-criteria validation, flagging gaps for follow-up." },
      { step: 3, title: "Triage", description: "Assign priority and route to the right reviewer queue based on tenant rules." },
      { step: 4, title: "Hand over", description: "Send the validated case into Case Management with full intake provenance." },
    ],
    aiFeatures: [
      { title: "Intake Classification Agent", description: "Classifies inbound documents and proposes a case type and priority.", humanReview: "An intake reviewer confirms classification and priority.", evidence: "The source document and matched fields are retained for audit." },
    ],
    outputs: ["Validated intake records", "Priority-ordered queues", "Missing-information queries", "Traceable case hand-off"],
    integrations: ["E2B gateway", "Partner intake", "Literature Intelligence", "Case Management"],
    relatedProducts: ["case-management", "partner-intake", "literature-intelligence"],
    faqs: [
      { question: "Can we keep our existing case number format?", answer: "Yes. Case-number patterns, queue rules and priority thresholds are configurable per tenant." },
      ...sharedFaqs,
    ],
  }),

  "literature-intelligence": product({
    id: "literature-intelligence",
    name: "Literature Intelligence",
    category: "Case Operations",
    shortDescription:
      "Automated literature screening across PubMed, OpenAlex and trial registries with AI relevance assessment, ICSR eligibility checks and reviewable decisions.",
    fullDescription:
      "Literature Intelligence turns a high-volume screening obligation into a controlled workflow. Scheduled searches retrieve new publications, which are screened in stages: a fast relevance filter, a deeper assessment and a regulatory-potential score. ICSR four-criteria checks determine whether an article contains a reportable case, and day-zero timelines track the 15-day expedited reporting clock. Every exclusion is recorded with a reason, so the team can demonstrate that screening was systematic, complete and reviewed.",
    capabilities: [
      { title: "Scheduled literature surveillance", description: "Search PubMed, OpenAlex, Europe PMC and trial registries on your schedule." },
      { title: "Multi-stage screening", description: "Fast filtering, deep relevance assessment and regulatory-potential scoring reduce noise without hiding decisions." },
      { title: "ICSR eligibility", description: "Check identifiable patient, suspect product, adverse event and source before creating a literature case." },
      { title: "SLA and deadline tracking", description: "Monitor screening timeliness and 15-day reporting windows from day zero." },
    ],
    workflowSteps: [
      { step: 1, title: "Configure searches", description: "Define products, synonyms, reactions and sources for each tenant search profile." },
      { step: 2, title: "Retrieve and deduplicate", description: "New results are retrieved, deduplicated and queued for screening." },
      { step: 3, title: "Screen with AI support", description: "Reviewers confirm relevance and ICSR eligibility, recording reasons for exclusion." },
      { step: 4, title: "Create or close", description: "Eligible articles become case candidates; the rest are closed with an auditable rationale." },
    ],
    aiFeatures: [
      { title: "Literature Screening Agent", description: "Scores relevance, extracts the study and safety details, and proposes an ICSR eligibility decision.", humanReview: "A literature reviewer confirms every inclusion and exclusion.", evidence: "The abstract, matched terms and screening rationale are stored with the decision." },
    ],
    inputs: ["Product and reaction search profiles", "PubMed / OpenAlex / clinical trial feeds", "Tenant product labels"],
    outputs: ["Screening decisions and reasons", "ICSR case candidates", "SLA dashboards", "Screening audit records"],
    integrations: ["PubMed", "OpenAlex", "Europe PMC", "ClinicalTrials.gov", "Case Management"],
    targetUsers: ["Literature screening teams", "PV operations", "Medical reviewers"],
    relatedProducts: ["evidence-research", "case-intake", "case-management"],
    faqs: [
      { question: "Does the system replace the reviewer?", answer: "No. AI scores and extracts; a qualified reviewer makes the inclusion and ICSR eligibility decision, and the rationale is recorded." },
      { question: "How are screening deadlines monitored?", answer: "Each result carries a day-zero timestamp and a deadline based on the configured screening SLA and expedited reporting requirements." },
      sharedFaqs[0],
    ],
  }),

  "partner-intake": product({
    id: "partner-intake",
    name: "Partner Intake",
    category: "Case Operations",
    shortDescription:
      "A controlled gateway for safety data exchange with partners, distributors and licensees, with validation, acknowledgement and deduplication.",
    fullDescription:
      "Partner Intake manages the operational and contractual side of safety data exchange. Each partner has its own access, agreed data scope and reporting obligations. Inbound files are validated, acknowledged and routed; outbound exchanges are tracked against agreed timelines. Duplicate and follow-up detection runs before a partner case reaches the safety database, and the full exchange history is retained so PV agreements can be evidenced during audit.",
    capabilities: [
      { title: "Partner-specific access", description: "Scope each partner to its products, regions and data-exchange agreement." },
      { title: "Validation and acknowledgement", description: "Validate inbound E2B files and return structured acknowledgements with errors." },
      { title: "Exchange tracking", description: "Track inbound and outbound obligations, timelines and overdue items." },
      { title: "Deduplication at the boundary", description: "Detect duplicates and follow-ups before partner data enters the core case queue." },
    ],
    workflowSteps: [
      { step: 1, title: "Configure the agreement", description: "Record data scope, formats, contacts and reporting timelines for each partner." },
      { step: 2, title: "Exchange", description: "Partners submit through the portal, SFTP or E2B gateway; outbound files are scheduled and tracked." },
      { step: 3, title: "Validate", description: "Files are checked, acknowledged and quarantined when validation fails." },
      { step: 4, title: "Route and reconcile", description: "Accepted cases enter intake; exchange history and obligations remain auditable." },
    ],
    aiFeatures: [
      { title: "Partner Data Agent", description: "Classifies inbound documents and identifies likely duplicate or follow-up exchanges.", humanReview: "A PV operations reviewer resolves unmatched or ambiguous submissions.", evidence: "The original file, acknowledgement and matching fields are retained." },
    ],
    integrations: ["E2B gateway", "SFTP / S3", "Partner portal", "Case Intake & Triage"],
    relatedProducts: ["case-intake", "case-management", "compliance"],
    faqs: [
      { question: "Can partners submit outside E2B?", answer: "Yes. The partner portal accepts structured forms and documents, with extraction and validation before a case is created." },
      ...sharedFaqs,
    ],
  }),

  "regulatory-reporting": product({
    id: "regulatory-reporting",
    name: "Regulatory Reporting",
    category: "Case Operations",
    shortDescription:
      "PSUR/PBRER, CIOMS, RMP and expedited reporting with version control, deadline tracking and electronic signatures.",
    fullDescription:
      "Regulatory Reporting brings report authoring, review and submission into the same evidence environment as case processing and signal management. Aggregate report sections draw on live case and signal data; expedited deadlines are tracked from day zero; and every version, reviewer and signature is recorded. Teams can see what is due, what is blocked and what changed, instead of reconciling spreadsheets and document folders.",
    capabilities: [
      { title: "Aggregate report authoring", description: "Assemble PSUR/PBRER sections from current case, signal and literature data with version history." },
      { title: "Expedited deadline tracking", description: "Track 15-day and 7-day obligations, submissions and acknowledgements." },
      { title: "CIOMS and RMP support", description: "Generate CIOMS forms and maintain structured RMP content linked to evidence." },
      { title: "Electronic signatures", description: "Capture review, approval and submission signatures with 21 CFR Part 11 aligned records." },
    ],
    workflowSteps: [
      { step: 1, title: "Plan", description: "Create the reporting calendar and assign owners, reviewers and approval paths." },
      { step: 2, title: "Assemble", description: "Pull current data into report sections, with citations to cases and signals." },
      { step: 3, title: "Review and approve", description: "Route for medical, quality and regulatory review with tracked changes and signatures." },
      { step: 4, title: "Submit and archive", description: "Transmit through the agreed channel and retain the submission evidence." },
    ],
    aiFeatures: [
      { title: "Report Drafting Agent", description: "Drafts narrative sections from approved case and signal data.", humanReview: "Medical writers and reviewers edit and approve every section.", evidence: "Draft claims link to the underlying cases, signals and literature." },
    ],
    outputs: ["PSUR / PBRER", "CIOMS forms", "RMP content", "Expedited submissions and acknowledgements"],
    integrations: ["Case Management", "Signal Detection", "Risk Intelligence", "Document management"],
    targetUsers: ["Regulatory reporting teams", "Medical writers", "QA and regulatory affairs"],
    relatedProducts: ["case-management", "risk-intelligence", "compliance"],
    faqs: [
      { question: "Can we use our existing templates?", answer: "Yes. Report structures and templates are configurable, and approved documents can be exported to your document-management system." },
      ...sharedFaqs,
    ],
  }),

  "safety-analytics": product({
    id: "safety-analytics",
    name: "Safety Analytics",
    category: "Analytics & AI",
    shortDescription:
      "Portfolio dashboards, safety trends, KPI monitoring and executive briefings built on tenant-scoped analytical data.",
    fullDescription:
      "Safety Analytics gives operations and leadership a shared, current view of safety performance. Dashboards cover case volumes, processing timeliness, signal counts, priority mix and literature screening SLAs, with drill-down to the underlying records. Analytical queries are tenant-scoped and run on a dedicated analytical store, so reporting never competes with transactional case processing. AI briefings summarise what changed and why, with links back to the evidence.",
    capabilities: [
      { title: "Operational dashboards", description: "Case volumes, backlog, timeliness, signal counts and SLA performance in one view." },
      { title: "Portfolio safety view", description: "Compare products, regions and periods with tenant-scoped analytical queries." },
      { title: "Trend and cluster detection", description: "Spot emerging patterns in reporting and signal activity before they become urgent." },
      { title: "Executive briefings", description: "AI-drafted summaries with citations, reviewed before distribution." },
    ],
    workflowSteps: [
      { step: 1, title: "Connect data", description: "Case, signal, literature and reporting events flow into the analytical store." },
      { step: 2, title: "Define measures", description: "Agree KPIs, thresholds and the decisions they inform." },
      { step: 3, title: "Monitor", description: "Dashboards and alerts surface changes in volume, timeliness and risk." },
      { step: 4, title: "Brief and act", description: "Review AI-drafted briefings and assign follow-up actions." },
    ],
    aiFeatures: [
      { title: "Safety Briefing Agent", description: "Summarises the period's safety activity and notable changes, grounded in tenant data.", humanReview: "A safety lead reviews and approves each briefing before distribution.", evidence: "Every statement links to the underlying measures and records." },
    ],
    outputs: ["Operational dashboards", "Portfolio heatmaps", "Executive briefings", "KPI and SLA reports"],
    integrations: ["All NovigaAI modules", "ClickHouse analytical store", "Notification service"],
    relatedProducts: ["signal-detection", "risk-intelligence", "ai-agents"],
    faqs: [
      { question: "Can dashboards be customised?", answer: "Yes. Measures, thresholds, layouts and distribution lists are configurable, and data can be exported through the API." },
      ...sharedFaqs,
    ],
  }),

  "ai-agents": product({
    id: "ai-agents",
    name: "AI Agents & Automation",
    category: "Analytics & AI",
    shortDescription:
      "Orchestrated agents for literature screening, case preparation, signal triage and compliance support — with evidence and human approval built in.",
    fullDescription:
      "NovigaAI agents are specialised workers, not autonomous decision-makers. A Literature Agent screens; a Case Agent prepares; a Signal Agent triages; a Compliance Agent checks deadlines and documentation. They share context through the platform and hand work to people at defined approval gates. Every AI interaction records the model, prompt version, parameters and confidence, and every recommendation cites its sources. The result is a measurable reduction in preparation time without moving accountability away from the reviewer.",
    capabilities: [
      { title: "Specialised agents", description: "Purpose-built agents for literature, case, signal and compliance workflows." },
      { title: "Retrieval-grounded answers", description: "Answers come from tenant data and approved references, with citations." },
      { title: "Human approval gates", description: "Configure which actions require review, who may approve and what evidence they must see." },
      { title: "Model and prompt versioning", description: "Reproduce any AI output with the exact model, prompt and parameters used." },
    ],
    workflowSteps: [
      { step: 1, title: "Choose a workflow", description: "Select the agent workflow and the tenant data it may use." },
      { step: 2, title: "Prepare", description: "Agents retrieve, extract and draft within the configured scope." },
      { step: 3, title: "Review", description: "People validate outputs at defined gates and record their decision." },
      { step: 4, title: "Learn", description: "Outcomes feed evaluation and calibration, with changes tracked per tenant." },
    ],
    aiFeatures: [
      { title: "Multi-agent orchestration", description: "Agents coordinate across literature, cases and signals with a shared audit trail.", humanReview: "Critical actions always route to an authorised reviewer.", evidence: "Every step records its inputs, sources, model version and confidence." },
    ],
    standards: ["GVP Module VI", "GVP Module IX", "ICH E2A / E2B(R3) / E2C(R2)", "21 CFR Part 11", "ISO/IEC 42001 aligned AI governance"],
    relatedProducts: ["literature-intelligence", "case-management", "signal-detection"],
    faqs: [
      { question: "Do agents make regulatory decisions?", answer: "No. Agents prepare and recommend. Regulatory and medical decisions remain with authorised people, who record their rationale." },
      { question: "Can we use our own model provider?", answer: "The AI gateway supports approved external providers and self-hosted models. Tenant data handling is governed by the deployment configuration." },
      sharedFaqs[0],
    ],
  }),

  "evidence-graph": product({
    id: "evidence-graph",
    name: "Evidence Graph",
    category: "Analytics & AI",
    shortDescription:
      "A connected knowledge graph across drugs, targets, pathways, diseases and phenotypes that supports mechanism-based safety hypotheses.",
    fullDescription:
      "Evidence Graph connects the entities that give a safety question its context. Starting from a drug or reaction, reviewers can traverse to targets, pathways, genes, diseases and phenotypes, and see the evidence supporting each relationship. Graph paths are not presented as conclusions; they are hypotheses that a scientist can explore, with provenance and confidence attached. The graph also enriches signal investigations and supports class-level safety review.",
    capabilities: [
      { title: "Connected safety knowledge", description: "Drugs, targets, genes, pathways, diseases and phenotypes in a traversable graph." },
      { title: "Provenance on every edge", description: "Each relationship records its source, evidence type and confidence." },
      { title: "Mechanism hypotheses", description: "Explore plausible mechanisms behind an observed association." },
      { title: "Class and portfolio views", description: "Compare related products by target, mechanism or therapeutic class." },
    ],
    workflowSteps: [
      { step: 1, title: "Start from an entity", description: "Open a drug, reaction, target or signal as the starting point." },
      { step: 2, title: "Traverse", description: "Follow relationships across the graph with filters for evidence type and confidence." },
      { step: 3, title: "Inspect provenance", description: "Review the source and strength behind each relationship." },
      { step: 4, title: "Attach to the record", description: "Save a path or hypothesis to a signal investigation or evidence dossier." },
    ],
    aiFeatures: [
      { title: "Hypothesis Agent", description: "Suggests graph paths that may explain an association and summarises supporting evidence.", humanReview: "A scientist decides whether a hypothesis is worth pursuing.", evidence: "Every suggested path shows its nodes, edges, sources and confidence." },
    ],
    integrations: ["Signal Investigation", "Evidence & Research", "Safety Analytics", "Public and licensed knowledge sources"],
    relatedProducts: ["signal-investigation", "evidence-research", "safety-analytics"],
    faqs: [
      { question: "Is graph output considered evidence?", answer: "No. Graph paths generate hypotheses. Reviewers must evaluate the underlying sources and record their own conclusion." },
      ...sharedFaqs,
    ],
  }),

  "social-media-intelligence": product({
    id: "social-media-intelligence",
    name: "Social Media Intelligence",
    category: "Analytics & AI",
    shortDescription:
      "Digital safety listening across public channels with PII scrubbing, adverse-event extraction and signal aggregation.",
    fullDescription:
      "Social Media Intelligence monitors consented public sources for mentions of your products and relevant adverse events. Posts are screened, personally identifiable information is removed, and potential safety information is extracted and aggregated. The module distinguishes signal-like patterns from individual reports and routes credible findings to literature or case review. Coverage, exclusions and limitations are documented so the programme can be governed responsibly.",
    capabilities: [
      { title: "Channel monitoring", description: "Configured monitoring across approved public channels and communities." },
      { title: "PII protection", description: "Remove or mask personal data before storage and review." },
      { title: "Adverse-event extraction", description: "Identify product mentions, reactions, seriousness signals and sentiment." },
      { title: "Aggregation and triage", description: "Group related mentions and route credible safety information for review." },
    ],
    workflowSteps: [
      { step: 1, title: "Define scope", description: "Agree products, channels, languages and the ethical and legal boundaries." },
      { step: 2, title: "Collect and scrub", description: "Retrieve public posts and remove personal information." },
      { step: 3, title: "Extract and aggregate", description: "Identify potential adverse events and group related mentions." },
      { step: 4, title: "Review and route", description: "A reviewer assesses credibility and sends valid information into the case workflow." },
    ],
    aiFeatures: [
      { title: "Digital Safety Agent", description: "Extracts product, reaction and seriousness information from public posts.", humanReview: "A trained reviewer validates potential cases before any action.", evidence: "The original post, extraction confidence and scrubbing record are retained." },
    ],
    inputs: ["Approved public channels", "Product and synonym lists", "Monitoring rules and exclusions"],
    outputs: ["Aggregated safety trends", "Potential adverse-event reports", "Sentiment and misinformation insights"],
    integrations: ["Case Intake & Triage", "Signal Detection", "Safety Analytics"],
    relatedProducts: ["case-intake", "signal-detection", "safety-analytics"],
    faqs: [
      { question: "Is social listening a replacement for spontaneous reporting?", answer: "No. It is a complementary source with explicit limitations. Findings are reviewed before they enter the case workflow." },
      ...sharedFaqs,
    ],
  }),

  integrations: product({
    id: "integrations",
    name: "Integrations & Data Sources",
    category: "Enterprise Platform",
    shortDescription:
      "Pre-built connectors for regulatory databases, literature, clinical trials, terminology, identity and enterprise systems.",
    fullDescription:
      "Integrations & Data Sources is the connectivity layer of the platform. Regulatory feeds are scheduled and monitored; literature and trial registries are searched through stable adapters; terminology services keep coding current; and identity, monitoring and document systems connect through standard protocols. Each connector reports its health, last successful run and data volume, so operations teams know when a feed needs attention before a gap becomes a compliance issue.",
    capabilities: [
      { title: "Regulatory data feeds", description: "FAERS, JADER, EudraVigilance, Health Canada and other approved sources." },
      { title: "Literature and trials", description: "PubMed, OpenAlex, Europe PMC, ClinicalTrials.gov and licensed providers." },
      { title: "Terminology services", description: "MedDRA, WHO Drug, RxNorm, ChEMBL, UniProt and internal dictionaries." },
      { title: "Enterprise connectivity", description: "E2B gateways, SFTP/S3, REST/GraphQL, HL7 FHIR and identity providers." },
    ],
    workflowSteps: [
      { step: 1, title: "Select connectors", description: "Choose the sources and systems required for your operating model." },
      { step: 2, title: "Configure and test", description: "Set credentials, schedules, mappings and validation rules in a test environment." },
      { step: 3, title: "Monitor", description: "Track connector health, data volumes, validation failures and retries." },
      { step: 4, title: "Operate", description: "Alerts and runbooks keep feeds current and auditable." },
    ],
    aiFeatures: [
      { title: "Data Quality Agent", description: "Flags unusual volumes, validation patterns and likely mapping errors.", humanReview: "An operations engineer investigates and resolves each alert.", evidence: "Connector logs, counts and validation records are retained." },
    ],
    targetUsers: ["PV operations", "Data engineering", "IT and security"],
    relatedProducts: ["compliance", "administration", "case-intake"],
    faqs: [
      { question: "Can we connect a custom source?", answer: "Yes. Custom sources can be integrated through the API, SFTP/S3 or a purpose-built adapter, with validation and monitoring configured for that feed." },
      ...sharedFaqs,
    ],
  }),

  compliance: product({
    id: "compliance",
    name: "Compliance & Auditability",
    category: "Enterprise Platform",
    shortDescription:
      "Immutable audit trails, electronic signatures, validation evidence and configurable controls aligned with GVP, ICH and 21 CFR Part 11.",
    fullDescription:
      "Compliance & Auditability provides the evidence that regulated work was done correctly. Every material action — AI recommendation, human decision, data change, signature, submission — is recorded with who, what, when and why. Controls are configurable rather than hard-coded, so workflows can map to your SOPs while still producing inspection-ready records. The module also maintains validation documentation, change history and access reviews for the platform itself.",
    capabilities: [
      { title: "Immutable audit trails", description: "Append-only records of actions, decisions and changes with actor, time and rationale." },
      { title: "Electronic signatures", description: "21 CFR Part 11 aligned signature events linked to the signed record and its version." },
      { title: "Configurable controls", description: "Approval gates, segregation of duties, mandatory fields and escalation paths." },
      { title: "Validation evidence", description: "Requirements traceability, test evidence and change records in one place." },
    ],
    workflowSteps: [
      { step: 1, title: "Map obligations", description: "Translate GVP, ICH and local requirements into configurable controls." },
      { step: 2, title: "Operate controls", description: "Approval gates and permissions enforce the agreed process at runtime." },
      { step: 3, title: "Record evidence", description: "Audit events, signatures and review histories are captured automatically." },
      { step: 4, title: "Review and inspect", description: "Export inspection packs and review access and change history." },
    ],
    aiFeatures: [
      { title: "Compliance Review Agent", description: "Checks whether required steps, fields and approvals are present before submission.", humanReview: "A quality reviewer resolves exceptions and approves the record.", evidence: "The check lists each requirement, result and linked record." },
    ],
    standards: ["GVP Modules VI & IX", "ICH E2A / E2B(R3) / E2C(R2)", "21 CFR Part 11", "CIOMS I / VI / VIII", "ISO 27001 aligned controls"],
    relatedProducts: ["administration", "regulatory-reporting", "ai-agents"],
    faqs: [
      { question: "Is NovigaAI validated?", answer: "The platform provides validation documentation, requirements traceability and test evidence to support your computer-system validation. Final validation responsibility remains with the regulated organisation." },
      ...sharedFaqs,
    ],
  }),

  administration: product({
    id: "administration",
    name: "Administration & Configuration",
    category: "Enterprise Platform",
    shortDescription:
      "Multi-tenant administration with row-level isolation, role-based access, configurable workflows and tenant-scoped analytics.",
    fullDescription:
      "Administration & Configuration gives platform owners control without compromising isolation. Tenants are provisioned through a repeatable, migration-driven process; users receive roles scoped to their responsibilities; and workflows, dictionaries, thresholds and report templates are configured per tenant. Administrative actions are themselves audited. The module is designed for organisations that operate multiple brands, regions or clients on one platform.",
    capabilities: [
      { title: "Tenant provisioning", description: "Repeatable onboarding that brings every datastore to the expected schema." },
      { title: "Roles and permissions", description: "Least-privilege roles with segregation of duties and approval authority." },
      { title: "Workflow configuration", description: "Tenant-specific queues, thresholds, templates and escalation rules." },
      { title: "Isolation assurance", description: "Continuous verification of database, analytics, vector and artifact isolation." },
    ],
    workflowSteps: [
      { step: 1, title: "Provision", description: "Create the tenant and project it consistently across all services." },
      { step: 2, title: "Configure", description: "Set roles, dictionaries, workflows and reporting preferences." },
      { step: 3, title: "Onboard", description: "Import portfolio and reference data, then train administrators and users." },
      { step: 4, title: "Operate and review", description: "Monitor access, configuration changes and isolation checks." },
    ],
    aiFeatures: [
      { title: "Configuration Assistant", description: "Explains configuration options and flags conflicting settings before activation.", humanReview: "An administrator approves every configuration change.", evidence: "Proposed changes, rationale and affected records are recorded." },
    ],
    targetUsers: ["Platform administrators", "IT and security", "PV operations leads"],
    relatedProducts: ["compliance", "integrations", "safety-analytics"],
    faqs: [
      { question: "How is tenant isolation enforced?", answer: "Isolation is structural: PostgreSQL row-level security, tenant-scoped analytical queries, per-tenant vector collections and tenant-prefixed artifact storage." },
      ...sharedFaqs,
    ],
  }),
};

export interface ProductCategory {
  title: string;
  products: ProductData[];
}

export const productCategories: ProductCategory[] = [
  "Safety Intelligence",
  "Case Operations",
  "Analytics & AI",
  "Enterprise Platform",
].map((title) => ({
  title,
  products: Object.values(productsData).filter((product) => product.category === title),
}));

export function getProductById(id: string): ProductData | undefined {
  return productsData[id];
}

export function getAllProducts(): ProductData[] {
  return Object.values(productsData);
}
