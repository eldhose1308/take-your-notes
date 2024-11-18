import React, { useState } from "react";

import Separator from "_components/Misc/Separator/Separator";
import Typography from "_components/Misc/Typography/Typography";
import UserInfo from "_modules/users/_component/UserInfo";
import FollowButton from "_modules/users/_component/FollowButton";

const UserDetailSuccess = (props) => {
    const { userData } = props;
    const [userState, setUserState] = useState(userData);
    const { avatar, id: userId, userName, fullName, bio, joinedAt, websiteLink, posts, followers, following, rank, isFollowing } = userState;


    return (
        <div className="border bg-secondary p-4 rounded-md">

            <div className="flex justify-between">

            <UserInfo userData={userState} hasFollowers />
            <FollowButton userId={userId} userName={userName} isFollowing={isFollowing} updateUser={setUserState} />
            </div>


            <Separator variant='default' />
            <div className="flex my-2">
                <div className="flex flex-col text-center">
                    <Typography>{posts}</Typography>
                    <Typography size='xs' textVariant='none'>Posts</Typography>
                </div>
                <div className="mx-4"></div>
                <div className="flex flex-col text-center">
                    <Typography>{followers}</Typography>
                    <Typography size='xs' textVariant='none'>Followers</Typography>
                </div>
                <div className="mx-4"></div>
                <div className="flex flex-col text-center">
                    <Typography>{following}</Typography>
                    <Typography size='xs' textVariant='none'>Following</Typography>
                </div>
            </div>

            <Separator variant='default' />

            <div className="flex my-2">
                <div>
                    <Typography textVariant='none'>Joined on <Typography type='span'>{joinedAt}</Typography></Typography>
                </div>
                {!!websiteLink &&
                    <React.Fragment>

                        <Separator orientation='vertical' />
                        <div>
                            <Typography textVariant='none'>Website : <Typography type='span'>{websiteLink}</Typography></Typography>
                        </div>
                    </React.Fragment>
                }
            </div>


            {!!bio && <div className="flex my-4">
                <Typography textVariant='none'>{bio}</Typography>
            </div>}

        </div>
    )
}

export default UserDetailSuccess;