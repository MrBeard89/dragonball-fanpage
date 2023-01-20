import React, { useState } from 'react'
import '../styles/Navbar.scss'
import Logo from '../assets/logo.png'
import NavbarBgGoku from '../assets/navbar/navbar-bg-logo.png'
import GokuCloud from '../assets/navbar/cloud.png'
import GokuHair from '../assets/navbar/goku-hair.png'

//Mobile Menu Icons
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'

import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false)
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
          <ul
            className={isMobile ? 'navbar_links_mobile' : 'navbar_links'}
            onClick={() => setIsMobile(false)}
          >
            <Link to='/'>
              <li className='link'>Home</li>
            </Link>
            <Link to='/gokuforms'>
              <li className='link'>Goku Forms</li>
            </Link>
            <Link to='/news'>
              <li className='link'>News</li>
            </Link>

            <Link to='/contact'>
              <li className='link'>Contact</li>
            </Link>
            <Link to='/comingsoon'>
              <li className='link'>Coming Soon</li>
            </Link>
          </ul>
          <button
            className='mobile_menu_icon'
            onClick={() => setIsMobile(!isMobile)}
          >
            {isMobile ? <GrClose /> : <GiHamburgerMenu />}
          </button>
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
