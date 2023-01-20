import React from 'react'
import '../styles/Footer.scss'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

//Footer Images
import CapsuleCorp from '../assets/footer/capsule-corp.png'
import CurlyLines from '../assets/footer/footer-curly-lines.png'

const Footer = () => {
  return (
    <>
      <div className='footer_container'>
        <div className='footer_line'></div>
        <img
          className='footer_curly_img'
          src={CurlyLines}
          alt='curly-lines'
        ></img>
        <img
          className='footer_curly_img_2'
          src={CurlyLines}
          alt='curly-lines'
        ></img>
        <div className='capsule_corp_container'>
          <img
            className='capsule_corp_img'
            src={CapsuleCorp}
            alt='capsule-corp'
          ></img>
        </div>
        <div className='footer_icons'>
          <FaFacebook id='icon' />
          <FaTwitter id='icon' />
          <FaInstagram id='icon' />
        </div>
        <div className='footer_links'>
          <div className='footer_site'>
            <h3>Our site</h3>
            <ul>
              <Link to='#'>
                <li>How we work</li>
              </Link>

              <Link to='#'>
                <li>Reviews</li>
              </Link>
            </ul>
          </div>
          <div className='footer_helpme'>
            <h3>Help me</h3>
            <ul>
              <Link to='#'>
                <li>FAQ</li>
              </Link>
              <Link to='#'>
                <li>Terms of use</li>
              </Link>
              <Link to='#'>
                <li>Privacy policy</li>
              </Link>
              <Link to='#'>
                <li>Cookies</li>
              </Link>
            </ul>
          </div>
          <div className='footer_contact'>
            <h3>Contact</h3>
            <ul>
              <Link to='#'>
                <li>Support</li>
              </Link>
              <Link to='#'>
                <li>Live chat</li>
              </Link>
            </ul>
          </div>
          <div className='footer_others'>
            <h3>Others</h3>
            <ul>
              <Link to='#'>
                <li>Upcoming</li>
              </Link>
              <Link to='#'>
                <li>Licenses</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className='coded'>
          <p>Coded by:Norbert Kovacs</p>
        </div>
      </div>
    </>
  )
}

export default Footer
