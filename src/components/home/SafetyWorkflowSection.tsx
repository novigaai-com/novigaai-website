import OverviewIcon from './OverviewIcon';

const stages = [
    {
        id: 'safety-intake', number: '01', title: 'Intake', subtitle: 'Every source, one pipeline',
        description: 'Bring reports, literature and digital safety information into a single starting point.',
        tags: ['FAERS / JADER', 'E2B(R2/R3)'],
        points: [
            'Automatically download and ingest quarterly FDA FAERS and PMDA / JADER data.',
            'Parse and validate ICH E2B(R2/R3) individual case safety reports.',
            'Bring literature screening and social-media safety information into the same workflow.',
        ],
    },
    {
        id: 'case-processing', number: '02', title: 'Process', subtitle: 'From report to review-ready case',
        description: 'Structure each case, connect follow-ups and give reviewers the context they need.',
        tags: ['MedDRA coding', 'Duplicate detection'],
        points: [
            'Use AI-assisted extraction for drugs, reactions, seriousness and causality, with dictionary-backed MedDRA coding.',
            'Detect duplicates through deterministic fingerprints and semantic similarity.',
            'Prepare case narratives, link follow-ups and retain a complete audit trail.',
        ],
    },
    {
        id: 'signal-analytics', number: '03', title: 'Analyse', subtitle: 'Evidence into understanding',
        description: 'Combine statistical and qualitative evidence to assess and prioritise emerging signals.',
        tags: ['Signal triage', 'Expert review'],
        points: [
            'Apply PRR, ROR, Information Component and EBGM analysis with sequential-testing safeguards.',
            'Review qualitative, literature, digital-media and regulatory signals alongside statistical evidence.',
            'Triage severity, route cases for human review and manage the signal lifecycle.',
        ],
    },
    {
        id: 'safety-reporting', number: '04', title: 'Report', subtitle: 'Prepare for regulatory review',
        description: 'Bring deadlines, reporting documents and review histories together in one workflow.',
        tags: ['PSUR / PBRER', 'CIOMS forms'],
        points: [
            'Prepare PSUR / PBRER aggregate reports and CIOMS forms.',
            'Track expedited-reporting deadlines and schedule reports.',
            'Manage risk-management plans and retain full report version history.',
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
