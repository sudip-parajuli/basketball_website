"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "@/components/icons";

// Court-line SVG motif (background)
function CourtLineSVG() {
  return (
    <svg
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity: 0.04,
        pointerEvents: "none",
      }}
      aria-hidden="true"
    >
      {/* Half court circle */}
      <circle cx="0" cy="300" r="180" stroke="#6B1420" strokeWidth="1.5" />
      {/* Free throw circle */}
      <circle cx="0" cy="300" r="80" stroke="#6B1420" strokeWidth="1" />
      {/* Key / paint area lines */}
      <rect x="-60" y="220" width="120" height="160" stroke="#6B1420" strokeWidth="1" />
      {/* Three point arc suggestion */}
      <path d="M -80 480 Q 250 180 -80 120" stroke="#6B1420" strokeWidth="1" />
      {/* Baseline */}
      <line x1="0" y1="480" x2="400" y2="480" stroke="#6B1420" strokeWidth="1" />
      {/* Mid court line hint */}
      <line x1="400" y1="0" x2="400" y2="600" stroke="#6B1420" strokeWidth="1" />
      {/* Center circle */}
      <circle cx="400" cy="300" r="60" stroke="#6B1420" strokeWidth="1" />
      {/* Sideline right */}
      <line x1="800" y1="0" x2="800" y2="600" stroke="#6B1420" strokeWidth="1" />
      {/* Diagonal accent */}
      <line x1="300" y1="0" x2="600" y2="600" stroke="#B08D57" strokeWidth="0.5" />
      <line x1="500" y1="0" x2="800" y2="600" stroke="#B08D57" strokeWidth="0.5" />
    </svg>
  );
}

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  // Magnetic button effect
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transform = "translate(0, 0)";
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: "100dvh",
        backgroundColor: "var(--ivory)",
        position: "relative",
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "1fr",
      }}
      aria-label="Hero"
    >
      {/* Court-line background motif */}
      <CourtLineSVG />

      {/* Main layout: asymmetric 7/5 grid */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "7fr 5fr",
          minHeight: "100dvh",
          paddingTop: "0",
        }}
        className="hero-grid"
      >
        {/* Left: Text column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "clamp(8rem, 10vw, 10rem) clamp(2rem, 5vw, 5rem) clamp(4rem, 6vw, 6rem) clamp(2rem, 6vw, 7rem)",
            position: "relative",
          }}
          className="hero-text-col"
        >
          {/* Section label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "2rem",
              opacity: mounted ? 1 : 0,
              transform: mounted ? "none" : "translateY(12px)",
              transition: "all 0.7s cubic-bezier(0.4,0,0.2,1) 0.1s",
            }}
          >
            <span className="court-divider" />
            <span className="section-label">Siddhipur, Kathmandu · Est. 2018</span>
          </div>

          {/* Main headline */}
          <h1
            ref={headlineRef}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3.5rem, 8vw, 8rem)",
              fontWeight: 900,
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
              color: "var(--charcoal)",
              marginBottom: "2rem",
              opacity: mounted ? 1 : 0,
              transform: mounted ? "none" : "translateY(20px)",
              transition: "all 0.85s cubic-bezier(0.4,0,0.2,1) 0.2s",
            }}
          >
            Where{" "}
            <em
              style={{
                color: "var(--maroon)",
                fontStyle: "italic",
                display: "block",
              }}
            >
              Passion
            </em>
            Meets{" "}
            <span
              style={{
                WebkitTextStroke: "2px var(--charcoal)",
                color: "transparent",
                display: "block",
              }}
            >
              Precision.
            </span>
          </h1>

          {/* Sub-tagline */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
              fontWeight: 400,
              color: "#5A4A44",
              maxWidth: "38ch",
              lineHeight: 1.65,
              marginBottom: "3rem",
              opacity: mounted ? 1 : 0,
              transform: mounted ? "none" : "translateY(12px)",
              transition: "all 0.85s cubic-bezier(0.4,0,0.2,1) 0.4s",
            }}
          >
            Kathmandu&apos;s premier basketball institution. Grassroots to elite
            training under Coaches Nripesh Shrestha &amp; Binod Maharjan.
          </p>

          {/* CTA buttons */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.25rem",
              flexWrap: "wrap",
              opacity: mounted ? 1 : 0,
              transform: mounted ? "none" : "translateY(12px)",
              transition: "all 0.85s cubic-bezier(0.4,0,0.2,1) 0.55s",
            }}
          >
            <Link
              href="#contact"
              id="hero-cta-enroll"
              className="btn-magnetic"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)" }}
            >
              <span>Book a Trial Session</span>
              <ArrowRight size={14} />
            </Link>
            <Link href="#programs" id="hero-cta-programs" className="btn-outline">
              <span>View Programs</span>
            </Link>
          </div>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              gap: "3rem",
              marginTop: "4rem",
              paddingTop: "2.5rem",
              borderTop: "1px solid rgba(107, 20, 32, 0.12)",
              opacity: mounted ? 1 : 0,
              transition: "all 0.85s cubic-bezier(0.4,0,0.2,1) 0.7s",
            }}
          >
            {[
              { value: "7+", label: "Years Running" },
              { value: "500+", label: "Players Trained" },
              { value: "U-12", label: "Youth Teams" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="stat-numeral"
                  style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", display: "block" }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#8A7A74",
                    marginTop: "4px",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image column — bleeds to edge */}
        <div
          ref={imageRef}
          style={{
            position: "relative",
            overflow: "hidden",
            clipPath: mounted ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
            transition: "clip-path 1.1s cubic-bezier(0.77, 0, 0.175, 1) 0.1s",
          }}
          className="hero-image-col"
        >
          {/* Diagonal crop overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 2,
              background: "linear-gradient(105deg, var(--ivory) 0%, transparent 22%)",
              pointerEvents: "none",
            }}
          />

          {/* Warm color overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
              background: "rgba(107, 20, 32, 0.12)",
              mixBlendMode: "multiply",
              pointerEvents: "none",
            }}
          />

          <Image
            src="/images/hero-player.png"
            alt="Basketball player at Royal Basketball Academy, Kathmandu"
            fill
            priority
            sizes="40vw"
            style={{
              objectFit: "cover",
              objectPosition: "center top",
              filter: "sepia(10%) saturate(0.85) brightness(0.92) contrast(1.05)",
            }}
          />

          {/* Floating label */}
          <div
            style={{
              position: "absolute",
              bottom: "3rem",
              left: "2rem",
              zIndex: 3,
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(247, 243, 236, 0.7)",
              }}
            >
              Royal Basketball Academy
            </span>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "var(--ivory)",
                letterSpacing: "-0.01em",
              }}
            >
              Dreams Take Flight
            </span>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            min-height: auto;
          }
          #hero { min-height: auto; }
          .hero-image-col {
            min-height: 40dvh;
            order: -1;
            max-height: 50dvh;
          }
        }
        @media (max-width: 480px) {
          .hero-text-col { padding-left: 1.25rem !important; padding-right: 1.25rem !important; }
        }
      `}</style>
    </section>
  );
}
