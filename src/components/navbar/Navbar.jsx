import React from 'react'
import logoClose from '../../assets/icons/closeNavbar.svg'
import logo from '../../assets/images/sello.webp'
import './navbar.css'

export const Navbar = () => {

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-danger sticky-top'>
        <div className='container'>
          <a className='navbar-brand text-white' href='#'>
            <img src={logo} alt="Logo" className='logo d-flex img-fluid' />
          </a>
          <button className='btn btn-danger navbar-toggler border-3 px-2 text-white' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasExample' aria-controls='offcanvasExample'>
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </button>
          <div className='offcanvas offcanvas-start-lg bg-danger' tabIndex='-1' id='offcanvasExample' aria-labelledby='offcanvasExampleLabel'>
            <div className='offcanvas-header d-flex d-lg-none'>
              <h5 className='offcanvas-title text-white' id='offcanvasExampleLabel'>JPulido Dev</h5>
              <a href='# ' className='text-reset p-0' data-bs-dismiss='offcanvas' aria-label='close'>
                <img src={logoClose} alt="Icon Close Navbar" />
              </a>
            </div>
            <div className='offcanvas-body p-lg-0'>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <a className='nav-link active' aria-current='page' href='#'>Home</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link active' aria-current='page' href='#'>About</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link active' aria-current='page' href='#'>Projects</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link active' aria-current='page' href='#'>Skills</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link active' aria-current='page' href='#'>Testimonials</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link active' aria-current='page' href='#'>Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
