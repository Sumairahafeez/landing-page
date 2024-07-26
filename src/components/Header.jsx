import { useEffect, useState } from "react"
import React from 'react'
import Navbar from "./Navbar"
import Card from "./Card"

function Header({Mode}) {
    const [mode,setmode] = useState("true")
    // if(Mode == "Dark")
    {
      return (
        <div className = "w-screen h-screen bg-Dark">
            <Navbar/>
            <Card/>
        </div>
      )
    }
 
}
export default Header
