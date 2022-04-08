import React from 'react';
import useFirebase from '../hooks/useFirebase';
import './Login.css'

const Login = () => {

    const { signInWithGoogle } = useFirebase()
    return (
        <div>
            <h1>Please Login..!!</h1>
            <div className='googleSignIn'>
                <button onClick={signInWithGoogle}>Google Sign In</button>
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