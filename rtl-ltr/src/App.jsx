import React from 'react'
import './css/App.css'
import { useDirection } from './Components/DirectionContext'
import Header from './Components/Header'
import FormComponent from './Components/FormComponent'
import { useTranslation } from 'react-i18next'
const MainComponent = () => {
  const { direction } = useDirection()
  const { t } = useTranslation()

  return (
    <div dir={direction} className="main-container">
      <Header />
      <p>{t('formParagraph')}</p>
      <FormComponent />
    </div>
  )
}

export default MainComponent
