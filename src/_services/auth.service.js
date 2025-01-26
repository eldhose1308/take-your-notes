import * as auth from '_api/auth.api'
import { formatUserData } from './users.service';

const login = async (data, config = {}) => {
    try {
        const response = await auth.signin(data, config);
        const { data: userData = [] } = response;
        const formattedUserData = formatUserData(userData);
        return formattedUserData;
    } catch (err) {
        throw err;
    }
}


const register = async (data, config = {}) => {
    try {
        const response = await auth.signup(data, config);
        const { data: userData = [] } = response;
        const formattedUserData = formatUserData(userData);
        return formattedUserData;
    } catch (err) {
        throw err;
    }
}


const sendEmailVerification = async (data, config = {}) => {
    try {
        const response = await auth.sendEmailVerification(data, config);
        return response;
    }catch (err) {
        throw err;
    }
}


const verifyEmailOtp = async (data, config = {}) => {
    try {
        const response = await auth.verifyEmailOtp(data, config);
        return response;
    }catch (err) {
        throw err;
    }
}




const sendResetPasswordEmail = async (data, config = {}) => {
    try {
        const response = await auth.sendResetPasswordEmail(data, config);
        return response;
    }catch (err) {
        throw err;
    }
}


const resetPasswordOtp = async (data, config = {}) => {
    try {
        const response = await auth.resetPasswordOtp(data, config);
        return response;
    }catch (err) {
        throw err;
    }
}




const googleAuth = async (data, config = {}) => {
    try {
        const response = await auth.googleAuth(data, config);
        const { data: userData = [] } = response;
        const formattedUserData = formatUserData(userData);
        return formattedUserData;
    } catch (err) {
        throw err;
    }
}

const logout = async (data, config = {}) => {
    try {
        const response = await auth.signout(data, config);
        return response;
    }catch (err) {
        throw err;
    }

}

export {
    login,
    register,
    sendEmailVerification,
    verifyEmailOtp,
    sendResetPasswordEmail,
    resetPasswordOtp,
    logout,

    googleAuth
}