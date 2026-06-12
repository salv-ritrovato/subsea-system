import { useCallback } from 'react'
import { useReducedMotion } from 'framer-motion'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

const configs = {
  deep: {
    particles: {
      number: { value: 55, density: { enable: true } },
      color: { value: ['#38bdf8', '#67e8f9', '#a5f3fc', '#e0f2fe'] },
      opacity: {
        value: { min: 0.04, max: 0.22 },
        animation: { enable: true, speed: 0.4, minimumValue: 0.02 },
      },
      size: {
        value: { min: 0.8, max: 2.8 },
        animation: { enable: true, speed: 0.6, minimumValue: 0.4 },
      },
      move: {
        enable: true,
        speed: { min: 0.15, max: 0.45 },
        direction: 'none',
        random: true,
        straight: false,
        outModes: 'out',
      },
      twinkle: {
        particles: { enable: true, frequency: 0.04, opacity: 0.5 },
      },
    },
    detectRetina: true,
  },

  bioluminescent: {
    particles: {
      number: { value: 90, density: { enable: true } },
      color: { value: ['#22d3ee', '#38bdf8', '#7dd3fc', '#bae6fd', '#a78bfa'] },
      opacity: {
        value: { min: 0.06, max: 0.45 },
        animation: { enable: true, speed: 0.5, minimumValue: 0.03 },
      },
      size: {
        value: { min: 0.6, max: 3.2 },
        animation: { enable: true, speed: 0.8, minimumValue: 0.3 },
      },
      move: {
        enable: true,
        speed: { min: 0.1, max: 0.5 },
        direction: 'top',
        random: true,
        straight: false,
        outModes: 'out',
        drift: 0.4,
      },
      twinkle: {
        particles: { enable: true, frequency: 0.07, opacity: 0.8 },
      },
    },
    detectRetina: true,
  },
}

export default function OceanParticles({ variant = 'deep', className = '' }) {
  const prefersReducedMotion = useReducedMotion()
  const init = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  if (prefersReducedMotion) return null

  return (
    <Particles
      id={`ocean-particles-${variant}`}
      className={`pointer-events-none absolute inset-0 z-[2] ${className}`}
      init={init}
      options={configs[variant]}
    />
  )
}
