import { createContext, useState } from "react";

let WhatsappLoginContext=createContext()

let WhatsappLoginProvider=({children})=>{
    let [whatsappLogin,setWhatsappLogin]=useState(false)

    return(
        <WhatsappLoginContext.Provider value={{whatsappLogin,setWhatsappLogin}}>
            {children}
        </WhatsappLoginContext.Provider>
    )
}

export {WhatsappLoginContext,WhatsappLoginProvider}