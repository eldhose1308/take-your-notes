import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Loader from "_components/Loader/Loader";
import Typography from "_components/Misc/Typography/Typography";
import BreadCrumbs from "_components/UI/BreadCrumbs/BreadCrumbs";

import useUserPostItems from "_modules/users/_hooks/useUserPostItems";
import { routeBasedOnAuthorisation } from "_utils/userAuth";
import { convertToHTML } from "_modules/markdownEditor/_utils/markdownConvert";
import UserCard from "_modules/users/_component/UserCard";

import { Card, CardHeader, CardContent, CardFooter } from "_components/Misc/Card/Card";
import Separator from "_components/Misc/Separator/Separator";
import useUserPosts from "_modules/users/_hooks/useUserPosts";
import ResponsiveDrawer from "_components/UI/Drawer/ResponsiveDrawer";
import { compareAndFormatTimes } from "_utils/timestampUtils";
import useTitle from "_hooks/useTitle";
import CardStencil from "_components/Loader/CardStencil";
import UserProfileInfo from "_modules/users/_component/UserProfileInfo";
import FormattedTimestamp from "_modules/posts/_components/FormattedTimestamp";

const PostItem = () => {
    const { userName, postSlug } = useParams();
    const { usersPostItem, fetchStatus } = useUserPostItems({ userName, postSlug });
    const { usersPostList, fetchStatus: userPostsFetchStatus } = useUserPosts({ userName });

    const { postTitle, id, content, category, user, createdAt, updatedAt } = usersPostItem;
    const { categoryName } = category || {};
    const { fullName, avatar } = user || {};

    useTitle(postTitle);

    const [createdTime, updatedTime] = compareAndFormatTimes(createdAt, updatedAt);
    const markdownInHTML = convertToHTML(content)


    const fetchingUserPostComponent = {
        loading: <React.Fragment><Loader type='stencil' /><CardStencil /></React.Fragment>,
        failure: <div>Failed</div>,
        success: <React.Fragment>
            <div className="flex">
                <span onClick={() => { }} className="flex text-sm p-2 bg-default hover-accent hover-text-custom rounded-md cursor-pointer mx-1">
                    <span className="flex items-center pr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-chevron-left"><circle cx="12" cy="12" r="10" /><path d="m14 16-4-4 4-4" /></svg>
                    </span>
                    Go Back
                </span>
            </div>

            <BreadCrumbs items={[categoryName, postTitle]} />
            <div className="flex  flex-col pl-4">
                <Typography type='h1' size='none' className=''>{postTitle}</Typography>

                <div className="flex my-2">
                    <UserProfileInfo userData={user} hasFollowers hasFollowButton={true} />
                </div>

                <div className="mb-4">
                    <FormattedTimestamp createdTime={createdAt} updatedTime={updatedAt} />
                </div>


            </div>
            <Separator variant='accent' />
            <div className="preview pl-4 text-default border-l border-custom my-3 overflow-scroll h-screen-75" dangerouslySetInnerHTML={{ __html: markdownInHTML }} />
        </React.Fragment>
    }

    const fetchingUserCardComponent = {
        loading: <Loader type='stencil' />,
        failure: <div>Failed</div>,
        success: <UserCard userData={user} />
    }

    const fetchingUserPostListComponent = {
        loading: <Loader type='stencil' />,
        failure: <div>Failed</div>,
        success: <div className="flex flex-nowrap flex-col h-screen-1/2 overflow-scroll">
            {usersPostList.map((userPosts) => {
                const { user, postSlug } = userPosts;
                const { userName } = user;
                const postDetailRoute = routeBasedOnAuthorisation(userName, postSlug)
                return (
                    <Link to={postDetailRoute}>
                        <div className="flex flex-col my-3 p-1 border-b border-custom hover-custom rounded-md">
                            <span className="text-bold my-1">{userPosts.postTitle}</span>
                            <span className="max-w-fit text-xs p-1 my-1 bg-highlight rounded-md">{userPosts.category.categoryName}</span>
                        </div>
                    </Link>
                )
            })}
        </div>
    }

    return (
        <div className="text-default m-5">

            <div className="flex flex-nowrap">
                <div className="flex flex-col flex-nowrap grow-3 basis-0">
                    {fetchingUserPostComponent[fetchStatus]}
                </div>

                <ResponsiveDrawer direction='right'>
                    <div className="flex flex-col grow-1 basis-0">
                        <div className="">
                            {fetchingUserCardComponent[fetchStatus]}
                        </div>
                        <div>
                            <Card size='sm' rounded='lg' className='border hover-border-highlight mx-4 my-2'>
                                <CardHeader>
                                    <span className="flex">More from <Link to='sdf' className="text-bold mx-2">{fullName}</Link></span>
                                </CardHeader>
                                <Separator variant='custom' />
                                <CardContent>
                                    {fetchingUserPostListComponent[userPostsFetchStatus]}
                                </CardContent>
                                <CardFooter>
                                    <span>See more</span>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </ResponsiveDrawer>
            </div>
        </div >
    )
}

export default PostItem