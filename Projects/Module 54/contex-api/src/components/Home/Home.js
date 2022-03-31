import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import useTShirt from '../hooks/useTShirt';
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {
    const [tShirts, setTShirts] = useTShirt()
    const [cart, setCart] = useState([])

    const handleAddToCart = (selectedItem) => {
        const exist = cart.find(tShirt => tShirt._id === selectedItem._id)
        if (!exist) {
            const newCart = [...cart, selectedItem]
            setCart(newCart)
        } else {
            alert('Already Added')
        }

    }
    const handleRemoveCart = (selectedItem) => {
        const rest = cart.filter(tShirts => tShirts._id !== selectedItem._id)
        setCart(rest)
    }
    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tShirts.map(tShirt => <TShirt
                        key={tShirt._id}
                        handleAddToCart={handleAddToCart}
                        tShirt={tShirt}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleRemoveCart={handleRemoveCart}
                ></Cart>
            </div>
        </div >
    );
};

export default Home;