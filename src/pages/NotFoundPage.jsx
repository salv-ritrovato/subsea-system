import { Link } from 'react-router-dom'
import PageMeta from '../components/ui/PageMeta'
import { siteConfig } from '../data/siteConfig'

export default function NotFoundPage() {
  const { title, description } = siteConfig.pages.notFound
  return (
    <main className="flex min-h-svh flex-col items-center justify-center px-8 text-center">
      <PageMeta title={title} description={description} />

      <p className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-sky-400/60">
        404
      </p>
      <h1 className="mt-4 font-serif text-4xl font-light text-white md:text-5xl">
        Page not found.
      </h1>
      <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/50">
        The depth you are searching for does not exist — or may have shifted.
      </p>
      <Link
        to="/"
        className="mt-10 border border-white/20 px-6 py-3 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-white/70 transition-all duration-300 hover:border-sky-400/40 hover:text-white"
      >
        Return to surface
      </Link>
    </main>
  )
}
