import React, { useState } from "react";

import UserInfo from "./UserInfo";
import FollowButton from "./FollowButton";
import { isUserDataSameAsLoggedInUser } from "_utils/userAuth";
import SubscribeUser from "./SubscribeUser/SubscribeUser";

const UserProfileInfo = (props) => {
    const { userData, hasFollowers=false, hasFollowButton=true, hasSubscribeButton=false } = props;
    const [userState, setUserState] = useState(userData);

    const { userName, id:userId, isFollowing, isSubscribed } = userState || {};
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
            {hasSubscribeButton && <SubscribeUser userId={userId} isSubscribed={isSubscribed} updateUser={setUserState} userName={userName} />}
            {(hasFollowButton && !isCurrentUserDetail) &&
                <FollowButton userName={userName} userId={userId} isFollowing={isFollowing} onFollow={handleFollowUser} onUnFollow={handleUnFollowUser} />}
        </React.Fragment>
    )
}

export default UserProfileInfo;