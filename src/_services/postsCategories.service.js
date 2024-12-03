import * as postsCategories from '_api/postsCategories.api'
import { formatToLocalTime } from '_utils/timestampUtils';

export const formatPostCategoryData = (data) => {
    const { category_name, category_slug, category_icon, posts_count, followers_count, created_at, category_id } = data;
    const formattedResponse = { id: category_id, categoryName: category_name, categorySlug: category_slug, categoryIcon: category_icon, followers: followers_count, posts: posts_count, createdAt: formatToLocalTime(created_at) };
    return formattedResponse;
}

const getAuthPosts = async (data, config = {}) => {
    const response = await postsCategories.getAuthPosts(data, config);
    const { data: foldersData = [] } = response;
    const foldersFormatted = foldersData.map(formatPostCategoryData)
    return foldersFormatted || []
}

const getPostsCategories = async (data, config = {}) => {
    const response = await postsCategories.getPostsCategories(data, config);
    const { data: foldersData = [] } = response;
    const foldersFormatted = foldersData.map(formatPostCategoryData)
    return foldersFormatted || []
}

const getPostsCategoryBySlug = async (data, config = {}) => {
    const response = await postsCategories.getPostsCategoryBySlug(data, config);
    const { data: foldersData = [] } = response;
    const foldersFormatted = formatPostCategoryData(foldersData);
    return foldersFormatted || {}
}


// const getFolderById = async (id, config={}) => {
//     const response = await folders.getFolderById(id, config)
//     return response || []
// }


const savePost = async (data, config = {}) => {
    const response = await postsCategories.savePost(data, config);
    const { data: folderData = [] } = response;
    const formattedFolderData = formatPostCategoryData(folderData);
    return formattedFolderData;
}


const updatePost = async (data, id, config = {}) => {
    const response = await postsCategories.updatePost(data, id, config);
    const { data: folderData = [] } = response;
    return formatPostCategoryData(folderData);
}

const deletePost = async (id, config = {}) => {
    const response = await postsCategories.deletePost(id, config)
    return response
}



export {
    getAuthPosts,
    getPostsCategories,
    getPostsCategoryBySlug,
    savePost,
    updatePost,
    deletePost
}