import OverviewIcon, { type OverviewIconName } from './OverviewIcon';
import './PlatformSection.scss';

const capabilities: { title: string; description: string; href: string; icon: OverviewIconName; color: string }[] = [
    { title: 'Case Processing', description: 'Extract safety data, code with MedDRA and resolve duplicates in connected case workflows.', href: '#case-processing', icon: 'cases', color: 'blue' },
    { title: 'Signal Intelligence', description: 'Combine quantitative analysis with qualitative evidence and expert-led signal review.', href: '#signal-analytics', icon: 'signal', color: 'purple' },
    { title: 'Literature Intelligence', description: 'Screen published literature with AI-assisted relevance assessment and human review.', href: '/products/#literature', icon: 'literature', color: 'mint' },
    { title: 'Social Media Intelligence', description: 'Listen for safety information, with sentiment scoring and misinformation flags.', href: '/products/#social', icon: 'social', color: 'blue' },
    { title: 'Regulatory Reporting', description: 'Prepare aggregate reports, CIOMS forms and risk-management plans with version history.', href: '#safety-reporting', icon: 'reporting', color: 'purple' },
    { title: 'Governed AI Assistance', description: 'Ask questions of your safety data and review answers with evidence citations.', href: '#agentic-ai', icon: 'ai', color: 'mint' },
];

export default function PlatformSection() {
    return (
        <section className="platform section" id="platform" aria-labelledby="platform-title">
            <div className="wrap platform-layout">
                <div className="platform-heading">
                    <div className="overview-heading">
                        <p className="eyebrow">OUR PLATFORM</p>
                        <h2 id="platform-title">One platform.<br />Complete safety intelligence.</h2>
                    </div>
                    <div className="platform-lead">
                        <p>Connect adverse-event intake, case processing, signal analysis and reporting in one multi-tenant pharmacovigilance platform.</p>
                        <p>Give your teams the evidence and workflows to make informed safety decisions.</p>
                        <a href="/products/" className="button button-primary">Explore the Platform <OverviewIcon name="arrow" /></a>
                    </div>
                </div>
                <div className="platform-capabilities">
                    {capabilities.map(capability => (
                        <a className={`capability-card capability-${capability.color}`} href={capability.href} key={capability.title}>
                            <span className="capability-icon"><OverviewIcon name={capability.icon} /></span>
                            <div className="capability-content">
                                <h3>{capability.title}</h3>
                                <p>{capability.description}</p>
                                <span className="capability-footer">Learn more <OverviewIcon name="arrow" /></span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
