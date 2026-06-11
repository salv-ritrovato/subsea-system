/**
 * Primary navbar links — hash anchors on the home SPA.
 */
export const navigationLinks = [
  { label: 'Autonomous Rovers', to: '/#rovers' },
  { label: 'Deep Sea Exploration', to: '/#exploration' },
  { label: 'Fleet', to: '/#fleet' },
  { label: 'Support', to: '/#support' },
]

/**
 * Separate engineering page — accessed via contextual CTAs and footer, not main nav.
 */
export const engineeringPage = {
  path: '/engineering',
  label: 'Engineering',
  cta: 'Explore engineering',
  ctaLong: 'See how we build them',
}

/** Footer includes main sections plus the engineering page. */
export const footerLinks = [
  ...navigationLinks,
  { label: engineeringPage.label, to: engineeringPage.path },
]
