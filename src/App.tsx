import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { ProjectsGrid } from '@/components/ProjectsGrid'
import { Skills } from '@/components/Skills'
import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function App() {
  return (
    <div className="min-h-full flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProjectsGrid />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
