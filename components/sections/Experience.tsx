'use client'

import { useTheme } from '@/components/ui/ThemeProvider'
import { experiences } from '@/lib/data'

export default function Experience() {
  const { theme } = useTheme()

  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-xs font-black uppercase tracking-[0.3em] opacity-50 mb-2">
            🗺️ Historia
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Quest <span className="gradient-text">Log</span>
          </h2>
          <p className="opacity-60 mt-3 text-sm">Mi recorrido profesional, nivel a nivel.</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-8 top-0 bottom-0 w-0.5 hidden md:block"
            style={{ background: 'var(--border)' }}
          />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative md:pl-20 reveal">
                {/* Timeline dot */}
                <div
                  className="absolute left-5 top-6 w-6 h-6 rounded-full border-4 hidden md:flex
                    items-center justify-center text-xs"
                  style={{
                    background: 'var(--card)',
                    borderColor: 'var(--accent)',
                  }}
                >
                  {exp.emoji}
                </div>

                <div className="cozy-card rounded-[2rem] p-6 space-y-3">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-display font-bold text-lg">{exp.role}</h3>
                      <p className="text-sm font-bold opacity-60">{exp.company} · {exp.location}</p>
                    </div>
                    <span
                      className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shrink-0"
                      style={{ background: 'var(--accent)', color: '#5d4037' }}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-1.5 pt-1">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="text-sm opacity-70 flex gap-2">
                        <span className="text-[var(--accent)] shrink-0">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
