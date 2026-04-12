'use client'

import { useEffect, useState } from "react"
import { Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeProvider'

const links = [
    {label: 'Proyectos', href: '#projects'},
    {label: 'Skills', href: '#skills'},
    {label: 'Exp', href: '#experience'},
    {label: 'Contacto', href: '#contact'},
]

export default function Navbar(){
    const { theme, toggle } = useTheme()
    const [scrolled, setScrolled] = useState(false)

    return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-300 ${scrolled ? 'backdrop-blur-xl' : ''}`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Brand + links */}
        <div className={`flex items-center gap-6 px-6 py-2.5 rounded-full shadow-sm border transition-colors
          ${theme === 'light'
            ? 'bg-white/80 border-orange-100'
            : 'bg-black/30 border-white/5'
          }`}>
          <span className="font-display font-bold text-xl tracking-tight">
            Charly<span className="gradient-text">.codes</span>
          </span>
          <div className="hidden md:flex gap-5 text-sm font-bold opacity-70">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-[var(--accent)] hover:opacity-100 transition"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Theme toggle */}
        <button
          onClick={toggle}
          aria-label="Toggle theme"
          className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-md
            transition-all hover:scale-110 active:scale-95
            ${theme === 'light' ? 'bg-white' : 'bg-[var(--card)]'}`}
        >
          {theme === 'light'
            ? <Moon size={20} />
            : <Sun size={20} className="text-yellow-200" />}
        </button>
      </div>
    </nav>
  );
}