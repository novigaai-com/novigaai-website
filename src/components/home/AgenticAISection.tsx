import './AgenticAISection.scss';

const agents = [
    { id: 'literature', name: 'Literature Agent', task: 'Screen & Review', position: 'top' },
    { id: 'social', name: 'Social Media Agent', task: 'Monitor & Analyze', position: 'left' },
    { id: 'signal', name: 'Signal Agent', task: 'Triage & Assess', position: 'right' },
    { id: 'case', name: 'Case Agent', task: 'Extract & Prepare', position: 'bottom-left' },
    { id: 'compliance', name: 'Compliance Agent', task: 'Review & Document', position: 'bottom-right' },
] as const;

type AgentKind = typeof agents[number]['id'];

function AgentIcon({ kind }: { kind: AgentKind }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {kind === 'literature' && <><path d="M12 5v15M4 4.5c3-1 5.5-.5 8 1.5 2.5-2 5-2.5 8-1.5v14c-3-1-5.5-.5-8 1.5-2.5-2-5-2.5-8-1.5z" /><path d="m7 8 2 1m-2 3 2 1m6-4 2-1m-2 5 2-1" /></>}
            {kind === 'social' && <><rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="12" cy="9" r="2.5" /><path d="M7.5 17v-1a4.5 4.5 0 0 1 9 0v1M7 11H5m14 0h-2" /></>}
            {kind === 'signal' && <><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 7h6M9 17h6M8 12h2l1-3 2 6 1-3h2" /></>}
            {kind === 'case' && <><rect x="6" y="5" width="13" height="16" rx="2" /><path d="M15 5V3H3v15h3m4-9h5m-5 4h5m-5 4h3" /></>}
            {kind === 'compliance' && <><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M8 8h8M8 12h3m-3 4h3m2-2 1.5 1.5L18 12" /></>}
        </svg>
    );
}

export default function AgenticAISection() {
    return (
        <section className="ai-section" id="agentic-ai" aria-labelledby="agentic-ai-title">
            <div className="wrap ai-layout">
                <div className="ai-intro">
                    <p className="eyebrow">EVIDENCE-LED. HUMAN-REVIEWED.</p>
                    <h2 id="agentic-ai-title">The Power of Agentic AI</h2>
                    <p>Noviga's retrieval-grounded assistant answers from your own cases, signals, literature and RSI labels, with evidence citations. AI supports your reviewers; people retain control of critical decisions.</p>
                    <ul>
                        <li>Answers grounded in your safety data</li>
                        <li>Evidence citations and confidence</li>
                        <li>Model and prompt version history</li>
                        <li>Human review of critical decisions</li>
                    </ul>
                    <a className="button button-primary" href="/solutions/">See How It Works <span aria-hidden="true">→</span></a>
                </div>

                <div className="agent-map" role="group" aria-label="Five connected AI agents">
                    <svg className="agent-connections" viewBox="0 0 560 320" preserveAspectRatio="none" fill="none" aria-hidden="true">
                        <g stroke="#5262e7" strokeOpacity=".38" strokeWidth="1" strokeDasharray="3 5">
                            <path d="M280 160V44M280 160 92 126M280 160l188-34M280 160 158 268M280 160l122 108" />
                            <ellipse cx="280" cy="160" rx="152" ry="113" strokeOpacity=".12" />
                        </g>
                        <g fill="#7893ff" fillOpacity=".6">
                            <circle cx="280" cy="91" r="2" /><circle cx="186" cy="143" r="2" />
                            <circle cx="374" cy="143" r="2" /><circle cx="219" cy="214" r="2" />
                            <circle cx="341" cy="214" r="2" />
                        </g>
                    </svg>
                    <svg className="agent-connections agent-connections-mobile" viewBox="0 0 560 350" preserveAspectRatio="none" fill="none" aria-hidden="true">
                        <path d="M280 175V21M280 175 134 105M280 175l146-70M280 175 140 298M280 175l140 123" stroke="#5262e7" strokeOpacity=".38" strokeWidth="1" strokeDasharray="3 5" />
                    </svg>
                    <div className="agent-core" role="img" aria-label="Noviga AI orchestration">
                        <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
                            <defs>
                                <linearGradient id="ai-brand-color" x1="8" y1="10" x2="57" y2="55" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#43c8fb" /><stop offset=".48" stopColor="#668bff" /><stop offset="1" stopColor="#b293ff" />
                                </linearGradient>
                            </defs>
                            <path d="M14 45V34M14 19l34 30V19" stroke="url(#ai-brand-color)" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="m14 19 8 7m18 16 8 7" stroke="url(#ai-brand-color)" strokeWidth="13" strokeLinecap="round" />
                        </svg>
                    </div>
                    {agents.map(agent => (
                        <div className={`agent-pill agent-${agent.position}`} key={agent.id}>
                            <span className={`agent-icon agent-icon-${agent.id}`}><AgentIcon kind={agent.id} /></span>
                            <span className="agent-label"><strong>{agent.name}</strong><small>{agent.task}</small></span>
                        </div>
                    ))}
                </div>

                <aside className="impact-card" aria-labelledby="ai-impact-title">
                    <h3 id="ai-impact-title">Real Impact</h3>
                    <dl>
                        <div><dt>Answers cite source material.</dt><dd>Evidence</dd></div>
                        <div><dt>People validate critical decisions.</dt><dd>Oversight</dd></div>
                        <div><dt>Confidence and AI versions recorded.</dt><dd>Traceability</dd></div>
                    </dl>
                </aside>
            </div>
        </section>
    );
}
