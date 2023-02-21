import React, { useState } from 'react'
import Items from './Items'


export default function Player() {

    const [stats, setStats] = useState({
        class : 'None',
        health: 0,
        name: '1',
        EXP: 0,
        ability1: 'None',
        ability2: 'None',
        ability3: 'None',
        ability4: 'None'
    });

    const updateHealth = () => {
        setStats({
            class : '',
            health: 100,
            name: 'Player',
            EXP: 0,
            ability1: '',
            ability2: '',
            ability3: '',
            ability4: ''
        })
    }


  return (
    <div className="player text-white hidden"> 
        <h1 className="">Player {stats.name}</h1>
        <h2>Class: {stats.class}</h2>
        <h2>Health: {stats.health}</h2>
        <h2>EXP: {stats.EXP}</h2>
    
        <button className="bg-transparent hover:bg-blue-500 text-white hover:text-white-200 border-2 border-blue-500 hover:border-transparent rounded" onClick={updateHealth}>
            Button
        </button>
    </div>
  )
}
