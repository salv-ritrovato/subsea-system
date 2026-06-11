import { motion, useReducedMotion } from 'framer-motion'
import { defaultTransition, fadeUp, staggerContainer, variantMap } from '../../lib/motionVariants'

/**
 * Scroll-triggered reveal — fades/slides content into view once.
 */
export default function Reveal({
  children,
  className = '',
  delay = 0,
  variant = 'fadeUp',
  amount = 0.15,
  once = true,
}) {
  const prefersReducedMotion = useReducedMotion()
  const variants = variantMap[variant] ?? fadeUp

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      transition={{ ...defaultTransition, delay }}
    >
      {children}
    </motion.div>
  )
}

/**
 * Stagger container — wrap multiple StaggerItem children.
 */
export function StaggerReveal({ children, className = '', amount = 0.12, stagger = 0.12 }) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        ...staggerContainer,
        visible: {
          transition: { staggerChildren: stagger, delayChildren: 0.06 },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

/**
 * Single item inside a StaggerReveal group.
 */
export function StaggerItem({ children, className = '', variant = 'fadeUp' }) {
  const prefersReducedMotion = useReducedMotion()
  const variants = variantMap[variant] ?? fadeUp

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div className={className} variants={variants} transition={defaultTransition}>
      {children}
    </motion.div>
  )
}
