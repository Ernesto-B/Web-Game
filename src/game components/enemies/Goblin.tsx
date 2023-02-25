// React imports
import React from 'react'
import { useState } from 'react';


export default function Goblin() {

    const [goblinStats, setGoblinStats] = useState({
        name: 'Goblin',
        hp: 30,
        baseDMG: 3,
        ability1: 'Slash',
        ability2: 'Steal',
        ability3: 'Clobber',
    })
    

  return (
    goblinStats
  )
}
