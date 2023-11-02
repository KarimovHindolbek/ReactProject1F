import React from 'react'
import './About.scss'
import { aboutData } from '../../lib/data'
function About() {
  return (
    <div className='About' id='about'>
      <div className="container About__inner">
        <h2 className='About__title'>About me:</h2>
        <p className='About__des'>Hi, my name is Jayjay Dinero Dinero, i am a Fullstack web developer,
           UI designer, and Mobile developer. I jhave honed my skills in Web 
           Development and advance i have core understanding of advance UI design 
           principles. 
           Here are the major skiills i have. </p>
           <div className='About__content'>
            <span>5+</span>
            <p>Years of experience. Specialised in building apps, 
              while ensuring a seamless
              web experience for end users.</p>
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