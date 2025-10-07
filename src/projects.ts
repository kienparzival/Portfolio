export type Project = {
  id: string
  title: string
  oneLiner: string
  role: string
  stack: string[]
  problem: string
  highlights: string[]
  links: {
    demo?: string
    github?: string
    loom?: string
  }
}

export const projects: Project[] = [
  {
    id: 'suki',
    title: 'Suki — Events discovery',
    oneLiner: 'React + Supabase directory with external ticketing, bilingual UX, and location-aware browsing.',
    role: 'Full-stack (solo)',
    stack: ['React (Vite)', 'Tailwind', 'Vercel', 'Supabase (Postgres/RLS, PostGIS)', 'PostHog'],
    problem: 'People want an easy way to find local events without complicated ticket flows.',
    highlights: [
      'External ticketing: single "Get tickets" button that links out (no on-site payments)',
      'Location-aware browsing: city selector + "near me" filter; remembers preference; PostGIS distance queries',
      'Bilingual UX (EN/VI): instant toggle with on-the-fly translation + Supabase cache',
      'RLS-secured backend; events, venues (PostGIS), profiles, image storage',
      'PostHog analytics, UTM attribution, email capture modal',
      'SEO: JSON-LD, canonical tags; Google Search Console verified'
    ],
    links: {
      demo: 'https://suki-app-two.vercel.app/',
      github: 'https://github.com/kienparzival/Suki-App.git',
      loom: 'https://www.loom.com/share/f87b0b5493614efe8ad763c91908fcc6?sid=40537bb0-6571-4757-b8cd-6d67e5cf84c0'
    }
  },
  {
    id: 'substack',
    title: 'Substack Digest',
    oneLiner: 'Paste a Substack link → get a clean AI summary.',
    role: 'Front-end + API integration',
    stack: ['React', 'OpenAI API', 'Vercel'],
    problem: 'Long articles are time-consuming. Readers want the key points quickly.',
    highlights: [
      'URL ingestion and readable text extraction',
      'AI-powered paragraph summarization of long articles',
      'Shareable summary page for quick hand-offs'
    ],
    links: {
      demo: 'https://substack-digest.vercel.app/',
      github: 'https://github.com/kienparzival/Substack-Digest.git',
      loom: 'https://www.loom.com/share/b0a30c1b73e34634a7c932268ef03bf2?sid=ed52d260-4ba6-4f4a-9462-08152e8cc4cc'
    }
  },
  {
    id: 'taskapp',
    title: 'TaskApp',
    oneLiner: 'Plan days/weeks/months with a distraction-free UI.',
    role: 'Full-stack',
    stack: ['React', 'Supabase', 'Tailwind'],
    problem: 'Simple, predictable planning with recurring tasks and priorities.',
    highlights: [
      'Add tasks quickly; inline edit; keyboard shortcuts',
      'Switch views: Day, Week, Month — always in sync',
      'Data stored in browser localStorage (persists between visits)'
    ],
    links: {
      demo: 'https://task-app-five-pi.vercel.app/',
      github: 'https://github.com/kienparzival/TaskApp.git',
      loom: 'https://www.loom.com/share/6f839a01594242b58a343ac7278e664b?sid=2afa1c77-4a02-440b-84fb-797e9b19da0f'
    }
  }
]
