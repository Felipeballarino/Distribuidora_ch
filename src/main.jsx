import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GlobalDataProvider } from './context/data/GlobalDataProvider.jsx'
import { AuthProvider } from './context/auth/AuthProvider.jsx'
import { GlobalCartProvider } from './context/cart/GlobalCartProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <GlobalCartProvider>
        <GlobalDataProvider>
          <App />
        </GlobalDataProvider>
      </GlobalCartProvider>
    </AuthProvider>
  </StrictMode>,
)
