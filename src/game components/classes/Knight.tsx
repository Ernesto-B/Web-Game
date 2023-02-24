// Knight class is the tank class of the game. More HP and less DMG output.

import React from 'react'
import { useState } from 'react';


export default function Knight() {

    const [knightStats, setknightStats] = useState({
        name: 'Knight',
        hp: 100,
        baseDMG: 10,
        energy: 100,
        ability1: 'Slash',
        ability2: 'Shield Bash',
        ability3: 'Deflect',
        ability4: 'Breaker'
    })

  return (
    knightStats
  )
}
