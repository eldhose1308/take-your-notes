import React, { createContext, useContext, useState, useMemo } from "react";

import { GoogleOAuthProvider } from '@react-oauth/google';

const clientId = "996420354509-0d4trcb21bdo1tm9k6jc5d95ootgf7h5.apps.googleusercontent.com";

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const userData = sessionStorage.getItem("userData") || '{}'

    const [ user, setUser ] = useState(JSON.parse(userData))
    const [ token, setToken ] = useState()
    
    const isAuthenticated = useMemo(() => !!Object.keys(user).length, [user])

    const loginClient = (data) => {
        const { token, ...userData } = data;
        const jsonUserData = JSON.stringify(userData);

        setUser(userData)
        sessionStorage.setItem("userData", jsonUserData);
    }

    const logoutClient = () => {
        setUser({})
        sessionStorage.removeItem("userData");        
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, loginClient, logoutClient }}>
            <GoogleOAuthProvider clientId={clientId}>
                {children}
            </GoogleOAuthProvider>
        </AuthContext.Provider>
    )
}

const useClientAuth = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error('useClientAuth must be used within AuthContext')
    }

    return context
}


export { useClientAuth };
export default AuthProvider