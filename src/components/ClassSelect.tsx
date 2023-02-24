// React imports
import React from 'react'
import { useEffect, useState } from 'react'

// UI component imports
import NavLeft from './NavLeft';
import NavBottom from './NavBottom';
import NavTop from './NavTop';

// Game Icon imports
import { GiBlackKnightHelm as KnightIcon, GiHood as AssasinIcon, GiHealing as HealerIcon } from "react-icons/gi";
import { FaHatWizard as MageIcon } from "react-icons/fa";

// Game component imports
import Knight from '../game components/classes/Knight';
import Mage from '../game components/classes/Mage';
import Healer from '../game components/classes/Healer';
import Assasin from '../game components/classes/Assasin';

export default function ClassSelect(props:any) {
    const [classSelect, setClassSelect] = useState(false);
    const [className, setClassName] = useState('');

    const knight = Knight();
    const mage = Mage();
    const healer = Healer();
    const assasin = Assasin();

    const knighticon = <KnightIcon className="text-white text-8xl" />;
    const mageicon = <MageIcon className="text-white text-8xl" />;
    const healericon = <HealerIcon className="text-white text-8xl" />;
    const assasinicon = <AssasinIcon className="text-white text-8xl" />;


    function handleClassClick(className:string){
        setClassSelect(!classSelect);
        setClassName(className);
        console.log(className);
    }


  return (
    <div className='overflow-hidden'>
        {!classSelect && <div id='background-opacity' className="opacity-60 w-screen h-screen bg-black overflow-hidden">
            <div id='select-class-menu' className="absolute flex flex-col items-center h-2/3 w-1/2 right-1/4 top-20 p-2 bg-gray-800 rounded-xl border-2 border-white">
                <h1 id='header' className="text-white text-3xl mb-3">Choose A Class</h1>

                <div id='class-cards-container' className="flex justify-evenly h-full w-full">

                    <div id='knight-card' className="flex flex-col justify-start items-center p-2 w-1/4 h-full bg-black rounded-xl hover:border-2 hover:border-white hover:bg-green-500 hover:cursor-pointer shadow-md" onClick={():any => handleClassClick("knight")}>
                        {knighticon}
                        <h1 className="text-white font-bold text-xl mb-3">Knight</h1>
                        <h2 className="text-white"><u>Stats:</u></h2>
                        <div id='stats-container' className="flex w-full h-1/2 px-3">
                            <div id='stats-header' className='flex flex-col text-white py-2'>
                                <h2>HP:</h2>
                                <h2>Damage:</h2>
                                <h2>Energy:</h2>
                                <h2>Ability 1:</h2>
                                <h2>Ability 2:</h2>
                                <h2>Ability 3:</h2>
                                <h2>Ability 4:</h2>
                            </div>
                            <div id='stats-value' className='flex flex-col items-end text-white py-2 w-full'>
                                <h2>{knight.hp}</h2>
                                <h2>{knight.baseDMG}</h2>
                                <h2>{knight.energy}</h2>
                                <h2>{knight.ability1}</h2>
                                <h2>{knight.ability2}</h2>
                                <h2>{knight.ability3}</h2>
                                <h2>{knight.ability4}</h2>
                            </div>
                        </div>

                    </div>

                    <div id='mage-card' className="flex flex-col justify-start items-center p-2 w-1/4 h-full bg-black rounded-xl hover:border-2 hover:border-white hover:bg-green-500 hover:cursor-pointer shadow-md" onClick={():any => handleClassClick("mage")}>
                        {mageicon}
                        <h1 className="text-white font-bold text-xl mb-3">Mage</h1>
                        <h2 className="text-white"><u>Stats:</u></h2>
                        <div id='stats-container' className="flex w-full h-1/2 px-3">
                            <div id='stats-header' className='flex flex-col text-white py-2'>
                                <h2>HP:</h2>
                                <h2>Damage:</h2>
                                <h2>Energy:</h2>
                                <h2>Ability 1:</h2>
                                <h2>Ability 2:</h2>
                                <h2>Ability 3:</h2>
                                <h2>Ability 4:</h2>
                            </div>
                            <div id='stats-value' className='flex flex-col items-end text-white py-2 w-full'>
                                <h2>{mage.hp}</h2>
                                <h2>{mage.baseDMG}</h2>
                                <h2>{mage.energy}</h2>
                                <h2>{mage.ability1}</h2>
                                <h2>{mage.ability2}</h2>
                                <h2>{mage.ability3}</h2>
                                <h2>{mage.ability4}</h2>
                            </div>
                        </div>

                    </div>

                    <div id='mage-card' className="flex flex-col justify-start items-center p-2 w-1/4 h-full bg-black rounded-xl hover:border-2 hover:border-white hover:bg-green-500 hover:cursor-pointer shadow-md" onClick={():any => handleClassClick("healer")}>
                        {healericon}
                        <h1 className="text-white font-bold text-xl mb-3">Healer</h1>
                        <h2 className="text-white"><u>Stats:</u></h2>
                        <div id='stats-container' className="flex w-full h-1/2 px-3">
                            <div id='stats-header' className='flex flex-col text-white py-2'>
                                <h2>HP:</h2>
                                <h2>Damage:</h2>
                                <h2>Energy:</h2>
                                <h2>Ability 1:</h2>
                                <h2>Ability 2:</h2>
                                <h2>Ability 3:</h2>
                                <h2>Ability 4:</h2>
                            </div>
                            <div id='stats-value' className='flex flex-col items-end text-white py-2 w-full'>
                                <h2>{healer.hp}</h2>
                                <h2>{healer.baseDMG}</h2>
                                <h2>{healer.energy}</h2>
                                <h2>{healer.ability1}</h2>
                                <h2>{healer.ability2}</h2>
                                <h2>{healer.ability3}</h2>
                                <h2>{healer.ability4}</h2>
                            </div>
                        </div>

                    </div>

                    <div id='mage-card' className="flex flex-col justify-start items-center p-2 w-1/4 h-full bg-black rounded-xl hover:border-2 hover:border-white hover:bg-green-500 hover:cursor-pointer shadow-md" onClick={():any => handleClassClick("assasin")}>
                        {assasinicon}
                        <h1 className="text-white font-bold text-xl mb-3">Assasin</h1>
                        <h2 className="text-white"><u>Stats:</u></h2>
                        <div id='stats-container' className="flex w-full h-1/2 px-3">
                            <div id='stats-header' className='flex flex-col text-white py-2'>
                                <h2>HP:</h2>
                                <h2>Damage:</h2>
                                <h2>Energy:</h2>
                                <h2>Ability 1:</h2>
                                <h2>Ability 2:</h2>
                                <h2>Ability 3:</h2>
                                <h2>Ability 4:</h2>
                            </div>
                            <div id='stats-value' className='flex flex-col items-end text-white py-2 w-full'>
                                <h2>{assasin.hp}</h2>
                                <h2>{assasin.baseDMG}</h2>
                                <h2>{assasin.energy}</h2>
                                <h2>{assasin.ability1}</h2>
                                <h2>{assasin.ability2}</h2>
                                <h2>{assasin.ability3}</h2>
                                <h2>{assasin.ability4}</h2>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>}

        
        <NavLeft classSelect={classSelect}/>
        <NavBottom classSelect={classSelect}/>
        <NavTop classSelect={classSelect}/>
    </div>
  )
}
