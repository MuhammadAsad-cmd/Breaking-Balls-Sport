import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import BreakingNews from "./_components/BreakingNews/BreakingNews";
import NavBar from "./_components/Navbar/NavBar";
import Footer from "./_components/Footer/Footer";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
  variable: "--font-montserrat", // Custom CSS variable
});

export const metadata: Metadata = {
  // Primary metadata
  title: "Breaking Balls Sports",
  description: "Get Breaking Balls Sports, and Nation Footbal League insights",
  icons: ["/images/mainlogo2.svg"],

  // Canonical URL for SEO
  alternates: {
    canonical: "https://breaking-balls-sport.vercel.app",
  },

  metadataBase: new URL("https://breaking-balls-sport.vercel.app"),

  // Open Graph (OG) tags for social media sharing
  openGraph: {
    title: "Breaking Balls Sports",
    description:
      "Get Breaking Balls Sports, and Nation Footbal League insights",
    images: [
      {
        url: "/images/Breaking-Balls-Sports.png",
        width: 1200,
        height: 630,
        alt: "Breaking Balls Sports",
      },
    ],
    type: "website",
    url: "https://breaking-balls-sport.vercel.app",
    siteName: "breaking-balls-sport",
    locale: "en_US",
  },

  // Twitter Card data for sharing on Twitter
  twitter: {
    card: "summary_large_image",
    title: "Breaking Balls Sports",
    description:
      "Get Breaking Balls Sports, and Nation Footbal League insights",
    site: "@breaking-balls-sport",
    creator: "@breaking-balls-sport",
    images: ["/images/Breaking-Balls-Sports.png"],
  },

  // Robots meta tag (instructs search engine crawlers)
  robots: {
    index: true, // Allow indexing
    follow: true, // Allow following links on the page
  },
};

export const viewport = "width=device-width, initial-scale=1";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <BreakingNews />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
