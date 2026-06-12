"use client";

import { Instrument_Serif, Inter } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

// Load the fonts from Google Fonts via Next.js optimal font loading
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

export default function VelorahHero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div
      className={`${inter.variable} ${instrumentSerif.variable} velorah-theme relative min-h-screen w-full flex flex-col justify-between overflow-hidden select-none`}
      style={{
        backgroundColor: "hsl(201, 100%, 13%)",
        color: "hsl(0, 0%, 100%)",
        fontFamily: "var(--font-body), sans-serif",
      }}
    >
      {/* Scoped CSS styling for custom classes like liquid-glass and custom keyframe animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        .velorah-theme {
          --background: 201 100% 13%;
          --foreground: 0 0% 100%;
          --muted-foreground: 240 4% 66%;
          --primary: 0 0% 100%;
          --primary-foreground: 0 0% 4%;
          --secondary: 0 0% 10%;
          --muted: 0 0% 10%;
          --accent: 0 0% 10%;
          --border: 0 0% 18%;
          --input: 0 0% 18%;
        }

        .liquid-glass {
          background: rgba(255, 255, 255, 0.01);
          background-blend-mode: luminosity;
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border: none;
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
          transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .liquid-glass::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1.4px;
          background: linear-gradient(180deg,
            rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%,
            rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
            rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        @keyframes fade-rise {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-rise {
          animation: fade-rise 0.8s ease-out both;
        }

        .animate-fade-rise-delay {
          animation: fade-rise 0.8s ease-out 0.2s both;
        }

        .animate-fade-rise-delay-2 {
          animation: fade-rise 0.8s ease-out 0.4s both;
        }
      `}} />

      {/* Fullscreen Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      >
        <source src="/video/Cinematic Loop Animation2.mp4" type="video/mp4" />
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4" type="video/mp4" />
      </video>

      {/* Glassmorphic Navigation Bar */}
      <header className="relative w-full z-10">
        <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
          {/* Logo */}
          <Link
            href="/velorah"
            className="text-3xl tracking-tight text-white hover:opacity-90 transition-opacity"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Velorah<sup className="text-xs">®</sup>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-10">
            <Link href="#" className="text-sm text-white transition-colors">
              Home
            </Link>
            <Link href="#" className="text-sm text-[#a8a8a8] hover:text-white transition-colors">
              Studio
            </Link>
            <Link href="#" className="text-sm text-[#a8a8a8] hover:text-white transition-colors">
              About
            </Link>
            <Link href="#" className="text-sm text-[#a8a8a8] hover:text-white transition-colors">
              Journal
            </Link>
            <Link href="#" className="text-sm text-[#a8a8a8] hover:text-white transition-colors">
              Reach Us
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="liquid-glass rounded-full px-6 py-2.5 text-sm text-white hover:scale-[1.03] cursor-pointer">
              Begin Journey
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:opacity-80 transition-opacity z-20 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Dropdown Menu (Glassmorphic) */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 py-6 px-8 mx-4 rounded-3xl bg-[rgba(5,15,30,0.85)] backdrop-blur-lg border border-white/5 flex flex-col gap-6 z-20 shadow-2xl">
            <Link href="#" onClick={() => setMobileMenuOpen(false)} className="text-base text-white">
              Home
            </Link>
            <Link href="#" onClick={() => setMobileMenuOpen(false)} className="text-base text-[#a8a8a8] hover:text-white">
              Studio
            </Link>
            <Link href="#" onClick={() => setMobileMenuOpen(false)} className="text-base text-[#a8a8a8] hover:text-white">
              About
            </Link>
            <Link href="#" onClick={() => setMobileMenuOpen(false)} className="text-base text-[#a8a8a8] hover:text-white">
              Journal
            </Link>
            <Link href="#" onClick={() => setMobileMenuOpen(false)} className="text-base text-[#a8a8a8] hover:text-white">
              Reach Us
            </Link>
            <button className="liquid-glass rounded-full px-6 py-3 text-sm text-white hover:scale-[1.03] cursor-pointer mt-2 w-full">
              Begin Journey
            </button>
          </div>
        )}
      </header>

      {/* Cinematic Hero Section */}
      <main className="relative flex flex-col items-center justify-center text-center px-6 pt-32 pb-40 py-[90px] z-10 max-w-7xl mx-auto flex-1">
        <h1
          className="text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-7xl font-normal text-white animate-fade-rise"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Where <em className="not-italic text-[#a8a8a8]">dreams</em> rise <br className="hidden sm:inline" />
          <em className="not-italic text-[#a8a8a8]">through the silence.</em>
        </h1>

        <p className="text-[#a8a8a8] text-base sm:text-lg max-w-2xl mt-8 leading-relaxed animate-fade-rise-delay">
          We&apos;re designing tools for deep thinkers, bold creators, and quiet rebels. Amid the chaos, we build digital spaces for sharp focus and inspired work.
        </p>

        <button className="liquid-glass rounded-full px-14 py-5 text-base text-white mt-12 hover:scale-[1.03] cursor-pointer animate-fade-rise-delay-2">
          Begin Journey
        </button>
      </main>

      {/* Footer to balance spacing */}
      <footer className="relative w-full z-10 py-6 text-center text-xs text-[#a8a8a8]/40">
        © {new Date().getFullYear()} Velorah. All rights reserved.
      </footer>
    </div>
  );
}
