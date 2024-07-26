import { FC, ReactElement, useState } from 'react';
import './UpArrow.css';

export const UpArrow: FC = (): ReactElement => {
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = (): void => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
        }
    };

    const scrollTop = (): void => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', checkScrollTop);

    return (
        <>
            <a href="#">
                <span data-aos="zoom-in" className="scrollTop fa-solid fa-arrow-up" onClick={scrollTop}></span>
            </a>
        </>
    );
};
