import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='headers'>
            <img src={logo} alt="" />
            <div>
                <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/about">About</a>
                <a href="/inventory">Inventory</a>

            </div>
        </nav>
    );
};

export default Header;