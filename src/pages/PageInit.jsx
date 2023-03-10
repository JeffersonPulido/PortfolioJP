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
import { SwitchTheme } from '../components/switchTheme/SwitchTheme'
import { LanguageSwitch } from '../components/languageSwitch/LanguageSwitch'

export const PageInit = () => {
  return (
    <>
      <Whatsapp />
      <Header />
      <Navbar />
      <Info />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      <SwitchTheme/>
      <LanguageSwitch/>
    </>
  )
}
