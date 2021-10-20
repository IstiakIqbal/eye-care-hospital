import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/Banner/banner-1.jpg'
import banner2 from '../../../images/Banner/banner-2.jpg'
import banner3 from '../../../images/Banner/banner-3.jpg'

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={banner2}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Reason to Choose The AI Vision Clinic?</h3>
                        <p>At the AI Vision Clinic, we combine world-leading clinical expertise with most cutting-edge technology in eye care. Artificial intelligence (AI) is utilised where possible to optimise treatment outcomes.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={banner1}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Reason to Choose The AI Vision Clinic?</h3>
                        <p>At the AI Vision Clinic, we combine world-leading clinical expertise with most cutting-edge technology in eye care. Artificial intelligence (AI) is utilised where possible to optimise treatment outcomes.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Reason to Choose The AI Vision Clinic?</h3>
                        <p>At the AI Vision Clinic, we combine world-leading clinical expertise with most cutting-edge technology in eye care. Artificial intelligence (AI) is utilised where possible to optimise treatment outcomes.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;