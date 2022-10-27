import React from 'react';
import { useContext } from 'react';
import Login from '../components/Login/Login';

const PrivateRoute = ({ children }) => {
    const { user } = useContext()
    if (user.uid) {
        return children
    }
    return <Login></Login>
};

export default PrivateRoute;