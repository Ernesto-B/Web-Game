// React imports
import React from 'react'
import { useState, useEffect } from 'react';

// Game icon imports
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export default function TextBox(props:any) {

    const selectedClass = String(props.parentProperties[1]).charAt(0).toUpperCase() + String(props.parentProperties[1]).slice(1);
    
    function handleClick(){
        // Scroll the contents of the text box down

        // Show the up arrow
        
        // Hide the down arrow
        
    }

  return (
    <div>
        
        {props.parentProperties[0] && <div id='text-box' className="flex absolute w-1/2 h-1/5 bottom-28 right-1/4 bg-gray-900 rounded-3xl border-2 border-white p-2 hover:rounded-2xl hover:bg-gray-700 text-xl transition-all delay-40">
            <p className='text-white'> Welcome, class "{selectedClass}" </p>

            <div id='down-arrow' className="absolute right-3 bottom-2 text-center text-white hover:text-green-500" onClick={handleClick}>
                <IoIosArrowDown size='35'/>
            </div>
            
        </div>}

    </div>
  )
}
