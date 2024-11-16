import Separator from "_components/Misc/Separator/Separator";
import Typography from "_components/Misc/Typography/Typography";
import useTitle from "_hooks/useTitle";
import UserInfo from "_modules/users/_component/UserInfo";
import CLIENT_ROUTES from "_routes/clientRoutes";
import React from "react";
import { Link, useParams } from "react-router-dom";
import UsersPostList from "./UsersPostList";
import ResponsiveDrawer from "_components/UI/Drawer/ResponsiveDrawer";
import AdditionalContentSection from "_components/Misc/AdditionalContentSection";
import AdditionalUsersPosts from "_modules/additionalContents/AdditionalUsersPosts";
import AdditionalUsers from "_modules/additionalContents/AdditionalUsers";

const userProfile = {
    avatar: "https://example.com/images/profile-picture.jpg",
    fullName: "John Doe",
    userName: "john_doe",
    followers: 218,
    following: 426,
    bio: "Passionate blogger and tech enthusiast. Always exploring new ideas.",
    email: "johndoe@example.com",
    phone: "+1234567890",
    joinedAt: "2023-01-15",
    websiteLink: "https://johndoeportfolio.com",
    postCounts: 42,
    rank: "Gold Blogger",
};

const UserDetail = () => {
    const { id: userName } = useParams();
    useTitle(userName);

    const { avatar, fullName, bio, joinedAt, websiteLink, postCounts, followers, following, rank } = userProfile;


    const userDetailRoute = CLIENT_ROUTES.USER_POSTS(userName);

    return (
        <div className="text-default m-5">
            <div className="flex">
                <div className="flex flex-col mx-2 grow-3 basis-0">
                    <div className="border bg-secondary p-4">

                        <UserInfo userData={userProfile} hasFollowers />

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

                    <UsersPostList userName={userName} />


                </div>

                <ResponsiveDrawer direction='right'>
                    <div className="flex flex-col grow-1 basis-0">
                        <AdditionalContentSection
                            heading='People You Might Like'
                            renderFooter={() => <span className="flex w-full justify-center">See more</span>}
                        >
                            <AdditionalUsers />
                        </AdditionalContentSection>

                        <AdditionalContentSection
                            heading='Posts You Might Like'
                            renderFooter={() => <span className="flex w-full justify-center">See more</span>}
                        >
                            <AdditionalUsersPosts userName={userName} />
                        </AdditionalContentSection>

                    </div>
                </ResponsiveDrawer>

            </div>
        </div>
    )
}

export default UserDetail;