import React, { useState } from "react";

import Separator from "_components/Misc/Separator/Separator";
import Typography from "_components/Misc/Typography/Typography";
import UserInfo from "_modules/users/_component/UserInfo";
import FollowButton from "_modules/users/_component/FollowButton";
import { getBaseURL } from "_utils/helpers";
import { shareContent } from "_utils/shareContent";
import { useToast } from "_contexts/ToastProvider";
import CLIENT_ROUTES from "_routes/clientRoutes";

const UserDetailSuccess = (props) => {
    const { userData } = props;
    const [userState, setUserState] = useState(userData);
    const { avatar, id: userId, userName, fullName, bio, joinedAt, websiteLink, posts, followers, following, rank, isFollowing } = userState;

    const { toast } = useToast()

    const handleShare = async () => {
        const baseURL = getBaseURL();
        const useDetailRoute = CLIENT_ROUTES.USER_DETAIL(userName);

        try {
            const shareType = await shareContent({ title: userName, text: fullName, url: `${baseURL}/#${useDetailRoute}` });
            if(shareType === 'clipboard'){
                toast({
                    heading: 'Link copied to clipboard!',
                    options: { position: 'top-center' }
                }).success()
            }
        } catch (err) {
            toast({
                heading: 'Oops! Unable to copy the link!',
                options: { position: 'top-center' }
            }).error()
        }
    };

    return (
        <div className="border bg-secondary p-4 rounded-md">

            <div className="flex justify-between">

                <UserInfo userData={userState} hasFollowers />
                <div className="flex">
                    <div onClick={handleShare} className="bg-custom text-accent hover-text-custom hover-accent text-xs my-2 mx-1 p-1 px-2 cursor-pointer rounded-md">
                        <span className="flex">
                            <span className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-share-2"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" x2="15.42" y1="13.51" y2="17.49" /><line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>
                            </span>
                        </span>
                    </div>
                    <FollowButton userId={userId} userName={userName} isFollowing={isFollowing} updateUser={setUserState} />
                </div>
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