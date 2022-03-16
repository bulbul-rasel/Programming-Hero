import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div className='countries'>
            <h2>WelCome To My Countries: {countries.length}</h2>
            {
                countries.map(country => <Country
                    country={country}
                ></Country>)
            }
        </div>
    );
};

export default Countries;