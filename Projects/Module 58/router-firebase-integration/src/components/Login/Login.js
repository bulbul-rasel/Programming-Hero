import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import app from '../../firebase.init';
import './Login.css'


const auth = getAuth(app);
const Login = () => {

    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    return (
        <div>
            <h1>Please Login..!!</h1>
            <div className='googleSignIn'>
                <button onClick={() => signInWithGoogle()}>Google Sign In</button>
            </div>
            <form action="">
                <input type="email" name="" id="" placeholder='Enter your name' />
                <br />
                <input type="password" name="" id="" placeholder='Enter your password' /><br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;