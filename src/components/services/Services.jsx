import React, { useState } from 'react'
import { Data } from '../../data/services'
import './Services.css'

export const Services = () => {

    const [service, setService] = useState(Data)

    return (
        <>
            <div className='containerServices' id='services'>
                <div className='containerTitleServices'>
                    <h1>Services</h1>
                </div>
                <section>
                    {
                        service.map((serv) => (
                            <div class="cardServ">
                                <div class="card">
                                    <div class="icon-wrapper">
                                        <i class={serv.icon}></i>
                                    </div>
                                    <h3>{serv.title}</h3>
                                    <p>{serv.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </section>
            </div>
        </>
    )
}
