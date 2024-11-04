import React, { useContext, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Whatsapp from './cmponents/whatsapp/Whatsapp.jsx'
import { WhatsappLoginContext } from './cmponents/whatsapp/whatsappLogin/whatsappLoginContext/WhatsappLoginContext.jsx'
import WhatsappLogin from './cmponents/whatsapp/whatsappLogin/WhatsappLogin.jsx'
import './App.css'

let App = () => {

let {whatsappLogin,setWhatsappLogin}=useContext(WhatsappLoginContext)

    return (
        <div className='app'>
         
      
            <Routes>
          
            <Route path='/' element={whatsappLogin?<Whatsapp/>:<WhatsappLogin/>}/>
            
            </Routes>

            </div>

    )
}
export default App