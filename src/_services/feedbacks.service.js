import * as feedbacks from '_api/feedbacks.api';
import { USER_AVATAR_URL } from '_constants/API';

export const formatFeedbackData = (data) => {
    const { post_title, post_slug, content, category, category_name, category_icon, category_slug, post_id, user_name, full_name, avatar, created_at, updated_at } = data;
    const categoryDetails = { categoryId: category, categoryName: category_name, categorySlug: category_slug, categoryIcon: category_icon };
    const userDetails = { userName: user_name, fullName: full_name, avatar: `${USER_AVATAR_URL}${avatar}`, userAvatarBaseURL: USER_AVATAR_URL };
    const formattedResponse = { id: post_id,  postTitle: post_title, postSlug: post_slug, content, user: userDetails, category: categoryDetails, createdAt: created_at, updatedAt: updated_at };
    return formattedResponse;
}


// const getPosts = async (data, config = {}) => {
//     const response = await feedbacks.getPosts(data, config);
//     const { data: foldersData = [] } = response;
//     const foldersFormatted = foldersData.map(formatFeedbackData)
//     return foldersFormatted || []
// }


const saveFeedback = async (data, config = {}) => {
    try{
        const response = await feedbacks.saveFeedback(data, config);
        const { data: folderData = {} } = response;
        const formattedFolderData = formatFeedbackData(folderData);
        return formattedFolderData;
    }catch(err){
        throw err
    }
}



export {
    saveFeedback,
}