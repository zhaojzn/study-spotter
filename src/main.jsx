import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReviewPage from './components/ReviewComponents/ReviewPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReviewPage/>
  </StrictMode>
)
