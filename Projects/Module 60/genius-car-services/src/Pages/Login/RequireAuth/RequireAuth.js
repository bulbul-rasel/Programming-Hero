import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    console.log("inside require auth", auth);
    if (loading) {
        <Loading></Loading>
    }
    const location = - useLocation();
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;