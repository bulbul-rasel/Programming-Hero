import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Crd from '../Crd/Crd';

const CardGrp = () => {
    const products = [
        { id: 1, name: 'Apple Laptop Pro', price: 100 },
        { id: 2, name: 'Apple Laptop Mro', price: 100 },
        { id: 3, name: 'Apple Laptop Cro', price: 100 }
    ]
    return (
        <div>
            <CardGroup></CardGroup>
            {
                products.map(product => <Crd
                    key={product.id}
                    product={product}></Crd>)
            }
        </div>
    );
};

export default CardGrp;