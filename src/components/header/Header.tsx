import { FC, ReactElement } from 'react';
import style from './header.module.css';
import { useTranslation } from 'react-i18next';

export const Header: FC = (): ReactElement => {
    const { t } = useTranslation('global');

    return (
        <>
            <div className={style.container} id="home">
                <div className={style.containerName}>
                    <h1 data-aos="zoom-in-right" className={style.title}>
                        {t('header.title')}
                    </h1>
                    <h2 data-aos="zoom-in-right" data-aos-delay="300" className={style.descripcion}>
                        {t('header.description')}
                    </h2>
                    <a
                        className={style.btnEffect}
                        href="https://jeffersonpulido-cv.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span>Ver CV</span>
                    </a>
                </div>
            </div>
        </>
    );
};
