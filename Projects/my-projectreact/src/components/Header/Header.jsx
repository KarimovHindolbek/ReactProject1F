import React, { useState } from 'react'
import './Header.scss'
function Header() {
  const [active,setActive]=useState(1);
  return (
    <div className='Header'>
      <div className="container">
        <nav>
        <a href="#" className='nav__logo'>Jayjay Dinero</a>
        <ul className='nav__list'>
          <li className='nav__item'><a href="#hero" onClick={()=> setActive(1)} className={active==1?'actives':null}>Home</a></li>
          <li className='nav__item' ><a href="#about" onClick={()=> setActive(2)} className={active==2?'actives':null}>About me</a></li>
          <li className='nav__item' ><a href="#project" onClick={()=> setActive(3)} className={active==3?'actives':null}>Projects</a></li>
          <li className='nav__item'><a href="#contact" onClick={()=> setActive(4)} className={active==4?'actives':null}>Contact</a></li>
        </ul>
        </nav>
        
      </div>
      
    </div>
  )
}

export default Header