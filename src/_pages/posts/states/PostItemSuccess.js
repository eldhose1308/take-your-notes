import React from "react";

import Separator from "_components/Misc/Separator/Separator";
import Typography from "_components/Misc/Typography/Typography";
import BreadCrumbs from "_components/UI/BreadCrumbs/BreadCrumbs";
import FormattedTimestamp from "_modules/posts/_components/FormattedTimestamp";
import UserProfileInfo from "_modules/users/_component/UserProfileInfo";
import { convertToHTML } from "_modules/markdownEditor/_utils/markdownConvert";

const PostItemSuccess = (props) => {
    const { postItem } = props;
    const { postTitle, id, content, category, user, createdAt, updatedAt } = postItem;
    const { categoryName } = category || {};
    const markdownInHTML = convertToHTML(content)

    return (
        <React.Fragment>
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

            <div className="preview pl-4 text-default border-l border-custom my-3 overflow-scrolls h-screen-75s" dangerouslySetInnerHTML={{ __html: markdownInHTML }} />
        </React.Fragment>
    )
}

export default PostItemSuccess;