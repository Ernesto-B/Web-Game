// React imports
import React from 'react'
import { useState } from 'react';

export default function Dices(props:any) {

    const [diceRoll, setDiceRoll] = useState(0);
    const [rolled, setRolled] = useState(false);

    class Dice {
        sides:number;
    
        constructor(sides:number){
          this.sides = sides;
        }
    
        roll(): number {
          return Math.floor(Math.random() * this.sides) + 1;
        }
    }
      const mainDice = new Dice(6);

    function handleClick () {
        const resultRoll = mainDice.roll();
        setDiceRoll(resultRoll);
        setRolled(true);
    }

  return (
    <div>
      {props.parentProperties && <div id='dice-container' className="flex absolute justify-center items-center right-4 bottom-28 w-1/4 h-1/5 text-white select-none">
        <div id='text-container' className="flex items-center rounded border-2 px-2 border-white h-1/4 hover:bg-green-500 hover:cursor-pointer hover:animate-pulse" onClick={handleClick}>
            {rolled && <h1 className="text-2xl">You Rolled: {diceRoll}</h1>}
            {!rolled && <h1 className="text-2xl">Click to Roll</h1>}
        </div>
      </div>}
    </div>
  )
}
