import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import PhilosophyScroll from "@/components/PhilosophyScroll";
import Stats from "@/components/Stats";
import Programs from "@/components/Programs";
import Coaches from "@/components/Coaches";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Schedule from "@/components/Schedule";
import InstagramFeed from "@/components/InstagramFeed";
import EnrollCTA from "@/components/EnrollCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Royal Basketball Academy | Kathmandu, Nepal — Premier Basketball Training",
  description:
    "Royal Basketball Academy in Siddhipur, Kathmandu — basketball training for all ages since 2018. Youth programs, competitive teams, private coaching, and adult sessions under Coaches Nripesh Shrestha & Binod Maharjan.",
};

export default function Home() {
  return (
    <main>
      {/* Skip to content for accessibility */}
      <a
        href="#hero"
        className="skip-link"
        style={{
          position: "absolute",
          top: "-100px",
          left: "1rem",
          backgroundColor: "var(--maroon)",
          color: "var(--ivory)",
          padding: "0.5rem 1rem",
          fontFamily: "var(--font-body)",
          fontSize: "0.875rem",
          fontWeight: 600,
          textDecoration: "none",
          zIndex: 9999,
          transition: "top 0.2s ease",
        }}
      >
        Skip to content
      </a>

      <Nav />
      <Hero />
      <Marquee />
      <PhilosophyScroll />
      <Stats />
      <Programs />
      <Coaches />
      <Testimonials />
      <Gallery />
      <Schedule />
      <InstagramFeed />
      <EnrollCTA />
      <Contact />
      <Footer />
    </main>
  );
}
