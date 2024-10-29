import React from 'react'
import '../Header/Header.scss'
import { NavLink } from 'react-router-dom'; 
import LogoStudio from '../../assets/picts/arkane/arkaneStudioLogo.png'

const Header = () => {
  return (
    <div className='header'> 
      <NavLink to="/"><img src={LogoStudio} alt='ArkaneLogo' className='img-fluid w-100' /></NavLink> 
      <nav className='listHref'> 
        <ul className='href'> 
          <li className='hrefTravel'> 
            <NavLink to="/home"><a href='#about'>A PROPOS</a></NavLink>
          </li>
          <li className='hrefTravel'> 
            <NavLink to="/home"><a href='#studio'>STUDIO</a></NavLink>
          </li>
          <li className='hrefTravel'> 
            <NavLink to="/home"><a href='#games'>JEUX</a></NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header