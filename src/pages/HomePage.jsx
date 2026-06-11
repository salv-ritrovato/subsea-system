import Hero from '../components/sections/Hero'
import AutonomousRovers from '../components/sections/AutonomousRovers'
import DeepSeaExploration from '../components/sections/DeepSeaExploration'
import Fleet from '../components/sections/Fleet'
import Support from '../components/sections/Support'
import SectionBlend from '../components/ui/SectionBlend'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AutonomousRovers />
      <SectionBlend variant="rovers-exploration" />
      <DeepSeaExploration />
      <SectionBlend variant="exploration-fleet" />
      <Fleet />
      <SectionBlend variant="fleet-support" />
      <Support />
    </main>
  )
}
