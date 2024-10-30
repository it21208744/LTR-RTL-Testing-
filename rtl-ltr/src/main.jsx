import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { DirectionProvider } from './Components/DirectionContext.jsx'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <DirectionProvider>
        <App />
      </DirectionProvider>
    </I18nextProvider>
  </StrictMode>
)
