import { BASE_URL } from "_constants";
import { AccessAPI } from "_utils";
import { constructUrl } from "_utils/AccessAPI";

const getAuthPosts = async (data, config = {}) => {
    return new AccessAPI(BASE_URL + 'postCategories/my').get()
    .then((res) => {
        return res
    }).catch((err) => {
        throw err.response
    })
}

const getPostsCategories = async (data, config = {}) => {
    const postsURL = constructUrl(BASE_URL + 'postCategories', data);
    return new AccessAPI(postsURL).get()
    .then((res) => {
        return res
    }).catch((err) => {
        throw err.response
    })
}

const getPostsCategoryBySlug = async (data, config = {}) => {
    return new AccessAPI(BASE_URL + `postCategories/${data}`).get()
    .then((res) => {
        return res
    }).catch((err) => {
        throw err.response
    })
}

const followCategory = async (categoryId, config = {}) => {
    return new AccessAPI(BASE_URL + `postCategories/${categoryId}/follow`).post()
    .then((res) => {
        return res
    }).catch((err) => {
        throw err
    })
}

const unFollowCategory = async (categoryId, config = {}) => {
    return new AccessAPI(BASE_URL + `postCategories/${categoryId}/unfollow`).post()
    .then((res) => {
        return res
    }).catch((err) => {
        throw err
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
    getPostsCategoryBySlug,

    followCategory,
    unFollowCategory,

    savePost,
    updatePost,
    deletePost
}