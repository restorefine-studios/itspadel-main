import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "itspadel | Indoor Padel Courts in East Kilbride, Scotland",
    template: "%s | itspadel",
  },
  description: "itspadel is Scotland's premier indoor padel club in East Kilbride. Book courts, join coaching sessions, shop padel equipment, and be part of the UK's fastest growing racket sport community.",
  icons: {
    icon: "/itspadel-favicon.ico",
  },
  keywords: [
    "padel East Kilbride",
    "padel courts East Kilbride",
    "padel club Scotland",
    "indoor padel UK",
    "padel community Scotland",
    "competitive padel",
    "itspadel",
    "padel near me",
    "padel Glasgow",
    "padel racket sport UK",
  ],
  metadataBase: new URL("https://www.itspadel.co.uk"),
  openGraph: {
    title: "itspadel | Indoor Padel Courts in East Kilbride, Scotland",
    description: "Scotland's premier indoor padel club — premium courts, expert coaching, pro shop, and a connected community in East Kilbride.",
    url: "https://www.itspadel.co.uk",
    siteName: "itspadel",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "itspadel – Indoor Padel Courts in East Kilbride",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "itspadel | Indoor Padel Courts in East Kilbride, Scotland",
    description: "Scotland's premier indoor padel club — premium courts, expert coaching, and a vibrant community in East Kilbride.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.itspadel.co.uk",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${interSans.variable} ${jetbrainsMono.variable} antialiased`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
