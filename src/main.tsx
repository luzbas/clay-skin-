import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ClayPage from './skins/clay/ClayPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClayPage />
  </StrictMode>,
)
