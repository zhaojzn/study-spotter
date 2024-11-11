import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HenningsCafe from './components/HenningsCafe/HenningsCafe.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HenningsCafe/>
  </StrictMode>,
)
