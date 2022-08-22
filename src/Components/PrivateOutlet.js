import React from 'react';
import useAuth from '../Hooks/useAuth';
import {Navigate, Outlet, useLocation} from 'react-router-dom';

const PrivateOutlet = () => {
    const {user} = useAuth();
    const location = useLocation();

    return  user?.email || localStorage.getItem('token') ? <Outlet /> : <Navigate to= "/login"  state={{ from: location }} replace />;
};

export default PrivateOutlet;