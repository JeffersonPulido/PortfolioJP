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
                                    <p>Must go faster. Hey, take a look at the earthlings. Goodbye! I was part of something special. Jaguar
                                        shark! So tell me - does it really exist? They're using our own satellites against us. And the clock
                                        is ticking. Must go faster... go, go, go, go, go!
                                    </p>
                                </div>
                                <cite>Jeff Goldblum</cite>
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
                                    <p>I was part of something special. God help us, we're in the hands of engineers. Jaguar shark! So tell
                                        me - does it really exist? Checkmate... We gotta burn the rain forest, dump toxic waste, pollute the
                                        air, and rip up the OZONE! 'Cause maybe if we screw up this planet enough, they won't want it
                                        anymore!
                                    </p>
                                </div>
                                <cite>Jeff Goldblum</cite>
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
                                    <p>Must go faster... go, go, go, go, go! Yes, Yes, without the oops! Life finds a way. My dad once told
                                        me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little
                                        bastard! Hey, you know how I'm, like, always trying to save the planet? Here's my chance.</p>
                                </div>
                                <cite>Jeff Goldblum</cite>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
