import i18next from 'i18next'
import React from 'react'
import colombia from '../../assets/images/colombia.png'
import usa from '../../assets/images/usa.png'

import './languageSwitch.css'

export const LanguageSwitch = () => {
  return (
    <>
        <div className='containerBtnLanguages'>
            {/* ES */}
            <button onClick={() => i18next.changeLanguage("es")} className='btnLanguage'><img className='bagdes' src={colombia} alt="badgeColombia" /></button>
            {/* EN */}
            <button onClick={() => i18next.changeLanguage("en")} className='btnLanguage'><img className='bagdes' src={usa} alt="badgeUsa" /></button>
        </div>
    </>
  )
}
