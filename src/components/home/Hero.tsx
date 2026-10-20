export default function Hero() {
  return (
    <section className={"hero"}>
      <div className={"wrap hero-layout"}>
        <div className={"hero-text"}>
          <p className={"eyebrow"}>AI-NATIVE SAFETY INTELLIGENCE PLATFORM</p>
          <h1>
            Smarter Safety.
            <br />
            <span>Healthier Tomorrow.</span>
          </h1>
          <p className={"hero-desc"}>
            End-to-end pharmacovigilance, rebuilt around signals instead of paperwork.
            Bring adverse-event reports, literature and social channels into one
            platform for case processing, safety analysis and reporting.
          </p>
          <div className={"hero-cta"}>
            <a className={"button button-primary"} href={"/contact/#demo"}>
              Request a Demo
              <span>→</span>
            </a>
            <a className={"button button-outline"} href={"#safety-workflow"}>
              See How It Works <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className={"hero-features"}>
            <span>
              <b aria-hidden="true">⚙</b> Evidence-Led
              <br />
              AI Assistance
            </span>
            <span>
              <b aria-hidden="true">⬡</b>
              Multi-Tenant
              <br />& Secure
            </span>
            <span>
              <b aria-hidden="true">♢</b>
              Traceable
              <br />
              Reviews
            </span>
            <span>
              <b aria-hidden="true">◎</b> Human
              <br />
              Oversight
            </span>
          </div>
        </div>
        <div className={"dashboard-wrap dashboard-image-wrap"}>
          <img
            src={"/assets/dashboard2.png"}
            alt={
              "Illustrative NovigaAI safety intelligence dashboard with signal analytics and review workflows"
            }
            width={"1536"}
            height={"1024"}
            decoding={"async"}
            fetchPriority={"high"}
          />
        </div>
      </div>
    </section>
  );
}
