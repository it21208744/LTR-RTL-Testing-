import React from 'react'
import '../css/Header.css'
import { useDirection } from './DirectionContext'

const Header = () => {
  const { direction, toggleDirection } = useDirection()
  return (
    <header className="header">
      <div className="header-logo">
        <h1>Logo</h1>
      </div>
      <nav className="header-nav">
        <a href="#home">{direction === 'ltr' ? 'Home' : 'بيت'}</a>
        <a href="#about">{direction === 'ltr' ? 'About' : 'عن'}</a>
        <a href="#services">{direction === 'ltr' ? 'Services' : 'خدمات'}</a>
        <a href="#contact">{direction === 'ltr' ? 'Contact' : 'اتصال'}</a>
      </nav>
      <div className="header-action">
        <button className="lang-button" onClick={() => toggleDirection()}>
          {direction === 'rtl' ? 'English' : 'عربي'}
        </button>
        <button className="header-button">
          {direction === 'ltr' ? 'Sign up' : 'اشتراك'}
        </button>
      </div>
    </header>
  )
}

export default Header
