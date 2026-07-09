"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const PHILOSOPHY_POINTS = [
  {
    number: "01",
    title: "Discipline First",
    body: "Every champion is built off the court before they shine on it. We install discipline, punctuality, and mental toughness as the foundation — not the afterthought.",
  },
  {
    number: "02",
    title: "Fundamentals Always",
    body: "No shortcut replaces a sound footwork, a clean release, or a tight dribble. Our coaches build skills from the ground up — no matter your age or level.",
  },
  {
    number: "03",
    title: "Community & Character",
    body: "Kathmandu's basketball scene grows when its players grow. We develop athletes who lead with integrity — on the court, in school, and in the community.",
  },
  {
    number: "04",
    title: "Compete & Evolve",
    body: "Organized matches, tournaments, and real competition are where training meets truth. We prepare every player to perform when it counts.",
  },
];

export default function PhilosophyScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  // IntersectionObserver to trigger auto-cycle
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-advance through points
  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PHILOSOPHY_POINTS.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [visible]);

  // GSAP ScrollTrigger for progress tracking
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let trigger: { kill: () => void } | null = null;

    const initGSAP = async () => {
      try {
        const gsapModule = await import("gsap");
        const gsap = gsapModule.default;
        const stModule = await import("gsap/ScrollTrigger");
        const ST = stModule.ScrollTrigger;
        gsap.registerPlugin(ST);

        trigger = ST.create({
          trigger: section,
          start: "top 10%",
          end: `bottom 70%`,
          onUpdate: (self: { progress: number }) => {
            const idx = Math.min(
              Math.floor(self.progress * PHILOSOPHY_POINTS.length),
              PHILOSOPHY_POINTS.length - 1
            );
            setActiveIndex(idx);
          },
        });
      } catch {
        // GSAP not loaded — interval fallback active
      }
    };

    initGSAP();

    return () => {
      if (trigger) trigger.kill();
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        backgroundColor: "var(--ivory)",
        padding: "clamp(5rem, 10vw, 9rem) clamp(2rem, 6vw, 7rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          marginBottom: "1rem",
        }}
      >
        <span className="court-divider" />
        <span className="section-label">Our Philosophy</span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "5fr 7fr",
          gap: "clamp(3rem, 6vw, 7rem)",
          alignItems: "start",
        }}
        className="philosophy-grid philosophy-scroll-grid"
      >
        {/* Left: sticky image column */}
        <div
          style={{ position: "sticky", top: "8rem" }}
          className="philosophy-image-col"
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: "-0.025em",
              color: "var(--charcoal)",
              marginBottom: "2.5rem",
            }}
          >
            Built for<br />
            <em style={{ color: "var(--maroon)", fontStyle: "italic" }}>Excellence.</em><br />
            Rooted in<br />
            <em style={{ color: "var(--maroon)", fontStyle: "italic" }}>Kathmandu.</em>
          </h2>

          <div
            style={{
              position: "relative",
              aspectRatio: "4/5",
              overflow: "hidden",
              clipPath: "polygon(0 0, 100% 0, 100% 88%, 88% 100%, 0 100%)",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 1,
                background: "rgba(107, 20, 32, 0.08)",
                mixBlendMode: "multiply",
              }}
            />
            <Image
              src="/images/hero_basketball.jpg"
              alt="Players training at Royal Basketball Academy"
              fill
              sizes="35vw"
              style={{
                objectFit: "cover",
                filter: "sepia(8%) saturate(0.9) brightness(0.93)",
              }}
            />
          </div>
        </div>

        {/* Right: philosophy points */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {PHILOSOPHY_POINTS.map((point, i) => (
            <div
              key={point.number}
              onClick={() => setActiveIndex(i)}
              style={{
                padding: "2.5rem 0",
                borderBottom: "1px solid rgba(107, 20, 32, 0.12)",
                cursor: "pointer",
                position: "relative",
                transition: "all 0.3s ease",
              }}
              className="philosophy-point"
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "2rem" }}>
                <span
                  className="stat-numeral"
                  style={{
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    paddingTop: "6px",
                    flexShrink: 0,
                    opacity: activeIndex === i ? 1 : 0.4,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  {point.number}
                </span>

                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                      fontWeight: 700,
                      letterSpacing: "-0.015em",
                      color: activeIndex === i ? "var(--maroon)" : "var(--charcoal)",
                      marginBottom: "0.875rem",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {point.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "1rem",
                      color: "#6A5A54",
                      lineHeight: 1.7,
                      maxWidth: "48ch",
                      maxHeight: activeIndex === i ? "200px" : "0",
                      overflow: "hidden",
                      opacity: activeIndex === i ? 1 : 0,
                      transition: "max-height 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease",
                    }}
                  >
                    {point.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .philosophy-scroll-grid { grid-template-columns: 1fr !important; }
          .philosophy-image-col { position: relative !important; top: auto !important; }
        }
      `}</style>
    </section>
  );
}