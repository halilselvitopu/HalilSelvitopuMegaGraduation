import React from 'react'
import MeramLogo from  '../assets/belediye.jpg';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';

export const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='main'>
            <img src={MeramLogo}  alt = ""  />
            <div className='gezi'>Meram Gezi Rehberi'ne Hoş Geldiniz.</div>
            <div className='mainLink'>
              <Link to='/'> Ana Sayfa </Link>
              
              <Link to='/about'> Hakkımızda </Link>
              <Link to='/contact'> İletişim </Link>
            </div>
        </div>
    </div>
  )
}
