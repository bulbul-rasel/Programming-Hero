import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart } from 'recharts';


const SpecialLine = () => {
    const [phones, setPhones] = useState([])

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
            .then(data => {
                const loadData = data.data
                const loadCcn3 = loadData.map(ccn => ccn.ccn3)
                // const loadName = loadData.map(countries => countries.common)
                // const cnt = {
                //     name: loadName,
                //     value: loadCcn3
                // }
                console.log(loadCcn3);
                setPhones(loadCcn3)
            })

    }, [])
    return (
        <BarChart width={500} height={400} data={phones}>
            <Bar dataKey={'loadData'} fill="#8884d8" />
        </BarChart>

    );
};

export default SpecialLine;