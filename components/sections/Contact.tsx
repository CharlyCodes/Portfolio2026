'use client'

import { Mail, Terminal, Heart } from 'lucide-react'
import { siteConfig } from '@/lib/data'

export default function Contact() {
  const socials = [
    { icon: <Mail size={22} />,     href: `mailto:${siteConfig.email}`,   label: 'Email'    },
    { icon: <Terminal size={22} />, href: siteConfig.links.itchio,         label: 'Itch.io'  },
  ]

  return (
    <footer
      id="contact"
      className="py-28 px-6 text-center"
      style={{ background: '#2c2621', color: '#efebe9' }}
    >
      <div className="max-w-3xl mx-auto space-y-10">

        {/* Icon */}
        <div className="text-7xl animate-float">🐶🐾</div>

        <div className="space-y-3">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            ¿Listos para <span className="gradient-text">colaborar?</span>
          </h2>
          <p className="opacity-60 text-lg">
            Estoy a un café de distancia para tu próximo gran proyecto.
          </p>
        </div>

        {/* Email CTA */}
        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-block px-10 py-4 rounded-[2rem] font-black text-[#5d4037]
            bg-[var(--accent)] hover:-translate-y-1 transition duration-300 shadow-lg"
        >
          Escríbeme ☕
        </a>

        {/* Social icons */}
        <div className="flex justify-center gap-4 pt-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-[1.25rem] flex items-center justify-center
                border border-white/10 bg-white/5
                hover:bg-[var(--accent)] hover:text-[#5d4037]
                hover:-translate-y-2 hover:rotate-3
                transition-all duration-300 shadow-lg"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Footer bottom */}
        <div className="pt-16 space-y-2 opacity-30">
          <div className="flex items-center justify-center gap-2 text-xs font-black uppercase tracking-[0.4em]">
            <Heart size={10} fill="currentColor" />
            Carlos Chin · Charly.codes · 2026
          </div>
          <p className="text-[10px] uppercase tracking-widest">
            Mérida, Yucatán, México 🌵
          </p>
        </div>
      </div>
    </footer>
  )
}
