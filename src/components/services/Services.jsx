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
                            <div className="cardServ" key={serv.id}>
                                <div className="card">
                                    <div className="icon-wrapper">
                                        <i className={serv.icon}></i>
                                    </div>
                                    <h3 className="h3serv">{serv.title}</h3>
                                    <p className="pserv">{serv.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </section>
            </div>
        </>
    )
}