import React, { useState } from 'react'
import { useEffect } from 'react';
import Items from './Items'



export default function Player() {

    const [stats, setStats] = useState({
        class : 'None',
        health: 0,
        name: '1',
        level: 1, 
        EXP: 0,
        ability1: 'None',
        ability2: 'None',
        ability3: 'None',
        ability4: 'None'
    });

    const [togglePlayer, setTogglePlayer] = useState(false);
    

  return (
    <div className="flex justify-center"> 

        {!togglePlayer && <button className="flex justify-center text-3xl bg-transparent text-white hover:bg-red-400 border-2 rounded">
            Select Class
        </button>}

        {togglePlayer && <div id='Show-player-stats'>
            something
        </div>}

    </div>
  )
}
