"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";

function UnsubscribeContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "invalid">("idle");

  useEffect(() => {
    if (!token) setStatus("invalid");
  }, [token]);

  const handleUnsubscribe = async () => {
    if (!token) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      const json = await res.json();
      setStatus(json.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">

        {/* Logo mark */}
        <div className="w-1 h-12 bg-[#009FF3] mx-auto mb-8" />

        {status === "invalid" && (
          <>
            <h1 className="font-bison text-4xl text-white mb-4">Invalid Link</h1>
            <p className="font-inter text-sm text-white/40 mb-8">
              This unsubscribe link is invalid or has expired.
            </p>
            <Link href="/" className="font-inter text-sm font-medium text-[#009FF3] underline underline-offset-4">
              Back to itspadel
            </Link>
          </>
        )}

        {status === "idle" && (
          <>
            <h1 className="font-bison text-4xl md:text-5xl text-white mb-4">
              Unsubscribe
            </h1>
            <p className="font-inter text-sm text-white/40 mb-10 leading-relaxed">
              You&apos;ll no longer receive newsletters or updates from itspadel. You can resubscribe anytime from our website.
            </p>
            <button
              onClick={handleUnsubscribe}
              className="w-full bg-white text-black font-inter font-semibold text-sm uppercase tracking-widest py-4 hover:bg-[#009FF3] hover:text-white transition-colors mb-4"
            >
              Confirm Unsubscribe
            </button>
            <Link href="/" className="block font-inter text-xs text-white/30 hover:text-white/60 transition-colors">
              Cancel — keep me subscribed
            </Link>
          </>
        )}

        {status === "loading" && (
          <>
            <h1 className="font-bison text-4xl text-white mb-4">Processing...</h1>
            <p className="font-inter text-sm text-white/40">Just a moment.</p>
          </>
        )}

        {status === "success" && (
          <>
            <div className="w-12 h-12 rounded-full bg-[#009FF3] flex items-center justify-center mx-auto mb-6">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h1 className="font-bison text-4xl text-white mb-4">Unsubscribed</h1>
            <p className="font-inter text-sm text-white/40 mb-8 leading-relaxed">
              You&apos;ve been removed from our list. We&apos;re sorry to see you go — you can always rejoin from the footer of our website.
            </p>
            <Link href="/" className="font-inter text-sm font-medium text-[#009FF3] underline underline-offset-4">
              Back to itspadel
            </Link>
          </>
        )}

        {status === "error" && (
          <>
            <h1 className="font-bison text-4xl text-white mb-4">Something went wrong</h1>
            <p className="font-inter text-sm text-white/40 mb-8">
              We couldn&apos;t process your request. Please try again or contact us directly.
            </p>
            <button
              onClick={handleUnsubscribe}
              className="font-inter text-sm font-medium text-[#009FF3] underline underline-offset-4"
            >
              Try again
            </button>
          </>
        )}

      </div>
    </main>
  );
}

export default function UnsubscribePage() {
  return (
    <Suspense>
      <UnsubscribeContent />
    </Suspense>
  );
}
