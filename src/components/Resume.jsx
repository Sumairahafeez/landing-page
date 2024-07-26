import React from 'react'
import './radio.css'
function Resume() {
  return (
    <div className='w-screen h-screen flex  justify-center items-center bg-Dark'>
       
      <section class="text-white body-font flex justify-center items-center w-screen h-screen font-Laila bg-Dark">
       
     
  <div class="container px-5 py-24 mx-auto flex flex-col gap-20">
  <div className='flex justify-center items-center gap-5 text-4xl font-bold'> <img width="56" height="56" src="https://img.icons8.com/emoji/96/brown-circle-emoji.png" alt="brown-circle-emoji"/><h1>SKILLS & LANGUAGES</h1></div>
  <div className='flex justify-center items-center gap-10'>
  <div
  class="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-secondary"
>
  <div class="z-10 absolute w-full h-full peer"></div>
  <div
    class="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-70% h-44 rounded-full bg-tertiary transition-all duration-500 "
  ></div>
  <div
    class="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-tertiary transition-all duration-500"
  >
   <div
  class="flex space-x-1 border-[3px] border-Primary rounded-xl select-none w-[90%] text-sm"
>
  <label
    class="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer"
  >
    <input
      type="radio"
      name="radio"
      value="html"
      class="peer hidden"
      checked=""
    />
    <span
      class="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700  rounded-lg transition duration-150 ease-in-out"
      >Good</span
    >
  </label>

  <label
    class="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer"
  >
    <input type="radio" name="radio" value="react" class="peer hidden" />
    <span
      class="tracking-widest bg-secondary peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 p-2 rounded-lg transition duration-150 ease-in-out"
      >Better</span
    >
  </label>

  <label
    class="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer"
  >
    <input type="radio" name="radio" value="vue" class="peer hidden" />
    <span
      class="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 p-2 rounded-lg transition duration-150 ease-in-out"
      >Best</span
    >
  </label>
</div>

  </div>
  <div class="w-full h-full items-center justify-center flex uppercase">
  <img width="100" height="100" src="https://img.icons8.com/ios/50/FD7E14/c-plus-plus-logo.png" alt="c-plus-plus-logo"/>
  </div>
</div>
<div
  class="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-secondary"
>
  <div class="z-10 absolute w-full h-full peer"></div>
  <div
    class="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-tertiary transition-all duration-500"
  ></div>
  <div
    class="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-tertiary transition-all duration-500"
  >
   <div
  class="flex space-x-1 border-[3px] border-Primary rounded-xl select-none w-[90%] text-sm"
>
  <label
    class="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer"
  >
    <input
      type="radio"
      name="radio"
      value="html"
      class="peer hidden"
      checked=""
    />
    <span
      class="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700  rounded-lg transition duration-150 ease-in-out"
      >Good</span
    >
  </label>

  <label
    class="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer"
  >
    <input type="radio" name="radio" value="react" class="peer hidden" />
    <span
      class="tracking-widest bg-secondary peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 p-2 rounded-lg transition duration-150 ease-in-out"
      >Better</span
    >
  </label>

  <label
    class="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer"
  >
    <input type="radio" name="radio" value="vue" class="peer hidden" />
    <span
      class="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 p-2 rounded-lg transition duration-150 ease-in-out"
      >Best</span
    >
  </label>
</div>

  </div>
  <div class="w-full h-full items-center justify-center flex uppercase">
  <img width="100" height="100" src="https://img.icons8.com/ios-filled/50/FD7E14/c-sharp-logo.png" alt="c-sharp-logo"/>
  </div>
</div>
<div
  class="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-secondary"
>
  <div class="z-10 absolute w-full h-full peer"></div>
  <div
    class="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-tertiary transition-all duration-500"
  ></div>
  <div
    class="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-tertiary transition-all duration-500"
  >
   <div
  class="flex space-x-1 border-[3px] border-Primary rounded-xl select-none w-[90%] text-sm"
>
  <label
    class="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer"
  >
    <input
      type="radio"
      name="radio"
      value="html"
      class="peer hidden"
      checked=""
    />
    <span
      class="tracking-widest bg-secondary  peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700  rounded-lg transition duration-150 ease-in-out"
      >Good</span
    >
  </label>

  <label
    class="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer"
  >
    <input type="radio" name="radio" value="react" class="peer hidden" />
    <span
      class="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 p-2 rounded-lg transition duration-150 ease-in-out"
      >Better</span
    >
  </label>

  <label
    class="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer"
  >
    <input type="radio" name="radio" value="vue" class="peer hidden" />
    <span
      class="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 p-2 rounded-lg transition duration-150 ease-in-out"
      >Best</span
    >
  </label>
</div>

  </div>
  <div class="w-full h-full items-center justify-center flex uppercase">
  <img width="100" height="100" src="https://img.icons8.com/ios-filled/50/FD7E14/python.png" alt="python"/>
  </div>
</div>
<div
  class="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-secondary"
>
  <div class="z-10 absolute w-full h-full peer"></div>
  <div
    class="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-tertiary transition-all duration-500"
  ></div>
  <div
    class="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-tertiary transition-all duration-500"
  >
   <div
  class="flex space-x-1 border-[3px] border-Primary rounded-xl select-none w-[90%] text-sm"
>
  <label
    class="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer"
  >
    <input
      type="radio"
      name="radio"
      value="html"
      class="peer hidden"
      checked=""
    />
    <span
      class="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700  rounded-lg transition duration-150 ease-in-out"
      >Good</span
    >
  </label>

  <label
    class="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer"
  >
    <input type="radio" name="radio" value="react" class="peer hidden" />
    <span
      class="tracking-widest bg-secondary peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 p-2 rounded-lg transition duration-150 ease-in-out"
      >Better</span
    >
  </label>

  <label
    class="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer"
  >
    <input type="radio" name="radio" value="vue" class="peer hidden" />
    <span
      class="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 p-2 rounded-lg transition duration-150 ease-in-out"
      >Best</span
    >
  </label>
</div>


  </div>
  <div class="w-full h-full items-center justify-center flex uppercase">
  <img width="100" height="100" src="https://img.icons8.com/ios-filled/50/FD7E14/javascript-logo.png" alt="javascript-logo"/>
  </div>
</div>
<div
  class="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-secondary"
>
  <div class="z-10 absolute w-full h-full peer"></div>
  <div
    class="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-tertiary transition-all duration-500"
  ></div>
  <div
    class="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-tertiary transition-all duration-500"
  >
   <div
  class="flex space-x-1 border-[3px] border-Primary rounded-xl select-none w-[90%] text-sm"
>
  <label
    class="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer"
  >
    <input
      type="radio"
      name="radio"
      value="html"
      class="peer hidden"
      checked=""
    />
    <span
      class="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700  rounded-lg transition duration-150 ease-in-out"
      >Good</span
    >
  </label>

  <label
    class="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer"
  >
    <input type="radio" name="radio" value="react" class="peer hidden" />
    <span
      class="tracking-widest bg-secondary peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 p-2 rounded-lg transition duration-150 ease-in-out"
      >Better</span
    >
  </label>

  <label
    class="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer"
  >
    <input type="radio" name="radio" value="vue" class="peer hidden" />
    <span
      class="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 p-2 rounded-lg transition duration-150 ease-in-out"
      >Best</span
    >
  </label>
</div>

  </div>
  <div class="w-full h-full items-center justify-center flex uppercase">
  <img width="100" height="100" src="https://img.icons8.com/ios/100/FD7E14/mysql-logo.png" alt="mysql-logo"/>
  </div>
</div>
  </div>
 


    {/* <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-secondary flex-shrink-0">
      <img width="148" height="148" src="https://img.icons8.com/color/48/c-plus-plus-logo.png" alt="c-plus-plus-logo"/>
      </div>
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">C++</h2>
        <p class="leading-relaxed text-base">60%</p>
        <a class="mt-3 text-text inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">C#-OOP</h2>
        <p class="leading-relaxed text-base">80%</p>
        <a class="mt-3 text-text inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-secondary text-indigo-500 flex-shrink-0">
      <img width="158" height="158" src="https://img.icons8.com/color/48/c-sharp-logo-2.png" alt="c-sharp-logo-2"/>
      </div>
    </div>
    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-secondary flex-shrink-0">
      <img width="188" height="188" src="https://img.icons8.com/3d-fluency/188/python.png" alt="python"/>
      </div>
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Python</h2>
        <p class="leading-relaxed text-base">60%</p>
        <a class="mt-3 text-text inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Javascript</h2>
        <p class="leading-relaxed text-base">80%</p>
        <a class="mt-3 text-text inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
      <img width="148" height="148" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>
      </div>
    </div> */}
  </div>
</section>
    </div>
  )
}

export default Resume
