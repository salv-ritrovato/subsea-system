/**
 * Fleet lineup — units, specs, and imagery for the Fleet section.
 */
export const fleetUnits = [
  {
    id: 'sentinel-i7',
    name: 'Sentinel I7',
    tagline: 'Shallow-water reconnaissance',
    image: '/pictures/jakob-owens-GxJKG6adI3g-unsplash.jpg',
    imageAlt: 'Compact underwater imaging unit in clear shallow water',
    description:
      'A nimble imaging platform for coastal surveys, infrastructure checks, and rapid deployment from surface vessels — high-resolution capture in minimal setup time.',
    specs: [
      { label: 'Depth rating', value: '300 m' },
      { label: 'Endurance', value: '36 h' },
      { label: 'Payload', value: '4K array' },
      { label: 'Transit speed', value: '4 kn' },
    ],
    accent: 'cyan',
  },
  {
    id: 'explorer-3000',
    name: 'Explorer 3000',
    tagline: 'Work-class intervention ROV',
    image: '/pictures/9f9814e8-886e-41ee-9881-a1ce06ef3e64.png',
    imageAlt: 'Explorer 3000 ROV with manipulator arm operating on the seabed',
    description:
      'Our flagship work-class unit — dual floodlights, precision manipulator, and closed-loop station-keeping for pipeline inspection, salvage, and subsea construction support.',
    specs: [
      { label: 'Depth rating', value: '4,000 m' },
      { label: 'Endurance', value: '72 h' },
      { label: 'Manipulator', value: '6-DOF claw' },
      { label: 'Tether length', value: '2,000 m' },
    ],
    accent: 'amber',
  },
  {
    id: 'aegis-one',
    name: 'Aegis One',
    tagline: 'AI-guided autonomous submarine',
    image: '/pictures/marc-antoine-dery-Klikhd4zT6A-unsplash.jpg',
    imageAlt: 'Stealth submarine hull at dusk with active sensor lighting',
    description:
      'Fully autonomous submarine platform with onboard AI navigation — long-range patrol, covert survey, and deep-water missions without surface tether or human piloting.',
    specs: [
      { label: 'Depth rating', value: '6,000 m' },
      { label: 'Endurance', value: '30 days' },
      { label: 'Guidance', value: 'Onboard AI' },
      { label: 'Comms', value: 'Acoustic link' },
    ],
    accent: 'green',
  },
]
