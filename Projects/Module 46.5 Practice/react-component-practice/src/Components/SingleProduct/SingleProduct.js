import React from 'react';
import "./SingleProduct.css"
const SingleProduct = (props) => {
    const { setCartCount } = props;
    return (
        <div className='col-md-4'>
            <div className="card p-3 border">
                <h1>{props.product.title.slice(0, 20)}</h1>
                <img className='w-50 mx-auto' src={props.product.image} alt="" />
                <div className="d-flex justify-content-around">
                    <button onClick={setCartCount} className='btn btn-success'>Add to Cart</button>
                    <button className='btn btn-danger'>Delete</button>
                    <button className='btn btn-warning'>Details</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;