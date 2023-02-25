// React imports
import React, { useState } from 'react'
import { useEffect } from 'react';

// Game component imports
import Items from './Items'
import Knight from '../game components/classes/Knight';
import Mage from '../game components/classes/Mage';
import Healer from '../game components/classes/Healer';
import Assasin from '../game components/classes/Assasin';


export default function Player(props:any) {

    const knight = Knight();
    const mage = Mage();
    const healer = Healer();
    const assasin = Assasin();

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

    // Change health
    function changeHealth(value:number):any{
        setStats({
            ...stats,
            health: value
        })
    }
    // Change level
    function changeLevel(value:number):any{
        setStats({
            ...stats,
            level: value  
        })
    }
    // Change EXP
    function changeEXP(value:number):any{
        setStats({
            ...stats,
            EXP: value  
        })
    }


    const [togglePlayer, setTogglePlayer] = useState(false);

    

  return (
    <div> 

    </div>
  )
}
