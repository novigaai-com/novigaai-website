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
  const playerRef = useRef<HTMLDivElement>(null);
  const hasAttemptedAutoplay = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenError, setFullscreenError] = useState("");

  useEffect(() => {
    const syncFullscreen = () => {
      setIsFullscreen(document.fullscreenElement === playerRef.current);
    };
    document.addEventListener("fullscreenchange", syncFullscreen);
    return () => document.removeEventListener("fullscreenchange", syncFullscreen);
  }, []);

  const toggleFullscreen = async () => {
    setFullscreenError("");
    try {
      if (document.fullscreenElement === playerRef.current) {
        await document.exitFullscreen();
      } else if (playerRef.current?.requestFullscreen) {
        await playerRef.current.requestFullscreen();
      } else {
        const video = videoRef.current as (HTMLVideoElement & {
          webkitEnterFullscreen?: () => void;
        }) | null;
        if (video?.webkitEnterFullscreen) video.webkitEnterFullscreen();
        else setFullscreenError("Fullscreen is unavailable in this browser.");
      }
    } catch {
      setFullscreenError("Unable to open fullscreen. Please try again.");
    }
  };

  const playWhenReady = () => {
    const video = videoRef.current;
    if (!video || hasAttemptedAutoplay.current) return;

    hasAttemptedAutoplay.current = true;
    void video.play().catch((error: unknown) => {
      if (!video.isConnected) return;
      if (
        !(error instanceof DOMException) ||
        error.name !== "NotAllowedError"
      ) {
        setIsPlaying(false);
        return;
      }
      // Browsers allow muted autoplay when playback with sound is blocked.
      video.muted = true;
      setIsMuted(true);
      void video.play().catch(() => setIsPlaying(false));
    });
  };

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    hasAttemptedAutoplay.current = true;
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
        <div className="dashboard-image-wrap" ref={playerRef}>
          <video
            ref={videoRef}
            src="/assets/product_demo.mp4"
            poster="/assets/dashboard2.png"
            preload="auto"
            aria-label="NovigaAI product demo"
            loop
            playsInline
            muted={isMuted}
            onLoadedMetadata={(event) => {
              const video = event.currentTarget;
              if (video.duration > 2) video.currentTime = 2;
            }}
            onCanPlay={playWhenReady}
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
            </button>
            <button
              type="button"
              onClick={() => {
                const video = videoRef.current;
                if (!video) return;
                video.muted = !video.muted;
                setIsMuted(video.muted);
              }}
              aria-label={isMuted ? "Unmute demo audio" : "Mute demo audio"}
              aria-pressed={isMuted}
              title={isMuted ? "Unmute" : "Mute"}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M11 5 6 9H3v6h3l5 4V5Z" />
                {isMuted ? (
                  <path d="m16 9 6 6m0-6-6 6" />
                ) : (
                  <>
                    <path d="M15 8a6 6 0 0 1 0 8" />
                    <path d="M18 5a10 10 0 0 1 0 14" />
                  </>
                )}
              </svg>
            </button>
            <button
              type="button"
              onClick={() => void toggleFullscreen()}
              aria-label={isFullscreen ? "Exit fullscreen" : "View fullscreen"}
              title={isFullscreen ? "Exit fullscreen" : "View fullscreen"}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d={isFullscreen
                  ? "M3 9h6V3m6 0v6h6M3 15h6v6m6 0v-6h6"
                  : "M8 3H3v5m13-5h5v5M3 16v5h5m8 0h5v-5"} />
              </svg>
            </button>
            {fullscreenError && <span role="status">{fullscreenError}</span>}
          </div>
        </div>
      </div>
    </section>
  );
}
