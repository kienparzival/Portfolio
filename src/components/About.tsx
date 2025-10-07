export function About() {
  return (
    <section id="about" className="py-16">
      <div className="mx-auto max-w-6xl px-4 grid gap-8 lg:grid-cols-3">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">About me</h2>
          <p className="mt-2 text-gray-600">
            I study Business Administration at Foreign Trade University and build software because I love coding and building useful things.
            I code with React + Supabase, move fast, and iterate with real users.
          </p>
        </div>
        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-soft">
            <p className="text-gray-700">
              I'm looking for a software engineering internship where I can contribute quickly and learn from strong teammates. I value clear communication, pragmatic engineering, and thoughtful product details.
            </p>
            <p className="mt-3 text-gray-700">
              Outside of work, I enjoy football, playing guitar, chess, tennis, and reading.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
