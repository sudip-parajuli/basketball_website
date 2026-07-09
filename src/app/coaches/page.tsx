import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Coaches",
  description: "Meet the coaches of Royal Basketball Academy — Nripesh Shrestha and Binod Maharjan, head coaches and co-founders.",
};

export default function CoachesPage() {
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
          <span className="section-label">Coaches</span>
        </div>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 6vw, 5rem)",
            fontWeight: 900,
            lineHeight: 0.92,
            letterSpacing: "-0.03em",
            color: "var(--charcoal)",
            marginBottom: "3rem",
          }}
        >
          Meet the{" "}
          <em style={{ color: "var(--maroon)", fontStyle: "italic" }}>Coaches.</em>
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
          {/* Coach 1 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "5fr 7fr",
              gap: "clamp(3rem, 5vw, 6rem)",
              alignItems: "center",
            }}
            className="coach-page-grid"
          >
            <div
              style={{
                position: "relative",
                aspectRatio: "3/4",
                overflow: "hidden",
                clipPath: "polygon(0 0, 100% 0, 100% 92%, 92% 100%, 0 100%)",
              }}
            >
              <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "rgba(107,20,32,0.06)", mixBlendMode: "multiply" }} />
              <Image
                src="/images/coaches.png"
                alt="Nripesh Shrestha — Head Coach at Royal Basketball Academy"
                fill
                sizes="35vw"
                style={{ objectFit: "cover", objectPosition: "left center", filter: "sepia(8%) saturate(0.88) brightness(0.93)" }}
              />
            </div>
            <div>
              <blockquote
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                  fontWeight: 600,
                  fontStyle: "italic",
                  lineHeight: 1.25,
                  color: "var(--maroon)",
                  marginBottom: "2.5rem",
                  borderLeft: "3px solid var(--brass)",
                  paddingLeft: "1.5rem",
                }}
              >
                &ldquo;Basketball is more than a sport — it&rsquo;s a language. My goal is to make every player fluent in it.&rdquo;
              </blockquote>
              <hr className="rule" style={{ marginBottom: "2rem" }} />
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 900, letterSpacing: "-0.02em", color: "var(--charcoal)", marginBottom: "0.25rem" }}>
                Nripesh Shrestha
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--brass)", marginBottom: "1.5rem" }}>
                Head Coach &amp; Co-Founder
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "#6A5A54", lineHeight: 1.75, maxWidth: "45ch", marginBottom: "1.5rem" }}>
                Coach Nripesh has been at the heart of Kathmandu&rsquo;s basketball development since the academy&rsquo;s founding in 2018. His approach balances technical precision with a deep understanding of the mental game, producing players who perform under pressure.
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "#6A5A54", lineHeight: 1.75, maxWidth: "45ch" }}>
                With years of experience coaching at the grassroots level, he has built a program that prioritizes long-term player development over short-term results. His players describe him as demanding but deeply invested — a coach who remembers every name and every story.
              </p>
            </div>
          </div>

          {/* Coach 2 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "7fr 5fr",
              gap: "clamp(3rem, 5vw, 6rem)",
              alignItems: "center",
            }}
            className="coach-detail-grid reverse-grid"
          >
            <div style={{ order: 1 }}>
              <blockquote
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                  fontWeight: 600,
                  fontStyle: "italic",
                  lineHeight: 1.25,
                  color: "var(--maroon)",
                  marginBottom: "2.5rem",
                  borderLeft: "3px solid var(--brass)",
                  paddingLeft: "1.5rem",
                }}
              >
                &ldquo;Discipline is the bridge between goals and achievement. We build that bridge every single day here.&rdquo;
              </blockquote>
              <hr className="rule" style={{ marginBottom: "2rem" }} />
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 900, letterSpacing: "-0.02em", color: "var(--charcoal)", marginBottom: "0.25rem" }}>
                Binod Maharjan
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--brass)", marginBottom: "1.5rem" }}>
                Head Coach &amp; Co-Founder
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "#6A5A54", lineHeight: 1.75, maxWidth: "45ch", marginBottom: "1.5rem" }}>
                Coach Binod brings intensity and structure to every session. A firm believer in fundamentals, he ensures every player — regardless of age or experience — leaves each practice better than they arrived.
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "#6A5A54", lineHeight: 1.75, maxWidth: "45ch" }}>
                His coaching philosophy is rooted in the belief that basketball teaches life skills — resilience, teamwork, and the discipline to show up even on days you don&rsquo;t feel like it. Under his guidance, players learn that success follows preparation.
              </p>
            </div>
            <div
              style={{
                position: "relative",
                aspectRatio: "3/4",
                overflow: "hidden",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 8% 100%, 0 92%)",
              }}
            >
              <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "rgba(107,20,32,0.06)", mixBlendMode: "multiply" }} />
              <Image
                src="/images/coaches.png"
                alt="Binod Maharjan — Head Coach at Royal Basketball Academy"
                fill
                sizes="35vw"
                style={{ objectFit: "cover", objectPosition: "right center", filter: "sepia(8%) saturate(0.88) brightness(0.93)" }}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .coach-page-grid, .reverse-grid { grid-template-columns: 1fr !important; }
          .reverse-grid > div:first-child { order: unset !important; }
        }
      `}</style>
    </main>
  );
}