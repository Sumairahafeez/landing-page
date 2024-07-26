import React from 'react'
import { Link } from 'react-router-dom'
function Card() {
  return (
    <div className='w-screen h-full  m-auto flex mobile:w-screen text-white'>
      <div className='w-[40%] h-full bg-tertiary'>

      </div>
      <div className='w-[30%] h-[80%] relative top-24 -left-60 shadow-slate-500 shadow-xl rounded-md bg-tertiary flex flex-col justify-center items-center gap-10 animate'>
        <div className='w-[40%] h-[30%] bg-white rounded-full'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsPjb-G9VMFJErpPkz_SBdTnG7AY06PNMtrg&s' className='w-full h-full object-cover rounded-full'/>
        </div>
        <div className='flex flex-col justify-center items-center w-full font-Laila text-2xl font-bold text-text gap-2'>
        <h1>Sumaira</h1>
        <h1>Hafeez</h1>
        <div className='bg-orange-900 w-[20%] h-1 mt-3'></div>
        <h1 className='tracking-wider text-text mt-10'>FRONTEND DEVELOPER</h1>
        </div>
        <div className='w-full h-[12%] relative top-9 bg-white flex justify-center items-center gap-5'>
        <Link to={"https://www.linkedin.com/in/sumaira-hafeez-9974a6290/"}>
        <img width="26" height="26" src="https://img.icons8.com/ios-filled/50/737373/linkedin.png" alt="linkedin"/></Link>
        <Link to={"https://github.com/Sumairahafeez"}>
        <img width="26" height="26" alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIKc3R5bGU9ImZpbGw6IzczNzM3MzsiPgo8cGF0aCBkPSJNMzIgNkMxNy42NDEgNiA2IDE3LjY0MSA2IDMyYzAgMTIuMjc3IDguNTEyIDIyLjU2IDE5Ljk1NSAyNS4yODYtLjU5Mi0uMTQxLTEuMTc5LS4yOTktMS43NTUtLjQ3OVY1MC44NWMwIDAtLjk3NS4zMjUtMi4yNzUuMzI1LTMuNjM3IDAtNS4xNDgtMy4yNDUtNS41MjUtNC44NzUtLjIyOS0uOTkzLS44MjctMS45MzQtMS40NjktMi41MDktLjc2Ny0uNjg0LTEuMTI2LS42ODYtMS4xMzEtLjkyLS4wMS0uNDkxLjY1OC0uNDcxLjk3NS0uNDcxIDEuNjI1IDAgMi44NTcgMS43MjkgMy40MjkgMi42MjMgMS40MTcgMi4yMDcgMi45MzggMi41NzcgMy43MjEgMi41NzcuOTc1IDAgMS44MTctLjE0NiAyLjM5Ny0uNDI2LjI2OC0xLjg4OCAxLjEwOC0zLjU3IDIuNDc4LTQuNzc0LTYuMDk3LTEuMjE5LTEwLjQtNC43MTYtMTAuNC0xMC40IDAtMi45MjggMS4xNzUtNS42MTkgMy4xMzMtNy43OTJDMTkuMzMzIDIzLjY0MSAxOSAyMi40OTQgMTkgMjAuNjI1YzAtMS4yMzUuMDg2LTIuNzUxLjY1LTQuMjI1IDAgMCAzLjcwOC4wMjYgNy4yMDUgMy4zMzhDMjguNDY5IDE5LjI2OCAzMC4xOTYgMTkgMzIgMTlzMy41MzEuMjY4IDUuMTQ1LjczOGMzLjQ5Ny0zLjMxMiA3LjIwNS0zLjMzOCA3LjIwNS0zLjMzOC41NjcgMS40NzQuNjUgMi45OS42NSA0LjIyNSAwIDIuMDE1LS4yNjggMy4xOS0uNDMyIDMuNjk3QzQ2LjQ2NiAyNi40NzUgNDcuNiAyOS4xMjQgNDcuNiAzMmMwIDUuNjg0LTQuMzAzIDkuMTgxLTEwLjQgMTAuNCAxLjYyOCAxLjQzIDIuNiAzLjUxMyAyLjYgNS44NXY4LjU1N2MtLjU3Ni4xODEtMS4xNjIuMzM4LTEuNzU1LjQ3OUM0OS40ODggNTQuNTYgNTggNDQuMjc3IDU4IDMyIDU4IDE3LjY0MSA0Ni4zNTkgNiAzMiA2ek0zMy44MTMgNTcuOTNDMzMuMjE0IDU3Ljk3MiAzMi42MSA1OCAzMiA1OCAzMi42MSA1OCAzMy4yMTMgNTcuOTcxIDMzLjgxMyA1Ny45M3pNMzcuNzg2IDU3LjM0NmMtMS4xNjQuMjY1LTIuMzU3LjQ1MS0zLjU3NS41NTRDMzUuNDI5IDU3Ljc5NyAzNi42MjIgNTcuNjEgMzcuNzg2IDU3LjM0NnpNMzIgNThjLS42MSAwLTEuMjE0LS4wMjgtMS44MTMtLjA3QzMwLjc4NyA1Ny45NzEgMzEuMzkgNTggMzIgNTh6TTI5Ljc4OCA1Ny45Yy0xLjIxNy0uMTAzLTIuNDExLS4yODktMy41NzQtLjU1NEMyNy4zNzggNTcuNjEgMjguNTcxIDU3Ljc5NyAyOS43ODggNTcuOXoiPjwvcGF0aD4KPC9zdmc+"/></Link>
        <Link to={"https://www.youtube.com/channel/UCej219g4JyesLvhl_k7gAJw"}><img width="26" height="26" src="https://img.icons8.com/ios-filled/50/737373/youtube-play.png" alt="youtube-play"/></Link>
        <Link to={'https://discord.com/app/invite-with-guild-onboarding/JQABBkdd'}><img width="26" height="26" src="https://img.icons8.com/ios-filled/50/737373/discord--v1.png" alt="discord--v1"/></Link>
        </div>
      </div>
      <div className='w-[40%] h-[90%] flex flex-col relative -left-56 justify-center gap-3'> 
        <h1 className='text-text font-Laila text-2xl tracking-wider font-bold '>HELLO I AM</h1>
        <h1 className='text-text font-Laila text-4xl tracking-wider font-bold typewriter'>A DEVELOPER</h1>
        <div className='w-[50%] h-[6%] flex justify-center items-center gap-3 font-Laila mt-5'>
          <Link to={'/Resume'} className='w-[50%] h-full bg-secondary rounded-3xl text-center'>RESUME</Link>
          <Link to={'/Project'} className='w-[50%] h-full border border-secondary rounded-3xl text-center'>Projects</Link>
        </div>
      </div>
    </div>
  )
}

export default Card
