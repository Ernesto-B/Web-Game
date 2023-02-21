import React from 'react'
// Icons are from https://react-icons.github.io/react-icons/icons?name=gi
import { GiBattleGear as Inventory, GiBladeDrag as Attack, GiBrokenHeart as Health, GiBurningBook as Ability } from 'react-icons/gi'

export default function Nav() {

  return (
    <div className="fixed top-0 h-screen w-20 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
        <div className='sideIconsCustom group'>
            <Health size="35"/>
            <span className='tooltip group-hover:scale-100'>'Healthy foods or something'</span>
        </div>
        
        <div className='sideIconsCustom group'>
            <Inventory size="35"/>
            <span className='tooltip group-hover:scale-100'>'Inventory or something'</span>
        </div>

        <div className='sideIconsCustom group'>
            <Attack size="35"/>
            <span className='tooltip group-hover:scale-100'>'Attack or something'</span>
        </div>

        <div className='sideIconsCustom group'>
            <Ability size="35"/>
            <span className='tooltip group-hover:scale-100'>'Ability or something'</span>
        </div>

    </div>
  )
}
