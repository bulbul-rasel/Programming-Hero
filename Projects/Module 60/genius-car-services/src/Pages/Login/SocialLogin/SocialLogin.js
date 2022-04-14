import React from 'react';
import glogo from '../../../images/glogo.png'
import flogo from '../../../images/facebook.png'
import github from '../../../images/github.png'
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const [signInWithFacebook] = useSignInWithFacebook(auth);
    const navigate = useNavigate();
    let errorElement;

    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }

    if (user || user1) {
        navigate('/home');
    }

    return (
        <div className='my-2'>
            <div className='d-flex align-items-center mt-3'>
                <div style={{ height: "1px" }} className='w-50 bg-primary'></div>
                <p className='px-4 mb-2'>or</p>
                <div style={{ height: "1px" }} className='w-50 bg-primary'></div>
            </div>
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-100 rounded-pill my-2'>
                    <img style={{ width: "30px" }} src={glogo} alt="" />
                    Google Sign In
                </button>
                <button
                    onClick={() => signInWithFacebook()}
                    className='btn btn-primary w-100 rounded-pill '>
                    <img style={{ width: "30px" }} src={flogo} alt="" />
                    Facebook Sign In
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-dark w-100 rounded-pill my-2'>
                    <img style={{ width: "30px" }} src={github} alt="" />
                    GitHub Sign In
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;