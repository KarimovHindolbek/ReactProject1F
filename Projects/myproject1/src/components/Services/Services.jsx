import React from 'react'
import './Services.scss'
import { servicesData } from '../../lib/data'
function Services() {
  
  return (
    <div className='Services'>
      <div className="container Services__inner">
        <h2 className='Services__title'>The services i offer:</h2>
        <ul className='services__list'>
                {
                  servicesData?.map((item,index)=>(
                    <li className='services__item' key={index}>
                      {item.img}
                      <h2>{item.title}</h2> 
                      <p>{item.des}</p>
                    </li>
                  ))
                }
              </ul>
      </div>
      
    </div>
  )
}

export default Services