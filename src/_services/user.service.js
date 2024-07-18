import * as user from '_api/user.api'

const login = async (data, config={}) => {
    const response = await user.login(data, config)
    return response
}

export {
    login
}