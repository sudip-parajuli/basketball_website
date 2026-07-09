"use client";

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

export default function Schedule() {
  return (
    <section
      id="schedule"
      style={{
        backgroundColor: "var(--ivory)",
        padding: "clamp(5rem, 10vw, 9rem) clamp(2rem, 6vw, 7rem)",
        position: "relative",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
        <span className="court-divider" />
        <span className="section-label">Schedule</span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "7fr 5fr",
          gap: "clamp(2rem, 5vw, 5rem)",
          marginBottom: "clamp(2.5rem, 4vw, 4rem)",
          alignItems: "end",
        }}
        className="schedule-header-grid"
      >
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: "-0.025em",
            color: "var(--charcoal)",
          }}
        >
          Practice &amp;{" "}
          <em style={{ color: "var(--maroon)", fontStyle: "italic" }}>Play Schedule.</em>
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.875rem",
            color: "#6A5A54",
            lineHeight: 1.65,
            maxWidth: "38ch",
          }}
        >
          Regular training runs Monday through Sunday. Private coaching by
          appointment. Schedules may shift during tournament season.
        </p>
      </div>

      {/* Schedule table */}
      <div style={{ borderTop: "1px solid rgba(107,20,32,0.12)" }}>
        {SCHEDULE.map((day) => (
          <div
            key={day.day}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 3fr",
              gap: "clamp(1rem, 3vw, 3rem)",
              padding: "clamp(1.25rem, 2vw, 1.75rem) 0",
              borderBottom: "1px solid rgba(107,20,32,0.08)",
            }}
            className="schedule-row"
          >
            {/* Day */}
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.1rem, 1.5vw, 1.5rem)",
                  fontWeight: 700,
                  color: "var(--maroon)",
                  marginBottom: "0.25rem",
                }}
              >
                {day.day}
              </h3>
            </div>

            {/* Sessions */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {day.sessions.map((session, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 2fr auto",
                    gap: "1rem",
                    alignItems: "center",
                  }}
                  className="session-row"
                >
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.8rem",
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
                      fontSize: "0.8rem",
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

      {/* Note */}
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
        Schedule is subject to change. Contact us to confirm current session
        times before attending.
      </p>

      <style>{`
        @media (max-width: 768px) {
          .schedule-row { grid-template-columns: 1fr !important; gap: 0.75rem !important; }
          .session-row { grid-template-columns: 1fr !important; gap: 0.25rem !important; }
          .session-row > span:last-child { justify-self: start; }
          .schedule-header-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}