import * as postsCategories from '_api/postsCategories.api'
import { formatToLocalTime } from '_utils/timestampUtils';

export const formatPostCategoryData = (data) => {
    const { category_name, category_slug, category_icon, posts_count, followers_count, created_at, category_id, is_following, verified } = data;
    const formattedResponse = { id: category_id, categoryName: category_name, categorySlug: category_slug, categoryIcon: category_icon, followers: followers_count, posts: posts_count, createdAt: formatToLocalTime(created_at), isFollowing: !!is_following, isVerified: !!Number(verified) };
    return formattedResponse;
}
    
export const formatPostMainCategoryData = (data) => {
    const { main_category_name, main_category_slug, created_at, main_category_id } = data;
    const formattedResponse = { id: main_category_id, mainCategoryName: main_category_name, mainCategorySlug: main_category_slug, createdAt: formatToLocalTime(created_at) };
    return formattedResponse;
}


export const formatPostMainCategoryAndCategoryData = (data) => {
    const { main_categories, ...categoryData } = data;
    const categoryDataFormatted = formatPostCategoryData(categoryData);
    const mainCategoryDataFormatted = main_categories.map(formatPostMainCategoryData);
    const formattedResponse = { ...categoryDataFormatted, mainCategories: mainCategoryDataFormatted };
    return formattedResponse;
}


const getAuthPostsCategories = async (data, config = {}) => {
    try{
        const response = await postsCategories.getAuthPostsCategories(data, config);
        const { data: foldersData = [] } = response;
        const foldersFormatted = foldersData.map(formatPostCategoryData)
        return foldersFormatted || []
    }catch(err){
        throw err;
    }
}

const getAuthPostsCategoriesBySlug = async (data, config = {}) => {
    const response = await postsCategories.getAuthPostsCategoryBySlug(data, config);
    const { data: foldersData = [] } = response;
    const foldersFormatted = formatPostMainCategoryAndCategoryData(foldersData);
    return foldersFormatted || []
}

const getMainPostsCategories = async (data, config = {}) => {
    try{
        const response = await postsCategories.getMainPostsCategories(data, config);
        const { data: foldersData = [] } = response;
        const foldersFormatted = foldersData.map(formatPostMainCategoryData);
        return foldersFormatted || []
    }catch(err){
        throw err;
    }
}

const getPostsCategories = async (data, config = {}) => {
    try{

        const response = await postsCategories.getPostsCategories(data, config);
        const { data: foldersData = [] } = response;
        const foldersFormatted = foldersData.map(formatPostCategoryData);
        return foldersFormatted || []
    }catch(err){
        throw err;
    }
}

const getPostsCategoryBySlug = async (data, config = {}) => {
    const response = await postsCategories.getPostsCategoryBySlug(data, config);
    const { data: foldersData = [] } = response;
    const foldersFormatted = formatPostCategoryData(foldersData);
    return foldersFormatted || {}
}


const followCategory = async (data, config = {}) => {
    try{
        const response = await postsCategories.followCategory(data, config);
        return true
    }catch(err){
        throw err;
    }
}

const unFollowCategory = async (data, config = {}) => {
    try{
        const response = await postsCategories.unFollowCategory(data, config);
        return true
    }catch(err){
        throw err;
    }
}


// const getFolderById = async (id, config={}) => {
//     const response = await folders.getFolderById(id, config)
//     return response || []
// }


const savePostCategory = async (data, config = {}) => {
    try{
        const response = await postsCategories.savePostCategory(data, config);
        const { data: folderData = [] } = response;
        const formattedFolderData = formatPostCategoryData(folderData);
        return formattedFolderData;
    }catch(err){
        throw err;
    }
}


const updatePostCategory = async (data, id, config = {}) => {
    const response = await postsCategories.updatePostCategory(data, id, config);
    const { data: folderData = [] } = response;
    return formatPostCategoryData(folderData);
}

const deletePost = async (id, config = {}) => {
    const response = await postsCategories.deletePost(id, config)
    return response
}




export {
    getMainPostsCategories,

    getAuthPostsCategoriesBySlug,
    getAuthPostsCategories,
    getPostsCategories,
    getPostsCategoryBySlug,

    followCategory,
    unFollowCategory,

    savePostCategory,
    updatePostCategory,
    deletePost
}