import * as user from '_api/auth.api'
import { formatUserData } from './users.service';

const login = async (data, config = {}) => {
    try {
        const response = await user.signin(data, config);
        const { data: userData = [] } = response;
        const formattedUserData = formatUserData(userData);
        return formattedUserData;
    } catch (err) {
        throw err;
    }
}


const register = async (data, config = {}) => {
    try {
        const response = await user.signup(data, config);
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