import { useEffect, useState } from "react"
import React from 'react'
import { Outlet } from "react-router-dom"
import {Link} from "react-router-dom"

function Navbar() {
    const [mode,setmode] = useState("true")
    
  return (
    <header className="text-gray-600 body-font backdrop-opacity-40">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-black mb-4 md:mb-0">
      <span className="ml-3 text-2xl font-Laila text-white">Sumaira Hafeez| Frontend Developer</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-5 text-white font-Laila">
      <Link to={`/`} className="mr-5 hover:cursor-pointer hover:bg-secondary justify-center hover:text-xl">About</Link>
      <Link to={'/Resume'} className="mr-5 hover:cursor-pointer hover:bg-secondary justify-center hover:text-xl">Resume</Link>
      <Link to={'/Project'} className="mr-5 hover:cursor-pointer hover:bg-secondary justify-center hover:text-xl">Project</Link>
      <Link  to={'/contact'} className="mr-5 hover:cursor-pointer hover:bg-secondary justify-center hover:text-xl">Contact</Link>
    </nav>
    {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button> */}
  </div>
</header>
  )
}

export default Navbar
