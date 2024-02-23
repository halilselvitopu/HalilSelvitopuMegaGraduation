import React from 'react';
import Image from '../assets/belediye.jpg';
import '../styles/Contact.css';

export const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Image})` }}
      ></div>
      <div className="rightSide">
        <h1>Bizimle İletişime Geçin Düzenlediğimiz Gezilerden Haberdar Olun :)</h1>
        <form>
          <label>Ad Soyad</label>
          <input
            type="text"
            name="name"
            placeholder="Lütfen adınızı soyadınızı giriniz..."
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Lütfen emailinizi giriniz..."
          />
          <label>Mesajınız</label>
          <textarea
            rows="6"
            name="message"
            placeholder="Lütfen mesajınızı giriniz..."
          ></textarea>
          <button className='form button'>Gönder</button>
        </form>
      </div>
    </div>
  );
};
