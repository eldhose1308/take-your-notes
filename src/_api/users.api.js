import { BASE_URL } from "_constants";
import { AccessAPI } from "_utils";
import { constructUrl } from "_utils/AccessAPI";

const getUsers = async (data, config = {}) => {
    const usersURL = constructUrl(BASE_URL + 'users', data);
    return new AccessAPI(usersURL).get()
    .then((res) => {
        return res
    }).catch((err) => {
        throw err
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

const getUsersPost = async (userName, data, config = {}) => {
    const postsURL = constructUrl(BASE_URL + `users/${userName}/posts`, data);
    return new AccessAPI(postsURL).get()
    .then((res) => {
        return res
    }).catch((err) => {
        throw err.response
    })
}


const updateBasicInfo = async (data, config = {}) => {
    return new AccessAPI(BASE_URL + `users/my/basic-info`).put(data)
    .then((res) => {
        return res
    }).catch((err) => {
        throw err.response
    })
}


const updateExtraInfo = async (data, config = {}) => {
    return new AccessAPI(BASE_URL + `users/my/extra-info`).put(data)
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


const getUserFollowers = async (userId, data, config = {}) => {
    const usersURL = constructUrl(BASE_URL + `users/${userId}/followers`, data);
    return new AccessAPI(usersURL).get()
    .then((res) => {
        return res
    }).catch((err) => {
        throw err
    })
}


const getUserFollowings = async (userId, data, config = {}) => {
    const usersURL = constructUrl(BASE_URL + `users/${userId}/followings`, data);
    return new AccessAPI(usersURL).get()
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
    removeUserAvatar,

    updateBasicInfo,
    updateExtraInfo,

    getUserFollowers,
    getUserFollowings
}