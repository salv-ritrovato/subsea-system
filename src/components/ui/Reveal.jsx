import { motion } from 'framer-motion'
import { defaultTransition, fadeUp, staggerContainer, variantMap } from '../../lib/motionVariants'

export default function Reveal({
  children,
  className = '',
  delay = 0,
  variant = 'fadeUp',
  amount = 0.15,
  once = true,
}) {
  const variants = variantMap[variant] ?? fadeUp

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

export function StaggerReveal({ children, className = '', amount = 0.12, stagger = 0.12 }) {
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

export function StaggerItem({ children, className = '', variant = 'fadeUp' }) {
  const variants = variantMap[variant] ?? fadeUp

  return (
    <motion.div className={className} variants={variants} transition={defaultTransition}>
      {children}
    </motion.div>
  )
}
