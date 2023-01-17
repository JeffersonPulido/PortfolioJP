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
          <img src={avatarCerca} alt="Avatar" className='avatarIMG'/>
        </div>
        <div className='boxRight'>
          <h1 className='titleInfo'>{t("principalInfo.title")}</h1>
          <p className='descriptionInfo'>{t("principalInfo.description")}</p>
        </div>
      </div>
    </>
  )
}
