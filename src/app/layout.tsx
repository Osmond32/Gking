import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "../css/style.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "G-King | Professional Wrestler Showcase",
  description: "Il sito ufficiale del wrestler professionista Giuseppe Campagna, in arte G-King - Southern Warrior. News, match, palmarès e booking info.",
  keywords: ["G-King", "Giuseppe Campagna", "wrestler", "wrestling italiano", "RIW", "Southern Warrior", "Messina"],
  authors: [{ name: "Next Gen Developer" }],
  openGraph: {
    title: "G-King | Southern Warrior Showcase",
    description: "Il sito ufficiale del wrestler professionista G-King. Forza, determinazione e cuore del Sud.",
    url: "https://gkingwrestling.com",
    siteName: "G-King Wrestling",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${anton.variable} ${inter.variable} h-full dark`}>
      <body className="min-h-full flex flex-col bg-wrestling-black text-white antialiased overflow-x-hidden">
        {/* Grain Noise Layer */}
        <div className="noise-overlay" />
        
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
