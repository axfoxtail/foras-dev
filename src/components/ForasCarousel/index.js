import React from 'react';
import { Carousel } from 'react-bootstrap';

import './foras-carousel.scss';

import slide01 from '../../assets/images/slide01.png';
import slide02 from '../../assets/images/slide02.png';
import slide03 from '../../assets/images/slide03.png';
import slide04 from '../../assets/images/slide04.png';
import slide_footer from '../../assets/images/slide-footer.png';

class ForasCarousel extends React.Component {
    
    render() {
        return (
            <div>
                <Carousel controls={false} pauseOnHover={false}>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={slide01}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h1>تطبيق الوظائف الأفضل في السعودية</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={slide02}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h1>تطبيق الوظائف الأفضل في السعودية</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={slide03}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h1>تطبيق الوظائف الأفضل في السعودية</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={slide04}
                        alt="Forth slide"
                        />

                        <Carousel.Caption>
                        <h1>تطبيق الوظائف الأفضل في السعودية</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <img
                    className="d-block w-100 carousel-footer"
                    src={slide_footer}
                    alt="slide footer"
                />
            </div>
        );
    }
}

export default ForasCarousel;