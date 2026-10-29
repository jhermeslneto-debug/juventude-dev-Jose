import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Portal from './Portal.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Portal />
  </StrictMode>,
)
