import React from 'react'
import './Contact.scss'
function Contact() {
  return (
    <div className='Contact' id='contact'>
      <div className="container Contact_inner">
        <div className="Contact__connect">
          <h2 className='Contact__title'>
          Connect with me:
          </h2>
          <p className='Contact__offer'>
          Satisfied with me? Please contact me
          </p>
          <ul className='contact__connect__list'>
            <li className='contact__connect__item'>
              <a href="#"> <i class="bi bi-instagram"></i></a>
            </li>
            <li className='contact__connect__item'>
              <a href="#"> <i class="bi bi-telegram"></i></a>
            </li>
            <li className='contact__connect__item'>
              <a href="#"><i class="bi bi-linkedin"></i></a>
            </li>
            <li className='contact__connect__item'>
              <a href="#"><i class="bi bi-envelope-at-fill"></i></a>
            </li>
          </ul>
        </div>
        <div className="Contact__information__connect">
        <h3>Contact me, let’s make magic together</h3>
        <ul className='connect__list'>
          <li className='connect__item'>
            <input className="inp" type="text" placeholder='Name' />
          </li>
          <li className='connect__item'>
            <input  className="inp" type="text" placeholder='Email'/>
          </li>
          <li className='connect__big__item'>
          <input className='big__inp' type="text" placeholder='Message'/>
          </li>
        </ul>
        <button>Send</button>
        </div>
      </div>
       
    </div>
  )
}

export default Contact