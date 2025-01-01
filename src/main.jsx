import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { SidebarProvider } from './Context/sidebarContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <SidebarProvider>
     <App />
    </SidebarProvider> 
  
  </StrictMode>,
)
