import React from 'react'
import logoClose from '../../assets/icons/closeNavbar.svg'
import logo from '../../assets/images/sello.webp'
import './navbar.css'

export const Navbar = () => {

  return (
    <>
      <nav class='navbar navbar-expand-lg navbar-light bg-danger sticky-top'>
        <div class='container'>
          <a class='navbar-brand text-white' href='#'>
            <img src={logo} alt="Logo" class='logo d-flex img-fluid' />
          </a>
          <button class='btn btn-danger navbar-toggler border-3 px-2 text-white' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasExample' aria-controls='offcanvasExample'>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </button>
          <div class='offcanvas offcanvas-start-lg bg-danger' tabindex='-1' id='offcanvasExample' aria-labelledby='offcanvasExampleLabel'>
            <div class='offcanvas-header d-flex d-lg-none'>
              <h5 class='offcanvas-title text-white' id='offcanvasExampleLabel'>JPulido Dev</h5>
              <a href='javascript:void(0) ' class='text-reset p-0' data-bs-dismiss='offcanvas' aria-label='close'>
                <img src={logoClose} alt="Icon Close Navbar" />
              </a>
            </div>
            <div class='offcanvas-body p-lg-0'>
              <ul class='navbar-nav'>
                <li class='nav-item'>
                  <a class='nav-link active' aria-current='page' href='#'>Home</a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link active' aria-current='page' href='#'>About</a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link active' aria-current='page' href='#'>Projects</a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link active' aria-current='page' href='#'>Skills</a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link active' aria-current='page' href='#'>Testimonials</a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link active' aria-current='page' href='#'>Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
