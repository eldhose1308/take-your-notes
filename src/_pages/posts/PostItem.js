import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Loader from "_components/Loader/Loader";
import Typography from "_components/Misc/Typography/Typography";
import BreadCrumbs from "_components/UI/BreadCrumbs/BreadCrumbs";

import useUserPostItems from "_modules/users/_hooks/useUserPostItems";
import { isUserDataSameAsLoggedInUser, routeBasedOnAuthorisation } from "_utils/userAuth";
import { convertToHTML } from "_modules/markdownEditor/_utils/markdownConvert";
import UserCard from "_modules/users/_component/UserCard";

import { Card, CardHeader, CardContent, CardFooter } from "_components/Misc/Card/Card";
import Separator from "_components/Misc/Separator/Separator";
import useUserPosts from "_modules/users/_hooks/useUserPosts";
import ResponsiveDrawer from "_components/UI/Drawer/ResponsiveDrawer";

const PostItem = () => {
    const { userName, postSlug } = useParams();

    const { usersPostItem, fetchStatus } = useUserPostItems({ userName, postSlug });
    const { usersPostList, fetchStatus: userPostsFetchStatus } = useUserPosts({ userName });

    const { postTitle, id, content, category, user } = usersPostItem;
    const { categoryName } = category || {};
    const { fullName } = user || {};

    const markdownInHTML = convertToHTML(content)

    const fetchingUserPostComponent = {
        loading: <Loader type='stencil' />,
        failure: <div>Failed</div>,
        success: <><BreadCrumbs items={[categoryName, postTitle]} />
            <div className="preview pl-4 text-default border-l border-custom my-3 overflow-scroll h-screen-75" dangerouslySetInnerHTML={{ __html: markdownInHTML }} /></>
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