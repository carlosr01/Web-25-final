'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Casos', href: '#casos' },
  { label: 'Servicios', href: '/services' },
  { label: 'Metodología', href: '#metodologia' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    const closeOnResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', closeOnResize)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', closeOnResize)
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleNavigate = () => {
    setIsOpen(false)
  }

  const ariaExpanded: 'true' | 'false' = isOpen ? 'true' : 'false'

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-[#0a0f1e]/90 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-white hover:text-cyan-400 transition-colors">
            Carlos R.
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button asChild size="sm" className="hidden xl:inline-flex">
              <Link
                href="https://cal.com/promptadvisers/demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agenda una demo
              </Link>
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Abrir o cerrar menú de navegación"
            aria-controls="mobile-menu"
            aria-expanded={ariaExpanded}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          'md:hidden fixed inset-x-0 top-16 origin-top transform bg-[#0a0f1e] px-6 py-8 shadow-lg transition-transform duration-200 ease-out',
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
        )}
      >
        <ul className="space-y-4">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={handleNavigate}
                className="block rounded-lg px-4 py-3 text-base font-medium text-gray-100 hover:bg-white/10"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Button
          asChild
          className="mt-8 w-full"
          size="lg"
        >
          <Link
            href="https://cal.com/promptadvisers/demo"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavigate}
          >
            Agenda una demo
          </Link>
        </Button>
      </div>
    </nav>
  )
}
