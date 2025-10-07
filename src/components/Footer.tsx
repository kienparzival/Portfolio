export function Footer() {
  return (
    <footer id="contact" className="py-10 border-t border-gray-100">
      <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Kien Pham</p>
        <div className="text-sm text-gray-600">
          <a className="hover:text-gray-900" href="mailto:kien.wwl@gmail.com">kien.wwl@gmail.com</a>
          <span className="mx-2 text-gray-300">·</span>
          <a className="hover:text-gray-900" href="/resume.pdf" target="_blank" rel="noreferrer">Résumé (PDF)</a>
        </div>
      </div>
    </footer>
  )
}
