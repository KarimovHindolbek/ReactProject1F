import React from 'react'
import './Hero.scss'
import person from '../../assets/img/my_img.png'
function Hero() {
  return (
    <div className='Hero' id='hero'>
      <div className="container Hero__inner">
        <div className="Hero__info">
          <h3>Hello, i’m</h3>
          <h2>Jayjay D. Dinero</h2>
          <p>Freelance UI designer, Fullstack developer, & Data Miner. I create seamless web experiences for end-users.</p>
          <span>
            <button>About me <i class="bi bi-person-fill"></i></button>
            <button>Projects <i class="bi bi-eye"></i></button>
          </span>
        </div>
        <div className="Hero__img">
        <img src={person} alt="" />
        <span></span>
        </div>
       
      </div>
      
    </div>
  )
}

export default Hero