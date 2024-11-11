import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReviewPage from './components/ReviewComponents/ReviewPage'
import App from './pages/App'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>
)
