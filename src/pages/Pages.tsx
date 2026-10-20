import { Link } from "react-router-dom";
const products = [
  {
    id: "pharmacovigilance",
    name: "Pharmacovigilance",
    description:
      "Support case processing, signal detection, and safety review with connected workflows.",
  },
  {
    id: "literature",
    name: "Literature Intelligence",
    description:
      "Find, screen, and assess relevant scientific literature with human-reviewed AI assistance.",
  },
  {
    id: "social",
    name: "Social Media Intelligence",
    description:
      "Monitor digital channels for relevant safety information and emerging patterns.",
  },
  {
    id: "clinical",
    name: "Clinical Trials",
    description:
      "Organize clinical safety information and streamline study-related oversight.",
  },
  {
    id: "compliance",
    name: "Compliance",
    description:
      "Coordinate regulatory workflows, reporting tasks, and audit-ready documentation.",
  },
  {
    id: "connected",
    name: "Connected Intelligence",
    description:
      "Bring information and teams together through connected safety workflows.",
  },
];
function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="inner-page-hero">
      <div className="wrap">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
function Card({
  title,
  description,
  to,
}: {
  title: string;
  description: string;
  to: string;
}) {
  return (
    <Link className="inner-page-card" to={to}>
      <h2>{title}</h2>
      <p>{description}</p>
      <span>Explore →</span>
    </Link>
  );
}
export function Products() {
  return (
    <>
      <PageHero
        eyebrow="OUR PLATFORM"
        title="Explore NovigaAI Products"
        description="Connected intelligence for drug safety, clinical research, and regulatory workflows."
      />
      <section className="inner-page-content">
        <div className="wrap inner-page-grid">
          {products.map((p) => (
            <article className="inner-page-card" id={p.id} key={p.id}>
              <h2>{p.name}</h2>
              <p>{p.description}</p>
              <Link to="/contact/#demo">Request a demo →</Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
export function Solutions() {
  return (
    <>
      <PageHero
        eyebrow="SOLUTIONS"
        title="AI-assisted safety workflows"
        description="Connect data, AI assistance, and expert review across your safety operations."
      />
      <section className="inner-page-content">
        <div className="wrap inner-page-grid">
          <Card
            title="AI Agents"
            description="Coordinate literature monitoring, case preparation, signal review, and compliance tasks with human oversight."
            to="/contact/#demo"
          />
          <Card
            title="Safety Operations"
            description="Bring teams and safety data into connected review workflows."
            to="/products/"
          />
        </div>
      </section>
    </>
  );
}
export function Services() {
  return (
    <>
      <PageHero
        eyebrow="SERVICES"
        title="Services for your safety teams"
        description="Explore how NovigaAI can support your safety workflow requirements."
      />
      <section className="inner-page-content">
        <div className="wrap">
          <Card
            title="Discuss your requirements"
            description="Talk with the NovigaAI team about your use case and implementation needs."
            to="/contact/#demo"
          />
        </div>
      </section>
    </>
  );
}
export function Resources() {
  return (
    <>
      <PageHero
        eyebrow="RESOURCES"
        title="NovigaAI Resources"
        description="Explore our platform and learn how connected safety workflows can support your team."
      />
      <section className="inner-page-content">
        <div className="wrap inner-page-grid">
          <Card
            title="Platform Overview"
            description="Learn about NovigaAI's connected safety intelligence capabilities."
            to="/products/"
          />
          <Card
            title="Agentic AI"
            description="See how AI agents can assist expert-led workflows."
            to="/solutions/"
          />
        </div>
      </section>
    </>
  );
}
export function About() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT NOVIGAAI"
        title="Smarter Safety. Healthier Tomorrow."
        description="NovigaAI focuses on bringing safety information, intelligent assistance, and people together in one platform."
      />
      <section className="inner-page-content">
        <div className="wrap">
          <h2>Our focus</h2>
          <p>
            We aim to simplify complex pharmacovigilance and related safety
            workflows through connected information and AI-assisted processes,
            with human review at critical steps.
          </p>
          <Link className="button button-primary" to="/contact/">
            Get in touch →
          </Link>
        </div>
      </section>
    </>
  );
}
export function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404"
        title="Page not found"
        description="The page you're looking for isn't available."
      />
      <section className="inner-page-content">
        <div className="wrap">
          <Link className="button button-primary" to="/">
            Back to home →
          </Link>
        </div>
      </section>
    </>
  );
}
