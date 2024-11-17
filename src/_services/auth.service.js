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

export {
    login,
    register
}