'use client'

import { useTheme } from '@/components/ui/ThemeProvider'
import { skillCategories } from '@/lib/data'

export default function Skills() {
  const { theme } = useTheme()

  return (
    <section
      id="skills"
      className={`py-28 px-6 transition-colors ${
        theme === 'light' ? 'bg-[#f8f1e7]' : 'bg-[#25201c]'
      }`}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16 reveal">
          <p className="text-xs font-black uppercase tracking-[0.3em] opacity-50 mb-2">
            ⚔️ Inventario
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Power-Up <span className="gradient-text">Arena</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Skill cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {skillCategories.map((cat) => (
              <div
                key={cat.title}
                className={`cozy-card p-5 rounded-[2rem] border-l-4 ${cat.color}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{cat.emoji}</span>
                  <h4 className="font-display font-bold text-base">{cat.title}</h4>
                </div>
                <ul className="space-y-1">
                  {cat.skills.map(s => (
                    <li key={s} className="text-sm opacity-70 flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-[var(--accent)] shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Coffee visual */}
          <div className="text-center">
            <div className="inline-block relative">
              <div className="text-[180px] md:text-[220px] animate-float leading-none">☕</div>
              {/* Steam */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-2">
                {[0, 0.4, 0.8].map((d, i) => (
                  <div
                    key={i}
                    className="animate-steam w-1 rounded-full opacity-30"
                    style={{
                      height: i === 1 ? '48px' : '32px',
                      background: 'var(--muted)',
                      animationDelay: `${d}s`,
                    }}
                  />
                ))}
              </div>
            </div>
            <p className="text-2xl font-display font-bold opacity-30 italic mt-2 tracking-tight">
              "Caffeine Powered"
            </p>
            <p className="text-xs font-bold uppercase tracking-[0.4em] opacity-30 mt-1">
              Since 2015 · 9+ Years
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
