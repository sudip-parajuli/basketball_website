"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 7, suffix: "+", label: "Years of Excellence", description: "Founded 2018" },
  { value: 500, suffix: "+", label: "Players Trained", description: "All ages, all levels" },
  { value: 5, suffix: "", label: "Programs Offered", description: "Youth to adult" },
  { value: 9500, suffix: "+", label: "Instagram Followers", description: "@royalbasketballnepal" },
];

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;

    const duration = 2000;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(target);
    };

    requestAnimationFrame(tick);
  }, [active, target]);

  return (
    <span className="stat-numeral" style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)", display: "block" }}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="stats"
      ref={sectionRef}
      style={{
        backgroundColor: "var(--maroon)",
        padding: "clamp(4rem, 8vw, 7rem) clamp(2rem, 6vw, 7rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background court arc */}
      <svg
        viewBox="0 0 800 300"
        style={{
          position: "absolute",
          right: "-10%",
          top: "-20%",
          width: "60%",
          height: "140%",
          opacity: 0.04,
          pointerEvents: "none",
        }}
        aria-hidden="true"
      >
        <circle cx="700" cy="150" r="250" stroke="#F7F3EC" strokeWidth="1" fill="none" />
        <circle cx="700" cy="150" r="120" stroke="#F7F3EC" strokeWidth="1" fill="none" />
        <line x1="0" y1="150" x2="800" y2="150" stroke="#F7F3EC" strokeWidth="0.5" />
      </svg>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "clamp(2rem, 4vw, 4rem)",
        }}
        className="stats-grid"
      >
        {STATS.map((stat) => (
          <div
            key={stat.label}
            id={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
            style={{
              borderLeft: "1px solid rgba(176, 141, 87, 0.3)",
              paddingLeft: "clamp(1rem, 2vw, 2rem)",
            }}
          >
            <CountUp target={stat.value} suffix={stat.suffix} active={active} />
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "var(--ivory)",
                marginTop: "0.5rem",
                letterSpacing: "0.02em",
              }}
            >
              {stat.label}
            </div>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.7rem",
                color: "rgba(176, 141, 87, 0.8)",
                marginTop: "0.25rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {stat.description}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
