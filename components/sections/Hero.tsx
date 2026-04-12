'use client'

import { useTheme } from '@/components/ui/ThemeProvider'
import { siteConfig } from '@/lib/data'

export default function Hero() {
  const { theme } = useTheme()

  return (
    <header className="relative min-h-screen flex items-center pt-24 pb-16 px-6">
      
      {/* Decorative background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
        <div className="absolute top-20  left-10  text-5xl animate-float">🐶</div>
        <div className="absolute top-48  right-16 text-4xl animate-float-delayed">☕</div>
        <div className="absolute bottom-24 left-1/3 text-5xl animate-float-slow">🎮</div>
        <svg
          className="absolute bottom-0 w-full"
          viewBox="0 0 100 20"
          preserveAspectRatio="none"
        >
          <polygon
            points="0,20 20,12 40,18 60,8 80,16 100,10 100,20"
            fill="var(--accent)"
            opacity="0.15"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
        
        {/* Text */}
        <div className="space-y-7 text-center md:text-left animate-fade-up">
          
          {/* Status badge */}
          <div className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-sm
            ${theme === 'light' ? 'bg-white' : 'bg-[var(--card)]'}`}>
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse block" />
            {siteConfig.status}
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
            Game Dev <br />
            <span className="gradient-text">&amp; Educator</span>
          </h1>

          <p className="text-lg opacity-75 max-w-md leading-relaxed">
            {siteConfig.bio}
          </p>

          {/* Tech chips */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {['Roblox Studio', 'Godot', 'Unity', 'C#', 'GDScript', 'Luau'].map(t => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider
                  bg-[var(--accent)]/10 text-[var(--accent)]"
              >
                {t}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
            <a
              href="#projects"
              className="px-8 py-4 rounded-[2rem] font-black text-[#5d4037] bg-[var(--accent)]
                shadow-lg shadow-orange-300/30 hover:-translate-y-1 transition duration-300"
            >
              Ver Proyectos
            </a>
            <a
              href={siteConfig.cvUrl}
              download
              className={`px-8 py-4 rounded-[2rem] font-black shadow-sm border transition
                hover:-translate-y-1 duration-300
                ${theme === 'light'
                  ? 'bg-white border-orange-100'
                  : 'bg-[var(--card)] border-white/5'}`}
            >
              Descargar CV
            </a>
          </div>
        </div>

        {/* Illustration */}
        <div className="flex justify-center items-center">
          <div className="w-72 h-72 md:w-96 md:h-96 relative">
            <div
              className="absolute inset-0 rounded-[3rem] rotate-6 opacity-20"
              style={{ background: 'var(--accent)' }}
            />
            <div className={`absolute inset-0 rounded-[3rem] -rotate-3 flex items-center justify-center
              text-[130px] md:text-[160px] shadow-2xl
              ${theme === 'light' ? 'bg-white' : 'bg-[var(--card)]'}`}
            >
              <span className="animate-float">🐶</span>
              <span className="absolute -bottom-4 -right-4 text-6xl animate-float-delayed">☕</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
