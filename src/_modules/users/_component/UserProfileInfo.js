import React from "react";

import UserInfo from "./UserInfo";
import FollowButton from "./FollowButton";
import { isUserDataSameAsLoggedInUser } from "_utils/userAuth";

const UserProfileInfo = (props) => {
    const { userData, hasFollowers=false, hasFollowButton=true } = props;
    const { userName } = userData || {};

    const isCurrentUserDetail = isUserDataSameAsLoggedInUser(userName);

    const handleFollowUser = () => {
        // chnge state of userData's followers count + 1 on success of api call. (disable button on click with status)
    }

    return (
        <React.Fragment>
            <UserInfo userData={userData} hasFollowers={hasFollowers} />
            {(hasFollowButton && !isCurrentUserDetail) &&
                <FollowButton />}
        </React.Fragment>
    )
}

export default UserProfileInfo;