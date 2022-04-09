import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import './Home.css'

const auth = getAuth(app)

const Home = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h1>This is home</h1>
            <p>Current User is: {user ? user.displayName : 'No body'}</p>
        </div>
    );
};

export default Home;