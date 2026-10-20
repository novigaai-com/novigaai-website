import OverviewIcon, { type OverviewIconName } from './OverviewIcon';
import './RegulatedWorkSection.scss';

const foundations: { icon: OverviewIconName; title: string; description: string }[] = [
    {
        icon: 'shield', title: 'Compliance built into the workflow',
        description: 'Immutable audit trails, electronic signatures and validated workflows support work aligned with GVP Modules VI & IX, ICH E2A/E2B/E2C and 21 CFR Part 11.',
    },
    {
        icon: 'lock', title: 'Your data stays yours',
        description: 'Database row-level security isolates each tenant’s cases, signals and documents. Per-tenant vector collections, tenant-scoped analytics and least-privilege access keep that separation throughout the platform.',
    },
    {
        icon: 'review', title: 'AI recommendations, human decisions',
        description: 'Recommendations carry confidence, model and prompt versions. Human decisions and final outcomes are recorded separately, so reviewers can trace what was suggested and what was decided.',
    },
    {
        icon: 'accessibility', title: 'Accessible to your whole team',
        description: 'An accessibility-first interface supports keyboard and screen-reader use, with WCAG expectations guiding the experience.',
    },
];

export default function RegulatedWorkSection() {
    return (
        <section className="regulated-work section" id="regulated-work" aria-labelledby="regulated-title">
            <div className="wrap">
                <div className="overview-heading regulated-heading">
                    <p className="eyebrow">BUILT FOR REGULATED WORK</p>
                    <h2 id="regulated-title">Built for the standards<br />your work demands.</h2>
                    <p>Keep people, evidence and accountability at the centre of your safety operations.</p>
                </div>
                <ul className="regulated-standards" aria-label="Supported regulatory frameworks">
                    <li>GVP Modules VI & IX</li><li>ICH E2A / E2B / E2C</li><li>21 CFR Part 11</li>
                </ul>
                <div className="foundations-grid">
                    {foundations.map(foundation => (
                        <article className="foundation-card" key={foundation.title}>
                            <span className="foundation-icon"><OverviewIcon name={foundation.icon} /></span>
                            <div><h3>{foundation.title}</h3><p>{foundation.description}</p></div>
                        </article>
                    ))}
                </div>
                <details className="platform-foundations">
                    <summary><span><OverviewIcon name="cases" />Explore the platform foundations</span><OverviewIcon name="chevron" /></summary>
                    <div className="architecture-grid">
                        <div><h3>Independent safety domains</h3><p>Case processing, signal detection, literature, ingestion, reporting, portfolio, notification and AI retrieval services each own their data, with separate analytical stores per domain.</p></div>
                        <div><h3>Reliable event processing</h3><p>A NATS event backbone and idempotent consumers support reliable processing without counting the same event twice.</p></div>
                        <div><h3>Consistent tenant onboarding</h3><p>Versioned, migration-driven onboarding brings each datastore to the expected schema. Tenant isolation is verified continuously.</p></div>
                    </div>
                </details>
            </div>
        </section>
    );
}
