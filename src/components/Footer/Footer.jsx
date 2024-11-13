import React from 'react'
import '../Footer/Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <p className='copy'>© Copyright 2024 Arkane Studio</p>
      <ul className='listSocial'>
        <li>
          <a href='https://www.facebook.com/ArkaneStudios/' aria-label='Facebook Arkane Studio'>
            <i class="fa-brands fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href='https://x.com/arkanestudios' aria-label='X Arkane Studio'>
            <i class="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/company/arkane-studios/posts/?feedView=all' aria-label='Linkedin Arkane Studio'>
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer