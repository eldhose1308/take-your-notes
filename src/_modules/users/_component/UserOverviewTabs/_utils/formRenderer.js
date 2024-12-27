import React from "react";

import UserFollowersListTab from "_pages/users/tabs/UserFollowersListTab";
import UsersPostListTab from "_pages/users/tabs/UsersPostListTab";
import UserFollowingsListTab from "_pages/users/tabs/UserFollowingsListTab";

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