export function Skills() {
  const groups = [
    { 
      title: 'Frontend', 
      items: ['React', 'TypeScript', 'Vite', 'Tailwind', 'shadcn/ui', 'Responsive & accessible UIs', 'EN↔VI runtime i18n'] 
    },
    { 
      title: 'Backend', 
      items: ['Supabase (Postgres, RLS, Storage)', 'Edge Functions (Deno)', 'REST APIs', 'Auth', 'CORS'] 
    },
    { 
      title: 'Data & SQL', 
      items: ['SQL schema design', 'Indexes (incl. GIN)', 'PostGIS basics', 'Query performance'] 
    },
    { 
      title: 'Analytics & Growth', 
      items: ['PostHog (pageviews + custom events)', 'UTM attribution + email capture', 'SEO basics (metadata, JSON-LD, GSC)'] 
    },
    { 
      title: 'AI & Integrations', 
      items: ['OpenAI API (summarization/features)', 'Google Cloud Translate'] 
    },
    { 
      title: 'General', 
      items: ['JavaScript (ES6+)', 'Python (basics)', 'Git/GitHub', 'Browser DevTools'] 
    }
  ]
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Skills</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map(g => (
            <div key={g.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-soft">
              <h3 className="font-semibold text-gray-900">{g.title}</h3>
              <ul className="mt-3 text-gray-700 space-y-1 text-sm">
                {g.items.map(i => <li key={i}>• {i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
