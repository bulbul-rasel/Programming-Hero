import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, img, seller, ratings, price } = props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h3 className='product-name'>{name.slice(0, 20)}</h3>
                <p>Price: ${price}</p>
                <p> <small>Seller: {seller}</small></p>
                <p> <small>Ratings: {ratings} stars</small></p>
            </div>
            <button onClick={() => props.handleAddCart(props.product)} className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;