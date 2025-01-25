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


const checkEmailVerified = async (data, config = {}) => {
    try {
        const response = await auth.checkEmailVerified(data, config);
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
    checkEmailVerified,
    logout,

    googleAuth
}