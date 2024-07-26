import { FC, ReactElement, useState } from 'react';
import logo from '@assets/images/sello.webp';
import './footer.css';

export const Footer: FC = (): ReactElement => {
    const [dateFooter, setDateFooter] = useState<string | number>(2024);

    const getDateFooter = (): void => {
        const year = new Date().getFullYear();
        setDateFooter(year);
    };

    window.onload = function (): void {
        getDateFooter();
    };

    return (
        <>
            <div className="containerFooter">
                <footer>
                    <div className="footer-content">
                        <a href="#">
                            <img src={logo} alt="logoFooter" className="logoFooter" />
                        </a>
                    </div>
                    <div className="footer-bottom">
                        <p>
                            Copyright &#169; <span id="year">{dateFooter}</span> <a href="#">JPulido Dev</a>{' '}
                        </p>
                        <div className="footer-menu">
                            <ul className="socials">
                                <li>
                                    <a
                                        rel="noreferrer"
                                        target="_blank"
                                        href="https://wa.me/573102156205?text=¡Hola%20Jefferson!%20Me%20gustaría%20contactarte%20y%20amplia%20más%20información%20acerca%20de%20tu%20portafolio,%20espero%20tu%20respuesta,%20¡gracias!"
                                    >
                                        <i className="fa-brands fa-whatsapp"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        rel="noreferrer"
                                        target="_blank"
                                        href="mailto:contacto@dominio.es?subject=Asunto del mensaje"
                                    >
                                        <i className="fa-solid fa-envelope"></i>
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" target="_blank" href="https://github.com/JeffersonPulido">
                                        <i className="fa-brands fa-github"></i>
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/jeffersonpulido/">
                                        <i className="fa-brands fa-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};
