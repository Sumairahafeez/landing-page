import React from 'react'
import './contact.css'
function Conatct() {
  return (
    <div className=' w-screen flex justify-center items-center bg-Dark'>
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
