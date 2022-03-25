import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './Meal.css'
const Meal = () => {
    const [meals, setMeals] = useState([])
    const [food, setFood] = useState([])
    const foodHandler = (meals) => {
        console.log(food);
        const newFood = [...food, meals]
        setFood(newFood)
    }

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])
    console.log(meals);
    return (
        <div className='meals-container'>
            <div className="all-meal">
                {
                    meals.map(food => <Food
                        key={food.idMeal}
                        food={food}
                        foodHandler={foodHandler}
                    ></Food>)
                }
            </div>
            <div className="meal-details">
                <h3 className='meal-name'>Selected Meal</h3>
                {food.map((item) => (
                    <h5 className='meal-single'>{item.strMeal}</h5>
                ))}
            </div>
        </div>
    );
};

export default Meal;