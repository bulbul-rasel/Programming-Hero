import React, { createContext, useState } from 'react';
import './GrandPa.css'
import Uncle from '../Uncle/Uncle'
import Father from '../Father/Father'
import Aunt from '../Aunt/Aunt'

export const RingContext = createContext('ring')

const GrandPa = () => {
    const [house, setHouse] = useState(1)
    const handleBuyHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount)
    }
    const ornament = 'diamond Ring'

    return (
        <RingContext.Provider value={[ornament, house]}>
            <div className='grandpa'>
                <h1>Grandpa</h1>
                <p>House: {house}</p>
                <button onClick={handleBuyHouse}>Buy a House</button>
                <Uncle house={house}></Uncle>
                <Father house={house}></Father>
                <Aunt house={house}></Aunt>
            </div>
        </RingContext.Provider>
    );
};

export default GrandPa;