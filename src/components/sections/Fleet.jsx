import { fleetUnits } from '../../data/fleetData'
import FleetUnit from '../ui/FleetUnit'
import EngineeringLink from '../ui/EngineeringLink'
import Reveal from '../ui/Reveal'
import { engineeringPage } from '../../data/navigationData'
import './fleet.css'

export default function Fleet() {
  return (
    <section
      id="fleet"
      className="fleet-section scroll-mt-24 px-0 pb-24 pt-20 md:pb-32 md:pt-24"
    >
      <div className="fleet-section__grid" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-8 md:px-12">
        <div className="mb-12 flex flex-col gap-6 border-b border-white/6 pb-10 md:mb-16 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <header>
              <p className="mb-4 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-sky-400/60">
                Fleet
              </p>
              <h2 className="max-w-lg font-serif text-3xl font-light text-white md:text-4xl">
                Choose your depth capability
              </h2>
            </header>
          </Reveal>
          <Reveal delay={0.12} variant="fadeIn">
            <p className="max-w-sm text-sm leading-relaxed text-white/50 md:text-right">
              Three platforms. One mission standard — from shallow reconnaissance to
              fully autonomous deep-water operations.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl">
        {fleetUnits.map((unit, i) => (
          <Reveal
            key={unit.id}
            delay={i * 0.08}
            variant={i % 2 === 1 ? 'slideLeft' : 'slideRight'}
            amount={0.12}
          >
            <FleetUnit {...unit} index={i + 1} reverse={i % 2 === 1} />
          </Reveal>
        ))}
      </div>

      <Reveal className="relative mx-auto max-w-7xl px-8 md:px-12">
        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-white/6 pt-10 md:mt-16 md:flex-row md:items-center">
          <p className="max-w-md text-sm leading-relaxed text-white/50">
            Every unit is designed, fabricated, and pressure-tested in-house — from
            raw titanium to mission-ready deployment.
          </p>
          <EngineeringLink variant="button">{engineeringPage.ctaLong} →</EngineeringLink>
        </div>
      </Reveal>
    </section>
  )
}
