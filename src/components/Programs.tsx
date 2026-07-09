"use client";

import { ArrowRight } from "@/components/icons";
import Link from "next/link";

const PROGRAMS = [
  {
    id: "little-hoopers",
    label: "Ages 5–10",
    title: "Little Hoopers",
    description:
      "The starting line for every future champion. Fun-first fundamentals — dribbling, passing, shooting — in a structured, encouraging environment.",
    detail: "Group sessions · 2× per week",
    accent: "var(--brass)",
    bg: "#FBF7F0",
  },
  {
    id: "fundamentals",
    label: "Ages 10–14",
    title: "Fundamentals Program",
    description:
      "Serious skill development for players ready to commit. Footwork, ball-handling, shooting mechanics, and basketball IQ — built systematically.",
    detail: "Group sessions · 3× per week",
    accent: "var(--brass-light)",
    bg: "var(--ivory)",
  },
  {
    id: "competitive",
    label: "Ages 14+",
    title: "Competitive & Travel Team",
    description:
      "Our elite track. Organized matches, tournament play, and exposure against the best clubs in the Kathmandu Valley and beyond.",
    detail: "Team training + match schedule",
    accent: "var(--brass-light)",
    bg: "#F0EAE2",
  },
  {
    id: "private",
    label: "All Ages",
    title: "Private Coaching",
    description:
      "One-on-one or small group sessions tailored to your specific goals — whether it's a position skill, tryout prep, or injury comeback.",
    detail: "Flexible scheduling",
    accent: "var(--brass)",
    bg: "var(--ivory)",
  },
  {
    id: "adult",
    label: "18+",
    title: "Adult & Open Sessions",
    description:
      "For the love of the game. Recreational open gym, pick-up games, and adult fitness sessions — basketball is for life.",
    detail: "Open sessions · Weekend",
    accent: "var(--brass)",
    bg: "#FBF7F0",
  },
];

export default function Programs() {
  return (
    <section
      id="programs"
      style={{
        backgroundColor: "var(--charcoal)",
        padding: "clamp(5rem, 10vw, 9rem) clamp(2rem, 6vw, 7rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background texture lines */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.03,
          pointerEvents: "none",
        }}
        aria-hidden="true"
      >
        <line x1="0" y1="0" x2="100" y2="100" stroke="#B08D57" strokeWidth="0.2" />
        <line x1="20" y1="0" x2="100" y2="80" stroke="#B08D57" strokeWidth="0.2" />
        <line x1="40" y1="0" x2="100" y2="60" stroke="#B08D57" strokeWidth="0.2" />
        <line x1="0" y1="20" x2="80" y2="100" stroke="#B08D57" strokeWidth="0.2" />
        <line x1="0" y1="40" x2="60" y2="100" stroke="#B08D57" strokeWidth="0.2" />
      </svg>

      {/* Header */}
      <div style={{ marginBottom: "clamp(3rem, 5vw, 5rem)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
          <span className="court-divider" style={{ backgroundColor: "var(--brass)" }} />
          <span className="section-label" style={{ color: "var(--brass)" }}>Training Programs</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "7fr 5fr", gap: "2rem", alignItems: "end" }} className="programs-header-grid">
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: "-0.025em",
              color: "var(--ivory)",
            }}
          >
            Find Your{" "}
            <em style={{ color: "var(--brass)", fontStyle: "italic" }}>Level.</em>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              color: "rgba(247, 243, 236, 0.6)",
              lineHeight: 1.65,
              maxWidth: "38ch",
            }}
          >
            From first dribble to tournament competition — every path is a program.
          </p>
        </div>
      </div>

      {/* Programs list — editorial, not icon-boxes */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
        {PROGRAMS.map((program, i) => (
          <div
            key={program.id}
            id={`program-${program.id}`}
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr auto",
              alignItems: "center",
              gap: "clamp(1.5rem, 3vw, 3rem)",
              padding: "clamp(1.5rem, 3vw, 2.5rem) 0",
              borderTop: "1px solid rgba(247, 243, 236, 0.08)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              textDecoration: "none",
            }}
            className="program-row"
            onClick={() => {}}
          >
            {/* Number */}
            <span
              className="stat-numeral"
              style={{
                fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)",
                opacity: 0.4,
                minWidth: "2.5rem",
              }}
            >
              0{i + 1}
            </span>

            {/* Content */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.375rem" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.015em",
                    color: "var(--ivory)",
                  }}
                >
                  {program.title}
                </h3>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.65rem",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: program.accent,
                    border: `1px solid ${program.accent}`,
                    padding: "2px 8px",
                    opacity: 0.85,
                  }}
                >
                  {program.label}
                </span>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9rem",
                  color: "rgba(247, 243, 236, 0.55)",
                  lineHeight: 1.6,
                  maxWidth: "55ch",
                }}
              >
                {program.description}
              </p>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  color: program.accent,
                  marginTop: "0.5rem",
                  display: "block",
                  opacity: 0.8,
                }}
              >
                {program.detail}
              </span>
            </div>

            {/* Arrow */}
            <div
              style={{
                width: "40px",
                height: "40px",
                border: "1px solid rgba(176, 141, 87, 0.3)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--brass)",
                flexShrink: 0,
                transition: "all 0.3s ease",
              }}
              className="program-arrow"
            >
              <ArrowRight size={14} />
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ marginTop: "3.5rem", paddingTop: "3rem", borderTop: "1px solid rgba(247, 243, 236, 0.08)" }}>
        <Link href="#contact" id="programs-cta" className="btn-outline">
          <span>Enroll in a Program</span>
          <ArrowRight size={14} />
        </Link>
      </div>

      <style>{`
        .program-row:hover .program-arrow {
          background-color: var(--brass);
          border-color: var(--brass);
          color: var(--charcoal);
          transform: rotate(45deg);
        }
        @media (max-width: 600px) {
          .program-row { grid-template-columns: auto 1fr !important; }
          .program-arrow { display: none !important; }
          .programs-header-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
