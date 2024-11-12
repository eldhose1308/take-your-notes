import React from "react";

import Flex from '_components/Misc/Flex/Flex';
import { Card, CardHeader, CardContent, CardFooter } from "_components/Misc/Card/Card";
import Typography from '_components/Misc/Typography/Typography';
import Avatar from '_components/UI/Avatar/Avatar';
import FollowButton from '_modules/users/_component/FollowButton';
import { isUserDataSameAsLoggedInUser, routeBasedOnAuthorisation } from "_utils/userAuth";
import { Link } from "react-router-dom";
import CLIENT_ROUTES from "_routes/clientRoutes";
import { compareAndFormatTimes, formatToIST } from "_utils/timestampUtils";
import Separator from "_components/Misc/Separator/Separator";


const PostListItem = (props) => {
    const { postItem } = props;
    const { postTitle, postSlug, id, content, category, user, createdAt, updatedAt } = postItem;
    const { categoryName } = category || {};
    const { userName, fullName, avatar } = user || {};

    const [createdTime, updatedTime] = compareAndFormatTimes(createdAt, updatedAt);
    const isCurrentUserDetail = isUserDataSameAsLoggedInUser(userName);
    const postDetailRoute = routeBasedOnAuthorisation(userName, postSlug)
    const userDetailRoute = CLIENT_ROUTES.USER_DETAIL(userName);
    const postEditRoute = CLIENT_ROUTES.POST_EDIT(postSlug);

    return (
        <Card border='ghost' variant='default' rounded='md' className='border hover-border-highlight my-2 w-full max-h-mds'>
            <CardHeader>
                <Flex justifyContent='spaceBetween' alignItems='none' className=''>
                    <div className="flex mb-2 p-1 rounded-md group-hover">
                        <Link to={userDetailRoute} className='cursor-pointer'>
                            <div className="flex mb-2 items-center">
                                <Avatar name={fullName} src={avatar} />
                                <div className="flex flex-col">
                                    <div className="flex items-center">
                                        <div className="flex flex-col">
                                            <h3 className="text-sm text-default px-3">{fullName}</h3>
                                            {/* <p className="text-secondary px-3 space-y-1 text-xs">123 followers</p> */}
                                        </div>
                                        <span className="text-center ml-2 invisible group-hover-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-chevron-right"><circle cx="12" cy="12" r="10" /><path d="m10 8 4 4-4 4" /></svg>
                                        </span>
                                    </div>
                                    {/* <span>
                                        <p className="text-secondary px-3 space-y-1 text-xs">{createdTime}</p>
                                        {!!updatedTime && <p className="text-secondary px-3 space-y-1 text-xxs">[Edited] {updatedTime}</p>}
                                    </span> */}
                                </div>
                            </div>
                        </Link>
                    </div>
                    {!isCurrentUserDetail ? (
                        <div className="flex bg-custom text-accent hover-text-custom hover-accent text-xs my-2 mx-1 p-2 px-2 cursor-pointer rounded-md">
                            <span className="flex items-center">
                                <span className="flex items-center mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round-plus"><path d="M2 21a8 8 0 0 1 13.292-6" /><circle cx="10" cy="8" r="5" /><path d="M19 16v6" /><path d="M22 19h-6" /></svg>
                                </span>
                                Follow
                            </span>
                        </div>
                    ) : null}
                </Flex>
            </CardHeader>

            <CardContent>
                <Link to={postDetailRoute} className='cursor-pointer group-hover'>
                    <Typography type='h1' size='md' className='mb-2 w-full'>
                        {postTitle}
                        <span className="text-center ml-2 invisible group-hover-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-chevron-right"><circle cx="12" cy="12" r="10" /><path d="m10 8 4 4-4 4" /></svg>
                        </span>
                    </Typography>
                    {/* <Typography variant='secondary' size='xs' textVariant='default'>
                        {content}
                    </Typography> */}
                </Link>
            </CardContent>


            <CardFooter className='p-0'>
                <div className="flex flex-col w-full">
                    <div className="flex w-full justify-between">

                        <Flex justifyContent='none' alignItems='none' width='none'>
                            <div className="bg-custom text-accent hover-text-custom hover-accent text-xs my-2 mx-1 py-1 px-2 cursor-pointer rounded-md">
                                <span className="flex">
                                    <span className="flex items-center mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-thumbs-up"><path d="M7 10v12" /><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" /></svg>
                                    </span>
                                    130
                                </span>
                            </div>

                            <div className="bg-custom text-accent hover-text-custom hover-accent text-xs my-2 mx-1 p-1 px-2 cursor-pointer rounded-md">
                                <span className="flex">
                                    <span className="flex items-center mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                                    </span>
                                    220
                                </span>
                            </div>

                            <div className="bg-custom text-accent hover-text-custom hover-accent text-xs my-2 mx-1 p-1 px-2 cursor-pointer rounded-md">
                                <span className="flex">
                                    <span className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-share-2"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" x2="15.42" y1="13.51" y2="17.49" /><line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>
                                    </span>
                                </span>
                            </div>

                        </Flex>
                        <Flex justifyContent='none' alignItems='none' width='none' className='mt-2'>
                            <div className="bg-custom text-accent hover-text-custom hover-accent text-xs my-2 mx-1 p-1 px-2 cursor-pointer rounded-md">
                                <span className="flex">
                                    <span className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bookmark-plus"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" /><line x1="12" x2="12" y1="7" y2="13" /><line x1="15" x2="9" y1="10" y2="10" /></svg>
                                    </span>
                                </span>
                            </div>
                        </Flex>
                    </div>
                    <Separator variant='custom' className='my-2' />

                    <span>
                        <p className="text-secondary px-3 space-y-1 text-xs">{createdTime}</p>
                        {!!updatedTime && <p className="text-secondary px-3 space-y-1 text-xxs">[Edited] {updatedTime}</p>}
                    </span>

                    {isCurrentUserDetail ? (
                        <React.Fragment>
                            <Separator variant='custom' className='my-2' />
                            <div className="flex text-xs">
                                <Link to={postEditRoute} className='cursor-pointer'>
                                    <span className='flex items-center px-2 py-1 mx-2 hover-custom hover-text-primary rounded-md cursor-pointer' onClick={() => { }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil-line"><path d="M12 20h9" /><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" /><path d="m15 5 3 3" /></svg>
                                        <span className='pl-1'>
                                            Edit
                                        </span>
                                    </span>
                                </Link>

                                <span className='flex items-center px-2 py-1 mx-2 hover-custom hover-text-destructive rounded-md cursor-pointer' onClick={() => { }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /></svg>
                                    <span className='pl-1'>
                                        Delete
                                    </span>
                                </span>
                            </div>
                        </React.Fragment>

                    ) : null}

                </div>
            </CardFooter>

        </Card>
    )
}

export default PostListItem;