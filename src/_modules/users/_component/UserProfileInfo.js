import React from "react";

import UserInfo from "./UserInfo";
import FollowButton from "./FollowButton";
import { isUserDataSameAsLoggedInUser } from "_utils/userAuth";

const UserProfileInfo = (props) => {
    const { userData, hasFollowers=false, hasFollowButton=true } = props;
    const { userName } = userData || {};

    const isCurrentUserDetail = isUserDataSameAsLoggedInUser(userName);

    return (
        <React.Fragment>
            <UserInfo userData={userData} hasFollowers={hasFollowers} />
            {(hasFollowButton && !isCurrentUserDetail) &&
                <FollowButton />}
        </React.Fragment>
    )
}

export default UserProfileInfo;