import React from 'react';
import "./Menubar.css"
const Menubar = (props) => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">Logo</div>
                    <div className="col-md-10 menu-container d-flex justify-content-end">
                        <li className='items me-4'>Home</li>
                        <li className='items me-4'>Contact</li>
                        <li className='items me-4'>Cart <sup>{props.count}</sup></li>
                        <li className='items me-4'>LogIn</li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menubar;