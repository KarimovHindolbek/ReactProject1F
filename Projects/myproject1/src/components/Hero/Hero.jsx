import React from 'react'
import './Hero.scss'
import person from '../../assets/img/my_img.png'
function Hero() {
  return (
    <div className='Hero' id='hero'>
      <div className="container Hero__inner">
        <div className="Hero__info">
          <h3>Hello, I am</h3>
          <h2>Karimov Hindolbek</h2>
          <p>Frontent Web developer</p>
          <span>
            <button><a href="#about">About me</a> <i class="bi bi-person-fill"></i></button>
            <button><a href="#project">Projects</a><i class="bi bi-eye"></i></button>
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