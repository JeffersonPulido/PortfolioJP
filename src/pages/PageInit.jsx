import React from 'react'
import { Navbar } from '../components/navbar/Navbar'
import { Header } from '../components/header/Header'
import { Info } from '../components/principalInfo/Info'
import { Whatsapp } from '../components/whatsapp/Whatsapp'
import { Projects } from '../components/projects/Projects'
import { Services } from '../components/services/Services'
import { Testimonials } from '../components/testimonials/Testimonials'
import { Contact } from '../components/contact/Contact'
import { Footer } from '../components/footer/Footer'

export const PageInit = () => {
  return (
    <>
        <Header />
        <Navbar />
        <Info />
        <Services />
        <Projects />
        <Whatsapp />
        <Testimonials />
        <Contact />
        <Footer />
    </>
  )
}
