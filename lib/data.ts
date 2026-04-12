// ============================================================
//  lib/data.ts  —  Toda la info del sitio en un solo lugar.
//  Actualiza aquí y se refleja en TODO el sitio automáticamente.
// ============================================================

export const siteConfig = {
  name: 'Carlos Ricardo Chin Dzul',
  alias: 'Charly',
  brandName: 'Charly.codes',
  tagline: 'Game Developer · Tech Educator · WCA Delegate',
  bio: 'Ingeniero en Software especializado en desarrollo de videojuegos. Creo mundos Lowpoly, diseño experiencias educativas y gestiono competencias nacionales de speedcubing. Todo con café y mis perritas al lado.',
  location: 'Mérida, Yucatán, México',
  email: 'carlos.chindz@gmail.com',
  links: {
    linkedin: 'https://linkedin.com',   // ← Cambia por tu URL real
    github:   'https://github.com',     // ← Cambia por tu URL real
    itchio:   'https://itch.io',        // ← Cambia por tu URL real
    whatsapp: 'https://wa.me/',         // ← Agrega tu número
  },
  status: 'Disponible para nuevas aventuras 🚀',
  cvUrl: '/CV_2026_CarlosChin.pdf',     // Coloca tu CV en /public/
}

// ────────────────────────────────────────────────────────────
//  PROYECTOS  (agrega más objetos para escalar)
// ────────────────────────────────────────────────────────────
export type Project = {
  id:      string
  title:   string
  company: string
  tags:    string[]
  desc:    string
  emoji:   string
  color:   string
  link?:   string
  wip?:    boolean
}

export const projects: Project[] = [
  {
    id:      'brandcade',
    title:   'Brandcade Experience',
    company: 'Amber México',
    tags:    ['Roblox', 'Luau', 'Brand Games'],
    desc:    'Experiencia de marca dentro de Roblox con mecánicas de plataforma y sistemas de progresión orientados a la retención de usuarios.',
    emoji:   '🚀',
    color:   'from-blue-100 to-indigo-100',
  },
  {
    id:      'cozywoods',
    title:   'Cozy Woods RPG',
    company: 'Proyecto Personal',
    tags:    ['Godot', 'GDScript', 'Lowpoly'],
    desc:    'Prototipo de exploración relajante con estética lowpoly, narrativa visual y perritos que necesitan tu ayuda.',
    emoji:   '🌿',
    color:   'from-green-100 to-teal-100',
    wip:     true,
  },
  {
    id:      'academy',
    title:   'Academy Plus Modules',
    company: 'Academy Plus',
    tags:    ['Unity', 'EduTech', 'C#'],
    desc:    'Módulos educativos gamificados que introdujeron a más de 200 estudiantes (8-17 años) al desarrollo de videojuegos.',
    emoji:   '🎓',
    color:   'from-purple-100 to-pink-100',
  },
  {
    id:      'axess',
    title:   'AXESS by Axe',
    company: 'RCK Games',
    tags:    ['Godot', 'iOS', 'Android'],
    desc:    'App de gameplay lanzada en App Store y Google Play Store. Responsable de las mecánicas de juego principales.',
    emoji:   '🪓',
    color:   'from-orange-100 to-red-100',
  },
]

// ────────────────────────────────────────────────────────────
//  SKILLS  (agrega más categorías libremente)
// ────────────────────────────────────────────────────────────
export type SkillCategory = {
  title:    string
  emoji:    string
  skills:   string[]
  color:    string
}

export const skillCategories: SkillCategory[] = [
  {
    title:  'Game Engines',
    emoji:  '🎮',
    skills: ['Roblox Studio (Luau)', 'Godot (GDScript)', 'Unity (C#)', 'Unreal Engine (en progreso)'],
    color:  'border-orange-300 dark:border-orange-700',
  },
  {
    title:  'Lenguajes',
    emoji:  '💻',
    skills: ['Luau', 'GDScript', 'C#', 'JavaScript', 'TypeScript'],
    color:  'border-blue-300 dark:border-blue-700',
  },
  {
    title:  'Educación & Diseño',
    emoji:  '🎓',
    skills: ['Diseño Curricular', 'Gamificación', 'Diseño de Niveles', 'Prototipado'],
    color:  'border-purple-300 dark:border-purple-700',
  },
  {
    title:  'Tools',
    emoji:  '🛠️',
    skills: ['Git', 'Adobe Suite', 'Arduino', 'Vercel', 'Figma'],
    color:  'border-green-300 dark:border-green-700',
  },
]

// ────────────────────────────────────────────────────────────
//  EXPERIENCIA LABORAL
// ────────────────────────────────────────────────────────────
export type Experience = {
  company:  string
  role:     string
  period:   string
  location: string
  bullets:  string[]
  emoji:    string
}

export const experiences: Experience[] = [
  {
    company:  'Amber México',
    role:     'Game Design Intern',
    period:   'Ene 2025 – Ago 2025',
    location: 'GDL, MX',
    emoji:    '🔥',
    bullets: [
      'Colaboré en "Brandcade", una experiencia de Roblox orientada a maximizar la retención de usuarios.',
      'Diseñé y prototiposé mecánicas de gameplay y sistemas de progresión del jugador.',
    ],
  },
  {
    company:  'Academy Plus',
    role:     'Tech Educator & Game Developer',
    period:   'Jun 2022 – Presente',
    location: 'MID, MX',
    emoji:    '🎓',
    bullets: [
      'Diseñé y deployed programas educativos con Roblox Studio, Godot y Unity para 200+ estudiantes.',
      'Creé un currículum multinivel que transforma conceptos complejos en proyectos accesibles para niños de 8-17 años.',
    ],
  },
  {
    company:  'RCK Games',
    role:     'Jr. Game Programmer',
    period:   'May 2021 – Mar 2023',
    location: 'MID, MX',
    emoji:    '🕹️',
    bullets: [
      'Colaboré en "Lawler\'s Super Service" con Godot, enfocado en mecánicas y optimización de UI.',
      'Trabajé en "AXESS by Axe", lanzado en iOS App Store y Google Play Store.',
    ],
  },
  {
    company:  'YOUGUI School of Technology',
    role:     'Coordinator & Tech Educator',
    period:   'May 2015 – Mar 2022',
    location: 'MID, MX',
    emoji:    '🏆',
    bullets: [
      'Lideré el departamento de TI en instalación, mantenimiento y escalado de infraestructura.',
      'Entrené equipos para la FIRST LEGO League, obteniendo el título de "Region Champion".',
    ],
  },
]

// ────────────────────────────────────────────────────────────
//  STATS / LOGROS  (para la sección de números)
// ────────────────────────────────────────────────────────────
export const stats = [
  { value: '9+',  label: 'Años de experiencia' },
  { value: '200+', label: 'Estudiantes mentoreados' },
  { value: '3',   label: 'Engines dominados' },
  { value: '2',   label: 'Apps en tiendas' },
]
