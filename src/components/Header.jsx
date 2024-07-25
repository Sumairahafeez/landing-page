import { useEffect, useState } from "react"
import React from 'react'
import Navbar from "./Navbar"
import Card from "./Card"

function Header() {
    const [mode,setmode] = useState("true")
    
  return (
    <div className = "w-screen h-screen ">
        <Navbar/>
        <Card/>
    </div>
  )
}
export default Header
