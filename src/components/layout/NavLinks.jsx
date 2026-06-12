import { Link, useLocation } from 'react-router-dom'
import { navigationLinks, secondaryNavLinks } from '../../data/navigationData'

export default function NavLinks({ className = '', onLinkClick }) {
  const { pathname, hash } = useLocation()

  const isActive = (to) => {
    if (to.startsWith('/#')) {
      return pathname === '/' && hash === `#${to.slice(2)}`
    }
    return pathname === to
  }

  const linkClass = (to) =>
    [
      'nav-link group relative font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-white transition-opacity duration-300 ease-in-out hover:opacity-70 xl:text-[11px] xl:tracking-[0.2em]',
      isActive(to) ? 'opacity-100' : '',
    ].join(' ')

  return (
    <nav className={className} aria-label="Primary navigation">
      <ul className="flex items-center gap-6 xl:gap-8">
        {navigationLinks.map(({ label, to }) => (
          <li key={to}>
            <Link
              to={to}
              onClick={onLinkClick}
              className={linkClass(to)}
              aria-current={isActive(to) ? 'page' : undefined}
            >
              {label}
              <span
                className={`nav-link__underline ${isActive(to) ? 'nav-link__underline--active' : ''}`}
                aria-hidden="true"
              />
            </Link>
          </li>
        ))}

        <li aria-hidden="true" className="h-3 w-px bg-white/15" />

        {secondaryNavLinks.map(({ label, to }) => (
          <li key={to}>
            <Link
              to={to}
              onClick={onLinkClick}
              className={linkClass(to)}
              aria-current={isActive(to) ? 'page' : undefined}
            >
              {label}
              <span
                className={`nav-link__underline ${isActive(to) ? 'nav-link__underline--active' : ''}`}
                aria-hidden="true"
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
