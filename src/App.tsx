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
import './components/home/HomeOverview.scss';
import { Products, Solutions, Services, Resources, About, NotFound } from './pages/Pages';
import Contact from './pages/Contact';
function Home() {
  return <><Hero /><TrustStrip /><PlatformSection /><SafetyWorkflowSection /><AgenticAISection /><RegulatedWorkSection /><AudienceSection /><TestimonialsSection /><FinalCTASection /></>;
}
function ScrollManager() { const { pathname, hash } = useLocation(); useEffect(() => { if (hash) { const id = decodeURIComponent(hash.slice(1)); requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView()); } else window.scrollTo(0, 0) }, [pathname, hash]); return null }
export default function App() { return <BrowserRouter><ScrollManager /><Header /><main><Routes><Route path="/" element={<Home />} /><Route path="/products" element={<Products />} /><Route path="/solutions" element={<Solutions />} /><Route path="/services" element={<Services />} /><Route path="/resources" element={<Resources />} /><Route path="/about-us" element={<About />} /><Route path="/contact" element={<Contact />} /><Route path="*" element={<NotFound />} /></Routes></main><Footer /></BrowserRouter> }
