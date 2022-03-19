import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

import './AllProducts.css'
const AllProducts = (props) => {
    const { setCartCount } = props;
    const [product, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [product]);
    console.log(product);
    return (
        <div>
            <h1>All Products</h1>
            <div className="row container">
                {product.map((pd) => (
                    <SingleProduct
                        key={pd.id}
                        setCartCount={setCartCount}
                        product={pd}></SingleProduct>
                ))}
            </div>
        </div>
    );
};

export default AllProducts;