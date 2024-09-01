import React, { useEffect, useState } from "react";
import slideImg1 from '../images/slide1.jpg';
import slideImg2 from '../images/slide2.jpg';
import slideImg3 from '../images/slide3.jpg';
import slideImg4 from '../images/slide4.jpg';
import slideImg5 from '../images/slide5.jpg';

export default function Carousel() {

    // slide images array
    const image = [slideImg1, slideImg2, slideImg3, slideImg4, slideImg5];

    // craeting slide scroll
    const [currentIndex, setCurrentIndex] = useState(0);

    const preSlide = () => {
        const index = currentIndex === 0 ? image.length - 1 : currentIndex - 1;
        setCurrentIndex(index);
    };

    const nextSlide = () => {
        const index = currentIndex === image.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(index);
    }

     // Auto-slide functionality using useEffect
     const interval = 4000;

     useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentIndex(prevIndex =>
                prevIndex === image.length - 1 ? 0 : prevIndex + 1
            );
        }, interval);

        return () => clearInterval(slideInterval); // Clear interval on component unmount
    }, [image.length, interval]);


    return (
        <>
            <div className="carousel-container">
                <button onClick={preSlide} className="carousel-button prev-button">&lt;</button>
                <img src={image[currentIndex]} alt="carousel" className="carousel-image" />
                <button onClick={nextSlide} className="carousel-button next-button">&gt;</button>
            </div>
        </>
    )
}