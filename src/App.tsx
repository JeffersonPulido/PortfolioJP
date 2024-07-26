import { FC, ReactElement } from 'react';
import {
    Whatsapp,
    Header,
    Navbar,
    Info,
    Services,
    Projects,
    Testimonials,
    Contact,
    Footer,
    SwitchTheme,
    LanguageSwitch,
    UpArrow,
} from '@components/index';

export const App: FC = (): ReactElement => {
    //Evento para inhabilitar clic derecho
    document.addEventListener(
        'contextmenu',
        function (event) {
            event.preventDefault();
        },
        false,
    );
    //Evento para inhabilitar drag de imagenes
    document.addEventListener(
        'dragstart',
        function (event) {
            event.preventDefault();
        },
        false,
    );
    //Evento para inhabilitar funcion de copiar
    document.addEventListener(
        'copy',
        function (event) {
            // Change the copied text if you want
            event!.clipboardData!.setData('text/plain', 'No se permite copiar en esta página web');
            // Prevent the default copy action
            event.preventDefault();
        },
        false,
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
            <UpArrow />
        </>
    );
};
