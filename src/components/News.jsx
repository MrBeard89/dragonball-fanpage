import React from 'react'
import '../styles/News.scss'

//Comics images
import Dbz from '../assets/news/dbz.jpg'
import Battle from '../assets/news/battle.jpg'
import Heroes from '../assets/news/heroes.jpg'
import Xeno from '../assets/news/xeno.jpg'
import Zordon from '../assets/news/zordon.jpg'
import Roshi from '../assets/news/roshi.png'

const Comics = () => {
  return (
    <>
      <div className='news_wrapper'>
        <h2 className='news_title'>
          Please select any card, we update the news daily
        </h2>
        <div className='news_container'>
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
              <label className='battle_label' for='battle'>
                Books
              </label>
              <p className='battle_text'>
                Limited-Time Sneak Peek at the Storyboard for the Second Chapter
                of Dragon Ball Super...
              </p>
            </div>
          </div>
          <div className='heroes_cont'>
            <img
              className='heroes_img'
              src={Heroes}
              alt='heroes book cover'
              name='heroes'
            ></img>
            <div className='heroes_text_cont'>
              <label className='heroes_label' for='heroes'>
                Cards
              </label>
              <p className='heroes_text'>
                Super Dragon Ball Heroes: Ultra God Mission #6 Goes Live!
              </p>
            </div>
          </div>
          <div className='xeno_cont'>
            <img
              className='xeno_img'
              src={Xeno}
              alt='xeno book cover'
              name='xeno'
            ></img>
            <div className='xeno_text_cont'>
              <label className='xeno_label' for='xeno'>
                Games
              </label>
              <p className='xeno_text'>
                Orange Piccolo Joins the Fight in Dragon Ball Xenoverse 2's Hero
                of Justice DLC Pack 2!
              </p>
            </div>
          </div>
          <div className='zordon_cont'>
            <img
              className='zordon_img'
              src={Zordon}
              alt='zordon book cover'
              name='zordon'
            ></img>
            <div className='zordon_text_cont'>
              <label className='zordon_label' for='zordon'>
                Featured
              </label>
              <p className='zordon_text'>
                Weekly ☆ Character Showcase #87: Zarbon!
              </p>
            </div>
          </div>
        </div>

        <button type='button' className='news_btn'>
          MORE
        </button>
        <div className='news_line'>
          <img className='roshi_img' src={Roshi} alt='roshi-img'></img>
          <div className='news_line_tag_container'>
            <div className='news_line_tag'>
              <h2>Popular Tags</h2>
            </div>
          </div>
          <div className='news_line_tags_container'>
            <h3 className='tags'>Dragon Ball Super</h3>
            <h3 className='tags'>Super hero</h3>
            <h3 className='tags'>V Jump</h3>
            <h3 className='tags'>Toyotarou</h3>
            <h3 className='tags'>BNE</h3>
            <h3 className='tags'>Son Goku</h3>
            <h3 className='tags'>Movies</h3>
            <h3 className='tags'>Bandai</h3>
            <h3 className='tags'>Weekly Dragon Ball News</h3>
            <h3 className='tags'>Dragon Ball Z</h3>
            <h3 className='tags'>Turtles</h3>
            <h3 className='tags'>Bulma</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Comics
