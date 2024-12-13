import React from "react";

import Flex from "_components/Misc/Flex/Flex";
import Separator from "_components/Misc/Separator/Separator";
import Typography from "_components/Misc/Typography/Typography";
import BreadCrumbs from "_components/UI/BreadCrumbs/BreadCrumbs";
import FormattedTimestamp from "_modules/posts/_components/FormattedTimestamp";
import UserProfileInfo from "_modules/users/_component/UserProfileInfo";
import { convertToHTML } from "_modules/markdownEditor/_utils/markdownConvert";
import { Link } from "react-router-dom";
import CLIENT_ROUTES from "_routes/clientRoutes";
import PostCategoryBadge from "_modules/postCategories/_components/PostCategoryBadge";

const PostItemSuccess = (props) => {
    const { postItem } = props;
    const { postTitle, id, content, category, user, createdAt, updatedAt } = postItem;
    const { categoryName, categorySlug } = category || {};
    const markdownInHTML = convertToHTML(content)

    return (
        <React.Fragment>
            <div className="flex">
                <span onClick={() => { }} className="flex text-sm p-2 bg-default hover-accent hover-text-custom rounded-md cursor-pointer mx-1">
                    <span className="flex items-center pr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-chevron-left"><circle cx="12" cy="12" r="10" /><path d="m14 16-4-4 4-4" /></svg>
                    </span>
                    Go Back
                </span>
            </div>

            <BreadCrumbs items={[categoryName, postTitle]} />
            <div className="flex  flex-col pl-4">
                <Typography type='h1' size='none' className=''>{postTitle}</Typography>

                <Separator className='my-2' />

                <div className="flex">
                    <UserProfileInfo userData={user} hasFollowers hasFollowButton={true} />
                </div>

                <div className="flex my-1"></div>
                <div className="flex">

                <div className="flex max-w-fit text-xs">

                <div className="flex max-w-fit text-xs">
                    <PostCategoryBadge categoryName={categoryName} categorySlug={categorySlug} />
                </div>
                </div>
                
                </div>

                <Separator className='my-2' />

                <div className="mb-4">
                    <FormattedTimestamp createdTime={createdAt} updatedTime={updatedAt} />
                </div>

                <Flex justifyContent='none' alignItems='none' width='none'>

                    <div className="content-center border border-secondary text-accent hover-accent hover-text-custom text-xs my-2 mx-1 py-2 px-2 cursor-pointer rounded-md">
                        <span className="flex">
                            <span className="flex items-center mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-thumbs-up"><path d="M7 10v12" /><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" /></svg>
                            </span>
                            You and 130 likes
                        </span>
                    </div>

                </Flex>


            </div>
            <Separator variant='accent' />

            <div className="preview pl-4 text-default border-l border-custom my-3 overflow-scrolls h-screen-75s" dangerouslySetInnerHTML={{ __html: markdownInHTML }} />
        </React.Fragment>
    )
}

export default PostItemSuccess;