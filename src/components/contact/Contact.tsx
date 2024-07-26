import { FC, ReactElement } from 'react';
import Swal from 'sweetalert2';
import waves from '@assets/images/waves.svg';
import './contact.css';
import { useTranslation } from 'react-i18next';

export const Contact: FC = (): ReactElement => {
    const { t } = useTranslation('global');

    const logMail = (): void => {
        const checkPolitica = (document.getElementById('check') as HTMLInputElement)!.checked;
        if (checkPolitica === true) {
            const nameFull = (document.getElementById('nombre') as HTMLInputElement)!.value;
            const email = (document.getElementById('email') as HTMLInputElement)!.value;
            const phonenumber = (document.getElementById('telefono') as HTMLInputElement)!.value;
            const subject = (document.getElementById('asunto') as HTMLInputElement)!.value;
            const msj = (document.getElementById('mensaje') as HTMLInputElement)!.value;
            window.open(
                `https://wa.me/573102156205/?text=Asunto:%20${subject},%20Hola!%2C%20soy%20${nameFull}%2C%20vi%20la%20pagina%20web%20y%20mi%20mensaje%20es%3A%20${msj}.%0A%0AGracias%20y%20quedo%20pendiente%20de%20su%20respuesta.%0A%0AMi%20Correo%20Electr%C3%B3nico%20es%3A%20${email}%20y%20mi%20numero%20celular%20es%20:%20${phonenumber}`,
                '_blank',
            );
            Swal.fire({
                title: '¡Gracias!',
                text: '¡Nos pondremos en contacto!',
                showConfirmButton: true,
                confirmButtonText: '¡Genial!',
                confirmButtonColor: '#59b528',
            });
        } else {
            Swal.fire({
                icon: 'warning',
                title: '¡Precaución!',
                text: '¡Debes completar todos los datos!',
                showConfirmButton: true,
                timer: 2500,
                timerProgressBar: true,
                confirmButtonText: 'Volver',
                confirmButtonColor: '#dc3545',
            });
        }
    };

    return (
        <>
            <img src={waves} alt="Waves" className="waves" />
            <div className="containerContact" id="contact">
                <div className="containerTitleContact">
                    <h1>{t('titles.contact')}</h1>
                </div>
                <div className="containerForm">
                    <section className="contact-sec sec-pad">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="contact-detail">
                                        <ul className="contact-ul">
                                            <li>
                                                <i className="fa fa-location-dot"></i> <b>Bogotá, Colombia</b>
                                            </li>
                                            <li>
                                                <i className="fa fa-phone"></i>
                                                <a href="tel:+573102156205">
                                                    <b>+57 310 215 6205</b>
                                                </a>
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-envelope"></i>{' '}
                                                <a href="mailto:jeffersonpulido55@gmail.com">
                                                    <b>jeffersonpulido55@gmail.com</b>
                                                </a>
                                            </li>
                                        </ul>

                                        <span>
                                            <a
                                                data-aos="zoom-left"
                                                data-aos-delay="300"
                                                target="_blank"
                                                rel="noreferrer"
                                                href="https://wa.me/573102156205?text=¡Hola%20Jefferson!%20Me%20gustaría%20contactarte%20y%20amplia%20más%20información%20acerca%20de%20tu%20portafolio,%20espero%20tu%20respuesta,%20¡gracias!"
                                                className="whatsapp"
                                            >
                                                <i className="fa-brands fa-whatsapp"></i>
                                            </a>
                                            <a
                                                data-aos="zoom-in"
                                                data-aos-delay="600"
                                                target="_blank"
                                                rel="noreferrer"
                                                href="https://github.com/JeffersonPulido"
                                                className="git"
                                            >
                                                <i className="fa-brands fa-github"></i>
                                            </a>
                                            <a
                                                data-aos="zoom-right"
                                                data-aos-delay="900"
                                                target="_blank"
                                                rel="noreferrer"
                                                href="https://www.linkedin.com/in/jeffersonpulido/"
                                                className="linkedin"
                                            >
                                                <i className="fa-brands fa-linkedin"></i>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <form className="contFrm">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <input
                                                    type="text"
                                                    placeholder="Your Name"
                                                    className="inptFld"
                                                    id="nombre"
                                                    required
                                                />
                                            </div>
                                            <div className="col-sm-6">
                                                <input
                                                    type="email"
                                                    placeholder="Email Address"
                                                    className="inptFld"
                                                    id="email"
                                                    required
                                                />
                                            </div>
                                            <div className="col-sm-6">
                                                <input
                                                    type="tel"
                                                    placeholder="Phone Number"
                                                    className="inptFld"
                                                    id="telefono"
                                                    required
                                                />
                                            </div>
                                            <div className="col-sm-6">
                                                <input
                                                    type="text"
                                                    placeholder="Subject"
                                                    className="inptFld"
                                                    id="asunto"
                                                    required
                                                />
                                            </div>
                                            <div className="col-12">
                                                <textarea
                                                    className="inptFld"
                                                    rows={2}
                                                    cols={2}
                                                    placeholder="Your Message..."
                                                    id="mensaje"
                                                    required
                                                ></textarea>
                                            </div>
                                            <div className="mb-4 form-check">
                                                <input type="checkbox" className="form-check-input" id="check" required />
                                                <label className="datosPersonales" htmlFor="exampleCheck2">
                                                    Estoy de acuerdo con el tratamiento de datos personales
                                                </label>
                                            </div>
                                            <div className="col-12">
                                                <button className="inptBtn" id="enviarCorreo" onClick={logMail}>
                                                    SUBMIT
                                                </button>
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
    );
};
