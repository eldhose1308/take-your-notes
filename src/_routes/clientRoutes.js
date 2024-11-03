const CLIENT_ROUTES = {
    POST_EDIT: (postSlug) => `/my/posts/edit/${postSlug}`,
    POST_DETAIL: (userName, postSlug) => `/users/${userName}/posts/${postSlug}`,
}

export default CLIENT_ROUTES;