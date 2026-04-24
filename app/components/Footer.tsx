"use client";

import { useState } from "react";
import { Instagram, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubscribe = async () => {
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <footer className="relative bg-[#050505] pt-24 pb-8 overflow-hidden text-white font-inter">
      
      {/* Background Graphic */}
      <div className="absolute top-[-100px] right-[-10%] pointer-events-none opacity-5">
        <h1 className="font-bison font-black text-[300px] lg:text-[450px] leading-none text-white tracking-tighter uppercase" style={{ transform: 'skewX(-15deg)' }}>
          PADEL
        </h1>
      </div>

      <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        
        {/* Top Boundary / Cyan Slant */}
        <div className="w-full flex justify-between items-end mb-16 border-b border-gray-800 pb-10">
          <Image
            src="/itspadel-logo-alt.svg"
            alt="Its Padel Logo"
            width={160}
            height={160}
            className="h-20 lg:h-24 object-contain brightness-0 invert"
          />
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/itspadeluk/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-[#111] border border-[#222] hover:bg-[#009FF3] hover:border-[#009FF3] text-white transition-all transform hover:-translate-y-1"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.tiktok.com/@itspadeluk?lang=en-GB"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-[#111] border border-[#222] hover:bg-[#009FF3] hover:border-[#009FF3] text-white transition-all transform hover:-translate-y-1"
            >
              <svg viewBox="0 0 28 28" fill="currentColor" stroke="none" className="w-5 h-5">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Middle Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 pb-20 border-b border-gray-800">
          
          {/* Newsletter (Span 5) */}
          <div className="lg:col-span-5">
            <h3 
              className="font-bison font-bold text-4xl md:text-5xl lg:text-6xl uppercase tracking-widest text-white mb-4"
              style={{ transform: 'skewX(-15deg)' }}
            >
              JOIN THE ACADEMY
            </h3>
            <p className="font-inter text-gray-400 text-sm md:text-base font-medium max-w-sm mb-8">
              Stay up to date with the latest news, coaching tips, and exclusive arena offers by joining our awesome newsletter.
            </p>
            {status === "success" ? (
              <p className="font-inter text-sm text-[#009FF3] font-medium">
                You&apos;re subscribed — check your inbox!
              </p>
            ) : (
              <>
                <div className="relative max-w-md">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
                    onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                    placeholder="ENTER YOUR EMAIL"
                    className="w-full px-4 py-4 bg-[#111] border border-gray-800 text-white font-bison italic tracking-widest uppercase text-xl placeholder-gray-600 focus:outline-none focus:border-[#009FF3] transition-colors"
                  />
                  <button
                    onClick={handleSubscribe}
                    disabled={status === "loading"}
                    className="absolute right-0 top-0 h-full px-6 bg-[#009FF3] hover:bg-[#0080cc] transition-colors flex items-center justify-center text-white disabled:opacity-60"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </div>
                {status === "error" && (
                  <p className="mt-2 font-inter text-xs text-red-400">Something went wrong. Please try again.</p>
                )}
              </>
            )}
          </div>

          {/* Links (Span 7) */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
            {/* Column 1 */}
            <div>
              <h4 
                className="font-bison font-bold text-3xl uppercase tracking-widest text-[#009FF3] mb-6"
                style={{ transform: 'skewX(-15deg)' }}
              >
                SPORT
              </h4>
              <ul className="space-y-4 font-inter font-bold text-xs tracking-widest uppercase text-gray-400">
                <li><Link href="/clubs" className="hover:text-white transition-colors">Locations</Link></li>
                <li><Link href="/events" className="hover:text-white transition-colors">Events</Link></li>
                <li><Link href="/coaching" className="hover:text-white transition-colors">Coaching</Link></li>
                <li><Link href="/clubs" className="hover:text-white transition-colors">Clubs</Link></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 
                className="font-bison font-bold text-3xl uppercase tracking-widest text-[#009FF3] mb-6"
                style={{ transform: 'skewX(-15deg)' }}
              >
                RESOURCES
              </h4>
              <ul className="space-y-4 font-inter font-bold text-xs tracking-widest uppercase text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Padel News</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">How to Book</Link></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="col-span-2 md:col-span-1">
              <h4 
                className="font-bison font-bold text-3xl uppercase tracking-widest text-[#009FF3] mb-6"
                style={{ transform: 'skewX(-15deg)' }}
              >
                ABOUT
              </h4>
              <ul className="space-y-4 font-inter font-bold text-xs tracking-widest uppercase text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
          
        </div>

        {/* Bottom Credits */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4">
          <p className="font-inter font-bold text-[10px] tracking-[0.2em] uppercase text-gray-600">
            ALL RIGHTS RESERVED © {currentYear} ITS PADEL
          </p>
          <Link
            href="https://restorefine.com"
            target="_blank"
            className="font-inter font-bold text-[10px] tracking-[0.2em] text-gray-600 hover:text-[#009FF3] transition-colors uppercase"
          >
            DESIGNED & BUILT BY RESTOREFINE STUDIO
          </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
