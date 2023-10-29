import React from 'react'
import './Footer.scss'
function Footer() {
  return (
    <div className='Footer'>
      <div className="container Footer__inner"></div>
      <ul className='Footer__list'>
        <li className='list__item'>Frontent</li>
        <li className='list__item'>Backent</li>
        <li className='list__item'>Full stack</li>
        <li className='list__item'>software engeneer</li>
        <li className='list__item'>Dasturchi</li>
        </ul>   
        <ul className='footer__connect__list'>
            <li className='footer__connect__item'>
              <a href="#"> <i class="bi bi-instagram"></i></a>
            </li>
            <li className='footer__connect__item'>
              <a href="#"> <i class="bi bi-telegram"></i></a>
            </li>
            <li className='footer__connect__item'>
              <a href="#"><i class="bi bi-linkedin"></i></a>
            </li>
            <li className='footer__connect__item'>
              <a href="#"><i class="bi bi-envelope-at-fill"></i></a>
            </li>
          </ul>    
    </div>
  )
}

export default Footer