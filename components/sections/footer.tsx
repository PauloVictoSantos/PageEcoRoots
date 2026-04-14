'use client'

import Link from 'next/link'
import { TextHoverEffect } from '../ui/text-hover-effect'
import { Github, Instagram, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden">
      <img
        src="/image/Spring_leaves_001v1_02.jpg"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none dark:hidden"
      />

      <img
        src="/image/15572806_Spring_leaves_001v1_01-Photoroom.png"
        className="absolute inset-0 w-full h-full object-cover rotate-180 pointer-events-none select-none hidden dark:block"
      />

      <div className="absolute inset-0 bg-linear-to-b from-white/90 via-white/70 to-white/90 backdrop-blur-sm md:hidden dark:from-black/80 dark:via-black/60 dark:to-black/80" />
      
      <div className="relative z-10 max-w-8xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="grid gap-16 md:grid-cols-[1.2fr_1.8fr_1fr]">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <img src="/logo.png" className="w-14 h-14 md:w-16 md:h-16" />
              <span className="font-bold text-2xl md:text-3xl text-foreground">
                Eco<span className="text-green-600">Roots</span>
              </span>
            </div>

            <p className="text-sm md:text-base text-foreground max-w-sm leading-relaxed">
              Estufa inteligente com IA, sensores IoT e monitoramento em tempo real.
              Tecnologia inspirada na Amazônia 🌱
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 text-sm md:text-base">
            <div className="flex flex-col gap-5">
              <span className="font-semibold text-foreground">
                Sessões
              </span>

              <div className="grid grid-cols-2 gap-x-16 gap-y-2">
                {[
                  { label: 'Inicio', href: '#inicio' },
                  { label: 'Sobre', href: '#about' },
                  { label: 'Funcionalidades', href: '#features' },
                  { label: 'Linha do Tempo', href: '#timeline' },
                  { label: 'Time', href: '#team' },
                  { label: 'Galeria', href: '#gallery' },
                  { label: 'Componentes', href: '#components' },
                  { label: 'Blog', href: '#blog' },
                  { label: 'Trabalho', href: '#work' },
                  { label: 'FAQ', href: '#faq' },
                  { label: 'CTA', href: '#cta' },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-foreground/80 hover:text-green-600 transition"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <span className="font-semibold text-foreground">
                Plataformas
              </span>

              <div className="flex flex-col gap-3">
                {[
                  { label: '🌱 Estufa Inteligente', href: 'https://sua-estufa.com' },
                  { label: '📚 Documentação', href: 'https://docs.seuprojeto.com' },
                  { label: '📊 Dashboard', href: 'https://dashboard.seuprojeto.com' },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-green-600 transition"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

          </div>

          <div className="flex flex-col gap-6">
            <span className="font-semibold text-foreground">
              Conecte-se
            </span>

            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                className="p-3 rounded-xl bg-black/5 hover:bg-[#E1306C]/20 transition"
              >
                <Instagram size={18} className="text-[#E1306C]" />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                className="p-3 rounded-xl bg-black/5 hover:bg-black/20 transition"
              >
                <Github size={18} className="text-foreground" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                className="p-3 rounded-xl bg-black/5 hover:bg-[#0A66C2]/20 transition"
              >
                <Linkedin size={18} className="text-[#0A66C2]" />
              </a>

              <a
                href="mailto:seuemail@email.com"
                className="p-3 rounded-xl bg-black/5 hover:bg-[#EA4335]/20 transition"
              >
                <Mail size={18} className="text-[#EA4335]" />
              </a>
            </div>
          </div>

        </div>

        <div className="my-12 h-px bg-black/10 dark:bg-white/10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-foreground/70">
          <p>©{new Date().getFullYear()} EcoRoots · Tecnologia Amazônica</p>
          <p>
            Desenvolvido por <span className="text-green-600">Paulo Victor</span>
          </p>
        </div>

        <div className="mt-20 flex items-center justify-center opacity-60">
          <TextHoverEffect text="ECOROOTS" />
        </div>

      </div>
    </footer>
  )
}