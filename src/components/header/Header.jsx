import React from 'react'
import style from './header.module.css'
import { useTranslation } from 'react-i18next'

export const Header = () => {

  const [t, i18n] = useTranslation("global");

  return (
    <>
      <div className={style.container} id="home">
        <div className={style.containerName}>
          <h1 className={style.title}>{t("header.title")}</h1>
          <h2 className={style.descripcion}>{t("header.description")}</h2>
          <a className={style.btnEffect} href="https://jeffersonpulido-cv.netlify.app/" target="_blank"><span>Ver CV</span></a>
        </div>
      </div>
    </>
  )
}
