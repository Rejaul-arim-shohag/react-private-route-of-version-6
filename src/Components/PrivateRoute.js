import React from 'react';
import {Route, Navigate} from 'react-router-dom';
import useAuth from './Hooks/useAuth';
const PrivateRoute = ({children}) => {
    const auth = useAuth()
    return (auth ? children: <Navigate to="login"/>);
};

export default PrivateRoute;