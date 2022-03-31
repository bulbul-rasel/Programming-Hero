import React from 'react';
import Special from '../Special/Special';

const MySelf = ({ house, ornament }) => {
    return (
        <div>
            <h1>Me</h1>
            <p>House: {house}</p>
            <Special ornament={ornament}></Special>
        </div>
    );
};

export default MySelf;