import * as user from '_api/user.api'

const login = async (data, config={}) => {
    const response = await user.signin(data, config)
    return response
}


const register = async (data, config={}) => {
    const response = await user.signup(data, config)
    return response
}

export {
    login,
    register
}