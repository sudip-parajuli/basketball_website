"use client";

import Link from "next/link";
import { ArrowRight } from "@/components/icons";

export default function EnrollCTA() {
  return (
    <section
      id="enroll"
      style={{
        backgroundColor: "var(--charcoal)",
        padding: "clamp(5rem, 10vw, 9rem) clamp(2rem, 6vw, 7rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background court circle */}
      <svg
        viewBox="0 0 600 600"
        style={{
          position: "absolute",
          right: "-15%",
          bottom: "-30%",
          width: "55%",
          height: "auto",
          opacity: 0.04,
          pointerEvents: "none",
        }}
        aria-hidden="true"
      >
        <circle cx="300" cy="300" r="280" stroke="#B08D57" strokeWidth="1.5" fill="none" />
        <circle cx="300" cy="300" r="140" stroke="#B08D57" strokeWidth="1" fill="none" />
        <circle cx="300" cy="300" r="40" stroke="#B08D57" strokeWidth="0.5" fill="none" />
      </svg>

      {/* Gold accent line top */}
      <div
        style={{
          width: "3px",
          height: "clamp(3rem, 5vw, 5rem)",
          backgroundColor: "var(--brass)",
          marginBottom: "2.5rem",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "7fr 5fr",
          gap: "clamp(3rem, 6vw, 7rem)",
          alignItems: "center",
        }}
        className="enroll-grid"
      >
        {/* Left: headline */}
        <div>
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--brass)",
              display: "block",
              marginBottom: "1.5rem",
            }}
          >
            Royal Basketball Academy
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              fontWeight: 900,
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
              color: "var(--ivory)",
              marginBottom: "2rem",
            }}
          >
            Your journey
            <br />
            starts with{" "}
            <em style={{ color: "var(--brass)", fontStyle: "italic" }}>one session.</em>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              color: "rgba(247, 243, 236, 0.55)",
              lineHeight: 1.7,
              maxWidth: "42ch",
            }}
          >
            Book a free trial session and experience what Royal Basketball Academy
            is about. No commitment needed — just show up, lace up, and play.
          </p>
        </div>

        {/* Right: CTA block */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            alignItems: "flex-start",
          }}
        >
          <Link href="#contact" id="enroll-cta-primary" className="btn-magnetic">
            <span>Book a Trial Session</span>
            <ArrowRight size={14} />
          </Link>

          <Link href="#contact" id="enroll-cta-secondary" className="btn-outline">
            <span>Contact Us</span>
          </Link>

          {/* Contact details */}
          <div
            style={{
              marginTop: "1.5rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid rgba(176, 141, 87, 0.2)",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            {[
              { label: "Location", value: "Siddhipur, Sana Gaon–Sankhadevi Road, Kathmandu" },
              { label: "Instagram", value: "@royalbasketballnepal" },
              { label: "Founded", value: "2018" },
            ].map((item) => (
              <div key={item.label}>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.65rem",
                    fontWeight: 600,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--brass)",
                    display: "block",
                    opacity: 0.7,
                  }}
                >
                  {item.label}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    color: "var(--ivory)",
                    opacity: 0.7,
                  }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .enroll-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
