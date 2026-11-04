import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const features = [
  { glyph: "⚙", label: "Evidence-Led", sub: "AI Assistance" },
  { glyph: "⬡", label: "Multi-Tenant", sub: "& Secure" },
  { glyph: "♢", label: "Traceable", sub: "Reviews" },
  { glyph: "◎", label: "Human", sub: "Oversight" },
];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let active = true;
    void video.play().catch(() => {
      if (active) setIsPlaying(false);
    });
    return () => {
      active = false;
    };
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play().catch(() => setIsPlaying(false));
    } else {
      video.pause();
    }
  };

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap hero-layout">
        <div className="hero-text">
          <p className="eyebrow">AI-NATIVE SAFETY INTELLIGENCE PLATFORM</p>
          <h1 id="hero-title">
            Smarter Safety.
            <br />
            <span>Healthier Tomorrow.</span>
          </h1>
          <p className="hero-desc">
            End-to-end pharmacovigilance, rebuilt around signals instead of
            paperwork. Bring adverse-event reports, literature and social
            channels into one platform for case processing, safety analysis and
            reporting.
          </p>
          <div className="hero-cta">
            <Link
              className="button button-primary button-large"
              to="/contact/#demo"
            >
              Request a Demo
              <span aria-hidden="true">→</span>
            </Link>
            <a
              className="button button-outline-dark button-large"
              href="#safety-workflow"
            >
              See How It Works <span aria-hidden="true">→</span>
            </a>
          </div>
          <ul className="hero-features" aria-label="Platform principles">
            {features.map((feature) => (
              <li key={feature.label}>
                <span>
                  <b aria-hidden="true">{feature.glyph}</b> {feature.label}
                  <br />
                  {feature.sub}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="dashboard-image-wrap">
          <video
            ref={videoRef}
            src="/assets/product_demo.mp4"
            aria-label="NovigaAI product demo"
            autoPlay
            playsInline
            muted={false}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
          />
          <div className="hero-video-controls">
            <button
              type="button"
              onClick={togglePlayback}
              aria-label={
                isPlaying ? "Pause product demo" : "Play product demo"
              }
            >
              <span aria-hidden="true">{isPlaying ? "Ⅱ" : "▶"}</span>
              {/* {isPlaying ? "Pause" : "Play"} */}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
