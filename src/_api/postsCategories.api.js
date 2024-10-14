import { BASE_URL } from "_constants";
import { AccessAPI } from "_utils";

const getAuthPosts = async (data, config = {}) => {
    return new AccessAPI(BASE_URL + 'postCategories/my').get()
    .then((res) => {
        return res
    }).catch((err) => {
        throw err.response
    })
}

const getPostsCategories = async (data, config = {}) => {
    return new AccessAPI(BASE_URL + 'postCategories').get()
    .then((res) => {
        return res
    }).catch((err) => {
        throw err.response
    })
}

const savePost = async (data, config = {}) => {
    return new AccessAPI(BASE_URL + 'postCategories').post(data)
    .then((res) => {
        return res
    }).catch((err) => {
        throw err.response
    })
}

const updatePost = async (data, id, config = {}) => {
    return new AccessAPI(BASE_URL + `postCategories/${id}`).put(data)
    .then((res) => {
        return res
    }).catch((err) => {
        throw err.response
    })
}

const deletePost = async (folderId, config = {}) => {
    return new AccessAPI(BASE_URL + `postCategories/${folderId}`).delete()
    .then((res) => {
        return res
    }).catch((err) => {
        throw err.response
    })
}

export {
    getAuthPosts,
    getPostsCategories,
    savePost,
    updatePost,
    deletePost
}