import React from 'react'
import logoClose from '../../assets/icons/closeNavbar.svg'
import logo from '../../assets/images/sello.webp'
import './navbar.css'
import { useTranslation } from 'react-i18next'

export const Navbar = () => {
  
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-danger sticky-top'>
        <div className='container'>
          <a className='navbar-brand text-white' href='#home'>
            <img src={logo} alt="Logo" className='logo d-flex img-fluid' />
          </a>
          <button className='btn btn-danger navbar-toggler border-3 px-2 text-white' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasExample' aria-controls='offcanvasExample'>
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </button>
          <div className='offcanvas offcanvas-start-lg bg-danger' tabIndex='-1' id='offcanvasExample' aria-labelledby='offcanvasExampleLabel'>
            <div className='offcanvas-header d-flex d-lg-none'>
              <h5 className='offcanvas-title text-white' id='offcanvasExampleLabel'>JPulido Dev</h5>
              <a href='javascript:void(0)' className='text-reset p-0' data-bs-dismiss='offcanvas' aria-label='close'>
                <img src={logoClose} alt="Icon Close Navbar" />
              </a>
            </div>
            <div className='offcanvas-body p-lg-0'>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <a className='nav-link active' aria-current='page' href='#home'>{t("navbar.home")}</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link active' aria-current='page' href='#about'>{t("navbar.about")}</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link active' aria-current='page' href='#services'>{t("navbar.services")}</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link active' aria-current='page' href='#projects'>{t("navbar.projects")}</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link active' aria-current='page' href='#testimonials'>{t("navbar.testimonials")}</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link active' aria-current='page' href='#contact'>{t("navbar.contact")}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
