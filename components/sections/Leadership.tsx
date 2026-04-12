'use client'

import { useTheme } from '@/components/ui/ThemeProvider'
import { stats } from '@/lib/data'
import { Star } from 'lucide-react'

export default function Leadership() {
  const { theme } = useTheme()

  return (
    <section
      className={`py-28 px-6 transition-colors ${
        theme === 'light' ? 'bg-[#f8f1e7]' : 'bg-[#25201c]'
      }`}
    >
      <div className="max-w-5xl mx-auto text-center space-y-10 reveal">

        <div
          className="inline-flex p-4 rounded-full"
          style={{ background: 'rgba(255,179,71,0.12)' }}
        >
          <Star size={32} fill="var(--accent)" color="var(--accent)" />
        </div>

        <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
          Guild Leader:<br />
          <span className="gradient-text">World Cube Association</span>
        </h2>

        <p className="text-lg md:text-xl opacity-75 leading-relaxed max-w-3xl mx-auto">
          Como Junior Delegate Nacional superviso y certifico competencias oficiales de
          speedcubing en toda México, gestionando equipos multidisciplinarios bajo
          estándares globales desde 2017.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 pt-4">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold gradient-text">
                {s.value}
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest opacity-50 mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          {[
            '🏆 Talent Land 2024 Speaker',
            '🥇 Mexican Championship Organizer',
            '🎓 FIRST LEGO League Coach',
          ].map(b => (
            <span
              key={b}
              className="px-4 py-2 rounded-full text-sm font-bold cozy-card"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
