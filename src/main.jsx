import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navbar } from './components/navbar/Navbar'
import { Header } from './components/header/Header'
import { Info } from './components/principalInfo/Info'
import { Whatsapp } from './components/whatsapp/Whatsapp'
import { Projects } from './components/projects/Projects'
import { Skills } from './components/skills/Skills'
import { Footer } from './components/footer/Footer'
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Navbar/>
    <Info/>
    <Projects/>
    <Whatsapp/>
    <Skills/>
    <Footer/>
  </React.StrictMode>,
)
