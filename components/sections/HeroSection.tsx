'use client'

import { useRef, useState, useEffect } from 'react'
import { ArrowRight, Eye, ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FloatingLeaves } from '../FloatingLeaves'

export default function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      id="inicio"
      ref={ref}
      aria-label="Seção principal — EcoRoots Estufa Inteligente"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,#145A32_0%,transparent_65%)] opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_80%,#0B3D2E_0%,transparent_60%)] opacity-40" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(88,214,141,0.04) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </motion.div>
        <FloatingLeaves />
      <div className="relative z-10 container mx-auto px-4 text-center pt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border mb-8"
          aria-label="Status do sistema: ativo, ESP32 conectado"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
          <span className="text-sm text-foreground font-medium">Sistema Ativo · ESP32 Conectado</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-6"
        >
          <span className="text-foreground">Estufa </span>
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-secondary to-amazon-dark">
            Inteligente
          </span>
          <br />
          <span className="text-foreground">Amazônica</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="text-lg md:text-xl text-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Monitoramento em tempo real com IA Gemini Vision, sensores IoT e gêmeo digital 3D.
          Tecnologia sustentável inspirada na biodiversidade da Amazônia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <Link
            href="/estufa"
            aria-label="Ver a estufa ao vivo no gêmeo digital 3D"
            className="group flex items-center gap-2 px-8 py-4 rounded-2xl bg-linear-to-r from-primary to-secondary hover:from-primary hover:to-secondary text-foreground font-semibold text-base transition-all duration-300 shadow-xl shadow-[#1E8449]/30 hover:shadow-[#58D68D]/30 hover:-translate-y-0.5"
          >
            <Eye className="w-4 h-4" aria-hidden="true" />
            Ver Estufa ao Vivo
            <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
          <Link
            href="/dashboard"
            aria-label="Abrir o dashboard de monitoramento em tempo real"
            className="flex items-center gap-2 px-8 py-4 rounded-2xl border border-border hover:bg-white/5 text-foreground font-semibold text-base transition-all duration-300 hover:-translate-y-0.5"
          >
            Dashboard
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-3 gap-8 max-w-lg mx-auto"
          aria-label="Métricas do sistema"
        >
          {[
            ['98%', 'Precisão IA'],
            ['40%', 'Economia Água'],
            ['24/7', 'Monitoramento'],
          ].map(([val, label]) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-bold text-primary" aria-label={`${val} — ${label}`}>
                {val}
              </div>
              <div className="text-xs text-foreground mt-1">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}