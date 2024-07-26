import React, { useEffect } from 'react'
import '../index.css'
import { useNavigate } from 'react-router-dom'
function Projects() {
    const navigate = useNavigate();

//  GetMessManagement = () =>{
//     // window.Location.href = "https://github.com/Sumairahafeez/Mess_management_system"
//     navigate('https://github.com/Sumairahafeez/Mess_management_system')
//   }  
  return (
    <section className="text-white body-font bg-Dark ">
  <div className="container px-5 py-24 mx-auto font-Laila">
    <div className="flex justify-center items-center w-full mb-20  gap-5">
        <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FD7E14/group-of-projects.png" alt="group-of-projects"/>
      <h1 className="sm:text-3xl text-3xl font-medium title-font text-white">
        PPROJECT WORK
      </h1>
    </div>
    <div className="flex flex-wrap -m-4 gap-2">
      <div className="lg:w-[30%]  sm:w-1/2 p-4 animate">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-contain"
            src="https://raw.githubusercontent.com/RatulGhosh/Mess_Wala/master/app/src/main/res/drawable-hdpi/logo.png"
          />
          <div className="px-8 py-10 relative z-10 w-full bg-tertiary opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-Primary mb-1">
              MESS MANAGEMENT SYSTEM 
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-700 mb-3">
              A Project of Programming Fundamentals in c++
            </h1>
            <p className="leading-relaxed text-gray-700">
              Use of Arrays,Conditions and Functions for developing a system that help hostel students to digitalize their Mess System 
            </p>
            <button class="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-12 w-52 border text-center p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-primary before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg mt-5" onClick={()=>{window.location.href = ('https://github.com/Sumairahafeez/Mess_management_system')}}>
    view
</button>


          </div>
        </div>
      </div>
      <div className="lg:w-[30%]  sm:w-1/2 p-4 animate">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="https://png.pngtree.com/thumb_back/fh260/background/20220914/pngtree-science-concept-molecule-in-grunge-dark-room-measurement-texture-laboratory-photo-image_19815212.jpg"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-orange-400 bg-tertiary opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-Primary mb-1">
            LAB MANAGEMENT SYSTEM 
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-700 mb-3">
            A Project of DATABASE in c#,Winform,MSSQL
            </h1>
            <p className="leading-relaxed text-gray-700">
           Use of MSSQL to perform CRUD Operations using winform and c# and learned the basis of Database
            </p>
            <button class="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-12 w-52 border text-center p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-primary before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg mt-5" onClick={()=>{window.location.href = ('https://github.com/Sumairahafeez/Mess_management_system')}}>
    view
</button>

          </div>
        </div>
      </div>
      <div className="lg:w-[30%]  sm:w-1/2 p-4 animate">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="data:image/jpeg;base64,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"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-orange-400 bg-tertiary opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-Primary mb-1">
            AIRFORCE MANAGEMENT SYSTEM 
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-700 mb-3">
            A Project of Object Oriented Programming in c++
            </h1>
            <p className="leading-relaxed text-gray-700">
            Use of all the four pillars of Object Oriented Programming in c# with file handling and Database
            </p>
            <button class="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-12 w-52 border text-center p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-primary before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg mt-5" onClick={()=>{window.location.href = ('https://github.com/Sumairahafeez/Mess_management_system')}}>
    view
</button>

          </div>
        </div>
      </div>
      <div className="lg:w-[30%]  sm:w-1/2 p-4 animate">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="data:image/jpeg;base64,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"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-orange-400 bg-tertiary opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-Primary mb-1">
            SPACEO
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-700 mb-3">
            A Space Website build using React Basic
            </h1>
            <p className="leading-relaxed text-gray-700">
            used react components to build a space website that covers all exploration going on in space
            </p>
            <button class="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-12 w-52 border text-center p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-primary before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg mt-5" onClick={()=>{window.location.href = ('https://github.com/Sumairahafeez/Mess_management_system')}}>
    view
</button>

          </div>
        </div>
      </div>
      <div className="lg:w-[30%]  sm:w-1/2 p-4 animate">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="data:image/jpeg;base64,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"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-orange-400 bg-tertiary opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-Primary mb-1">
            NETFLIX CLONE & DISCORD CLONE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-700 mb-3">
            A Project of basic HTML CSS
            </h1>
            <p className="leading-relaxed text-gray-700">
                Use of all CSS properties to make a clone of netflix using HTML Tags and CSS. Discord clone is made using html css and javascript
            </p>
            <button class="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-12 w-52 border text-center p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-primary before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg mt-5" onClick={()=>{window.location.href = ('https://github.com/Sumairahafeez/Mess_management_system')}}>
    view
</button>

          </div>
        </div>
      </div>
      <div className="lg:w-[30%]  sm:w-1/2 p-4 animate">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="https://png.pngtree.com/thumb_back/fh260/background/20220914/pngtree-science-concept-molecule-in-grunge-dark-room-measurement-texture-laboratory-photo-image_19815212.jpg"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-orange-400 bg-tertiary opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-Primary mb-1">
            ELECTION MANAGEMENT SYSTEM 
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-700 mb-3">
            An ongoing full stack project using React+Vite and Next Js with Backend in ASP .NET
            </h1>
            <p className="leading-relaxed text-gray-700">
            Use of React Libraries and Hooks to Make an online voting system for all puposes.
            </p>
            <button class="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-12 w-52 border text-center p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-primary before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg mt-5" onClick={()=>{window.location.href = ('https://github.com/Sumairahafeez/Mess_management_system')}}>
    view
</button>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Projects
