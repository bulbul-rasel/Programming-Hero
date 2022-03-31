import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveCart }) => {
    let command;

    if (cart.length === 0) {
        command = <div className='orange'>
            <h5>Oree. Taka Khorch kora sekh...</h5>
            <p>Koi re..</p>
        </div>
    }
    else if (cart.length === 1) {
        command = <p>Please add one more Item..!</p>
    } else {
        command = <p>Thanks for adding Item</p>
    }
    return (
        <div>
            <h4>ItemSelected: {cart.length}</h4>

            {
                cart.map(tShirt => <p>
                    {tShirt.name}
                    <button onClick={() => handleRemoveCart(tShirt)}>X</button>
                </p>)
            }
            {cart.length === 0 || <p className='orange'> YAY! You are Buying</p>}
            {cart.length === 3 && <div className='green'>
                <h3>Triangle</h3>
                <p>Tin jon re gift debo</p>
            </div>}
            {command}
            {cart.length !== 4 ? <p>Keep Adding</p> : <button>Remove</button>}
            {cart.length === 4 && <button className='green'>Review Order</button>}
        </div>
    );
};

export default Cart;