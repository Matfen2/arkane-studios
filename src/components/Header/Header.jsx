import React from 'react';
import '../Header/Header.scss';
import { NavLink } from 'react-router-dom'; 
import LogoStudio from '../../assets/picts/arkane/arkaneStudioLogo.png';

const Header = () => {
  return (
    <div className='header'> 
      <NavLink to="/">
        <img src={LogoStudio} alt='ArkaneLogo' className='img-fluid w-100' />
      </NavLink> 
    </div>
  );
}

export default Header;
