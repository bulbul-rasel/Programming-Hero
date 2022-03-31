import React from 'react';
import MySelf from "../MySelf/MySelf"
import Brother from '../Brother/Brother'
import Sister from '../Sister/Sister'

const Father = ({ house, ornament }) => {
    return (
        <div>
            <h2>Father</h2>
            <p>House: {house}</p>
            <MySelf ornament={ornament}></MySelf>
            <Brother></Brother>
            <Sister></Sister>
        </div>
    );
};

export default Father;