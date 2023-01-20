import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.scss'
import GokuStanding from '../assets/home/goku_home.png'
import GokuGif from '../assets/home/goku-gif.gif'
import GokuAura from '../assets/home/goku-aura.png'
import Bulma from '../assets/home-bottom-info-images/home-bulma.png'

//Home Bottom Info Images//
import Cama from '../assets/home-bottom-info-images/cama.png'
import DragonBallZ from '../assets/home-bottom-info-images/dragon-ball-z.png'
import LimitedRun from '../assets/home-bottom-info-images/limitedrun.png'
import ShFiguarts from '../assets/home-bottom-info-images/shfiguarts.png'
import Shonen from '../assets/home-bottom-info-images/shonen.jpg'

const Home = () => {
  return (
    <>
      <div className='home_wrapper'>
        <div className='home_container'>
          <div className='goku_img_container'>
            <img
              className='goku_aura_img'
              src={GokuAura}
              alt='goku standing'
            ></img>
            <img
              className='goku_standing_img'
              src={GokuStanding}
              alt='goku standing'
            ></img>
          </div>
          <div className='home_text_container'>
            <h2>Welcome to Dragon Ball Fanpage</h2>
            <p>
              This site is created to discuss upcoming events, movies, books,
              and much more! If you are a dragon ball fan you will be not
              dissapointed, because we are updating our knowledge daily.
            </p>
            <p>
              Feel free to browse our content, we hope you will like it :).Of
              course if you have any suggestions via our website please contact
              us!
            </p>
            <p>Have a pleasant day! &copy; Creator </p>
            <img
              className='goku_gif'
              src={GokuGif}
              alt='goku-fighting-gif'
            ></img>
          </div>
          <div className='home_line'></div>
        </div>
        <div className='home_bottom_info_wrapper'>
          <img className='bulma' src={Bulma} alt='bulma-img'></img>
          <div className='home_bottom_info'>
            <div className='info_text'>
              <h2>
                Follow the official Twitter and be the first to get the latest
                info!
              </h2>
              <a
                rel='noreferrer'
                href='https://twitter.com/DB_official_en?ref_src=twsrc%5Etfw'
                target='_blank'
              >
                <h3>Follow @DB_official_en</h3>
              </a>
            </div>
            <div className='info_img_container'>
              <Link to='/'>
                <img src={Cama} alt='news_block_img'></img>
              </Link>
              <Link to='/'>
                <img src={DragonBallZ} alt='news_block_img'></img>
              </Link>
              <Link to='/'>
                <img src={LimitedRun} alt='news_block_img'></img>
              </Link>
              <Link to='/'>
                <img src={ShFiguarts} alt='news_block_img'></img>
              </Link>
              <Link to='/'>
                <img src={Shonen} alt='news_block_img'></img>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
