import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";


import useUserPostItems from "_modules/users/_hooks/useUserPostItems";
import UserCard from "_modules/users/_component/UserCard";

import ResponsiveDrawer from "_components/UI/Drawer/ResponsiveDrawer";
import useTitle from "_hooks/useTitle";
import CardStencil from "_components/Loader/CardStencil";
import useComponentFetchState from "_hooks/useComponentFetchState";
import PostItemSuccess from "./states/PostItemSuccess";
import AdditionalContentSection from "_components/Misc/AdditionalContentSection";
import AdditionalUsersPosts from "_modules/additionalContents/AdditionalUsersPosts";

const PostItem = () => {
    const { userName, postSlug } = useParams();
    const { usersPostItem, fetchStatus } = useUserPostItems({ userName, postSlug });

    const { postTitle, id, content, category, user, createdAt, updatedAt } = usersPostItem;
    const { userName: userNameOfPost, fullName, avatar } = user || {};

    useTitle(postTitle);


    const UserPostItemComponentState = useComponentFetchState({
        fetchStatus,
        loading: <CardStencil />,
        messages: {
            failure: {
                heading: 'Looks like this post is removed or no such post existed',
                description: 'Please recheck the url'
            }
        },
        success: <PostItemSuccess postItem={usersPostItem} />
    });

    const UserDetailComponentState = useComponentFetchState({
        fetchStatus,
        loading: <CardStencil />,
        success: <UserCard userData={user} />
    });


    return (
        <div className="text-default m-5">

            <div className="flex flex-nowrap">
                <div className="flex flex-col flex-nowrap grow-3 basis-0">
                    {UserPostItemComponentState}
                </div>

                <ResponsiveDrawer direction='right'>
                    <div className="flex flex-col grow-1 basis-0">
                        <div className="">
                            {UserDetailComponentState}
                        </div>
                            
                        <AdditionalUsersPosts userName={userNameOfPost} fullName={fullName} />

                    </div>
                </ResponsiveDrawer>
            </div>
        </div>
    )
}

export default PostItem