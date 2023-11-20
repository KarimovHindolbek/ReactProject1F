import React from 'react'
import './About.scss'
import { aboutData } from '../../lib/data'
function About() {
  return (
    <div className='About' id='about'>
      <div className="container About__inner">
        <h2 className='About__title'>About me:</h2>
        <p className='About__des'>Hi, my name is Karimov Hindolbek, 
        i am a Frontent web developer.I am practitioner.I speak English well enough.
         I can use the Internet well. I work on myself constantly.
            </p>
           <div className='About__content'>
            <span>1 Month+</span>
            <p></p>
           </div>
           <ul className='about__list'>
                {
                  aboutData?.map((item,index)=>(
                    <li className='about__item' key={index}>
                      {item.img}
                      <p>{item.title}</p>
                    </li>
                  ))
                }
              </ul>
      </div>
    </div>
  )
}

export default About