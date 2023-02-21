import React from 'react'
import { useState } from 'react'
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { GiHealthNormal } from 'react-icons/gi'

export default function NavBottom() {

    const [nav, toggleNav] = useState(false);
    const [downArrow, toggleDownArrow] = useState(true);

    const handleArrowClick:any = () => {
        toggleNav(!nav);
        toggleDownArrow(!downArrow);
    }

  return (
    <div className='flex bottom-0 w-screen'>

        <div className="fixed bottom-[30px] left-1/2 text-white hover:text-green-500 cursor-pointer animate-bounce transition-all duration-500 ease-linear" onClick={handleArrowClick}>
            <IoIosArrowUp size="35" />
        </div>
      
        {nav && <div className='fixed bottom-0 left-1/4 h-16 w-1/2 flex justify-center align-middle bg-gray-900 border-2 border-black shadow-md transition-all duration-500 ease-linear rounded-xl'>

            <div className="fixed bottom-[55px] left-1/2 text-white hover:text-green-500 cursor-pointer animate-bounce transition-all duration-100 ease-linear" onClick={handleArrowClick}>
                <IoIosArrowDown size="35" />
            </div>

            <div className='flex justify-center align-middle'>
                <GiHealthNormal size="35" />
            </div>

        </div>}

    </div>
  )
}
