import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            <h5>Order Summary</h5>
            <p>Selected Product: {cart.length}</p>
        </div>
    );
};

export default Cart;