import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
    const products = [
        { id: 1, name: 'Apple Laptop Pro', price: 100 },
        { id: 2, name: 'Apple Laptop Mro', price: 100 },
        { id: 3, name: 'Apple Laptop Cro', price: 100 }
    ]
    return (
        <div>
            <h1>This is Group of Card</h1>
            <div class="card-group">
                {
                    products.map(product => <Card
                        key={product.id}
                        product={product}></Card>)
                }
            </div>
        </div>
    );
};

export default CardGroup;