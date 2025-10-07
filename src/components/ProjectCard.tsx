import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import type { Project } from '@/projects'

export function ProjectCard({ p }: { p: Project }) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
        <p className="mt-1 text-sm text-gray-600">{p.oneLiner}</p>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden">
        <div className="max-h-64 overflow-y-auto pr-1 space-y-3 card-scroll-fade">
          <div className="text-sm text-gray-700">
            <span className="font-medium">Role:</span> {p.role}
          </div>
          <div className="flex flex-wrap gap-2">
            {p.stack.map(s => <Badge key={s}>{s}</Badge>)}
          </div>
          <p className="text-sm text-gray-700">
            <span className="font-medium">Insight:</span> {p.problem}
          </p>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
            {p.highlights.map((h, i) => <li key={i}>{h}</li>)}
          </ul>
        </div>
      </CardContent>
      <div className="px-6 pb-6 flex gap-2">
        {p.links.demo && <a href={p.links.demo} target="_blank" rel="noreferrer"><Button size="sm">Live</Button></a>}
        {p.links.github && <a href={p.links.github} target="_blank" rel="noreferrer"><Button size="sm" variant="secondary">Code</Button></a>}
        {p.links.loom && <a href={p.links.loom} target="_blank" rel="noreferrer"><Button size="sm" variant="ghost">Loom</Button></a>}
      </div>
    </Card>
  )
}
