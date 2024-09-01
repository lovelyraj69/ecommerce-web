import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

export default function Popup({ handleClose }) {
    const [selectedImage, setSelectedImage] = useState(null);
    const [error, setError] = useState('');

    const handleImageUpload = (event) => {
        const file = event.target.files[0];

        // Check if file is selected
        if (!file) {
            setError('No file selected');
            return;
        }

        // Check file size (2MB = 2 * 1024 * 1024 bytes)
        const maxSizeInBytes = 2 * 1024 * 1024;
        if (file.size > maxSizeInBytes) {
            setError('File size exceeds 2MB');
            return;
        }

        // If file size is valid, proceed
        setSelectedImage(URL.createObjectURL(file));
        setError('');
    };

    return (
        <>
            <div className='popup-overlay'>
                <form action="" className='popup-content'>
                    <FontAwesomeIcon icon={faXmark} onClick={handleClose} color='red' />
                    <legend>Name</legend>
                    <input className='validInput' type="text" required />
                    <legend>Category</legend>
                    <input className='validInput' type="text" required />
                    <legend>Image</legend>
                    <input type="file" accept='image/*' onChange={handleImageUpload} required />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {selectedImage && (
                        <div>
                            <h3>Preview:</h3>
                            <img src={selectedImage} alt="Selected" style={{ maxWidth: '100%', height: 'auto' }} />
                        </div>
                    )}
                    <legend>Discription</legend>
                    <textarea name="" id=""></textarea>
                    <input className='submit' type="submit" />
                </form>
            </div>
        </>
    )
}
