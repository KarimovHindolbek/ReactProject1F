import React from 'react'
import './Project.scss'
import { projectData } from '../../lib/data'
function Project() {
  return (
    <div className='Project' id='project'>
      <div className="container Project__inner">
        <h2 className='Project__title'>Featured projects:</h2>
        <p className='Project__info'>
        I have worked on many projects over the course of being a
         Web Developer, here are a few of my live, real-world projects
        </p>
        <ul className='project__list'>
        {
                  projectData?.map((item,index)=>(
                    <li className='project__item' key={index}>
                      <img src={item.img} alt="" />
                      <h2>{item.title}</h2> 
                      <p>{item.des}</p>
                      <span>
                      <button>View Live</button>
                      <button>Github Repo</button>
                      </span>
                    </li>
                  ))
                }
        </ul>
      </div>
     
    </div>
  )
}

export default Project