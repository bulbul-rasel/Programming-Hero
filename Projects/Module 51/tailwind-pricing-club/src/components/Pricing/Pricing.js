import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        { id: 1, name: 'Free', price: 0.00, benefits: [' Special deals', 'Summer deals', 'Crazy-deals', 'Hot deals'] },
        { id: 2, name: 'Regular', price: 200, benefits: [' Special deals', 'Summer deals', 'Crazy-deals', 'Hot deals'] },
        { id: 3, name: 'Premium', price: 300, benefits: [' Special deals', 'Summer deals', 'Crazy-deals', 'Hot deals'] }
    ]
    return (
        <div className='bg-indigo-300 p-4 mt-8'>
            <p className='text-6xl font-mono text-white'>Best deals of the town</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima odio ipsam aspernatur tenetur tempora iusto sunt distinctio illum, accusamus ipsa dolore id laborum harum accusantium similique sed, quae doloribus possimus libero nihil. Ullam soluta, libero rem sapiente dicta impedit accusantium, ipsa repellat, inventore error dolores excepturi! Aperiam fugiat mollitia reprehenderit.</p>
            <div className='grid md:grid-cols-3 gap-3 mt-8'>
                {
                    pricingOptions.map(option => <PricingOption
                        key={option.id}
                        option={option}></PricingOption>)
                }
            </div>
        </div>

    );
};

export default Pricing;