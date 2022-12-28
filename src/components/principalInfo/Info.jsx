import React from 'react'
import avatarCerca from '../../assets/images/avatarCerca.png'
import './info.css'

export const Info = () => {
  return (
    <>
      <div className='containerInfo'>
        <div className='boxLeft'>
          <img src={avatarCerca} alt="Avatar" className='avatarIMG'/>
        </div>
        <div className='boxRight'>
          <h1 className='titleInfo'>¿Quien soy?</h1>
          <p className='descriptionInfo'>
          Soy Desarrollador Web Full Stack Junior con conocimientos básicos en POO, BDO, PHP, Python, JavaScript y actualmente estoy aprendiendo <strong>ReactJs</strong>, ademas de otras tecnologías para mantenerme siempre en la vanguardia con los lenguajes mas demandados. Me caracterizo por ser responsable y autónomo, autodidacta y líder, me gusta aprender de diferentes áreas y buscar las mejores soluciones al problema planteado.
          </p>
        </div>
      </div>
    </>
  )
}
