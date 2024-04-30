import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState({
        isLoginned:false,
        email:"",
        password:""
    });
    const navigate = useNavigate();
    const login = (info) => {
        setUser(info);
        navigate("/home")
    } 
  return (
    <AuthContext.Provider value={{user,login}}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
    return useContext(AuthContext);
}

export default AuthProvider