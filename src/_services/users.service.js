import * as users from '_api/users.api'
import { formatPostData } from './posts.service';
import { formatToLocalTime } from '_utils/timestampUtils';
import { USER_AVATAR_URL } from '_constants/API';

export const formatUserData = (data) => {
    const { user_id, user_name, full_name, avatar, user_email, created_at, bio, website_link, phone, followers_count, following_count, posts_count, is_following, is_subscribed } = data;
    const formattedResponse = { id: user_id, userName: user_name, fullName: full_name, avatar , userAvatarBaseURL: USER_AVATAR_URL, email: user_email, joinedAt: formatToLocalTime(created_at), bio, websiteLink: website_link, phone, followers: followers_count, following: following_count, posts: posts_count, isFollowing: !!is_following , isSubscribed: !!is_subscribed};
    return formattedResponse;
}

const getUsers = async (data, config = {}) => {
    try{
        const response = await users.getUsers(data, config);
        const { data: usersData = [] } = response;
        const usersFormatted = usersData.map(formatUserData)
        return usersFormatted || []
    }catch(err){
        throw err;
    }
}

const getUserDetail = async (data, config = {}) => {
    const response = await users.getUserDetail(data, config);
    const { data: usersData = [] } = response;
    const formattedUserData = formatUserData(usersData);
    return formattedUserData;
}

const getMyUserDetail = async (data, config = {}) => {
    try{
        const response = await users.getMyUserDetail(data, config);
        const { data: usersData = [] } = response;
        const formattedUserData = formatUserData(usersData);
        return formattedUserData;
    }catch(err){
        throw err;
    }
}

const getUsersPost = async (userName, data, config = {}) => {
    const response = await users.getUsersPost(userName, data, config);
    const { data: usersPostData = [] } = response;
    const usersPostFormatted = usersPostData.map(formatPostData)
    return usersPostFormatted || []
}


const updateBasicInfo = async (data, config = {}) => {
    try{
        const response = await users.updateBasicInfo(data, config);
        const { data: userData = [] } = response;
        const userDataFormatted = formatUserData(userData);
        return userDataFormatted || {}
    }catch(err){
        throw err;
    }
}

const updateExtraInfo = async (data, config = {}) => {
    try{
        const response = await users.updateExtraInfo(data, config);
        const { data: userData = [] } = response;
        const userDataFormatted = formatUserData(userData);
        return userDataFormatted || {}
    }catch(err){
        throw err;
    }
}


const uploadUserAvatar = async (data, config = {}) => {
    try{
        const response = await users.uploadUserAvatar(data, config);
        const { data: userAvatarData = [] } = response;
        // const usersPostFormatted = usersPostData.map(formatPostData)
        return userAvatarData || []
    }catch(err){
        throw err;
    }
}


const removeUserAvatar = async (data, config = {}) => {
    try{
        const response = await users.removeUserAvatar(data, config);
        const { data: userAvatarData = [] } = response;
        // const usersPostFormatted = usersPostData.map(formatPostData)
        return userAvatarData || []
    }catch(err){
        throw err;
    }
}


const followUser = async (data, config = {}) => {
    try{
        const response = await users.followUser(data, config);
        return true
    }catch(err){
        throw err;
    }
}

const unFollowUser = async (data, config = {}) => {
    try{
        const response = await users.unFollowUser(data, config);
        return true
    }catch(err){
        throw err;
    }
}



const getUserFollowers = async (userId, data, config = {}) => {
    try{
        const response = await users.getUserFollowers(userId, data, config);
        const { data: usersData = [] } = response;
        const usersFormatted = usersData.map(formatUserData)
        return usersFormatted || []
    }catch(err){
        throw err;
    }
}


const getUserFollowings = async (userId, data, config = {}) => {
    try{
        const response = await users.getUserFollowings(userId, data, config);
        const { data: usersData = [] } = response;
        const usersFormatted = usersData.map(formatUserData)
        return usersFormatted || []
    }catch(err){
        throw err;
    }
}

export {
    getUsers,
    getUserDetail,
    getMyUserDetail,
    
    followUser,
    unFollowUser,

    getUsersPost,

    uploadUserAvatar,
    removeUserAvatar,

    updateBasicInfo,
    updateExtraInfo,

    getUserFollowers,
    getUserFollowings
}