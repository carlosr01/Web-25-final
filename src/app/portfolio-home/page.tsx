import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import About from '@/components/About'
import HowIWork from '@/components/HowIWork'
import Testimonials from '@/components/Testimonials'
import Portfolio from '@/components/Portfolio'
import Resume from '@/components/Resume'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <header className="relative">
        <Navigation />
      </header>
      <main
        id="main-content"
        className="relative flex min-h-screen flex-col gap-24 overflow-x-hidden bg-transparent pb-24"
      >
        <Hero />
        <About />
        <HowIWork />
        <Testimonials />
        <Portfolio />
        <Resume />
      </main>
      <footer className="border-t border-[color:var(--border-subtle)] bg-[color:rgba(6,12,23,0.85)]">
        <Contact />
      </footer>
    </>
  )
}
