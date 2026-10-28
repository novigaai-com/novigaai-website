import OverviewIcon from './OverviewIcon';

const stages = [
    {
        id: 'safety-intake', number: '01', title: 'Intake', subtitle: 'Every source, one pipeline',
        description: 'Bring reports, literature and digital safety information into a single starting point.',
        tags: ['FAERS / JADER', 'E2B(R2/R3)'],
        points: [
            'Quarterly FDA FAERS and PMDA / JADER downloads are ingested, validated and deduplicated automatically.',
            'ICH E2B(R2/R3) individual case safety reports are parsed and checked.',
            'Literature and social-media safety information join the same workflow.',
            'Partner safety data exchange via E2B gateway with automated validation.',
        ],
    },
    {
        id: 'case-processing', number: '02', title: 'Process', subtitle: 'From report to review-ready case',
        description: 'Structure each case, connect follow-ups and give reviewers the context they need.',
        tags: ['MedDRA coding', 'Duplicate detection'],
        points: [
            'AI-assisted extraction for drugs, reactions, seriousness and causality, with dictionary-backed MedDRA coding.',
            'Duplicates detected through deterministic fingerprints and semantic similarity.',
            'Case narratives prepared, follow-ups linked and a complete audit trail retained.',
            'Human-in-the-loop review for all AI-suggested coding and case assessments.',
        ],
    },
    {
        id: 'signal-analytics', number: '03', title: 'Analyse', subtitle: 'Evidence into understanding',
        description: 'Combine statistical and qualitative evidence to assess and prioritise emerging signals.',
        tags: ['Signal triage', 'Expert review'],
        points: [
            'Scheduled and on-demand scans across PubMed, OpenAlex, ClinicalTrials.gov and FDA sources, with multi-stage AI relevance filtering.',
            'PRR, ROR, Information Component and EBGM analysis with sequential-testing safeguards.',
            'Cross-source concordance between FAERS, JADER, literature and social media, routed for human review per GVP IX.',
            'Day-zero literature timelines with 15-day expedited-reporting deadline tracking.',
        ],
    },
    {
        id: 'safety-reporting', number: '04', title: 'Report', subtitle: 'Prepare for regulatory review',
        description: 'Bring deadlines, reporting documents and review histories together in one workflow.',
        tags: ['PSUR / PBRER', 'CIOMS forms'],
        points: [
            'Prepare PSUR / PBRER aggregate reports and CIOMS forms with version history.',
            'Expedited-reporting deadlines tracked and reports scheduled with automated alerts.',
            'Risk-management plans (RMPs) managed with full report version history.',
            'Electronic signatures and 21 CFR Part 11 aligned audit trails for submissions.',
        ],
    },
];

export default function SafetyWorkflowSection() {
    return (
        <section className="safety-workflow section" id="safety-workflow" aria-labelledby="workflow-title">
            <div className="wrap">
                <div className="overview-heading overview-heading-centered">
                    <p className="eyebrow">THE SAFETY WORKFLOW</p>
                    <h2 id="workflow-title">Every step connected.<br />Every decision informed.</h2>
                    <p>From the first report to the next safety decision, follow a continuous thread of evidence and expert review.</p>
                </div>
                <ol className="workflow-grid">
                    {stages.map(stage => (
                        <li className="workflow-card" id={stage.id} key={stage.id}>
                            <span className="workflow-number" aria-hidden="true">{stage.number}</span>
                            <h3>{stage.title}</h3>
                            <p className="workflow-subtitle">{stage.subtitle}</p>
                            <p className="workflow-description">{stage.description}</p>
                            <ul className="workflow-tags" aria-label={`${stage.title} capabilities`}>{stage.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
                            <details className="workflow-details">
                                <summary>Explore {stage.title.toLowerCase()} <OverviewIcon name="chevron" /></summary>
                                <ul>{stage.points.map(point => <li key={point}>{point}</li>)}</ul>
                            </details>
                        </li>
                    ))}
                </ol>
                </div>
        </section>
    );
}