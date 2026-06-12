import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import About from "@/components/About";
import HowIWork from "@/components/HowIWork";
import ROICalculator from "@/components/ROICalculator";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden bg-transparent text-white select-none">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="fixed inset-0 w-full h-[105vh] -bottom-[5vh] object-cover z-0 pointer-events-none opacity-30 scale-105 origin-top"
      >
        <source src="/video/Cinematic Loop Animation2.webm" type="video/webm" />
        <source src="/video/Cinematic Loop Animation2.mov" type="video/quicktime" />
      </video>

      {/* Structured Content Layer */}
      <div className="relative z-10 w-full flex flex-col min-h-screen justify-between bg-transparent">
        <header className="relative w-full">
          <Navigation />
        </header>

        <main
          id="main-content"
          className="relative flex min-h-screen flex-col gap-6 overflow-x-hidden bg-transparent pb-12"
        >
          <Hero />
          <About />
          <HowIWork />
          <ROICalculator />
        </main>

        <footer className="relative w-full border-t border-white/5 bg-[rgba(5,15,30,0.8)] backdrop-blur-sm">
          <Contact />
        </footer>
      </div>
    </div>
  );
}
