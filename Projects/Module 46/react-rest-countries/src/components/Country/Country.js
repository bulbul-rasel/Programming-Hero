import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props.country);
    const { area, population, name, region, flags } = props.country;
    return (
        <div className='country'>
            <h2>Country Name: {name.common} </h2>
            <img src={flags.png} alt="" />
            <h4>Population: {population}</h4>
            <h5> <small> Region: {region}</small></h5>
            <h5> <small> Area: {area}</small></h5>
        </div>
    );
};

export default Country;