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

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" className="w-16 h-16" />

              <span className="font-bold text-3xl text-foreground">
                Eco<span className="text-primary">Roots</span>
              </span>
            </div>

            <p className="text text-foreground max-w-xs leading-relaxed">
              Estufa inteligente com IA, sensores IoT e monitoramento em tempo real.
              Tecnologia inspirada na Amazônia 🌱
            </p>
          </div>

          <div className="flex flex-col gap-4 text-lg">
            <span className="text-foreground font-bold">Navegação</span>

            {[
              { label: 'Início', href: '#inicio' },
              { label: 'Sobre', href: '#sobre' },
              { label: 'Tecnologia', href: '#tecnologia' },
              { label: 'Contato', href: '#contato' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative w-fit text-foreground hover:text-primary transition"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-foreground font-semibold">Conecte-se</span>

            <div className="flex gap-4">

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                className="p-3 rounded-xl bg-white/5 hover:bg-[#E1306C]/20 transition"
              >
                <Instagram className="text-[#E1306C]" size={18} />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                className="p-3 rounded-xl bg-white/5 hover:bg-white/20 transition"
              >
                <Github className="text-foreground" size={18} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                className="p-3 rounded-xl bg-white/5 hover:bg-[#0A66C2]/20 transition"
              >
                <Linkedin className="text-[#0A66C2]" size={18} />
              </a>

              {/* Email */}
              <a
                href="mailto:seuemail@email.com"
                className="p-3 rounded-xl bg-white/5 hover:bg-[#EA4335]/20 transition"
              >
                <Mail className="text-[#EA4335]" size={18} />
              </a>

            </div>
          </div>
        </div>

        <div className="my-12 h-px bg-white/10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-foreground">
          <p>
            ©{new Date().getFullYear()} EcoRoots · Tecnologia Amazônica
          </p>

          <p>
            Desenvolvido por <span className="text-primary">Paulo Victor</span>
          </p>
        </div>

        <div className="mt-20 flex items-center justify-center">
          <TextHoverEffect text="ECOROOTS" />
        </div>
      </div>
    </footer>
  )
}