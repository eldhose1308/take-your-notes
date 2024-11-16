import React from "react";

import Separator from "_components/Misc/Separator/Separator";
import Typography from "_components/Misc/Typography/Typography";
import UserInfo from "_modules/users/_component/UserInfo";

const UserDetailSuccess = (props) => {
    const { userData } = props;
    const { avatar, fullName, bio, joinedAt, websiteLink, postCounts, followers, following, rank } = userData;


    return (
        <div className="border bg-secondary p-4 rounded-md">

                        <UserInfo userData={userData} hasFollowers />

                        <Separator variant='default' />
                        <div className="flex my-2">
                            <div className="flex flex-col text-center">
                                <Typography>{postCounts}</Typography>
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
                            <Separator orientation='vertical' />
                            <div>
                                <Typography textVariant='none'>Website : <Typography type='span'>{websiteLink}</Typography></Typography>
                            </div>
                        </div>


                        <div className="flex my-4">
                            <Typography textVariant='none'>{bio}</Typography>
                        </div>

                    </div>
    )
}

export default UserDetailSuccess;