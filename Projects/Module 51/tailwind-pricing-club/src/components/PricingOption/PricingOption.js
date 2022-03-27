import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefit from '../Benefit/Benefit';

const PricingOption = (props) => {
    const { name, price, benefits } = props.option
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h2 className='bg-indigo-300 py-2 rounded text-xl font-bold text-white'>{name}</h2>
            <p>
                <span className='text-5xl text-bold'>{price}</span> <span className='text-xl font-bold text-gray-500'>/BDT</span></p>
            <div>
                <p className='text-left text-xl flex items-center'>Benefit: </p>
                {
                    benefits.map(benefit => <Benefit benefit={benefit}></Benefit>)
                }
            </div>
            <button className='bg-green-500 px-4 py-2 rounded text-white w-full flex items-center justify-center hover:text-indigo-500 text-bold'> Buy Now <ArrowRightIcon className='text-white h-4 w-4 ml-2'></ArrowRightIcon>
            </button>
        </div>
    );
};

export default PricingOption;