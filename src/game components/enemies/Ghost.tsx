// React imports
import React from 'react'
import { useState } from 'react';


export default function Ghost() {

    const [ghostStats, setGhostStats] = useState({
        name: 'Ghost',
        hp: 0,
        baseDMG: 0,
        ability1: 'Possess',
        ability2: 'Disappear'
    })
    

  return (
    ghostStats
  )
}
