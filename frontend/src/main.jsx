import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Particles from './pages/Particles.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
  <Particles
  particleColors={['#ffffff', '#ffffff']}
  particleCount={200}
  particleSpread={10}
  speed={0.1}
  particleBaseSize={100}
  moveParticlesOnHover={true}
  alphaParticles={false}
  disableRotation={false}
/>
    <App />
  </StrictMode>
  </BrowserRouter>,
)
