import React from "react";
import { Link } from "react-router-dom";

import Typography from "_components/Misc/Typography/Typography";

const PostCategoryBadge = (props) => {
    const { categoryName, linkUrl } = props;

    return (
        <Link to={linkUrl} className='bg-secondary hover-custom rounded-md flex cursor-pointer p-2 mt-2'>
            <div className="flex items-center mr-2">

                <span className="flex items-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-menu"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M7 8h10" /><path d="M7 12h10" /><path d="M7 16h10" /></svg>
                </span>
                <Typography size='xs' type='span' textVariant='default' className='className="flex items-center mr-2"'>{categoryName}</Typography>

            </div>
        </Link>
    )
}

export default PostCategoryBadge;