import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props.country);
    const { area, population, name } = props.country;
    return (
        <div className='country'>
            <h2>Country Name: {name.common} </h2>
            <h4>Population: {population}</h4>
            <h5> <small> Area: {area}</small></h5>
        </div>
    );
};

export default Country;