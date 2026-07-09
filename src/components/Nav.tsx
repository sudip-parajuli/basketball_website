"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BasketballIcon, MenuIcon, CloseIcon } from "@/components/icons";

const navLinks = [
  { href: "/#programs", label: "Programs" },
  { href: "/#coaches", label: "Coaches" },
  { href: "/#about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        id="nav"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? "0.875rem 2.5rem" : "1.5rem 2.5rem",
          backgroundColor: scrolled ? "rgba(247, 243, 236, 0.96)" : "rgba(247, 243, 236, 0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(107, 20, 32, 0.06)",
          transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          id="nav-logo"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.625rem",
            textDecoration: "none",
            color: "var(--maroon)",
          }}
        >
          <BasketballIcon size={24} />
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "1.05rem",
              letterSpacing: "-0.01em",
              lineHeight: 1,
            }}
          >
            Royal Basketball
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--brass)",
                marginTop: "2px",
              }}
            >
              Academy · Est. 2018
            </span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <nav aria-label="Main navigation" style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              id={`nav-link-${link.label.toLowerCase()}`}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8125rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--charcoal)",
                textDecoration: "none",
                position: "relative",
                paddingBottom: "2px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--maroon)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--charcoal)";
              }}
            >
              {link.label}
            </Link>
          ))}

          <Link href="/contact" id="nav-cta" className="btn-magnetic" style={{ fontSize: "0.75rem", padding: "0.625rem 1.25rem" }}>
            <span>Enroll Now</span>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          id="nav-menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--maroon)",
            padding: "4px",
          }}
          className="mobile-menu-btn"
        >
          {menuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          id="nav-mobile-menu"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99,
            backgroundColor: "var(--ivory)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "2.5rem",
            gap: "0.5rem",
          }}
        >
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 8vw, 4rem)",
                fontWeight: 700,
                color: "var(--charcoal)",
                textDecoration: "none",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                borderBottom: i === navLinks.length - 1 ? "none" : "1px solid rgba(107,20,32,0.1)",
                paddingBottom: "1rem",
                marginBottom: "0.5rem",
                width: "100%",
                display: "block",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--maroon)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--charcoal)"; }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="btn-magnetic"
            style={{ marginTop: "2rem" }}
          >
            <span>Enroll Now</span>
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          header nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          header { padding: 1rem 1.25rem !important; }
        }
      `}</style>
    </>
  );
}
