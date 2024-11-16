import * as users from '_api/users.api'
import { formatPostData } from './posts.service';

export const formatUserData = (data) => {
    const { user_name, full_name, avatar } = data;
    const formattedResponse = { userName: user_name, fullName: full_name, avatar };
    return formattedResponse;
}

const getUsers = async (data, config = {}) => {
    const response = await users.getUsers(data, config);
    const { data: usersData = [] } = response;
    const usersFormatted = usersData.map(formatUserData)
    return usersFormatted || []
}

const getUsersPost = async (data, config = {}) => {
    const response = await users.getUsersPost(data, config);
    const { data: usersPostData = [] } = response;
    const usersPostFormatted = usersPostData.map(formatPostData)
    return usersPostFormatted || []
}




export {
    getUsers,
    getUsersPost
}