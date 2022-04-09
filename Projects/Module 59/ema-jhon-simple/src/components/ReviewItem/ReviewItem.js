import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const { handleRemoveProduct, product } = props
    const { name, img, price, shipping, quantity } = product
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-item-details-container">
                <div className="review-item-details">
                    <p className="product-name">{name}</p>
                    <p>Price: $<span className='orange-color'>{price}</span></p>
                    <p>Shipping: $<small>{shipping}</small></p>
                    <p>Quantity: <small>{quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button onClick={() => handleRemoveProduct(product)} className='delete-btn'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div >

    );
};

export default ReviewItem;