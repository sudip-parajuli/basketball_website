"use client";

import Image from "next/image";

const STORIES = [
  {
    id: "ujjwal",
    quote: "\"This academy didn't just teach me to shoot — it taught me to lead. Coach Nripesh pushed me harder than anyone, and now I captain my school team.\"",
    name: "Ujjwal Shrestha",
    age: "15",
    program: "Competitive & Travel Team",
    image: "/images/basketball1.jpg",
    side: "left" as const,
  },
  {
    id: "aanya",
    quote: "\"I started at 8 years old could barely dribble. Now at 12, I've played in three tournaments and made friends who feel like brothers and sisters.\"",
    name: "Aanya Maharjan",
    age: "12",
    program: "Fundamentals Program",
    image: "/images/basketball4.jpg",
    side: "right" as const,
  },
];

export default function Testimonials() {
  return (
    <section
      id="stories"
      style={{
        backgroundColor: "var(--charcoal)",
        padding: "clamp(5rem, 10vw, 9rem) clamp(2rem, 6vw, 7rem)",
        position: "relative",
      }}
    >
      {/* Section label */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          marginBottom: "clamp(3rem, 5vw, 5rem)",
        }}
      >
        <span className="court-divider" style={{ backgroundColor: "var(--brass)" }} />
        <span className="section-label" style={{ color: "var(--brass)" }}>Player Stories</span>
      </div>

      {/* Stories — magazine spreads */}
      <div style={{ display: "flex", flexDirection: "column", gap: "clamp(5rem, 10vw, 10rem)" }}>
        {STORIES.map((story) => (
          <div
            key={story.id}
            style={{
              display: "grid",
              gridTemplateColumns: story.side === "left" ? "6fr 6fr" : "6fr 6fr",
              gap: "clamp(2rem, 5vw, 5rem)",
              alignItems: "stretch",
            }}
            className="story-spread"
          >
            {/* Full-bleed photo side */}
            <div
              style={{
                position: "relative",
                minHeight: "400px",
                overflow: "hidden",
                order: story.side === "right" ? 2 : 0,
                clipPath: story.side === "left"
                  ? "polygon(0 0, 100% 0, 100% 90%, 94% 100%, 0 100%)"
                  : "polygon(0 0, 100% 0, 100% 100%, 6% 100%, 0 90%)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 1,
                  background: "rgba(107, 20, 32, 0.06)",
                  mixBlendMode: "multiply",
                }}
              />
              <Image
                src={story.image}
                alt={`${story.name} — ${story.program}, Royal Basketball Academy`}
                fill
                sizes="45vw"
                style={{
                  objectFit: "cover",
                  filter: "sepia(8%) saturate(0.85) brightness(0.9)",
                }}
              />
            </div>

            {/* Pull-quote side */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                order: story.side === "right" ? 1 : 0,
              }}
            >
              <blockquote
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem, 3vw, 2.75rem)",
                  fontWeight: 700,
                  fontStyle: "italic",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  color: "var(--ivory)",
                  marginBottom: "2.5rem",
                  borderLeft: "3px solid var(--brass)",
                  paddingLeft: "1.5rem",
                }}
              >
                {story.quote}
              </blockquote>

              <hr className="rule" style={{ borderColor: "rgba(176,141,87,0.2)", marginBottom: "1.5rem" }} />

              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                    fontWeight: 900,
                    color: "var(--ivory)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {story.name}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--brass)",
                  }}
                >
                  Age {story.age} · {story.program}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .story-spread { grid-template-columns: 1fr !important; }
          .story-spread > div:first-child { min-height: 280px; }
          .story-spread > div:last-child { order: unset !important; }
          .story-spread > div:first-child { order: -1 !important; }
        }
      `}</style>
    </section>
  );
}