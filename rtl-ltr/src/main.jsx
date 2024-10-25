import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { DirectionProvider } from './Components/DirectionContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DirectionProvider>
      <App />
    </DirectionProvider>
  </StrictMode>
)
