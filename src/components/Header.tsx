import { Button } from '@/components/ui/Button'

export function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/60 border-b border-gray-100">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl">
          <a href="/Profile.jpg" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img 
              src="/Profile.jpg" 
              alt="Kien Pham" 
              className="h-7 w-7 rounded-lg object-cover"
            />
            Kien Pham
          </a>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#projects" className="hover:text-gray-900">Projects</a>
          <a href="#skills" className="hover:text-gray-900">Skills</a>
          <a href="#about" className="hover:text-gray-900">About</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
          <a href="/resume.pdf" className="hover:text-gray-900" target="_blank" rel="noreferrer">Résumé</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#contact">
            <Button size="sm">Get in touch</Button>
          </a>
        </div>
      </div>
    </header>
  )
}
