import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section className="gradient-hero">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="max-w-3xl">
          {/* removed the top "role/stack" badge */}
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            I'm Kiên — I build simple, useful web apps.
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            I'm a self-taught coder and a Business Administration student at Foreign Trade University. I design and code practical products end-to-end with React, TypeScript, and Supabase.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects">
              <Button size="lg">See projects</Button>
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              <Button size="lg" variant="secondary">View résumé</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
