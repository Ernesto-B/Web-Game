import React from 'react'
import { useState } from 'react'

export default function Healer() {

    const [healerStats, setHealerStats] = useState({
        name: 'Healer',
        hp: 50,
        baseDMG: 5,
        energy: 200,
        ability1: 'Heal',
        ability2: 'Shield',
        ability3: 'Cure',
        ability4: 'Revive'
    })
    

  return (
    healerStats
  )
}

