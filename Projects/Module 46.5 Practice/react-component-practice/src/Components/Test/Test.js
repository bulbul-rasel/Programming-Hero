import React, { useState } from 'react';

const Test = (props) => {

    const [count, setCount] = useState(0)
    const plus = () => {
        setCount(count + 1);
    }
    const minus = () => {
        setCount(count - 1);
    }
    console.log(count);
    return (

        < div >
            <div className='count mt-5'></div>
            <h1>{count}</h1>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
        </div >
    );
};

export default Test;