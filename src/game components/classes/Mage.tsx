import React from 'react'
import { useState } from 'react'

export default function Mage() {
    const [mageStats, setMageStats] = useState({
        name: 'Mage',
        hp: 80,
        baseDMG: 18,
        energy: 200,
        ability1: 'Fire',
        ability2: 'Water',
        ability3: 'Earth',
        ability4: 'Air' 
    })

  return (
    mageStats
  )
}
