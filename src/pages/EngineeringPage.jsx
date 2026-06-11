import EngineeringHero from '../components/engineering/EngineeringHero'
import BuildProcess from '../components/engineering/BuildProcess'
import EngineeringVideo from '../components/engineering/EngineeringVideo'
import EngineeringStandards from '../components/engineering/EngineeringStandards'

export default function EngineeringPage() {
  return (
    <main className="engineering-page">
      <EngineeringHero />
      <BuildProcess />
      <EngineeringVideo />
      <EngineeringStandards />
    </main>
  )
}
