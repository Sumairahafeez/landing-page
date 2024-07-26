import React from 'react'
import './contact.css'
function Conatct() {
  return (
    <div className=' w-screen h-screen flex flex-col gap-5 justify-center items-center bg-Dark'>
        <div className='flex text-white font-Laila justify-center items-center gap-5 text-4xl font-bold'> <img width="56" height="56" src="https://img.icons8.com/emoji/96/brown-circle-emoji.png" alt="brown-circle-emoji"/><h1>CONTACT US</h1></div>
 <div className="form-container">
  <form className="form">
    <div className="form-group font-Laila text-white text-lg">
      <label htmlFor="email">Company Email</label>
      <input required="" name="email" id="email" type="text" />
    </div>
    <div className="form-group">
      <label htmlFor="textarea">How Can I Help You?</label>
      <textarea
        required=""
        cols={50}
        rows={10}
        id="textarea"
        name="textarea"
        defaultValue={"          "}
      />
    </div>
    <button type="submit" className="form-submit-btn">
      Submit
    </button>
  </form>
</div>
    </div>
   


  )
}

export default Conatct
