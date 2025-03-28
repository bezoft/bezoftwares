import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FluidDarkBackground from './fluidbg.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FluidDarkBackground>
    <App />
    </FluidDarkBackground>
  </StrictMode>,
)
