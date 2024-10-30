import React, { createContext, useState, useContext } from 'react'
import { useTranslation } from 'react-i18next'

const DirectionContext = createContext()

export const useDirection = () => useContext(DirectionContext)

export const DirectionProvider = ({ children }) => {
  const [direction, setDirection] = useState('ltr')

  const { t, i18n } = useTranslation()

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  // const toggleDirection = () => {
  //   setDirection((prevDirection) => (prevDirection === 'ltr' ? 'rtl' : 'ltr'))
  // }

  const toggleDirection = () => {
    if (direction === 'ltr') {
      setDirection('rtl')
      switchLanguage('ar')
    } else {
      setDirection('ltr')
      switchLanguage('en')
    }
  }

  return (
    <DirectionContext.Provider value={{ direction, toggleDirection }}>
      {children}
    </DirectionContext.Provider>
  )
}
