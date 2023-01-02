import React from 'react'
import './whats.css'

export const Whatsapp = () => {

    return (
        <>
            <div className="phone-call cbh-phone cbh-green cbh-show  cbh-static" id="clbh_phone_div" >
                <a id="WhatsApp-button" href="https://wa.me/573102156205?text=¡Hola%20Jefferson!%20Me%20gustaría%20contactarte%20y%20amplia%20más%20información%20acerca%20de%20tu%20portafolio,%20espero%20tu%20respuesta,%20¡gracias!" target='_blank' className="phoneJs" title="Saludo WhatsApp!">
                    <div className="cbh-ph-circle"></div>
                    <div className="cbh-ph-circle-fill"></div>
                    <div className="cbh-ph-img-circle1"></div>
                </a>
            </div>
        </>
    )
}
