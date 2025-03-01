import { BASE_URL } from "_constants";
import { AccessAPI } from "_utils";
import { constructUrl } from "_utils/AccessAPI";

const getAuthPosts = async (data, config = {}) => {
    const postsURL = constructUrl(BASE_URL + 'posts/my', data);
    return new AccessAPI(postsURL).get()
    .then((res) => {
        return res
    }).catch((err) => {
        throw err
    })
}

const getPosts = async (data, config = {}) => {
    const postsURL = constructUrl(BASE_URL + 'posts', data);
    return new AccessAPI(postsURL).get()
    .then((res) => {
        return res
    }).catch((err) => {
        throw err.response
    })
}

const getPostsBySlug = async ({ userName, postSlug }, config = {}) => {
    return new AccessAPI(BASE_URL + `users/${userName}/posts/${postSlug}`).get()
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
        throw err
    })
}

const updatePost = async (data, id, config = {}) => {
    return new AccessAPI(BASE_URL + `posts/${id}`).put(data)
    .then((res) => {
        return res
    }).catch((err) => {
        throw err
    })
}

const deletePost = async (postId, config = {}) => {
    return new AccessAPI(BASE_URL + `posts/${postId}`).delete()
    .then((res) => {
        return res
    }).catch((err) => {
        throw err
    })
}

const restorePost = async (postId, config = {}) => {
    return new AccessAPI(BASE_URL + `posts/${postId}/restore`).post()
    .then((res) => {
        return res
    }).catch((err) => {
        throw err
    })
}

export {
    getAuthPosts,
    getPosts,
    getPostsBySlug,
    savePost,
    updatePost,
    deletePost,
    restorePost
}