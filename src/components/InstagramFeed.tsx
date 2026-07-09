"use client";

import { useRef } from "react";

const INSTAGRAM_USERNAME = "royalbasketballnepal";
const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_USERNAME}/`;

export default function InstagramFeed() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="instagram"
      style={{
        backgroundColor: "var(--charcoal)",
        padding: "clamp(4rem, 8vw, 7rem) clamp(2rem, 6vw, 7rem)",
        position: "relative",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: "clamp(2.5rem, 4vw, 4rem)",
          flexWrap: "wrap",
          gap: "1.5rem",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "0.75rem",
            }}
          >
            <span className="court-divider" style={{ backgroundColor: "var(--brass)" }} />
            <span className="section-label" style={{ color: "var(--brass)" }}>
              Instagram
            </span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: "-0.025em",
              color: "var(--ivory)",
            }}
          >
            Follow the{" "}
            <em style={{ color: "var(--brass)", fontStyle: "italic" }}>Journey.</em>
          </h2>
        </div>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
          style={{ flexShrink: 0 }}
        >
          <span>@{INSTAGRAM_USERNAME}</span>
        </a>
      </div>

      {/* Instagram embed */}
      <div
        ref={containerRef}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "0.75rem",
        }}
        className="insta-grid"
      >
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            style={{
              position: "relative",
              aspectRatio: "1",
              backgroundColor: "rgba(247,243,236,0.05)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(247,243,236,0.2)",
                fontFamily: "var(--font-body)",
                fontSize: "0.65rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" strokeWidth="2" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Embed note */}
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.75rem",
          color: "rgba(247,243,236,0.35)",
          textAlign: "center",
          marginTop: "2rem",
        }}
      >
        Live feed from{" "}
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "var(--brass)",
            textDecoration: "none",
            borderBottom: "1px solid rgba(176,141,87,0.3)",
          }}
        >
          @{INSTAGRAM_USERNAME}
        </a>
        {" "}— follow us for the latest training sessions, tournaments, and
        academy life.
      </p>

      <style>{`
        @media (max-width: 640px) {
          .insta-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 0.5rem !important; }
        }
        @media (min-width: 641px) and (max-width: 900px) {
          .insta-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}