import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;


    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }
    if (user) {
        navigate(from, { replace: true });
    }
    const navigateRegister = () => {
        navigate('/register');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email')
        } else {
            toast('Enter your email')
        }
    }
    return (
        <div className='container mx-auto w-50'>
            <h2 className='text-primary text-center mt-2'>Please Login Here</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                {errorElement}
                <Button variant="primary w-50 d-block mx-auto" type="submit">
                    Login
                </Button>
                <p>New to Genius car? <Link to={'/register'} onClick={navigateRegister} className='text-primary pe-auto text-decoration-none'> Register here</Link></p>
                <p>Forget Password? <button onClick={resetPassword} className=' btn btn-link text-primary pe-auto text-decoration-none'> Reset Password</button></p>
            </Form>
            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;