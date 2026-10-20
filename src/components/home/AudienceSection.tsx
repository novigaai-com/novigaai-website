import OverviewIcon, { type OverviewIconName } from './OverviewIcon';
import './AudienceSection.scss';

const audiences: { title: string; description: string; link: string; icon: OverviewIconName; tags: string[] }[] = [
    { title: 'Pharma & biotech safety teams', description: 'Replace manual case triage and spreadsheet signal tracking with connected case management and expert-led safety review.', link: 'Discuss your safety workflows', icon: 'building', tags: ['Case management', 'Signal review'] },
    { title: 'Pharmacovigilance service providers', description: 'Manage multiple clients on one platform, with isolated tenant data and auditable workflows for each engagement.', link: 'Explore multi-client operations', icon: 'teams', tags: ['Client isolation', 'Auditable workflows'] },
    { title: 'Regulatory & quality functions', description: 'Bring together inspection-ready audit trails, aggregate reporting and documented review histories.', link: 'Talk about reporting needs', icon: 'shield', tags: ['Audit trails', 'Aggregate reporting'] },
];

export default function AudienceSection() {
    return (
        <section className="audience-section section" id="who-its-for" aria-labelledby="audience-title">
            <div className="wrap">
                <div className="audience-heading">
                    <div className="overview-heading">
                        <p className="eyebrow">WHO IT’S FOR</p>
                        <h2 id="audience-title">For the teams behind<br />every safety decision.</h2>
                    </div>
                    <p>One platform for the people who process cases, assess signals and prepare for regulatory review.</p>
                </div>
                <div className="audience-grid">
                    {audiences.map(audience => (
                        <article className="audience-card" key={audience.title}>
                            <span className="audience-icon"><OverviewIcon name={audience.icon} /></span>
                            <h3>{audience.title}</h3>
                            <p>{audience.description}</p>
                            <ul className="audience-tags">{audience.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
                            <a href="/contact/#demo">{audience.link} <OverviewIcon name="arrow" /></a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
