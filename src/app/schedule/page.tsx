import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";
export const metadata: Metadata = {
  title: "Schedule",
  description:
    "Royal Basketball Academy weekly schedule — practice times for Little Hoopers, Fundamentals, Competitive Team, and Adult sessions.",
};

const SCHEDULE = [
  {
    day: "Monday",
    sessions: [
      { time: "4:00 PM – 5:30 PM", program: "Little Hoopers (Ages 5–10)", type: "Group Training" },
      { time: "5:45 PM – 7:15 PM", program: "Fundamentals (Ages 10–14)", type: "Group Training" },
      { time: "7:30 PM – 9:00 PM", program: "Competitive Team Practice", type: "Team Training" },
    ],
  },
  {
    day: "Wednesday",
    sessions: [
      { time: "4:00 PM – 5:30 PM", program: "Little Hoopers (Ages 5–10)", type: "Group Training" },
      { time: "5:45 PM – 7:15 PM", program: "Fundamentals (Ages 10–14)", type: "Group Training" },
      { time: "7:30 PM – 9:00 PM", program: "Competitive Team Practice", type: "Team Training" },
    ],
  },
  {
    day: "Friday",
    sessions: [
      { time: "4:00 PM – 5:30 PM", program: "Open Skills Session", type: "All Levels" },
      { time: "7:00 PM – 9:00 PM", program: "Adult Open Gym", type: "Open Session" },
    ],
  },
  {
    day: "Saturday",
    sessions: [
      { time: "8:00 AM – 10:00 AM", program: "Private Coaching (By Appointment)", type: "Individual" },
      { time: "10:30 AM – 12:30 PM", program: "Competitive Scrimmage", type: "Match Play" },
    ],
  },
  {
    day: "Sunday",
    sessions: [
      { time: "8:00 AM – 10:00 AM", program: "Adult Open Gym", type: "Open Session" },
      { time: "10:30 AM – 12:30 PM", program: "Open Skills Session", type: "All Levels" },
    ],
  },
];

export default function SchedulePage() {
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
          <span className="section-label">Schedule</span>
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
          Practice{" "}
          <em style={{ color: "var(--maroon)", fontStyle: "italic" }}>&amp; Play.</em>
        </h1>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.95rem",
            color: "#6A5A54",
            lineHeight: 1.7,
            maxWidth: "50ch",
            marginBottom: "3rem",
          }}
        >
          Regular training runs Monday through Sunday. Private coaching by appointment. Schedules may shift during tournament season.
        </p>

        <div style={{ borderTop: "1px solid rgba(107,20,32,0.12)" }}>
          {SCHEDULE.map((day) => (
            <div
              key={day.day}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 3fr",
                gap: "clamp(1rem, 3vw, 3rem)",
                padding: "clamp(1.5rem, 2.5vw, 2.25rem) 0",
                borderBottom: "1px solid rgba(107,20,32,0.08)",
              }}
              className="schedule-page-row"
            >
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.25rem, 1.8vw, 1.75rem)",
                  fontWeight: 700,
                  color: "var(--maroon)",
                }}
              >
                {day.day}
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {day.sessions.map((session, i) => (
                  <div
                    key={i}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 2fr auto",
                      gap: "1rem",
                      alignItems: "center",
                    }}
                    className="session-page-row"
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.85rem",
                        fontWeight: 500,
                        color: "var(--charcoal)",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {session.time}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.85rem",
                        color: "#6A5A54",
                      }}
                    >
                      {session.program}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.65rem",
                        fontWeight: 600,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--brass)",
                        border: "1px solid var(--brass)",
                        padding: "2px 8px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {session.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.8rem",
            color: "#8A7A74",
            fontStyle: "italic",
            marginTop: "2rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(107,20,32,0.08)",
          }}
        >
          Schedule is subject to change. Contact us to confirm current session times before attending.
        </p>

        <div style={{ marginTop: "3rem" }}>
          <Link href="/contact" className="btn-magnetic">
            <span>Contact Us for Details</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .schedule-page-row { grid-template-columns: 1fr !important; gap: 0.75rem !important; }
          .session-page-row { grid-template-columns: 1fr !important; gap: 0.25rem !important; }
          .session-page-row > span:last-child { justify-self: start; }
        }
      `}</style>
    </main>
  );
}