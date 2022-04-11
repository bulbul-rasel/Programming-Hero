import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <div className='text-center mt-3'>
            <p> <small>&copy; Copyright {year}</small></p>
        </div>
    );
};

export default Footer;