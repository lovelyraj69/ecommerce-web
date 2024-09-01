import React, { useEffect, useState } from 'react';
import axios from 'axios';
import boyImg from '../images/fashion/boy.jpg';
import girlImg from '../images/fashion/girl.jpg';
import coupleImg from '../images/fashion/couple.jpg';
import kidImg from '../images/fashion/kid.jpg';

export default function Fashion() {
    const [tshirtImages, setTshirtImages] = useState([]);
    const [shirtImages, setShirtImages] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/tshirts')
            .then(response => {
                setTshirtImages(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the images!', error);
            });
    }, []);

    useEffect(() => {
        axios.get('http://localhost:5000/api/shirts')
            .then(response => {
                setShirtImages(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the images!', error);
            });
    }, []);

    return (
        <>
            <section className='fasshion-section'>
                <h1>Fashion</h1>
                <div className='fashion-division'>
                    <div><img src={boyImg} alt="" /><h2>Boy's</h2></div>
                    <div><img src={girlImg} alt="" /><h2>Girl's</h2></div>
                    <div><img src={coupleImg} alt="" /><h2>Couple's</h2></div>
                    <div><img src={kidImg} alt="" /><h2>Kid's</h2></div>
                </div>
                <h2>Tshirts</h2>
                <div className='shirts-container'>
                    {tshirtImages.map((imageUrl, index) => (
                        <img className='shirts-img' key={index} src={imageUrl} alt={`img-${index}`} />
                    ))}
                </div>
                <h2>Shirts</h2>
                <div className='shirts-container'>
                    {shirtImages.map((imageUrl, index) => (
                        <img className='shirts-img' key={index} src={imageUrl} alt={`img-${index}`} />
                    ))}
                </div>
            </section>
        </>
    )
}
