import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login')
    }

    const handleRegister = event => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password)
    }

    if (user) {
        navigate('/home')
    }

    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder='Type your Name' />
                <input type="email" name="email" id="" placeholder='Type your Email' required />
                <input type="password" name="password" id="" placeholder='Type your Password' required />
                <input type="Submit" value="Register" />
            </form>
            <p>Already Registered? <Link to={'/login'} onClick={navigateLogin} className='text-success pe-auto text-decoration-none'> Login here</Link></p>
        </div>
    );
};

export default Register;