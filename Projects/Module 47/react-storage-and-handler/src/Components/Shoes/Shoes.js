import React from 'react';
import { multiply } from '../utilities/Calculate';

const Shoes = () => {
    const first = 8;
    const second = 12;

    const totalMul = multiply(first, second)
    return (
        <div>
            <h2>This is Shoes Component</h2>
            <h4>Total Mul: {totalMul}</h4>
        </div>
    );
};

export default Shoes;