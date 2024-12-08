import React, { useState } from "react";

import Separator from "_components/Misc/Separator/Separator";
import Typography from "_components/Misc/Typography/Typography";
import ShareButton from "_components/UI/ShareButton/ShareButton";
import FollowButton from "_modules/postCategories/_components/FollowButton";
import PostCategoryInfo from "./PostCategoryInfo";
import CLIENT_ROUTES from "_routes/clientRoutes";

const PostCategoryDetailCard = (props) => {

    const { categoryData = {} } = props;
    const [categoryState, setCategoryState] = useState(categoryData);
    const { id: categoryId, categorySlug, categoryName, bio, createdAt, posts, followers, rank, isFollowing } = categoryState;


    return (
        <div className="border bg-secondary p-4 rounded-md">

            <div className="flex justify-between">
                <PostCategoryInfo categoryData={categoryState} />
                <div className="flex">

                    <ShareButton
                        shareDetails={{ title: categorySlug, text: categoryName, urlRoute: CLIENT_ROUTES.CATEGORY_DETAIL(categorySlug) }}
                        shareText='Share Category'
                    />

                    <FollowButton categoryId={categoryId} categorySlug={categorySlug} isFollowing={isFollowing} updateCategory={setCategoryState} />
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
            </div>

            <Separator variant='default' />

            <div className="flex my-2">
                <div>
                    <Typography textVariant='none'>Created at <Typography type='span'>{createdAt}</Typography></Typography>
                </div>
            </div>


            {!!bio && <div className="flex my-4">
                <Typography textVariant='none'>{bio}</Typography>
            </div>}

        </div>
    )
}

export default PostCategoryDetailCard;