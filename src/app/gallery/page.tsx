import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from Royal Basketball Academy — see the court, training sessions, and life at Siddhipur, Kathmandu.",
};

const GALLERY = [
  { src: "/images/basketball_female1.jpg", alt: "Female players in a training drill", span: 2 },
  { src: "/images/basketball2.jpg", alt: "The Royal Basketball Academy court", span: 1 },
  { src: "/images/basketball_female3.jpg", alt: "Female player at Royal Basketball Academy", span: 1 },
  { src: "/images/mainhero_basketball.jpg", alt: "Elite training session", span: 2 },
  { src: "/images/basketball4.jpg", alt: "Evening session on the Siddhipur court", span: 1 },
  { src: "/images/basketball_female2.jpg", alt: "Group huddle after training", span: 1 },
  { src: "/images/basketball_female4.jpg", alt: "Team photo", span: 2 },
];

export default function GalleryPage() {
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
          <span className="section-label">Media</span>
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
          Life at the{" "}
          <em style={{ color: "var(--maroon)", fontStyle: "italic" }}>Academy.</em>
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
          }}
          className="gallery-page-grid"
        >
          {GALLERY.map((img, i) => (
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
              className="gallery-page-item"
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 2,
                  background: "rgba(107,20,32,0.05)",
                  mixBlendMode: "multiply",
                  transition: "background 0.4s ease",
                }}
                className="gallery-page-overlay"
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
                className="gallery-page-img"
              />
            </div>
          ))}
        </div>
      </section>
      <Footer />

      <style>{`
        .gallery-page-item:hover .gallery-page-overlay { background: rgba(107,20,32,0) !important; }
        .gallery-page-item:hover .gallery-page-img {
          transform: scale(1.04) !important;
          filter: sepia(0%) saturate(1) brightness(1) !important;
        }
        @media (max-width: 640px) {
          .gallery-page-grid { grid-template-columns: 1fr !important; }
          .gallery-page-grid > div { grid-column: span 1 !important; aspect-ratio: 4/3 !important; }
        }
      `}</style>
    </main>
  );
}