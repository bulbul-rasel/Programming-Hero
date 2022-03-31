import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h4>WelCome to t-shit Mania</h4>
            <nav>
                <Link to='/home'>Home</Link>
                <Link to='/orderreview'>Order Review</Link>
                <Link to='/cart'>Cart</Link>
            </nav>
        </div>
    );
};

export default Header;