import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

let lenisInstance = null

/** Returns the shared Lenis instance (created once at app level). */
export function getLenis() {
  return lenisInstance
}

/**
 * Initialises Lenis smooth scroll and runs the RAF loop.
 * Call once at the layout root.
 */
export function useLenis() {
  const rafId = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    lenisInstance = lenis

    const raf = (time) => {
      lenis.raf(time)
      rafId.current = requestAnimationFrame(raf)
    }
    rafId.current = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId.current)
      lenis.destroy()
      lenisInstance = null
    }
  }, [])
}
