import React from 'react'
import {Link} from 'react-router-dom';
import Kayalar from  '../assets/kayalar.jpeg';
import '../styles/Home.css';


export const Home = () => {
  return (
    <div className='meramMainPage' style={{backgroundImage: `url(${Kayalar})`}}>

      <div className='meramTrip' >
      <Link to = "/Menu">
        <button>Meram'ı Keşfet</button>
      </Link>

      </div>
    </div>
  )
}
