import React, { useState } from 'react';
import logo from './images/logo-black.png';
import accessorieImg from './images/products/accessorie.jpg';
import applianceImg from './images/products/appliance.jpg';
import electronicImg from './images/products/electronic.jpg';
import fashionImg from './images/products/fashion.jpg';
import furnitureImg from './images/products/furniture.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Popup from './Popup';
import Carousel from './productCom/Carousel';

export default function Search({setTab}) {

    // craeting a products values
    const [products, setProducts] = useState([
        { id: 1, name: 'Xiaomi', category: 'Fashion', image: fashionImg,click: () => setTab('fashion') },
        { id: 2, name: 'Blue-start ac', category: 'Electronics', image: electronicImg,click: () => setTab('electronic') },
        { id: 3, name: 'Asus laptop', category: 'Accessories', image: accessorieImg,click: () => setTab('accessories') },
        { id: 4, name: 'Casual shirts', category: 'Appliances', image: applianceImg,click: () => setTab('applainaces') },
        { id: 5, name: 'Beds', category: 'Furniture', image: furnitureImg,click: () => setTab('furniture') }
    ]);

    const [search, setSearch] = useState('');

    const filterProducts = products.filter(product =>
        product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        product.category.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );

    // for using popup component to popup and close
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <section className='search-section'>
                <div className='navbar'>
                    <div className='logo'> <img src={logo} alt="" /> </div>
                    <div>
                        <input type="text" placeholder='Search your products...'
                            value={search} onChange={(e) => setSearch(e.target.value)} />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faPlus} onClick={togglePopup} />
                        {isOpen && (<Popup handleClose={togglePopup} />)}
                    </div>
                </div>
                <div className='products'>
                    {
                        filterProducts.map(product => (
                            <div key={product.id} className='product' onClick={product.click}>
                                <img className='image' src={product.image} alt="" />
                                <h2 className='category'>{product.category}</h2>
                            </div>
                        ))
                    }
                </div>
            </section>
            <Carousel />
        </>
    )
}
