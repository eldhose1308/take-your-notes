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

const getUserDetail = async (userName, config = {}) => {
    return new AccessAPI(BASE_URL + `users/${userName}`).get()
    .then((res) => {
        return res
    }).catch((err) => {
        throw err.response
    })
}

const getMyUserDetail = async (userName, config = {}) => {
    return new AccessAPI(BASE_URL + `users/my`).get()
    .then((res) => {
        return res
    }).catch((err) => {
        throw err
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


const uploadUserAvatar = async (data, config = {}) => {
    return new AccessAPI(BASE_URL + `users/my/avatar`).post(data)
    .then((res) => {
        return res
    }).catch((err) => {
        throw err.response
    })
}


const removeUserAvatar = async (data, config = {}) => {
    return new AccessAPI(BASE_URL + `users/my/avatar`).delete()
    .then((res) => {
        return res
    }).catch((err) => {
        throw err.response
    })
}


const followUser = async (userId, config = {}) => {
    return new AccessAPI(BASE_URL + `users/${userId}/follow`).post()
    .then((res) => {
        return res
    }).catch((err) => {
        throw err
    })
}

const unFollowUser = async (userId, config = {}) => {
    return new AccessAPI(BASE_URL + `users/${userId}/unfollow`).post()
    .then((res) => {
        return res
    }).catch((err) => {
        throw err
    })
}


export {
    getUsers,
    getUserDetail,
    getMyUserDetail,

    followUser,
    unFollowUser,

    getUsersPost,

    uploadUserAvatar,
    removeUserAvatar
}