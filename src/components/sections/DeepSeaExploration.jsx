import { explorationCards } from '../../data/explorationData'
import ExplorationCard from '../ui/ExplorationCard'
import Reveal, { StaggerItem, StaggerReveal } from '../ui/Reveal'
import './exploration.css'

export default function DeepSeaExploration() {
  return (
    <section
      id="exploration"
      className="exploration-section scroll-mt-24 px-8 pb-24 pt-20 md:px-12 md:pb-32 md:pt-24"
    >
      <div className="exploration-section__ambient" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl">
        <Reveal className="mb-10 text-center md:mb-14">
          <header>
            <p className="mb-4 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-sky-400/70">
              Deep Sea Exploration
            </p>
            <h2 className="mx-auto max-w-3xl font-serif text-3xl font-light text-white md:text-5xl">
              Missions humans can&apos;t reach
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/55 md:text-base">
              From open-ocean megafauna to reef biodiversity and bioluminescent
              zones — our rovers explore environments too vast, fragile, or remote
              for manned intervention.
            </p>
            <div className="exploration-section__sonar mx-auto mt-10 max-w-md" aria-hidden="true" />
          </header>
        </Reveal>

        <StaggerReveal className="exploration-grid" stagger={0.15}>
          {explorationCards.map((card, i) => (
            <StaggerItem key={card.id} variant="scaleIn" className="h-full">
              <ExplorationCard
                {...card}
                index={i + 1}
                glow={card.glow}
              />
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}
