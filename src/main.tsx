import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import global_es from './translations/es/global.json';
import global_en from './translations/en/global.json';
import { App } from '@app';

i18next.init({
    interpolation: { escapeValue: false },
    lng: 'es',
    resources: {
        es: {
            global: global_es,
        },
        en: {
            global: global_en,
        },
    },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <I18nextProvider i18n={i18next}>
            <App />
        </I18nextProvider>
    </StrictMode>,
);
