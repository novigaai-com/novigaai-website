import { Link, useParams } from "react-router-dom";
import SolutionDetail from "./SolutionDetail";
import { getSolutionById } from "../../data/solutions";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";

export default function SolutionDetailPage() {
  const { solutionId } = useParams<{ solutionId: string }>();
  const solution = getSolutionById(solutionId || "");

  if (!solution) {
    return (
      <>
        <PageMeta title="Solution not found" description="The requested NovigaAI solution could not be found." noIndex />
        <PageHero
          eyebrow="SOLUTION NOT FOUND"
          title="That solution page isn't available."
          description={<p>The requested solution could not be found. It may have moved, or the link may be out of date.</p>}
          actions={
            <Link className="button button-primary button-large" to="/solutions/">
              Browse all solutions <span aria-hidden="true">→</span>
            </Link>
          }
        />
      </>
    );
  }

  return <SolutionDetail solution={solution} />;
}
