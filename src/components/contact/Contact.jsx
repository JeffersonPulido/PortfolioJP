import React from 'react'
import waves from '../../assets/images/waves.svg'
import './contact.css'

export const Contact = () => {
  return (
    <>
      <img src={waves} alt="Waves" className='waves' />
      <div className='containerContact' id='contact'>
        <div className='containerTitleContact'>
          <h1>CONTACT</h1>
        </div>
        <div className='containerForm'>
          <section class="contact-sec sec-pad">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <div class="contact-detail">
                    <ul class="contact-ul">
                      <li><i class="fa fa-location-dot"></i> <b>Bogotá, Colombia</b></li>
                      <li><i class="fa fa-phone"></i><a href="tel:+573102156205"><b>+57 310 215 6205</b></a></li>
                      <li><i class="fa-solid fa-envelope"></i> <a href="mailto:jeffersonpulido55@gmail.com"><b>jeffersonpulido55@gmail.com</b></a></li>
                    </ul>

                    <span>
                      <a target='_blank' href="https://wa.me/573102156205?text=¡Hola%20Jefferson!%20Me%20gustaría%20contactarte%20y%20amplia%20más%20información%20acerca%20de%20tu%20portafolio,%20espero%20tu%20respuesta,%20¡gracias!" class="whatsapp"><i className="fa-brands fa-whatsapp"></i></a>
                      <a target='_blank' href="https://github.com/JeffersonPulido" class="git"><i className="fa-brands fa-github"></i></a>
                      <a target='_blank' href="https://www.linkedin.com/in/jeffersonpulido/" class="linkedin"><i className="fa-brands fa-linkedin"></i></a>
                    </span>
                  </div>
                </div>

                <div class="col-md-6">
                  <form action="#" class="contFrm" method="POST">
                    <div class="row">
                      <div class="col-sm-6">
                        <input type="text" name="name" placeholder="Your Name" class="inptFld" required />
                      </div>

                      <div class="col-sm-6">
                        <input type="email" name="email" placeholder="Email Address" class="inptFld" required />
                      </div>

                      <div class="col-sm-6">
                        <input type="tel" name="phone" placeholder="Phone Number" class="inptFld" required />
                      </div>

                      <div class="col-sm-6">
                        <input type="text" name="sub" placeholder="Subject" class="inptFld" required />
                      </div>

                      <div class="col-12">
                        <textarea class="inptFld" rows="" cols="" placeholder="Your Message..." required></textarea>
                      </div>

                      <div class="col-12">
                        <input type="submit" name="submit" value="SUBMIT" class="inptBtn" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
