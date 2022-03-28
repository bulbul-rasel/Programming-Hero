import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h1>Welcome to ny Fancy Routing Website...</h1>
            <ul>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/friend">Friend </CustomLink >
                <CustomLink to="/about">About</CustomLink>
            </ul>
        </div>
    );
};

export default Header;