import React from 'react'
import style from './header.module.css'


export const Header = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.containerName}>
          <h1 className={style.title}>Hi, I'm Jefferson Pulido</h1>
          <h2 className={style.descripcion}>Developer FrontEnd</h2>
          <a className={style.btn_neon} href="https://jeffersonpulido-cv.netlify.app/" target="_blank">Ver CV</a>
        </div>
      </div>
    </>
  )
}
