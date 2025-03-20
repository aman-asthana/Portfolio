import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MouseCurve from './components/ui/MouseCurve';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <MouseCurve />
  </StrictMode>,
)
