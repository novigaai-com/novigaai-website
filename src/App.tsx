import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import TrustStrip from './components/home/TrustStrip';
import PlatformSection from './components/home/PlatformSection';
import SafetyWorkflowSection from './components/home/SafetyWorkflowSection';
import AgenticAISection from './components/home/AgenticAISection';
import RegulatedWorkSection from './components/home/RegulatedWorkSection';
import AudienceSection from './components/home/AudienceSection';
import TestimonialsSection from './components/home/TestimonialsSection';
import FinalCTASection from './components/home/FinalCTASection';
import {
  Products,
  ProductDetailPageRoute,
  Solutions,
  SolutionDetailPageRoute,
  Services,
  Resources,
  ResourceDetailPageRoute,
  About,
  AboutLeadership,
  AboutCareers,
  Platform,
  PlatformDetailPageRoute,
  PrivacyPage,
  TermsPage,
  NotFound,
} from './pages/Pages';
import Contact from './pages/Contact';

function Home() {
  return <><Hero /><TrustStrip /><PlatformSection /><SafetyWorkflowSection /><AgenticAISection /><RegulatedWorkSection /><AudienceSection /><TestimonialsSection /><FinalCTASection /></>;
}

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const root = document.documentElement;

    // Programmatic navigation should land instantly rather than inherit the
    // global smooth-scroll behaviour intended for in-page anchors.
    function jumpTo(top: number) {
      const previous = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      window.scrollTo(0, Math.max(0, top));
      requestAnimationFrame(() => {
        root.style.scrollBehavior = previous;
      });
    }

    if (!hash) {
      jumpTo(0);
      return;
    }

    const id = decodeURIComponent(hash.slice(1));
    let cancelled = false;

    // Wait for the route to paint, then re-align after fonts and images have
    // settled so the target is not left hidden under the fixed header.
    function align() {
      if (cancelled) return;
      const target = document.getElementById(id);
      if (!target) return;
      const header = document.querySelector<HTMLElement>(".site-header");
      const offset = (header?.offsetHeight ?? 0) + 24;
      jumpTo(target.getBoundingClientRect().top + window.scrollY - offset);
    }

    const frame = requestAnimationFrame(align);
    const timer = window.setTimeout(align, 200);

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      clearTimeout(timer);
    };
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <a className="skip-link" href="#main">Skip to main content</a>
      <ScrollManager />
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetailPageRoute />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/:solutionId" element={<SolutionDetailPageRoute />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:resourceId" element={<ResourceDetailPageRoute />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/about-us/leadership" element={<AboutLeadership />} />
          <Route path="/about-us/careers" element={<AboutCareers />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/platform/:platformId" element={<PlatformDetailPageRoute />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}