const CLIENT_ROUTES = {
    SIGNIN: '/signin',
    PROFILE: '/my/profile',
    POST_EDIT: (postSlug) => `/my/posts/edit/${postSlug}`,
    USER_POSTS: (userName) => `/users/${userName}/posts`,
    POST_DETAIL: (userName, postSlug) => `/users/${userName}/posts/${postSlug}`,
    USER_DETAIL: (userName) => `/users/${userName}`,
    CATEGORY_DETAIL: (categorySlug) => `/posts/category/${categorySlug}`,
}

export default CLIENT_ROUTES;