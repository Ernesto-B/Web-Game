// React imports
import React from 'react'
import { useState } from 'react'

// Game icon imports
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { GiHealthNormal } from 'react-icons/gi'

export default function NavBottom(props:any) {

    const [nav, toggleNav] = useState(false);
    const [downArrow, toggleDownArrow] = useState(true);

    const handleArrowClick:any = () => {
        toggleNav(!nav);
        toggleDownArrow(!downArrow);
    }

  return (
    <div>
        {props.classSelect[0] && <div className='flex bottom-0 w-screen'>

            <div id='up-arrow' className="absolute flex justify-center w-screen bottom-[30px] text-white hover:text-green-500 cursor-pointer animate-bounce" onClick={handleArrowClick}>
                <IoIosArrowUp size="35" />
            </div>
        
            {nav && <div id='bottom-box' className='fixed bottom-0 left-1/4 h-16 w-1/2 flex justify-center align-middle bg-gray-900 border-2 border-black shadow-md transition-all duration-500 ease-linear rounded-xl'>

                <div id='down-arrow' className="absolute flex justify-center w-screen bottom-[55px] text-white hover:text-green-500 cursor-pointer animate-bounce" onClick={handleArrowClick}>
                    <IoIosArrowDown size="35" />
                </div>

                <div id='health-icon' className='flex justify-center align-middle'>
                    <GiHealthNormal size="35" />
                </div>

            </div>}

        </div>}
    </div>
  )
}
