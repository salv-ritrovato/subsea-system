import { Link, useLocation } from 'react-router-dom'
import { navigationLinks } from '../../data/navigationData'

/**
 * Desktop navigation links rendered from navigationData.
 */
export default function NavLinks({ className = '', onLinkClick }) {
  const { pathname, hash } = useLocation()

  return (
    <nav className={className} aria-label="Primary navigation">
      <ul className="flex items-center gap-6 xl:gap-8">
        {navigationLinks.map(({ label, to }) => {
          const sectionId = to.replace('/#', '')
          const isActive = pathname === '/' && hash === `#${sectionId}`

          return (
            <li key={to}>
              <Link
                to={to}
                onClick={onLinkClick}
                className={[
                  'nav-link group relative font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-white transition-opacity duration-300 ease-in-out hover:opacity-70 xl:text-[11px] xl:tracking-[0.2em]',
                  isActive ? 'opacity-100' : '',
                ].join(' ')}
                aria-current={isActive ? 'true' : undefined}
              >
                {label}
                <span
                  className={`nav-link__underline ${isActive ? 'nav-link__underline--active' : ''}`}
                  aria-hidden="true"
                />
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
