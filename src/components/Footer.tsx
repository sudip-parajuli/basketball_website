"use client";

import Image from "next/image";
import Link from "next/link";

const FOOTER_LINKS = {
  Programs: [
    { label: "All Programs", href: "/programs" },
    { label: "Little Hoopers", href: "/programs" },
    { label: "Fundamentals", href: "/programs" },
    { label: "Competitive Team", href: "/programs" },
    { label: "Private Coaching", href: "/programs" },
  ],
  Academy: [
    { label: "About", href: "/#about" },
    { label: "Coaches", href: "/coaches" },
    { label: "Gallery", href: "/gallery" },
    { label: "Schedule", href: "/schedule" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer
      id="footer"
      style={{
        backgroundColor: "var(--charcoal)",
        color: "var(--ivory)",
        padding: "clamp(4rem, 8vw, 7rem) clamp(2rem, 6vw, 7rem) 2rem",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "clamp(2rem, 4vw, 5rem)",
          marginBottom: "4rem",
          paddingBottom: "4rem",
          borderBottom: "1px solid rgba(247, 243, 236, 0.08)",
        }}
        className="footer-grid"
      >
        {/* Brand */}
        <div>
          <Link href="/" className="footer-brand" style={{ display: "flex", alignItems: "center", gap: "0.625rem", textDecoration: "none", color: "var(--ivory)", marginBottom: "1.5rem" }}>
            <Image
              src="/images/logo.jpg"
              alt="Royal Basketball Academy"
              width={28}
              height={28}
              style={{ objectFit: "contain", borderRadius: "50%" }}
            />
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", letterSpacing: "-0.01em" }}>
              Royal Basketball
              <span style={{ display: "block", fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--brass)", marginTop: "2px" }}>
                Academy · Est. 2018
              </span>
            </span>
          </Link>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "rgba(247,243,236,0.5)", lineHeight: 1.7, maxWidth: "30ch", marginBottom: "1.5rem" }}>
            Where passion meets precision, and dreams take flight on the court of excellence.
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "rgba(247,243,236,0.35)", lineHeight: 1.6 }}>
            Sana Gaun, Siddhipur, Lalitpur, Kathmandu Valley, Nepal<br />
            +977 985-1146824 · royalbasketballnepal@gmail.com
          </p>
        </div>

        {/* Links */}
        {Object.entries(FOOTER_LINKS).map(([category, links]) => (
          <div key={category}>
            <h3 style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--brass)", marginBottom: "1.25rem" }}>
              {category}
            </h3>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="footer-link"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    color: "rgba(247,243,236,0.55)",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        ))}
      </div>

      {/* Bottom row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "rgba(247,243,236,0.3)" }}>
          © {new Date().getFullYear()} Royal Basketball Academy / Royal Sports Central. All rights reserved.
        </p>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <a
            href="https://instagram.com/royalbasketballnepal"
            target="_blank"
            rel="noopener noreferrer"
            id="footer-instagram"
            className="footer-link"
            style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "rgba(247,243,236,0.4)", textDecoration: "none", letterSpacing: "0.08em" }}
          >
            Instagram
          </a>
        </div>
      </div>

      <style>{`
        .footer-link { color: rgba(247,243,236,0.55) !important; }
        .footer-link:hover { color: var(--ivory) !important; }
        #footer-instagram:hover { color: var(--brass) !important; }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          .footer-grid > div:first-child { grid-column: span 2; }
        }
      `}</style>
    </footer>
  );
}