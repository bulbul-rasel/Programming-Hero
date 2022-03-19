import React, { useState } from 'react';

const Watch = () => {
    const [steps, setSteps] = useState(0)
    const countSteps = () => {
        setSteps(steps + 1)
    }
    return (
        <div>
            <h3>Count Steps:{steps} </h3>
            <button onClick={countSteps}>De Dour De...</button>
        </div>
    );
};

export default Watch;