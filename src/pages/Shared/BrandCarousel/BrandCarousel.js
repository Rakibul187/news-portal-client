import React from 'react';
import { Carousel } from 'react-bootstrap';
import banglalink from '../../../Assets/Brandimage/banglalink.jpg'
import grameen from '../../../Assets/Brandimage/grameen.jpg'
import telitalk from '../../../Assets/Brandimage/telitalk.jpg'
import '../BrandCarousel/BrandCarousel.css'

const BrandCarousel = () => {
    return (
        <div>
            <h5 className='mt-3 mb-1'>Our Brand Partners</h5>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block image  w-100"
                        src={telitalk}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block image  w-100"
                        src={banglalink}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block image  w-100"
                        src={grameen}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default BrandCarousel;