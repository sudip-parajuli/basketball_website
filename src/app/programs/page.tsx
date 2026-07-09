import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore Royal Basketball Academy's training programs: Little Hoopers, Fundamentals, Competitive Team, Private Coaching, and Adult Sessions.",
};

const PROGRAMS_DETAIL = [
  {
    id: "little-hoopers",
    title: "Little Hoopers",
    ages: "5–10 years",
    badge: "Monday & Wednesday, 4:00–5:30 PM",
    ratio: "1:8 coach-to-player",
    focus: "Dribbling, passing, shooting fundamentals, teamwork basics",
    whatToBring: "Comfortable clothes, running shoes, water bottle",
    description: "The starting line for every future champion. Fun-first fundamentals — dribbling, passing, shooting — in a structured, encouraging environment that builds confidence and a love for the game.",
  },
  {
    id: "fundamentals",
    title: "Fundamentals Program",
    ages: "10–14 years",
    badge: "Monday, Wednesday & Friday, 5:45–7:15 PM",
    ratio: "1:10 coach-to-player",
    focus: "Footwork, ball-handling, shooting mechanics, basketball IQ",
    whatToBring: "Basketball shoes, shorts/jersey, water bottle",
    description: "Serious skill development for players ready to commit. Footwork, ball-handling, shooting mechanics, and basketball IQ — built systematically from the ground up.",
  },
  {
    id: "competitive",
    title: "Competitive & Travel Team",
    ages: "14+ years",
    badge: "Team training + match schedule",
    ratio: "1:10 coach-to-player",
    focus: "Team systems, scouting, tournament preparation, strength & conditioning",
    whatToBring: "Full gear, mouthguard, water bottle",
    description: "Our elite track. Organized matches, tournament play, and exposure against the best clubs in the Kathmandu Valley and beyond. Selection-based.",
  },
  {
    id: "private",
    title: "Private Coaching",
    ages: "All ages",
    badge: "Flexible scheduling",
    ratio: "1:1 or small group",
    focus: "Position-specific skills, tryout prep, injury comeback, video breakdown",
    whatToBring: "Varies by session — discuss with coach",
    description: "One-on-one or small group sessions tailored to your specific goals — whether it's a position skill, tryout prep, or injury comeback.",
  },
  {
    id: "adult",
    title: "Adult & Open Sessions",
    ages: "18+",
    badge: "Friday & Sunday",
    ratio: "Open gym format",
    focus: "Recreational play, fitness, pick-up games",
    whatToBring: "Gym clothes, basketball shoes, water bottle",
    description: "For the love of the game. Recreational open gym, pick-up games, and adult fitness sessions — basketball is for life.",
  },
];

export default function ProgramsPage() {
  return (
    <main>
      <Nav />
      <section
        style={{
          padding: "clamp(8rem, 12vw, 10rem) clamp(2rem, 6vw, 7rem) clamp(5rem, 8vw, 7rem)",
          backgroundColor: "var(--ivory)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
          <span className="court-divider" />
          <span className="section-label">Programs</span>
        </div>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 6vw, 5rem)",
            fontWeight: 900,
            lineHeight: 0.92,
            letterSpacing: "-0.03em",
            color: "var(--charcoal)",
            marginBottom: "1.5rem",
          }}
        >
          Our{" "}
          <em style={{ color: "var(--maroon)", fontStyle: "italic" }}>Programs.</em>
        </h1>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1rem",
            color: "#6A5A54",
            lineHeight: 1.7,
            maxWidth: "55ch",
            marginBottom: "4rem",
          }}
        >
          From first dribble to tournament competition — every path is a program. Each is designed by Coach Nripesh and Coach Binod to meet players where they are and take them where they want to go.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {PROGRAMS_DETAIL.map((program, i) => (
            <div
              key={program.id}
              style={{
                padding: "clamp(2rem, 3vw, 3rem) 0",
                borderTop: "1px solid rgba(107,20,32,0.12)",
                display: "grid",
                gridTemplateColumns: "1fr 2.5fr",
                gap: "clamp(2rem, 4vw, 5rem)",
              }}
              className="program-detail-grid"
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
                  <span className="stat-numeral" style={{ fontSize: "1.5rem" }}>0{i + 1}</span>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--brass)",
                      border: "1px solid var(--brass)",
                      padding: "2px 8px",
                    }}
                  >
                    {program.ages}
                  </span>
                </div>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    color: "var(--maroon)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {program.title}
                </h2>
              </div>

              <div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.95rem",
                    color: "#6A5A54",
                    lineHeight: 1.75,
                    marginBottom: "1.5rem",
                  }}
                >
                  {program.description}
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                    padding: "1.25rem",
                    backgroundColor: "rgba(107,20,32,0.03)",
                    border: "1px solid rgba(107,20,32,0.08)",
                  }}
                  className="program-meta-grid"
                >
                  <MetaItem label="Schedule" value={program.badge} />
                  <MetaItem label="Coach Ratio" value={program.ratio} />
                  <MetaItem label="Focus" value={program.focus} />
                  <MetaItem label="What to Bring" value={program.whatToBring} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "4rem", textAlign: "center" }}>
          <Link href="/contact" className="btn-magnetic">
            <span>Enroll Now</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .program-detail-grid { grid-template-columns: 1fr !important; }
          .program-meta-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.65rem",
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--brass)",
          display: "block",
          marginBottom: "4px",
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.85rem",
          color: "var(--charcoal)",
        }}
      >
        {value}
      </span>
    </div>
  );
}