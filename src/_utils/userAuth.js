import CLIENT_ROUTES from "_routes/clientRoutes";
import { getUserDetailFromLocal } from "./user-localDB/authDB";

export const isUserDataSameAsLoggedInUser = (userName) => {
    const userDetails = getUserDetailFromLocal();
    const { user_name: loggedInUserName, full_name: loggedInFullName } = userDetails || {};
    const isCurrentUserDetail = userName === loggedInUserName;
    return isCurrentUserDetail;
}

export const routeBasedOnAuthorisation = (userName, postSlug) => {
    return CLIENT_ROUTES.POST_DETAIL(userName, postSlug)
}