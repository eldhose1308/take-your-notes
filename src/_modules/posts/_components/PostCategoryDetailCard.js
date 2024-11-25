import Separator from "_components/Misc/Separator/Separator";
import Typography from "_components/Misc/Typography/Typography";
import FollowButton from "_modules/users/_component/FollowButton";
import React from "react";
import PostCategoryInfo from "./PostCategoryInfo";

const PostCategoryDetailCard = (props) => {

    const { categoryData = {} } = props;
    const { categorySlug, categoryName, bio, createdAt, posts, followers, rank, isFollowing } = categoryData;


    return (
        <div className="border bg-secondary p-4 rounded-md">

            <div className="flex justify-between">
                <PostCategoryInfo categoryData={categoryData} />
                {/* <FollowButtonCategory userId={userId} categorySlug={categorySlug} isFollowing={isFollowing} updateUser={setUserState} /> */}
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