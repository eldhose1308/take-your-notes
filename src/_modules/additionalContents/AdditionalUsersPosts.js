import React from "react";
import { Link } from "react-router-dom";

import { Stencil } from "_components/Loader";

import { routeBasedOnAuthorisation } from "_utils/userAuth";
import useUserPosts from "_modules/users/_hooks/useUserPosts";
import useComponentFetchState from "_hooks/useComponentFetchState";

const AdditionalUsersPosts = (props) => {
    const { userName } = props;
    const { usersPostList, fetchStatus } = useUserPosts({ userName });

    const UserDetailComponentState = useComponentFetchState({
        fetchStatus,
        loading: <Stencil />,
        success: <React.Fragment>
        {usersPostList.map((userPosts) => {
            const { postTitle, postSlug, user, category } = userPosts;
            const { userName } = user;
            const { categoryName } = category;
            const postDetailRoute = routeBasedOnAuthorisation(userName, postSlug)
            return (
                <Link to={postDetailRoute}>
                    <div className="flex flex-col my-3 p-1 border-b border-custom hover-custom rounded-md">
                        <span className="text-bold my-1">{postTitle}</span>
                        <span className="max-w-fit text-xs p-1 my-1 bg-highlight rounded-md">{categoryName}</span>
                    </div>
                </Link>
            )
        })}
    </React.Fragment>
    });


    return (
        <React.Fragment>
            {UserDetailComponentState}
        </React.Fragment>
    )
}

export default AdditionalUsersPosts;