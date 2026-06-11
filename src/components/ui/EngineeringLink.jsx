import { Link } from 'react-router-dom'
import { engineeringPage } from '../../data/navigationData'

/**
 * Link to the engineering page — shared CTA styling.
 */
export default function EngineeringLink({
  children = `${engineeringPage.cta} →`,
  className = '',
  variant = 'default',
}) {
  const styles = {
    default:
      'font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-sky-400/80 transition-opacity duration-300 hover:opacity-70',
    button:
      'inline-block border border-white/20 px-6 py-3 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-white/80 transition-all duration-300 hover:border-sky-400/40 hover:text-white',
  }

  return (
    <Link to={engineeringPage.path} className={`${styles[variant] ?? styles.default} ${className}`}>
      {children}
    </Link>
  )
}
