const CLIENT_ROUTES = {
    POST_EDIT: (postSlug) => `/my/posts/edit/${postSlug}`,
    USER_POSTS: (userName) => `/users/${userName}/posts`,
    POST_DETAIL: (userName, postSlug) => `/users/${userName}/posts/${postSlug}`,
    USER_DETAIL: (userName) => `/users/${userName}`
}

export default CLIENT_ROUTES;