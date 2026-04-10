'use client'

import { useRef, useState, useEffect } from 'react'
import { ArrowRight, Eye, ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function IndicadorScroll() {
  
  const [atBottom, setAtBottom] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY + window.innerHeight
      const threshold = document.documentElement.scrollHeight - 100
      setAtBottom(scrolled >= threshold)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleIndicatorClick = () => {
    if (atBottom) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })
    }
  }
  return (
    <div>
      <motion.button
        type="button"
        onClick={handleIndicatorClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        aria-label={atBottom ? 'Voltar ao topo da página' : 'Ir para o final da página'}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full backdrop-blur-sm bg-background/30"
      >
        <motion.div
          animate={{ y: atBottom ? [0, -6, 0] : [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="w-8 h-10 rounded-full border-2 border-border flex items-center justify-center group-hover:border-primary transition-colors"
        >
          {atBottom ? (
            <ChevronUp className="w-6 h-6 font-black text-primary" aria-hidden="true" />
          ) : (
            <ChevronDown className="w-6 h-6 font-black text-primary" aria-hidden="true" />
          )}
        </motion.div>
      </motion.button>
    </div>
  )
}
