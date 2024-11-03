import { BASE_URL } from "_constants";
import { AccessAPI } from "_utils";

const getUsers = async (data, config = {}) => {
    return new AccessAPI(BASE_URL + 'users').get()
    .then((res) => {
        return res
    }).catch((err) => {
        throw err.response
    })
}

const getUsersPost = async (userName, config = {}) => {
    return new AccessAPI(BASE_URL + `users/${userName}/posts`).get()
    .then((res) => {
        return res
    }).catch((err) => {
        throw err.response
    })
}


export {
    getUsers,
    getUsersPost
}