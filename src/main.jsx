import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navbar } from './components/navbar/Navbar'
import { Header } from './components/header/Header'
import { Info } from './components/principalInfo/Info'
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Navbar/>
    <Info/>
  </React.StrictMode>,
)
