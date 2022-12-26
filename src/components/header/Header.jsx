import React from 'react'
import style from './header.module.css'
// import Logo from '../../assets/images/logo_single.png'
// <img src={Logo} alt="LogoJP" className={style.imgLogo} />
export const Header = () => {
  return (
    <>
        <div className={style.container}>
            <div className={style.containerName}>
                <h1 className={style.title}>Hi, I'm Jefferson Pulido</h1>
                <h2 className={style.descripcion}>Developer FrontEnd</h2>
            </div>
        </div>
    </>
  )
}
