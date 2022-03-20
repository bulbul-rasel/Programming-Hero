import React from 'react';
import { addDb, removeDb } from '../utilities/fakedb';
import './Cosmetic.css'
const Cosmetic = (props) => {
    const { name, gender, index } = props.cosmetic;

    const addCart = (index) => {
        addDb(index)
    }
    const removeCart = (index) => {
        removeDb(index);
    }

    // const addCartParam = () => {
    //     addCart(index)
    // }
    return (
        <div className='product'>
            <h3>This is: {name}</h3>
            <h5>Gender is: {gender}</h5>
            <h5><small>Id is: {index}</small></h5>
            {/* <button onClick={addCartParam}>Add to Cart</button> */}
            <button onClick={() =>
                addCart(index)}>Add to Cart</button>
            <button onClick={() =>
                removeCart(index)}>Delete</button>
        </div>
    );
};

export default Cosmetic;