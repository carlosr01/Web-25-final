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
    <main className="relative min-h-screen bg-[#0a0f1e] overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <HowIWork />
      <Testimonials />
      <Portfolio />
      <Resume />
      <Contact />
    </main>
  )
}
