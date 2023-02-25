// React imports
import React from 'react'
import { useState } from 'react';


export default function Slime() {

    const [slimeStats, setSlimeStats] = useState({
        name: 'Slime',
        hp: 20,
        baseDMG: 2,
        ability1: 'Eat',
        ability2: 'Flop',
        ability3: 'Blop',
    })
    

  return (
    slimeStats
  )
}
