import React, { createContext, useContext, useState, useMemo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { BroadcastChannel } from 'broadcast-channel';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { getUserDetailFromLocal, removeUserDetailFromLocal, resetUserDetailFromLocal, setUserDetailToLocal } from "_utils/user-localDB/authDB";
import { redirectOnAuthorised, redirectOnUnAuthorised } from "_utils/auth";
import { resetAuth } from "store/actions/authActions";

const clientId = "996420354509-0d4trcb21bdo1tm9k6jc5d95ootgf7h5.apps.googleusercontent.com";

const AuthContext = createContext()

const channel = new BroadcastChannel('foobar');

// move all methods to hook
const AuthProvider = ({ children }) => {
    // const navigate = useNavigate();
    const userData = getUserDetailFromLocal();
    const dispatch = useDispatch();

    const [user, setUser] = useState(userData)

    const isAuthenticated = useMemo(() => user ? !!Object.keys(user).length : false, [user])

    const updateUser = (newUserData) => {
        setUser((previousUserState) => ({ ...previousUserState, ...newUserData }));
        setUserDetailToLocal({ ...user, ...newUserData });
    }

    const loginClient = (data) => {
        const { token, ...remainingUserData } = userData || data;

        setUser(remainingUserData);
        setUserDetailToLocal(remainingUserData);
        channel.postMessage('user-login');

        // redirectOnAuthorised();
    }

    const logoutClient = () => {
        setUser({});
        // removeUserDetailFromLocal();
        dispatch(resetAuth());
        resetUserDetailFromLocal();
        channel.postMessage('user-logout');

        // redirectOnUnAuthorised();
        // navigate("/signup");
    }

    const logoutAllTabs = () => {
        channel.onmessage = (message) => {
            if(message === 'user-logout'){
                logoutClient();
                // channel.close();
            }else if(message === 'user-login'){
                const newUserData = getUserDetailFromLocal();
                loginClient(newUserData);
                // channel.close();
            }
        }
    }

    useEffect(() => {
        logoutAllTabs();

        if(user){
            // redirectOnAuthorised();
        }else{
            // redirectOnUnAuthorised();
        }
     
        return () => {
            console.log('@authProvider');
            // channel.close(); 
        };
    }, [user])

    // if(!isAuthenticated){
    //     return null
    // }

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, updateUser, loginClient, logoutClient }}>
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