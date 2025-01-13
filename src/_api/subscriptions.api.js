import { BASE_URL } from "_constants";
import { AccessAPI } from "_utils";


const subscribeUser = async (userId, config = {}) => {
    return new AccessAPI(`${BASE_URL}users/${userId}/subscribe`).post()
    .then((res) => {
        return res
    }).catch((err) => {
        throw err
    })
}

const unSubscribeUser = async (userId, config = {}) => {
    return new AccessAPI(`${BASE_URL}users/${userId}/unsubscribe`).post()
    .then((res) => {
        return res
    }).catch((err) => {
        throw err
    })
}

export {  
    subscribeUser,
    unSubscribeUser
}