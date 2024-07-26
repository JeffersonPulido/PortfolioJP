import { FC, ReactElement } from 'react';
import './testimonials.css';
import { useTranslation } from 'react-i18next';

export const Testimonials: FC = (): ReactElement => {
    const { t } = useTranslation('global');

    return (
        <>
            <div className="containerTestimonials" id="testimonials">
                <div className="containerTitleTestimonials">
                    <h1>{t('titles.testimonials')}</h1>
                </div>
                <div className="containerBodyTestimonials">
                    <div className="quotes page-width">
                        <div
                            data-aos="flip-down"
                            className="quotes-slide slideshow__slide--active"
                            data-slider-slide-index="0"
                            aria-hidden="false"
                        >
                            <blockquote className="quotes-slider__text text-left">
                                <span className="quote-icon">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        role="presentation"
                                        className="icon icon-quote"
                                        viewBox="0 0 41 35"
                                    >
                                        <path d="M10.208 17.711h6.124v16.332H0V21.684C0 8.184 5.444.956 16.332 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766zm24.498 0h6.124v16.332H24.498V21.684C24.498 8.184 29.942.956 40.83 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766z"></path>
                                    </svg>
                                </span>

                                <div className="content">
                                    <p>{t('testimonials.cardYeison')}</p>
                                </div>
                                <cite>Yeison Marquez - {t('testimonials.titleYeison')}</cite>
                            </blockquote>
                        </div>
                        <div
                            data-aos="flip-down"
                            className="quotes-slide slideshow__slide--active"
                            data-slider-slide-index="1"
                            aria-hidden="false"
                        >
                            <blockquote className="quotes-slider__text text-left">
                                <span className="quote-icon">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        role="presentation"
                                        className="icon icon-quote"
                                        viewBox="0 0 41 35"
                                    >
                                        <path d="M10.208 17.711h6.124v16.332H0V21.684C0 8.184 5.444.956 16.332 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766zm24.498 0h6.124v16.332H24.498V21.684C24.498 8.184 29.942.956 40.83 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766z"></path>
                                    </svg>
                                </span>

                                <div className="content">
                                    <p>{t('testimonials.cardCristian')}</p>
                                </div>
                                <cite>Cristian Sanchez - {t('testimonials.titleCristian')}</cite>
                            </blockquote>
                        </div>
                        <div
                            data-aos="flip-down"
                            className="quotes-slide slideshow__slide--active"
                            data-slider-slide-index="2"
                            aria-hidden="false"
                        >
                            <blockquote className="quotes-slider__text text-left">
                                <span className="quote-icon">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        role="presentation"
                                        className="icon icon-quote"
                                        viewBox="0 0 41 35"
                                    >
                                        <path d="M10.208 17.711h6.124v16.332H0V21.684C0 8.184 5.444.956 16.332 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766zm24.498 0h6.124v16.332H24.498V21.684C24.498 8.184 29.942.956 40.83 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766z"></path>
                                    </svg>
                                </span>
                                <div className="content">
                                    <p>{t('testimonials.cardFernando')}</p>
                                </div>
                                <cite>Fernando Bermudez - {t('testimonials.titleFernando')}</cite>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
