import React, { useState } from 'react'

import Typography from "_components/Misc/Typography/Typography";
import PostListItem from './PostListItem';
import PostVisibilitySelector from '../PostVisibilitySelector';
import { VISIBILITY_MODES } from '_modules/posts/_constants/posts';

const PostList = (props) => {
    const { hasFollowButton = true, onCreate, onEdit } = props;
    const [currentVisibilityMode, setCurrentVisibilityMode] = useState(VISIBILITY_MODES.public)

    const handleVisibilityModeChange = (newMode) => {
        setCurrentVisibilityMode(newMode);
    }


    return (
        <React.Fragment>
            <div className=''>
                <div className='flex justify-between'>
                    <div className="flex flex-col mx-2 my-2">
                        <Typography size='lg' type='h2'>Your Posts</Typography>
                        <Typography variant='secondary' size='sm' textVariant='default'>
                            List of all the posts published by you
                        </Typography>
                    </div>
                    <div className="flex flex-col">
                        <div onClick={onCreate} className="bg-accent border border-accent hover-text-default hover-border-accent hover-transparent text-custom text-sm my-2 p-1 px-2 cursor-pointer rounded-md">
                            <span className="flex">
                                Start Writing
                                <span className="flex items-center ml-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-plus"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className='flex'>
                    <div className='mx-2'>
                        <PostVisibilitySelector onChange={handleVisibilityModeChange} currentMode={currentVisibilityMode} />
                    </div>

                    <div className='mx-2'>
                        <span>Category</span>
                    </div>

                    <div className='mx-2'>
                        <span>Sort by</span>
                    </div>

                </div>

                <div className="flex w-full px-2 my-4 rounded-md h-screen overflow-scroll">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
                        <PostListItem hasFollowButton={hasFollowButton} />
                    ))}
                </div>
            </div>

        </React.Fragment>
    )
}

export default PostList;