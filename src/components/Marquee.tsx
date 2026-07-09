"use client";

import { useRef } from "react";
import { BasketballIcon } from "@/components/icons";

const TICKER_ITEMS = [
  "EST. 2018",
  "KATHMANDU VALLEY",
  "GRASSROOTS TO ELITE",
  "COACH NRIPESH SHRESTHA",
  "COACH BINOD MAHARJAN",
  "SIDDHIPUR · NEPAL",
  "WHERE PASSION MEETS PRECISION",
  "BASKETBALL EXCELLENCE",
];

export default function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  // Duplicate items for seamless loop
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div
      id="marquee"
      style={{
        backgroundColor: "var(--maroon)",
        overflow: "hidden",
        position: "relative",
        borderTop: "1px solid rgba(176, 141, 87, 0.3)",
        borderBottom: "1px solid rgba(176, 141, 87, 0.3)",
        padding: "0.875rem 0",
      }}
      aria-label="Academy highlights ticker"
    >
      <div
        ref={trackRef}
        className="marquee-track"
        style={{ gap: "0" }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "1.25rem",
              padding: "0 2rem",
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--ivory)",
              whiteSpace: "nowrap",
            }}
          >
            {item}
            <BasketballIcon
              size={12}
              style={{ color: "var(--brass)" }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
