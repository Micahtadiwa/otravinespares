import React from 'react'
import mail_icon from "../../pics/mail_icon.svg"
import call_icon from "../../pics/call_icon.svg"
import location_icon from "../../pics/location_icon.svg"
import "./Contact.css"
const Contact = () => {
  return (
    <div  id='contact' className='contact'>
       <div className="contact-title">
            <h1>Get In Touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Lets Talk</h1>
               <h3>Feel free to call if you want any motor spare part</h3>
                <div className="contact-detail">
                    <img src={mail_icon} alt="" /><p>otravine@gmail.com</p>
 
                </div>
                <div className="contact-detail">
                     <img src={call_icon} alt="" /><p>+263 77 355 4323</p>
                </div>
                <div className="contact-detail">
                     <img src={location_icon} alt="" /><p>Harare, Zimbabwe</p>
                </div>
            </div>
            <form  className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email'/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                <button className="contact-submit" type='submit'>Submit Now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
