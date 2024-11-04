import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { WhatsappLoginProvider } from './cmponents/whatsapp/whatsappLogin/whatsappLoginContext/WhatsappLoginContext.jsx'


const root=createRoot(document.getElementById('root'))
root.render(
   <BrowserRouter>
   <WhatsappLoginProvider>
   <App/>
   </WhatsappLoginProvider>

   </BrowserRouter>
)