import React from 'react';
import Special from '../Special/Special';

const MySelf = ({ house }) => {
    return (
        <div>
            <h1>Me</h1>
            <p>House: {house}</p>
            <Special></Special>
        </div>
    );
};

export default MySelf;