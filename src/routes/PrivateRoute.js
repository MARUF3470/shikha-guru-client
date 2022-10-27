import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../components/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <progress className="progress w-56 text-blue-400 progress-info"></progress>
    }
    if (user && user?.uid) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }}></Navigate>
};

export default PrivateRoute;