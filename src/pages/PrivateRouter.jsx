import React from 'react'
import { useAuthContext } from '../context/AuthProvider'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = () => {
    const {user} = useAuthContext();
  return user.isLoginned ? <Outlet/> : <Navigate to="/login"/>
}

export default PrivateRouter