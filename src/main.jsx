import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navbar } from './components/navbar/Navbar'
import { Header } from './components/header/Header'
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Header/>
  </React.StrictMode>,
)
