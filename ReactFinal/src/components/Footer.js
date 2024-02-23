import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';

import '../styles/Footer.css';

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'>
             <InstagramIcon/>
             
        </div>
        <p>Bu proje Halil Selvitopu tarafından MEGA Yazılım ve Üretken Akademi adına hazırlanmıştır. © 2024</p>
    </div>
  )
}
