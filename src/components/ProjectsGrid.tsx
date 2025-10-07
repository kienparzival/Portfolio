import { projects } from '@/projects'
import { ProjectCard } from '@/components/ProjectCard'

export function ProjectsGrid() {
  return (
    <section id="projects" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-6">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Projects</h2>
          <p className="text-gray-600">Three projects that show my vision, how i code and build.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(p => <ProjectCard key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  )
}
