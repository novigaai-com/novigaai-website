import ProductsIndex from "./products/ProductsIndex";
import ProductDetailPage from "./products/ProductDetailPage";
import SolutionsIndex from "./solutions/SolutionsIndex";
import SolutionDetailPage from "./solutions/SolutionDetailPage";
import ServicesIndex from "./services/ServicesIndex";
import ResourcesIndex from "./resources/ResourcesIndex";
import ResourceDetailPage from "./resources/ResourceDetailPage";
import AboutIndex from "./about/AboutIndex";
import Leadership from "./about/Leadership";
import Careers from "./about/Careers";
import Privacy from "./legal/Privacy";
import Terms from "./legal/Terms";
import NotFoundPage from "./NotFound";
import PlatformIndex from "./platform/PlatformIndex";
import PlatformDetailPage from "./platform/PlatformDetailPage";

export function Products() {
  return <ProductsIndex />;
}

export function ProductDetailPageRoute() {
  return <ProductDetailPage />;
}

export function Solutions() {
  return <SolutionsIndex />;
}

export function SolutionDetailPageRoute() {
  return <SolutionDetailPage />;
}

export function Services() {
  return <ServicesIndex />;
}

export function Resources() {
  return <ResourcesIndex />;
}

export function ResourceDetailPageRoute() {
  return <ResourceDetailPage />;
}

export function About() {
  return <AboutIndex />;
}

export function AboutLeadership() {
  return <Leadership />;
}

export function AboutCareers() {
  return <Careers />;
}

export function PrivacyPage() {
  return <Privacy />;
}

export function TermsPage() {
  return <Terms />;
}

export function Platform() {
  return <PlatformIndex />;
}

export function PlatformDetailPageRoute() {
  return <PlatformDetailPage />;
}

export function NotFound() {
  return <NotFoundPage />;
}
