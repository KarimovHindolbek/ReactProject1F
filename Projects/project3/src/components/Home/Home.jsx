import React, { useState } from 'react'
import { homeData } from '../Lip/Data'

export const Home = () => {
  const [data,setData]=useState([]);
  setData(homeData);
  return (
   <div className="Home">
      <div className="container Home__inner">{
        data?.map((item)=>{
          return(
            <div className="card" key={item.id}>
             <img src={item?.backgroundImg} alt="" />
             <img src={item?.img} alt="" />
             <h2>{item?.title}</h2>
             <p>{item?.describtion}</p>
             <ul>
              <li>
                <a href="#">
                <i class="bi bi-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                <i class="bi bi-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                <i class="bi bi-linkedin"></i>
                </a>
              </li>
             </ul>
            </div>
          )
        })
      }</div>
   </div>
  )
}
