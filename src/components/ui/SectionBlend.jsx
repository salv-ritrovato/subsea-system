import './section-blend.css'

const variants = {
  'rovers-exploration': 'section-blend--rovers-exploration',
  'exploration-fleet': 'section-blend--exploration-fleet',
  'fleet-support': 'section-blend--fleet-support',
  'engineering-hero-build': 'section-blend--engineering-hero-build',
  'engineering-build-video': 'section-blend--engineering-build-video',
  'engineering-video-standards': 'section-blend--engineering-video-standards',
  'engineering-standards-footer': 'section-blend--engineering-standards-footer',
}

/**
 * Gradient bridge between two sections — overlaps both to avoid hard colour breaks.
 */
export default function SectionBlend({ variant = 'rovers-exploration' }) {
  const className = ['section-blend', variants[variant]].filter(Boolean).join(' ')
  return <div className={className} aria-hidden="true" />
}
