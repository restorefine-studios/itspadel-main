import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'itspadel | Your game starts here',
  description:
    'itspadel is a modern padel club in East Kilbride offering premium padel courts, competitive play, and a vibrant padel community. Your game starts here.',
    icons: {
    icon: '/itspadel-logo-main.svg',
  },
  keywords: [
    'padel East Kilbride',
    'padel courts East Kilbride',
    'padel club Scotland',
    'play padel',
    'padel community',
    'competitive padel',
    'itspadel'
  ],
  openGraph: {
    title: 'itspadel | Your game starts here',
    description:
      'Experience padel at itspadel — premium courts, competitive growth, and a connected community in East Kilbride.',
    url: 'https://itspadel.co.uk',
    siteName: 'itspadel',
    images: [
      {
        url: '/itspadel-logo-main.svg',
        width: 1200,
        height: 630,
        alt: 'itspadel – Padel courts and community'
      }
    ],
    locale: 'en_GB',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'itspadel | Your game starts here',
    description:
      'Premium padel experience, community, and competitive growth in East Kilbride.',
    images: ['/itspadel-logo-main.svg']
  },
  alternates: {
    canonical: 'https://itspadel.co.uk'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
