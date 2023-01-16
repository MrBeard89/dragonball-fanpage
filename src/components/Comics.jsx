import React from 'react'
import '../styles/Comics.css'

//Comics images
import Dbz from '../assets/comics/dbz.jpg'
import Battle from '../assets/comics/battle.jpg'
import Heroes from '../assets/comics/heroes.jpg'
import Xeno from '../assets/comics/xeno.jpg'
import Zordon from '../assets/comics/zordon.jpg'

const Comics = () => {
  return (
    <>
      <div className='comics_container'>
        <div className='dbz_cont'>
          <img
            className='dbz_img'
            src={Dbz}
            alt='dbz book cover'
            name='dbz'
          ></img>
          <div className='dbz_text_cont'>
            <label className='dbz_label' for='dbz'>
              Games
            </label>
            <p className='dbz_text'>
              DRAGON BALL Z: KAKAROT's Fourth DLC Is Almost Here! Watch the
              Launch Trailer Now!
            </p>
          </div>
        </div>
        <div className='battle_cont'>
          <img
            className='battle_img'
            src={Battle}
            alt='battle book cover'
            name='battle'
          ></img>
          <div className='battle_text_cont'>
            <label className='battle_label' for='dbz'>
              Games
            </label>
            <p className='battle_text'>
              DRAGON BALL Z: KAKAROT's Fourth DLC Is Almost Here! Watch the
              Launch Trailer Now!
            </p>
          </div>
        </div>
        <div className='dbz_cont'>
          <img
            className='dbz_img'
            src={Dbz}
            alt='dbz book cover'
            name='dbz'
          ></img>
          <div className='dbz_text_cont'>
            <label className='dbz_label' for='dbz'>
              Games
            </label>
            <p className='dbz_text'>
              DRAGON BALL Z: KAKAROT's Fourth DLC Is Almost Here! Watch the
              Launch Trailer Now!
            </p>
          </div>
        </div>
        <div className='dbz_cont'>
          <img
            className='dbz_img'
            src={Dbz}
            alt='dbz book cover'
            name='dbz'
          ></img>
          <div className='dbz_text_cont'>
            <label className='dbz_label' for='dbz'>
              Games
            </label>
            <p className='dbz_text'>
              DRAGON BALL Z: KAKAROT's Fourth DLC Is Almost Here! Watch the
              Launch Trailer Now!
            </p>
          </div>
        </div>
        <div className='dbz_cont'>
          <img
            className='dbz_img'
            src={Dbz}
            alt='dbz book cover'
            name='dbz'
          ></img>
          <div className='dbz_text_cont'>
            <label className='dbz_label' for='dbz'>
              Games
            </label>
            <p className='dbz_text'>
              DRAGON BALL Z: KAKAROT's Fourth DLC Is Almost Here! Watch the
              Launch Trailer Now!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Comics
