import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://www.novigaai.com";
const DEFAULT_IMAGE = `${SITE_URL}/assets/home_bg.png`;

interface PageMetaProps {
  title: string;
  description: string;
  type?: "website" | "article";
  image?: string;
  noIndex?: boolean;
}

function setMeta(attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

export default function PageMeta({ title, description, type = "website", image = DEFAULT_IMAGE, noIndex = false }: PageMetaProps) {
  const { pathname } = useLocation();
  const fullTitle = title.includes("NovigaAI") ? title : `${title} | NovigaAI`;
  const canonical = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;

  useEffect(() => {
    document.title = fullTitle;
    setMeta("name", "description", description);
    setMeta("name", "robots", noIndex ? "noindex, nofollow" : "index, follow");
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", type);
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:image", image);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);
    setLink("canonical", canonical);
  }, [canonical, description, fullTitle, image, noIndex, type]);

  return null;
}
