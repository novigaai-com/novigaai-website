const sources = ['FDA FAERS', 'PMDA / JADER', 'ICH E2B(R2/R3)', 'Published literature', 'Social channels'];

export default function TrustStrip() {
    return (
        <section className="trust-strip source-strip" aria-labelledby="source-strip-title">
            <div className="wrap">
                <h2 className="eyebrow" id="source-strip-title">EVERY MAJOR SAFETY SOURCE. ONE CONNECTED PIPELINE.</h2>
                <ul className="source-list">
                    {sources.map(source => <li key={source}><span aria-hidden="true">✓</span>{source}</li>)}
                </ul>
            </div>
        </section>
    );
}
