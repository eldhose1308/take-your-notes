import { BASE_URL } from "_constants";
import { AccessAPI } from "_utils";
import { constructUrl } from "_utils/AccessAPI";

const getAuthPostsCategories = async (data, config = {}) => {
    const postsURL = constructUrl(BASE_URL + 'postCategories/my', data);
    return new AccessAPI(postsURL).get()
    .then((res) => {
        return res
    }).catch((err) => {
        throw err
    })
}


const getAuthPostsCategoryBySlug = async (data, config = {}) => {
    return new AccessAPI(`${BASE_URL}postCategories/my/${data}`).get()
    .then((res) => {
        return res
    }).catch((err) => {
        throw err.response
    })
}

const getMainPostsCategories = async (data, config = {}) => {
    const postsURL = constructUrl(BASE_URL + 'postMainCategories', data);
    return new AccessAPI(postsURL).get()
    .then((res) => {
        return res
    }).catch((err) => {
        throw err
    })
}


const getPostsCategories = async (data, config = {}) => {
    const postsURL = constructUrl(BASE_URL + 'postCategories', data);
    return new AccessAPI(postsURL).get()
    .then((res) => {
        return res
    }).catch((err) => {
        throw err
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

const savePostCategory = async (data, config = {}) => {
    return new AccessAPI(BASE_URL + 'postCategories').post(data)
    .then((res) => {
        return res
    }).catch((err) => {
        throw err
    })
}

const updatePostCategory = async (data, id, config = {}) => {
    return new AccessAPI(BASE_URL + `postCategories/${id}`).put(data)
    .then((res) => {
        return res
    }).catch((err) => {
        throw err.response
    })
}

const deletePostCategory = async (postCategoryId, config = {}) => {
    return new AccessAPI(BASE_URL + `postCategories/${postCategoryId}`).delete()
    .then((res) => {
        return res
    }).catch((err) => {
        throw err
    })
}

const restorePostCategory = async (postCategoryId, config = {}) => {
    return new AccessAPI(BASE_URL + `postCategories/${postCategoryId}/restore`).post()
    .then((res) => {
        return res
    }).catch((err) => {
        throw err
    })
}

export {
    getMainPostsCategories,

    getAuthPostsCategoryBySlug,
    getAuthPostsCategories,
    getPostsCategories,
    getPostsCategoryBySlug,

    followCategory,
    unFollowCategory,

    savePostCategory,
    updatePostCategory,
    deletePostCategory,
    restorePostCategory
}