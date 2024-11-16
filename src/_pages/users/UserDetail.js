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
import UserDetailSuccess from "./states/UserDetailSuccess";

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

                    <UserDetailSuccess userData={userProfile} />
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