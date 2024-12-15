import React from "react";

import UsersPostListTab from "../tabs/UsersPostListTab";
import ExtraInformationForm from "_pages/myProfile/forms/ExtraInformationForm";
import UserFollowersListTab from "_pages/users/tabs/UserFollowersListTab";
import UserFollowingsListTab from "../tabs/UserFollowingsListTab";


const renderForm = (selectedTab, props) => {
    switch (selectedTab) {
        case 'posts':
            return <UsersPostListTab {...props} />;
        case 'followers':
            return <UserFollowersListTab {...props} />;
        case 'followings':
            return <UserFollowingsListTab {...props} />;
        default:
            return <p>Not Available</p>
    }
}

export default renderForm;