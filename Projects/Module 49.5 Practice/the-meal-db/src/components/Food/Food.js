import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Food.css'

const Food = (props) => {
    const { food, foodHandler } = props
    const { strMealThumb, strInstructions, strMeal } = food;

    return (
        <div className='food-container'>
            <div className='food'>
                <img src={strMealThumb} alt="" />
                <h3 className='food-name'>Name: {strMeal}</h3>
                <p>Instruction: {strInstructions.slice(0, 200)}</p>
            </div>
            <button onClick={() => foodHandler(food)} className='btn-add'>Add List
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Food;