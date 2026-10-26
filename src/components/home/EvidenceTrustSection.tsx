import OverviewIcon, { type OverviewIconName } from './OverviewIcon';
import { Link } from "react-router-dom";

const evidencePillars = [
    {
        icon: 'review' as OverviewIconName,
        title: 'Evidence Traceability',
        description: 'Every AI-generated insight, signal assessment, and case coding decision links back to source documents — FAERS reports, literature abstracts, clinical trial data, or regulatory labels. Reviewers can trace any conclusion to its origin.',
        details: ['Source document citations with confidence scores', 'Version history for all AI prompts and model outputs', 'Human decision records separate from AI recommendations', 'Immutable audit trails per GVP Module IX'],
    },
    {
        icon: 'shield' as OverviewIconName,
        title: 'Human Oversight Governance',
        description: 'Critical safety decisions never automate. Case coding, signal validation, ICSR submission, and report finalization require explicit human approval with electronic signatures and timestamped rationale.',
        details: ['Configurable approval workflows per tenant', 'Electronic signatures (21 CFR Part 11 aligned)', 'Role-based decision authority matrices', 'Escalation paths for high-priority signals'],
    },
    {
        icon: 'lock' as OverviewIconName,
        title: 'Data Isolation & Security',
        description: 'Multi-tenant architecture with row-level security, per-tenant vector collections, and encrypted data at rest and in transit. Tenant data never mixes — not in databases, not in analytics, not in AI embeddings.',
        details: ['PostgreSQL row-level security per tenant', 'ClickHouse tenant-scoped analytical queries', 'Qdrant per-tenant vector collections', 'S3/MinIO isolated artifact storage'],
    },
    {
        icon: 'accessibility' as OverviewIconName,
        title: 'Regulatory Alignment',
        description: 'Platform workflows map to GVP Module VI (case processing), GVP Module IX (signal management), ICH E2A/E2B/E2C (safety reporting), and 21 CFR Part 11 (electronic records). Configuration-driven, not hard-coded.',
        details: ['ICSR 4-criteria validation (GVP VI Addendum I)', '15-day expedited deadline tracking with day-zero logic', 'PSUR/PBRER authoring with version control', 'Literature screening SLA compliance dashboards'],
    },
];

export default function EvidenceTrustSection() {
    return (
        <section className="evidence-trust section" id="evidence-trust" aria-labelledby="evidence-trust-title">
            <div className="wrap">
                <div className="overview-heading overview-heading-centered">
                    <p className="eyebrow">EVIDENCE & TRUST</p>
                    <h2 id="evidence-trust-title">Where evidence meets accountability.</h2>
                    <p>NovigaAI is built on the principle that safety intelligence must be traceable, governable, and secure — not just intelligent.</p>
                </div>
                <div className="evidence-grid">
                    {evidencePillars.map((pillar, idx) => (
                        <article className="evidence-card" key={pillar.title}>
                            <span className="evidence-icon"><OverviewIcon name={pillar.icon} /></span>
                            <h3>{pillar.title}</h3>
                            <p>{pillar.description}</p>
                            <details className="evidence-details">
                                <summary>View details <OverviewIcon name="chevron" /></summary>
                                <ul>
                                    {pillar.details.map((detail, dIdx) => (
                                        <li key={dIdx}>{detail}</li>
                                    ))}
                                </ul>
                            </details>
                        </article>
                    ))}
                </div>
                <div className="evidence-cta">
                    <Link to="/platform/security" className="button button-primary">Explore Security & Governance <OverviewIcon name="arrow" /></Link>
                    <Link to="/platform/architecture" className="button button-outline">View Platform Architecture <OverviewIcon name="arrow" /></Link>
                </div>
            </div>
        </section>
    );
}