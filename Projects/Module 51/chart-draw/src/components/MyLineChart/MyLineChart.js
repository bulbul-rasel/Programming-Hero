import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {
    const data = [
        {
            name: 'Page A',
            price: 4000,
            sales: 2400,
            target: 2400,
        },
        {
            name: 'Page B',
            price: 3000,
            sales: 1398,
            target: 2210,
        },
        {
            name: 'Page C',
            price: 2000,
            sales: 9800,
            target: 2290,
        },
        {
            name: 'Page D',
            price: 2780,
            sales: 3908,
            target: 2000,
        },
        {
            name: 'Page E',
            price: 1890,
            sales: 4800,
            target: 2181,
        },
        {
            name: 'Page F',
            price: 2390,
            sales: 3800,
            target: 2500,
        },
        {
            name: 'Page G',
            price: 3490,
            sales: 4300,
            target: 2100,
        },
    ];
    return (
        <LineChart width={800} height={500} data={data}>
            <Line dataKey={'price'} stroke='#8884d8'></Line>
            <Line dataKey={'sales'} stroke='#82ca9d'></Line>
            <Line dataKey={'target'}></Line>
            <Tooltip></Tooltip>
            <XAxis dataKey={'name'}></XAxis>
            <YAxis></YAxis>
        </LineChart>
    );
};

export default MyLineChart;