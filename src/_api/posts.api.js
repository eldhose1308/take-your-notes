import { BASE_URL } from "_constants";
import { AccessAPI } from "_utils";

const getAuthPosts = async (data, config = {}) => {
    return new AccessAPI(BASE_URL + 'posts/my').get()
    .then((res) => {
        return res
    }).catch((err) => {
        throw err.response
    })
}

const getPosts = async (data, config = {}) => {
    return new AccessAPI(BASE_URL + 'posts').get()
    .then((res) => {
        return res
    }).catch((err) => {
        throw err.response
    })
}

const savePost = async (data, config = {}) => {
    return new AccessAPI(BASE_URL + 'posts').post(data)
    .then((res) => {
        return res
    }).catch((err) => {
        throw err.response
    })
}

const updatePost = async (data, id, config = {}) => {
    return new AccessAPI(BASE_URL + `posts/${id}`).put(data)
    .then((res) => {
        return res
    }).catch((err) => {
        throw err.response
    })
}

const deletePost = async (folderId, config = {}) => {
    return new AccessAPI(BASE_URL + `posts/${folderId}`).delete()
    .then((res) => {
        return res
    }).catch((err) => {
        throw err.response
    })
}

export {
    getAuthPosts,
    getPosts,
    savePost,
    updatePost,
    deletePost
}