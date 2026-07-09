"use client";

import Image from "next/image";

const COACHES = [
  {
    id: "nripesh-shrestha",
    name: "Nripesh Shrestha",
    title: "Head Coach & Co-Founder",
    pullQuote: "\"Basketball is more than a sport — it&apos;s a language. My goal is to make every player fluent in it.\"",
    bio: "Coach Nripesh has been at the heart of Kathmandu's basketball development since the academy's founding in 2018. His approach balances technical precision with a deep understanding of the mental game, producing players who perform under pressure.",
    side: "left" as const,
  },
  {
    id: "binod-maharjan",
    name: "Binod Maharjan",
    title: "Head Coach & Co-Founder",
    pullQuote: "\"Discipline is the bridge between goals and achievement. We build that bridge every single day here.\"",
    bio: "Coach Binod brings intensity and structure to every session. A firm believer in fundamentals, he ensures every player — regardless of age or experience — leaves each practice better than they arrived.",
    side: "right" as const,
  },
];

export default function Coaches() {
  return (
    <section
      id="coaches"
      style={{
        backgroundColor: "var(--ivory)",
        padding: "clamp(5rem, 10vw, 9rem) clamp(2rem, 6vw, 7rem)",
        position: "relative",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "clamp(3rem, 5vw, 5rem)" }}>
        <span className="court-divider" />
        <span className="section-label">The Coaches</span>
      </div>

      {/* Coaches — magazine spread layout */}
      <div style={{ display: "flex", flexDirection: "column", gap: "clamp(5rem, 8vw, 8rem)" }}>
        {COACHES.map((coach) => (
          <div
            key={coach.id}
            id={`coach-${coach.id}`}
            style={{
              display: "grid",
              gridTemplateColumns: coach.side === "left" ? "5fr 7fr" : "7fr 5fr",
              gap: "clamp(3rem, 5vw, 6rem)",
              alignItems: "center",
            }}
            className="coach-spread"
          >
            {/* Image */}
            <div
              style={{
                order: coach.side === "right" ? 2 : 0,
                position: "relative",
                aspectRatio: "3/4",
                overflow: "hidden",
                clipPath:
                  coach.side === "left"
                    ? "polygon(0 0, 100% 0, 100% 92%, 92% 100%, 0 100%)"
                    : "polygon(0 0, 100% 0, 100% 100%, 8% 100%, 0 92%)",
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
                src="/images/coaches.png"
                alt={`${coach.name}, ${coach.title} at Royal Basketball Academy`}
                fill
                sizes="35vw"
                style={{
                  objectFit: "cover",
                  objectPosition: coach.side === "left" ? "left center" : "right center",
                  filter: "sepia(8%) saturate(0.88) brightness(0.93)",
                }}
              />
            </div>

            {/* Text */}
            <div style={{ order: coach.side === "right" ? 1 : 0 }}>
              {/* Pull quote */}
              <blockquote
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                  fontWeight: 600,
                  fontStyle: "italic",
                  lineHeight: 1.25,
                  letterSpacing: "-0.015em",
                  color: "var(--maroon)",
                  marginBottom: "2.5rem",
                  borderLeft: "3px solid var(--brass)",
                  paddingLeft: "1.5rem",
                }}
                dangerouslySetInnerHTML={{ __html: coach.pullQuote }}
              />

              <hr className="rule" style={{ marginBottom: "2rem" }} />

              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                    fontWeight: 900,
                    letterSpacing: "-0.02em",
                    color: "var(--charcoal)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {coach.name}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--brass)",
                    marginBottom: "1.5rem",
                  }}
                >
                  {coach.title}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    color: "#6A5A54",
                    lineHeight: 1.75,
                    maxWidth: "45ch",
                  }}
                >
                  {coach.bio}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .coach-spread {
            grid-template-columns: 1fr !important;
          }
          .coach-spread > div:first-child, .coach-spread > div:last-child {
            order: unset !important;
          }
        }
      `}</style>
    </section>
  );
}
