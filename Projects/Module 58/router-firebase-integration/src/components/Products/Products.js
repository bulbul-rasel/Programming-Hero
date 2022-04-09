import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import './Products'


const auth = getAuth(app)
const Products = () => {
    const [user] = useAuthState(auth)
    return (

        <div>
            <h1>This is home</h1>
            <h4>Current User is: {user ? user.displayName : 'Voooooot'}</h4>
        </div>

    );
};

export default Products;