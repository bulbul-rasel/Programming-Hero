import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Special = () => {
    const [ring, house] = useContext(RingContext)
    return (
        <div>
            <h2>Special</h2>
            <h4>Gift: {ring}</h4>
            <h5>House: {house}</h5>
        </div>
    );
};

export default Special;