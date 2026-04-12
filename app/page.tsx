import Navbar       from '@/components/ui/Navbar'
import Hero         from '@/components/sections/Hero'
import Projects     from '@/components/sections/Projects'
import Skills       from '@/components/sections/Skills'
import Experience   from '@/components/sections/Experience'
import Leadership   from '@/components/sections/Leadership'
import Contact      from '@/components/sections/Contact'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Leadership />
      <Contact />
    </main>
  )
}