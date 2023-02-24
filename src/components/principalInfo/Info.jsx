import React from 'react'
import avatarCerca from '../../assets/images/avatarCerca.png'
import './info.css'
import { useTranslation } from 'react-i18next'

export const Info = () => {

  const [t, i18n] = useTranslation("global");

  return (
    <>
      <div className='containerInfo' id='about'>
        <div className='boxLeft'>
          <img data-aos="flip-left" data-aos-delay="100" src={avatarCerca} alt="Avatar" className='avatarIMG'/>
        </div>
        <div className='boxRight'>
          <h1 data-aos="fade-down" data-aos-delay="200" className='titleInfo'>{t("principalInfo.title")}</h1>
          <p data-aos="zoom-in-left" data-aos-delay="300" className='descriptionInfo'>{t("principalInfo.description")}</p>
        </div>
      </div>
    </>
  )
}
