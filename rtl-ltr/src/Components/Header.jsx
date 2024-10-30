import React from 'react'
import '../css/Header.css'
import { useDirection } from './DirectionContext'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const { direction, toggleDirection } = useDirection()
  const { t } = useTranslation()

  return (
    <header className="header">
      <div className="header-logo">
        <h1>Logo</h1>
      </div>
      <nav className="header-nav">
        <a href="#home">{t('headerHome')}</a>
        <a href="#about">{t('headerAbout')}</a>
        <a href="#services">{t('headerServices')}</a>
        <a href="#contact">{t('headerContact')}</a>
      </nav>
      <div className="header-action">
        <button className="lang-button" onClick={() => toggleDirection()}>
          {t('btnLanguage')}
        </button>
        <button className="header-button">{t('btnSignUp')}</button>
      </div>
    </header>
  )
}

export default Header
