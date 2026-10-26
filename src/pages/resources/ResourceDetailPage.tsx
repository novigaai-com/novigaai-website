import { Link, useParams } from "react-router-dom";
import ResourceDetail from "./ResourceDetail";
import { getResourceById } from "../../data/resources";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";

export default function ResourceDetailPage() {
  const { resourceId } = useParams<{ resourceId: string }>();
  const resource = getResourceById(resourceId || "");

  if (!resource) {
    return (
      <>
        <PageMeta title="Resource not found" description="The requested NovigaAI resource could not be found." noIndex />
        <PageHero
          eyebrow="RESOURCE NOT FOUND"
          title="That resource isn't available."
          description={<p>The requested resource could not be found. It may have moved, or the link may be out of date.</p>}
          actions={
            <Link className="button button-primary button-large" to="/resources/">
              Browse all resources <span aria-hidden="true">→</span>
            </Link>
          }
        />
      </>
    );
  }

  return <ResourceDetail resource={resource} />;
}
