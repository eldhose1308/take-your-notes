import Typography from "_components/Misc/Typography/Typography";
import PostCategoryBadge from "_modules/postCategories/_components/PostCategoryBadge";
import { routeBasedOnAuthorisation } from "_utils/userAuth";
import React from "react";
import { Link } from "react-router-dom";

const MiniUserPostsList = (props) => {
    const { usersPostList = [] } = props;

    return (
        <React.Fragment>
            {usersPostList.map((userPosts) => {
                const { postTitle, postSlug, user, category } = userPosts;
                const { userName } = user;
                const { categoryName } = category;
                const postDetailRoute = routeBasedOnAuthorisation(userName, postSlug);

                return (
                    <Link to={postDetailRoute}>
                        <div className="flex flex-col my-3 p-1 border-b border-custom hover-custom rounded-md">
                            <Typography type='span' >{postTitle}</Typography>
                            <div className="flex">
                                <PostCategoryBadge categoryName={categoryName} />
                            </div>
                        </div>
                    </Link>
                )
            })}
        </React.Fragment>
    )
}

export default MiniUserPostsList;