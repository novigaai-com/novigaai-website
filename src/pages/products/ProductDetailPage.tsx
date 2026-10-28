import { Link, useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import { getProductById } from "./productData";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";

export default function ProductDetailPage() {
  const { productId } = useParams<{ productId: string }>();
  const product = getProductById(productId || "");

  if (!product) {
    return (
      <>
        <PageMeta
          title="Product not found"
          description="The requested NovigaAI product could not be found."
          noIndex
        />
        <PageHero
          eyebrow="PRODUCT NOT FOUND"
          title="That product page isn't available."
          description={<p>The requested product could not be found. It may have moved, or the link may be out of date.</p>}
          actions={
            <Link className="button button-primary button-large" to="/products/">
              Browse all products <span aria-hidden="true">→</span>
            </Link>
          }
        />
      </>
    );
  }

  return <ProductDetail product={product} />;
}
