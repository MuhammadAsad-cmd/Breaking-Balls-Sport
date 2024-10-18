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
  title: "Breaking Balls Sports",
  description: "Get Breaking Balls Sports, and Nation Footbal League insights",
};

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
