"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";

const GALLERY_IMAGES = [
  { src: "/images/players-training.png", alt: "Players training at Royal Basketball Academy", span: 2 },
  { src: "/images/court.png", alt: "The Royal Basketball Academy court, Siddhipur", span: 1 },
  { src: "/images/coaches.png", alt: "Coaches Nripesh Shrestha and Binod Maharjan", span: 1 },
  { src: "/images/hero-player.png", alt: "Elite training session at Royal Basketball Academy", span: 2 },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      style={{
        backgroundColor: "var(--ivory)",
        padding: "clamp(5rem, 10vw, 9rem) clamp(2rem, 6vw, 7rem)",
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
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span className="court-divider" />
            <span className="section-label">Facility &amp; Court</span>
          </div>
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
            Life at the{" "}
            <em style={{ color: "var(--maroon)", fontStyle: "italic" }}>Academy.</em>
          </h2>
        </div>
        <Link href="#contact" id="gallery-cta" className="btn-outline">
          <span>Book a Visit</span>
          <ArrowRight size={14} />
        </Link>
      </div>

      {/* Asymmetric photo grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "auto auto",
          gap: "1rem",
        }}
        className="gallery-grid"
      >
        {GALLERY_IMAGES.map((img, i) => (
          <div
            key={i}
            style={{
              gridColumn: `span ${img.span}`,
              position: "relative",
              aspectRatio: img.span === 2 ? "16/9" : "4/5",
              overflow: "hidden",
              clipPath: i % 2 === 0
                ? "polygon(0 0, 100% 0, 100% 92%, 96% 100%, 0 100%)"
                : "polygon(0 0, 96% 0, 100% 8%, 100% 100%, 0 100%)",
            }}
            className="gallery-item"
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 2,
                background: "rgba(107, 20, 32, 0.05)",
                mixBlendMode: "multiply",
                transition: "background 0.4s ease",
              }}
              className="gallery-overlay"
            />
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes={img.span === 2 ? "66vw" : "33vw"}
              style={{
                objectFit: "cover",
                filter: "sepia(10%) saturate(0.88) brightness(0.92)",
                transition: "transform 0.6s cubic-bezier(0.4,0,0.2,1), filter 0.4s ease",
              }}
              className="gallery-img"
            />
          </div>
        ))}
      </div>

      <style>{`
        .gallery-item:hover .gallery-overlay {
          background: rgba(107, 20, 32, 0.0) !important;
        }
        .gallery-item:hover .gallery-img {
          transform: scale(1.04) !important;
          filter: sepia(0%) saturate(1) brightness(1) !important;
        }
        @media (max-width: 640px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
          .gallery-grid > div { grid-column: span 1 !important; aspect-ratio: 4/3 !important; }
        }
      `}</style>
    </section>
  );
}
