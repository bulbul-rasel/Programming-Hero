import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [agree, setAgree] = useState(false)
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login')
    }

    const handleRegister = async (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const agree = event.target.password.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home')
    }

    if (user) {
        console.log('user', user);
    }

    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder='Type your Name' />
                <input type="email" name="email" id="" placeholder='Type your Email' required />
                <input type="password" name="password" id="" placeholder='Type your Password' required />

                <input onClick={() => setAgree(!agree)} type="checkbox" name="" id="" />
                <label className={`ps-2 ${agree ? "text-primary" : "text-danger"}`} htmlFor="terms">Accept Genius Car terms and Condition</label>

                <input
                    disabled={!agree}
                    className='btn btn-primary w-50 d-block mx-auto mt-2'
                    type="submit"
                    value="Register" />
            </form>
            <p>Already Registered? <Link to={'/login'} onClick={navigateLogin} className='text-success pe-auto text-decoration-none'> Login here</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;