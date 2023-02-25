// React imports
import React from 'react'
import { useState } from 'react'

// Game icon imports
import { GiBigGear as Settings, GiDirectorChair as Credits } from 'react-icons/gi'
import { IoMdReorder as Menu } from 'react-icons/io'

export default function NavTop(props:any) {

    const [showDropdown, toggleDropdown] = useState(false)

  return (
    <div>
      
      {props.parentProperties && <div>
        
      </div>}  


    </div>
  )
}
