import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Royal Basketball Academy | Kathmandu, Nepal",
    template: "%s | Royal Basketball Academy",
  },
  description:
    "Royal Basketball Academy — Kathmandu's premier basketball institution since 2018. Grassroots to elite training programs for all ages under Coaches Nripesh Shrestha & Binod Maharjan.",
  keywords: [
    "basketball academy Kathmandu",
    "basketball training Nepal",
    "basketball kids Nepal",
    "NBL Nepal",
    "Nripesh Shrestha",
    "Binod Maharjan",
    "Royal Sports Central",
    "Siddhipur basketball",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://royalbasketballacademy.com",
    siteName: "Royal Basketball Academy",
    title: "Royal Basketball Academy | Kathmandu, Nepal",
    description:
      "Where passion meets precision, and dreams take flight on the court of excellence.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
