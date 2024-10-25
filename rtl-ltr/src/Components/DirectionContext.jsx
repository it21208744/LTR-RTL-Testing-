import React, { createContext, useState, useContext } from 'react'

const DirectionContext = createContext()

export const useDirection = () => useContext(DirectionContext)

export const DirectionProvider = ({ children }) => {
  const [direction, setDirection] = useState('ltr')

  const toggleDirection = () => {
    setDirection((prevDirection) => (prevDirection === 'ltr' ? 'rtl' : 'ltr'))
  }

  return (
    <DirectionContext.Provider value={{ direction, toggleDirection }}>
      {children}
    </DirectionContext.Provider>
  )
}
