import { Link, useParams } from "react-router-dom";
import PlatformDetail from "./PlatformDetail";
import { getPlatformById } from "../../data/platform";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";

export default function PlatformDetailPage() {
  const { platformId } = useParams<{ platformId: string }>();
  const detail = getPlatformById(platformId || "");

  if (!detail) {
    return (
      <>
        <PageMeta title="Platform section not found" description="The requested NovigaAI platform section could not be found." noIndex />
        <PageHero
          eyebrow="PAGE NOT FOUND"
          title="That platform page isn't available."
          description={<p>The requested platform section could not be found. It may have moved, or the link may be out of date.</p>}
          actions={
            <Link className="button button-primary button-large" to="/platform/">
              Platform overview <span aria-hidden="true">→</span>
            </Link>
          }
        />
      </>
    );
  }

  return <PlatformDetail detail={detail} />;
}
