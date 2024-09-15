import React, { createContext, useContext, useState, useMemo, useEffect } from "react";

import { BroadcastChannel } from 'broadcast-channel';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { getUserDetailFromLocal, removeUserDetailFromLocal, setUserDetailToLocal } from "_utils/user-localDB/authDB";

const clientId = "996420354509-0d4trcb21bdo1tm9k6jc5d95ootgf7h5.apps.googleusercontent.com";

const AuthContext = createContext()

const channel = new BroadcastChannel('foobar');

// move all methods to hook
const AuthProvider = ({ children }) => {
    const userData = getUserDetailFromLocal();

    const [ user, setUser ] = useState(userData)
    
    const isAuthenticated = useMemo(() => user ? !!Object.keys(user).length : false, [user])

    const loginClient = (data) => {
        const { token, ...userData } = data;

        setUser(userData);
        setUserDetailToLocal(userData);
    }
    
    const logoutClient = () => {
        setUser({});
        channel.postMessage('user-logout');
        removeUserDetailFromLocal();  
    }

    const logoutAllTabs = () => {
        channel.onmessage = () => {
            logoutClient();
            channel.close();
        }
    }

    useEffect(() => {
        logoutAllTabs()
    },[])

    // if(!isAuthenticated){
    //     return null
    // }

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