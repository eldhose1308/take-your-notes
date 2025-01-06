import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useToast } from "_contexts/ToastProvider";

import Flex from '_components/Misc/Flex/Flex';
import { Card, CardHeader, CardContent, CardFooter } from "_components/Misc/Card/Card";
import Typography from '_components/Misc/Typography/Typography';
import Separator from "_components/Misc/Separator/Separator";
import ShareButton from "_components/UI/ShareButton/ShareButton";
import UserProfileInfo from "_modules/users/_component/UserProfileInfo";

import { isUserDataSameAsLoggedInUser, routeBasedOnAuthorisation } from "_utils/userAuth";
import FormattedTimestamp from "../FormattedTimestamp";

import CLIENT_ROUTES from "_routes/clientRoutes";
import PostCategoryBadge from "_modules/postCategories/_components/PostCategoryBadge";
import { useConfirmDeleteDialog } from "_contexts/ConfirmDeleteDialogProvider";
import useMyPosts from "_modules/posts/_hooks/useMyPosts";
import { usePostsCache } from "_contexts/PostsContext";



const buttonStateValues = {
    none: 'Undo Delete',
    loading: 'Restoring...',
    failure: 'Failed to Restore',
    completed: 'Restored',
}

const PostListItem = (props) => {
    const { postItem, lastClickedPost } = props;
    const { postTitle, postSlug, id, content, category, user, createdAt, updatedAt } = postItem;
    const { categoryName, categorySlug, isVerified } = category || {};
    const { userName, fullName, avatar } = user || {};

    const [isDeleted, setIsDeleted] = useState(false);
    const [buttonStatus, setButtonStatus] = useState('none');


    const { setLastClickedPost, removeLastClickedPost } = usePostsCache();
    const { deletePost, restorePost } = useMyPosts();
    // const { isAuthenticated } = useAuth();
    const { confirmDelete } = useConfirmDeleteDialog();

    const isCurrentUserDetail = isUserDataSameAsLoggedInUser(userName);
    const postDetailRoute = routeBasedOnAuthorisation(userName, postSlug)
    const postEditRoute = CLIENT_ROUTES.POST_EDIT(postSlug);


    const handleUndoDelete = async () => {
        setButtonStatus('loading');

        try {
            await restorePost(id);
            setIsDeleted(false);
            setButtonStatus('success');
        } catch {
            console.log('Failed to restore post');
            setButtonStatus('failure');
        } finally {
            setTimeout(() => {
                setButtonStatus('none');
            }, 1000);
        }
    }

    const handleDelete = async () => {
        const isConfirmed = await confirmDelete(() => deletePost(id));

        if (isConfirmed) {
            try {
                setIsDeleted(true);
                return true;
            } catch {
                return false;
            }
        }
        return false;
    }

    
     useEffect(() => {
        if(lastClickedPost && lastClickedPost === `postItem_${postSlug}`){
            const lastPost = document.querySelector(`[data-id="${lastClickedPost}"]`); 
            if(lastPost){
                lastPost.scrollIntoView({ behavior: 'smooth' });
                removeLastClickedPost();
            }
        }
    
        }, [lastClickedPost, postSlug])

    return (
        <div data-id={`postItem_${postSlug}`} className="w-full post-list-item">
        <Card border='another' variant='default' rounded='md' className={`border hover-border-highlight my-2 w-full max-h-mds ${isVerified ? '' : 'opacity-50'} ${isDeleted ? 'opacity-50' : ''}`}>
            <CardHeader>
                <Flex justifyContent='spaceBetween' alignItems='none' className=''>
                    <UserProfileInfo userData={user} hasFollowButton={false} />
                    {!isVerified && <span className="cursor-pointer" title="This category is not verified">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock-alert"><path d="M12 6v6l4 2" /><path d="M16 21.16a10 10 0 1 1 5-13.516" /><path d="M20 11.5v6" /><path d="M20 21.5h.01" /></svg>
                    </span>}
                    {isDeleted && <span className="cursor-pointer" title="This post is deleted">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>
                    </span>}
                </Flex>
            </CardHeader>

            <CardContent>
                <Link to={postDetailRoute} onClick={() => { setLastClickedPost(`postItem_${postSlug}`) }} className='cursor-pointer group-hover'>
                    <Typography type='h1' size='md' className='mb-2 w-full'>
                        {postTitle}
                        <span className="text-center ml-2 invisible group-hover-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-chevron-right"><circle cx="12" cy="12" r="10" /><path d="m10 8 4 4-4 4" /></svg>
                        </span>
                    </Typography>
                    {/* <Typography variant='secondary' size='xs' textVariant='default'> */}
                    {/* <span className="text-xs text-secondary">
                        Read More
                    </span> */}
                    {/* </Typography> */}
                </Link>



                <div className="flex max-w-fit text-xs">
                    <PostCategoryBadge categoryName={categoryName} categorySlug={categorySlug} />
                </div>

            </CardContent>


            <CardFooter className='p-0'>
                <div className="flex flex-col w-full">
                    {/* <div className="flex w-full justify-between"> */}

                    {/* <Flex justifyContent='none' alignItems='none' width='none'> */}

                    {/* <div className="content-center border border-secondary text-accent text-xs my-2 mx-1 py-2 px-2 rounded-md">
                                <span className="flex">
                                    <span className="flex items-center mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-thumbs-up"><path d="M7 10v12" /><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" /></svg>
                                    </span>
                                    130 likes
                                </span>
                            </div>


                            <div className="content-center border border-secondary text-accent text-xs my-2 mx-1 py-2 px-2 rounded-md">
                                <span className="flex">
                                    <span className="flex items-center mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-thumbs-up"><path d="M7 10v12" /><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" /></svg>
                                    </span>
                                    253 comments
                                </span>
                            </div> */}

                    {/* <ShareButton
                                shareDetails={{ title: postTitle, text: `Checkout this post by ${userName} about ${postTitle}`, urlRoute: postDetailRoute }}
                            /> */}

                    {/* </Flex> */}
                    {/* <Flex justifyContent='none' alignItems='none' width='none' className='mt-2'>
                            <div className="content-center border border-secondary text-accent hover-accent hover-text-custom text-xs my-2 mx-1 py-1 px-2 cursor-pointer rounded-md">
                                <span className="flex">
                                    <span className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bookmark-plus"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" /><line x1="12" x2="12" y1="7" y2="13" /><line x1="15" x2="9" y1="10" y2="10" /></svg>
                                    </span>
                                </span>
                            </div>
                        </Flex> */}
                    {/* </div> */}
                    <Separator variant='another' className='my-2' />

                    <FormattedTimestamp createdTime={createdAt} updatedTime={updatedAt} hasEditInfo={false} />

                    {isCurrentUserDetail ? (
                        <React.Fragment>
                            <Separator variant='another' className='my-2' />
                            <div className="flex text-xs">
                                <Link to={postEditRoute} className='cursor-pointer'>
                                    <span className='flex items-center px-2 py-1 mx-2 hover-custom hover-text-primary rounded-md cursor-pointer' onClick={() => { }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil-line"><path d="M12 20h9" /><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" /><path d="m15 5 3 3" /></svg>
                                        <span className='pl-1'>
                                            Edit
                                        </span>
                                    </span>
                                </Link>

                                {isDeleted ? (
                                    <span onClick={buttonStatus === 'loading' ? ()=>{} : handleUndoDelete} className='flex items-center px-2 py-1 mx-2 hover-custom hover-text-info rounded-md cursor-pointer'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-undo"><path d="M3 7v6h6" /><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" /></svg>
                                        <span className='pl-1'>
                                            {buttonStateValues[buttonStatus]}
                                        </span>
                                    </span>
                                ) : (<span onClick={handleDelete} className='flex items-center px-2 py-1 mx-2 hover-custom hover-text-destructive rounded-md cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /></svg>
                                    <span className='pl-1'>
                                        Delete
                                    </span>
                                </span>)}
                            </div>
                        </React.Fragment>

                    ) : null}

                </div>
            </CardFooter>

        </Card>
        </div>
    )
}

export default PostListItem;