import React from 'react'
import './Header.scss';
import { Link } from 'react-router-dom'
import Modellen from './../../pages/Modellen/Modellen';
import Nieuws from './../../pages/Nieuws/Nieuws';
import Kopen from './../../pages/Kopen/Kopen';
import Huren from './../../pages/Huren/Huren';
import Contact from './../../pages/Contact/Contact';
import logo1 from "../../img/Wordmark.svg";
import logo2 from '../../img/Logomark.svg';

function Header() {
    <img src='../../asets/img/Logo/Wordmark.svg' alt="" />
  return (
   
     <header className='header'>
        <div className="container">
            <div className="nav">
               <div className='nav__inner'>
               <img className='nav__logo2' src={logo2} alt="" />
                <a href="#">
                    <img className='nav__logo1' src={logo1} alt="" />
                </a>
               </div>
               <ul className='nav__list'>
                <li className='nav__item'>
                    <Link to='/huren'>Huren</Link>
                </li>
                <li className='nav__item'>
                <Link to='/kopen'>Kopen</Link>
                </li>
                <li className='nav__item'>
                <Link to='/modellen'>Modellen</Link>
                </li>
                <li className='nav__item'>
                <Link to='/nieuws'>Nieuws</Link>
                </li>
                <li className='nav__item'>
                    <button className='btn'> <Link to='/contact'>Contact</Link></button>
                    
                </li>
               </ul>
            </div>
        </div>
    </header>
 
  
   
   
  )
}

export default Header