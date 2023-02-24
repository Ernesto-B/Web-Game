import React from 'react'
import { useState } from 'react'

export default function Assasin() {
  const [assasinStats, setAssasinStats] = useState({
    name: 'Assassin',
    hp: 60,
    baseDMG: 20,
    energy: 150,
    ability1: 'Stab',
    ability2: 'Slice',
    ability3: 'Dice',
    ability4: 'Rip'
})

return (
    assasinStats
)
}

