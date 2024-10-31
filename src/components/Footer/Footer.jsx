import React from 'react'
import '../Footer/Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <p className='copy'>© Copyright 2024 Arkane Studio</p>
      <div className='listSocial'>
        <li>
          <a href='https://www.facebook.com/ArkaneStudios/'>
            <i class="fa-brands fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href='https://x.com/arkanestudios'>
            <i class="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/company/arkane-studios/posts/?feedView=all'>
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
        </li>
      </div>
    </div>
  )
}

export default Footer