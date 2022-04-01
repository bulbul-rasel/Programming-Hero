import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Uncle = ({ house }) => {
    const [ring] = useContext(RingContext)
    return (
        <div>
            <p>House: {house}</p>
            <h3>Uncle</h3>
            <h5>Gift: {ring}</h5>

        </div>
    );
};

export default Uncle;