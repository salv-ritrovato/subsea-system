/** Premium easing — smooth deceleration */
export const premiumEase = [0.22, 1, 0.36, 1]

export const defaultTransition = {
  duration: 0.85,
  ease: premiumEase,
}

export const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
}

export const fadeDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const slideLeft = {
  hidden: { opacity: 0, x: 48 },
  visible: { opacity: 1, x: 0 },
}

export const slideRight = {
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0 },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
}

export const variantMap = {
  fadeUp,
  fadeDown,
  fadeIn,
  slideLeft,
  slideRight,
  scaleIn,
}
