import React from 'react'
import './testimonials.css'

export const Testimonials = () => {
    return (
        <>
            <div className='containerTestimonials' id='testimonials'>
                <div className='containerTitleTestimonials'>
                    <h1>TESTIMONIALS</h1>
                </div>
                <div className='containerBodyTestimonials'>
                    <div className="quotes page-width">
                        <div className="quotes-slide slideshow__slide--active" data-slider-slide-index="0" aria-hidden="false" tabIndex="-1">
                            <blockquote className="quotes-slider__text text-left">
                                <span className="quote-icon">
                                    <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-quote" viewBox="0 0 41 35">
                                        <path d="M10.208 17.711h6.124v16.332H0V21.684C0 8.184 5.444.956 16.332 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766zm24.498 0h6.124v16.332H24.498V21.684C24.498 8.184 29.942.956 40.83 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766z"                         ></path>
                                    </svg>
                                </span>

                                <div className="content">
                                    <p>Conozco tu trabajo y sé que manejas código limpio e indexado, tiene buena perspectiva de solución de problemas y una lógica increíble, ademas de usar buenas practicas. </p>
                                </div>
                                <cite>Yeison Marquez - Developer Sr</cite>
                            </blockquote>
                        </div>
                        <div className="quotes-slide slideshow__slide--active" data-slider-slide-index="1" aria-hidden="false" tabIndex="-1">
                            <blockquote className="quotes-slider__text text-left">
                                <span className="quote-icon"><svg aria-hidden="true" focusable="false" role="presentation"
                                    className="icon icon-quote" viewBox="0 0 41 35">
                                    <path d="M10.208 17.711h6.124v16.332H0V21.684C0 8.184 5.444.956 16.332 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766zm24.498 0h6.124v16.332H24.498V21.684C24.498 8.184 29.942.956 40.83 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766z">
                                    </path>
                                </svg>
                                </span>

                                <div className="content">
                                    <p>Es una persona autónoma y proactiva, Soluciona inconvenientes y mejora la efectividad de procesos para aumentar la calidad de un sistema compuesto. </p>
                                </div>
                                <cite>Cristian Sanchez - Arquitecto</cite>
                            </blockquote>
                        </div>
                        <div className="quotes-slide slideshow__slide--active" data-slider-slide-index="2" aria-hidden="false" tabIndex="-1">
                            <blockquote className="quotes-slider__text text-left">
                                <span className="quote-icon"><svg aria-hidden="true" focusable="false" role="presentation"
                                    className="icon icon-quote" viewBox="0 0 41 35">
                                    <path d="M10.208 17.711h6.124v16.332H0V21.684C0 8.184 5.444.956 16.332 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766zm24.498 0h6.124v16.332H24.498V21.684C24.498 8.184 29.942.956 40.83 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766z"></path>
                                </svg>
                                </span>
                                <div className="content">
                                    <p>Es una persona responsable y autónomo, apto para afrontar los retos más altos y encontrar la mejor solución, además está dispuesto a aprender y dejarse enseñar.</p>
                                </div>
                                <cite>Fernando Bermudez - Docende SENA</cite>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
