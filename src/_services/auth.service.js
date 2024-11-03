import * as user from '_api/auth.api'

const login = async (data, config = {}) => {
    try {
        const response = await user.signin(data, config)
        return response
    } catch (err) {
        throw err;
    }
}


const register = async (data, config = {}) => {
    try {
        const response = await user.signup(data, config)
        return response
    } catch (err) {
        throw err;
    }
}

export {
    login,
    register
}