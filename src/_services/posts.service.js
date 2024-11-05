import * as posts from '_api/posts.api'

export const formatPostData = (data) => {
    const { post_title, post_slug, content, category, category_name, category_icon, post_id, user_name, full_name } = data;
    const categoryDetails = { categoryId: category, categoryName: category_name, categoryIcon: category_icon };
    const userDetails = { userName: user_name, fullName: full_name };
    const formattedResponse = { id: post_id,  postTitle: post_title, postSlug: post_slug, content, user: userDetails, category: categoryDetails };
    return formattedResponse;
}

const getAuthPosts = async (data, config = {}) => {
    const response = await posts.getAuthPosts(data, config);
    const { data: foldersData = [] } = response;
    const foldersFormatted = foldersData.map(formatPostData)
    return foldersFormatted || []
}

const getPosts = async (data, config = {}) => {
    const response = await posts.getPosts(data, config);
    const { data: foldersData = [] } = response;
    const foldersFormatted = foldersData.map(formatPostData)
    return foldersFormatted || []
}


const getPostBySlug = async (data, config = {}) => {
    const response = await posts.getPostsBySlug(data, config);
    const { data: postData = {} } = response;
    const formattedFolderData = formatPostData(postData);
    return formattedFolderData;}


// const getFolderById = async (id, config={}) => {
//     const response = await folders.getFolderById(id, config)
//     return response || []
// }


const savePost = async (data, config = {}) => {
    try{
        const response = await posts.savePost(data, config);
        const { data: folderData = [] } = response;
        const formattedFolderData = formatPostData(folderData);
        return formattedFolderData;
    }catch(err){
        throw err
    }
}


const updatePost = async (data, id, config = {}) => {
    try{
        const response = await posts.updatePost(data, id, config);
        const { data: folderData = [] } = response;
        return formatPostData(folderData);
    }catch(err){
        throw err;
    }
}

const deletePost = async (id, config = {}) => {
    const response = await posts.deletePost(id, config)
    return response
}



export {
    getAuthPosts,
    getPosts,
    getPostBySlug,
    savePost,
    updatePost,
    deletePost
}