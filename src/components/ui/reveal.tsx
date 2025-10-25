'use client'

import { type ReactNode, useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

const variants = {
  hidden: {
    opacity: 0,
    y: 32,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
}

/**
 * Reveal envuelve cualquier contenido y lo anima cuando entra en el viewport.
 * Usa framer-motion + Intersection Observer y reproduce la animación solo una vez.
 */
export function Reveal({ children, className, delay = 0.1 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const controls = useAnimation()
  const inView = useInView(ref, {
    once: true,
    margin: '-10% 0px',
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className={cn('will-change-transform', className)}
    >
      {children}
    </motion.div>
  )
}
