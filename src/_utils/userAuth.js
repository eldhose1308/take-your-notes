import CLIENT_ROUTES from "_routes/clientRoutes";
import { getUserDetailFromLocal } from "./user-localDB/authDB";

export const isUserDataSameAsLoggedInUser = (userName) => {
    const userDetails = getUserDetailFromLocal();
    const { userName: loggedInUserName, fullName: loggedInFullName } = userDetails || {};
    const isCurrentUserDetail = userName === loggedInUserName;
    return isCurrentUserDetail;
}

export const routeBasedOnAuthorisation = (userName, postSlug) => {
    return CLIENT_ROUTES.POST_DETAIL(userName, postSlug)
}

export const getUserDetailsOfCurrentUser = () => {
    const userDetails = getUserDetailFromLocal();
    const { userName, fullName } = userDetails || {};
    return { userName, fullName };
}