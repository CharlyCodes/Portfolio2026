'use client'

import { useTheme } from '@/components/ui/ThemeProvider'
import { projects } from '@/lib/data'
import { ChevronRight } from 'lucide-react'

export default function Projects() {
  const { theme } = useTheme()

  return (
    <section id="projects" className="py-28 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-3 reveal">
          <p className="text-xs font-black uppercase tracking-[0.3em] opacity-50">
            📦 Level Up
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Epic <span className="gradient-text">Quests</span>
          </h2>
          <p className="opacity-60 max-w-md mx-auto text-sm">
            Proyectos donde la creatividad se convirtió en código.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p) => (
            <div
              key={p.id}
              className={`cozy-card rounded-[2rem] overflow-hidden group
                ${theme === 'light' ? '' : 'dark'}`}
            >
              {/* Thumbnail */}
              <div className={`h-44 flex items-center justify-center text-7xl bg-gradient-to-br ${p.color}
                dark:from-white/5 dark:to-white/10 transition-transform duration-500 group-hover:scale-105`}>
                {p.emoji}
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1
                        rounded-full bg-[var(--accent)]/10 text-[var(--accent)]"
                    >
                      {tag}
                    </span>
                  ))}
                  {p.wip && (
                    <span className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1
                      rounded-full bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400">
                      WIP
                    </span>
                  )}
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-1">
                    {p.company}
                  </p>
                  <h3 className="font-display font-bold text-lg leading-snug">{p.title}</h3>
                </div>

                <p className="text-sm opacity-65 leading-relaxed">{p.desc}</p>

                <a
                  href={p.link || '#'}
                  className="inline-flex items-center gap-1 text-xs font-black text-[var(--accent)]
                    uppercase tracking-widest pt-1 hover:gap-2 transition-all"
                >
                  Explorar Quest <ChevronRight size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
