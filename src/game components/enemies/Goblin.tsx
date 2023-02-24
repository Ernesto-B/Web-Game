import React from 'react'
import { useState } from 'react';


export default function Goblin() {

    const [stats, setStats] = useState({
        name: 'Goblin',
        hp: 30,
        baseDMG: 3,
        ability1: 'Slash',
        ability2: 'Steal',
        ability3: 'Rape',
    })
    
    function updateStats(newHP:number, newBaseDMG:number, newAbility1='Slash', newAbility2='Steal', newAbility3='Rape') {
        setStats({
            name: 'Goblin',
            hp: newHP,
            baseDMG: newBaseDMG,
            ability1: newAbility1,
            ability2: newAbility2,
            ability3: newAbility3,
        })
    }

  return (
    <div id='Goblin-class' className='border-x-2 border-x-red-500'>
        <h1 className="text-red-500 border-b-2 border-red-500">{stats.name}</h1>
        <h2>HP: {stats.hp}</h2>
        <h2>Base DMG: {stats.baseDMG}</h2>
        <h2>Ability 1: {stats.ability1}</h2>
        <h2>Ability 2: {stats.ability2}</h2>
        <h2>Ability 3: {stats.ability3}</h2>

        {/* <button className='hover:bg-white' onClick={() => updateStats(25, 120, 20)}>Update</button> */}
    </div>
  )
}
