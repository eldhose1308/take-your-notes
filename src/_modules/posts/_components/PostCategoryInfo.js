import React from "react";
import { Link } from "react-router-dom";

import Avatar from "_components/UI/Avatar/Avatar";
import CLIENT_ROUTES from "_routes/clientRoutes";
import { CATEGORY_ICON_URL } from "_constants/API";
import FollowButton from "_modules/users/_component/FollowButton";


const PostCategoryInfo = (props) => {

    const { categoryData, hasFollowers = false, hasPosts = false, hasFollowButton = true } = props;
    const { categoryName, categorySlug, categoryIcon, followers, posts } = categoryData || {};

    const userDetailRoute = CLIENT_ROUTES.CATEGORY_DETAIL(categorySlug);

    return (
        <React.Fragment>

            <Link to={userDetailRoute} className='cursor-pointer group-hover'>
                <div className="flex items-center mb-2">
                    <div className="flex">
                        <Avatar key={categoryIcon} name={categoryName} src={`${CATEGORY_ICON_URL}${categoryIcon}`} />
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center">
                            <div className="flex flex-col justify-center">
                                <div className="flex">
                                    <h3 className="text-sm text-default px-3">{categoryName}</h3>
                                    <span className="text-center ml-1 mr-4 invisible group-hover-item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-chevron-right"><circle cx="12" cy="12" r="10" /><path d="m10 8 4 4-4 4" /></svg>
                                    </span>
                                </div>
                                {hasFollowers && <p className="text-secondary px-3 space-y-1 text-xs">{followers} followers</p>}
                                {hasPosts && <p className="text-secondary px-3 space-y-1 text-xs">{posts} posts</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </React.Fragment>
    )
}

export default PostCategoryInfo;