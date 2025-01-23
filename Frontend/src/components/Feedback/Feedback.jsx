// import React from 'react'
import './Feedback.css'

const Feedback = () => {
  return (
    <>
         <div className="feedback" id="feedback">
        <form action="https://api.web3forms.com/submit" method="POST">
          <h3>Feedback Form</h3>
          <input
            type="hidden"
            name="access_key"
            value="ac691ca3-9abd-45a3-a2a5-1c39bfe387f2"
          />

          <input
            type="text"
            name="name"
            className="form-box"
            placeholder="Enter your Name"
            required
          />
          <input
            type="email"
            name="email"
            className="form-box"
            placeholder="Enter your email"
            required
          />
          <textarea
            name="message"
            className="form-box"
            placeholder="Give your Feedback "
            required
          ></textarea>
          <button type="submit" className="btn-class">
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default Feedback