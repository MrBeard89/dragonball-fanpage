import React from 'react'
import '../styles/Contact.scss'

import Vegeta from '../assets/contact/contact_vegeta.png'

const Contact = () => {
  return (
    <>
      <div className='contact_container'>
        <div>
          <img className='vegeta_img' src={Vegeta} alt='vegeta-img'></img>
        </div>
        <div className='form_container'>
          <div className='form_text'>
            <h1>Contact Us</h1>
            <p>Leave your message and we'll get back to you shortly</p>
          </div>
          <form className='form' action=''>
            <label for='full_name'>Your Name*</label>
            <input type='text' name='full_name'></input>
            <label for='email'>Your Email*</label>
            <input type='email' name='email'></input>
            <label for='textarea'>Your Message*</label>
            <textarea className='textarea' name='textarea'></textarea>
            <button className='btn' type='submit'>
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
