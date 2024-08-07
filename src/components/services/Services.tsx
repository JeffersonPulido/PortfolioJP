import { FC, ReactElement, useState } from 'react';
import { Data } from '@data/services';
import './Services.css';
import { useTranslation } from 'react-i18next';

export const Services: FC = (): ReactElement => {
    const { t } = useTranslation('global');

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [service] = useState(Data);

    return (
        <>
            <div className="containerServices" id="services">
                <div className="containerTitleServices">
                    <h1>{t('titles.services')}</h1>
                </div>
                <section>
                    {service.map(serv => (
                        <div data-aos="flip-up" className="cardServ" key={serv.id}>
                            <div className="card">
                                <div className="icon-wrapper">
                                    <i className={serv.icon}></i>
                                </div>
                                <h3 className="h3serv">{serv.title}</h3>
                                <p className="pserv">{serv.description}</p>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </>
    );
};
