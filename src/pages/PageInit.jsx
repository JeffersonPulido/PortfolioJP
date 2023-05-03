import React from "react";
import { Navbar } from "../components/navbar/Navbar";
import { Header } from "../components/header/Header";
import { Info } from "../components/principalInfo/Info";
import { Whatsapp } from "../components/whatsapp/Whatsapp";
import { Projects } from "../components/projects/Projects";
import { Services } from "../components/services/Services";
import { Testimonials } from "../components/testimonials/Testimonials";
import { Contact } from "../components/contact/Contact";
import { Footer } from "../components/footer/Footer";
import { SwitchTheme } from "../components/switchTheme/SwitchTheme";
import { LanguageSwitch } from "../components/languageSwitch/LanguageSwitch";

export const PageInit = () => {
  //Evento para inhabilitar clic derecho
  document.addEventListener(
    "contextmenu",
    function (event) {
      event.preventDefault();
    },
    false
  );
  //Evento para inhabilitar drag de imagenes
  document.addEventListener(
    "dragstart",
    function (event) {
      event.preventDefault();
    },
    false
  );
  //Evento para inhabilitar funcion de copiar
  document.addEventListener(
    "copy",
    function (event) {
      // Change the copied text if you want
      event.clipboardData.setData(
        "text/plain",
        "No se permite copiar en esta página web"
      );
      // Prevent the default copy action
      event.preventDefault();
    },
    false
  );

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
      <SwitchTheme />
      <LanguageSwitch />
    </>
  );
};
