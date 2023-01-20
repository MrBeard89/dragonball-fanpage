import React from 'react'
import '../styles/ComingSoon.scss'

//Images
import Bg from '../assets/comingsoon/bg.png'
import Beerus from '../assets/comingsoon/beerus.png'
import Whis from '../assets/comingsoon/whis.png'

const ComingSoon = () => {
  return (
    <>
      <div className='coming_soon_container'>
        <h3>Feature Content ,stay tuned for more</h3>

        <img className='beerus' src={Beerus} alt='beerus_img'></img>

        <div className='coming_soon_line'></div>
        <div className='shadow'>
          <img className='bg-img-shadow' src={Bg} alt='bg-img'></img>
        </div>
        <div className='bg-img-container'>
          <img className='bg-img' src={Bg} alt='bg-img'></img>
        </div>

        <img className='whis' src={Whis} alt='whis_img'></img>
      </div>
    </>
  )
}

export default ComingSoon
