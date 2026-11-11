import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ClayDuoPage from './skins/clay/ClayDuoPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClayDuoPage />
  </StrictMode>,
)
