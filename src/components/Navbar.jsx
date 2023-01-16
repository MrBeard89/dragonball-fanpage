import React from 'react'
import '../styles/Navbar.css'
import Logo from '../assets/logo.png'
import NavbarBgGoku from '../assets/navbar-bg-logo.png'
import GokuCloud from '../assets/cloud.png'
import GokuHair from '../assets/goku-hair.png'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='navbar_container'>
        <div className='navbar_title_container'>
          <img className='goku_hair' src={GokuHair} alt='goku-hair'></img>
          <h1 className='navbar_title'>Dragon Ball Fanpage</h1>
        </div>
        <div className='logo_container'>
          <Link to='/'>
            <img className='logo' src={Logo} alt='dragon-ball-1-star'></img>
          </Link>
        </div>
        <div className='navbar_links_container'>
          <ul className='navbar_links'>
            <Link to='/'>
              <li className='link'>Home</li>
            </Link>
            <Link to='#'>
              <li className='link'>Goku Forms</li>
            </Link>
            <Link to='/comics'>
              <li className='link'>Comics</li>
            </Link>
            <Link to='#'>
              <li className='link'>Upcoming Events</li>
            </Link>
            <Link to='/contact'>
              <li className='link'>Contact</li>
            </Link>
          </ul>
          <div className='goku_logo_container'>
            <img className='goku_logo' src={NavbarBgGoku} alt='ss goku'></img>
          </div>
        </div>
      </div>
      <div className='navbar_cloud_line animate-flicker'>
        <img className='navbar_cloud' src={GokuCloud} alt='goku"s cloud'></img>
      </div>
    </>
  )
}

export default Navbar
