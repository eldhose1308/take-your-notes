import React, { useState } from "react";

import UserInfo from "./UserInfo";
import FollowButton from "./FollowButton";
import { isUserDataSameAsLoggedInUser } from "_utils/userAuth";

const UserProfileInfo = (props) => {
    const { userData, hasFollowers=false, hasFollowButton=true } = props;
    const [userState, setUserState] = useState(userData);

    const { userName, userId, isFollowing } = userState || {};
    const isCurrentUserDetail = isUserDataSameAsLoggedInUser(userName);

    const handleFollowUser = async () => {
        setUserState(previousUserState => ({ ...previousUserState, followers: Number(previousUserState.followers) + 1, isFollowing: !previousUserState.isFollowing }));
        // chnge state of userData's followers count + 1 on success of api call. (disable button on click with status)
    }

    const handleUnFollowUser = async () => {
        setUserState(previousUserState => ({ ...previousUserState, followers: Number(previousUserState.followers) - 1, isFollowing: !previousUserState.isFollowing }));
        // chnge state of userData's followers count - 1 on success of api call. (disable button on click with status)
    }

    return (
        <React.Fragment>
            <UserInfo userData={userState} hasFollowers={hasFollowers} />
            {(hasFollowButton && !isCurrentUserDetail) &&
                <FollowButton userName={userName} userId={userId} isFollowing={isFollowing} onFollow={handleFollowUser} onUnFollow={handleUnFollowUser} />}
        </React.Fragment>
    )
}

export default UserProfileInfo;