import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './routes/router'
import gsap from 'gsap'
import { ScrollSmoother, ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      
    </RouterProvider>
  </StrictMode>,
)
