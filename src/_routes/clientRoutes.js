const CLIENT_ROUTES = {
    HOME: '/',
    SIGNIN: '/signin',
    SIGNUP: '/signup',
    FEEDBACKS: '/feedbacks',
    PROFILE: '/my/profile',
    MY_POST: `/my/posts`,
    POST_CREATE: `/my/posts/create`,
    MY_CATEGORY: `/my/categories`,
    CATEGORY_EDIT: (categorySlug) =>  `/my/categories/edit/${categorySlug}`,
    POST_EDIT: (postSlug) => `/my/posts/edit/${postSlug}`,
    USER_POSTS: (userName) => `/users/${userName}/posts`,
    POST_DETAIL: (userName, postSlug) => `/users/${userName}/posts/${postSlug}`,
    USER_LIST:  `/users`,
    USER_DETAIL: (userName) => `/users/${userName}`,
    CATEGORY_LIST:  `/posts/category`,
    CATEGORY_DETAIL: (categorySlug) => `/posts/category/${categorySlug}`,
}

export default CLIENT_ROUTES;