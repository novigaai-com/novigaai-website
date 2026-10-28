import OverviewIcon, { type OverviewIconName } from './OverviewIcon';
import { Link } from "react-router-dom";
import './PlatformSection.scss';

const capabilities: { title: string; description: string; href: string; icon: OverviewIconName; color: string }[] = [
    { title: 'Case Processing', description: 'Extract safety data, code with MedDRA and resolve duplicates in connected case workflows.', href: '/products/case-management', icon: 'cases', color: 'blue' },
    { title: 'Signal Intelligence', description: 'Combine quantitative analysis with qualitative evidence and expert-led signal review.', href: '/products/signal-detection', icon: 'signal', color: 'purple' },
    { title: 'Literature Intelligence', description: 'Screen published literature with AI-assisted relevance assessment and human review.', href: '/products/literature-intelligence', icon: 'literature', color: 'mint' },
    { title: 'Social Media Intelligence', description: 'Listen for safety information, with sentiment scoring and misinformation flags.', href: '/products/social-media-intelligence', icon: 'social', color: 'blue' },
    { title: 'Regulatory Reporting', description: 'Prepare aggregate reports, CIOMS forms and risk-management plans with version history.', href: '/products/regulatory-reporting', icon: 'reporting', color: 'purple' },
    { title: 'Governed AI Assistance', description: 'Ask questions of your safety data and review answers with evidence citations.', href: '/products/ai-agents', icon: 'ai', color: 'mint' },
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
                        <Link to="/products/" className="button button-primary">Explore the Platform <OverviewIcon name="arrow" /></Link>
                    </div>
                </div>
                <div className="platform-capabilities">
                    {capabilities.map(capability => (
                        <Link className={`capability-card capability-${capability.color}`} to={capability.href} key={capability.title}>
                            <span className="capability-icon"><OverviewIcon name={capability.icon} /></span>
                            <div className="capability-content">
                                <h3>{capability.title}</h3>
                                <p>{capability.description}</p>
                                <span className="capability-footer">Learn more <OverviewIcon name="arrow" /></span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}