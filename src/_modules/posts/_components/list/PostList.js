import React, { useEffect, useState } from 'react'

import Typography from "_components/Misc/Typography/Typography";
import PostListItem from './PostListItem';
import PostVisibilitySelector from '../PostVisibilitySelector';
import { VISIBILITY_MODES } from '_modules/posts/_constants/posts';
import CreatePostButton from '../CreatePostButton';
import PostCategory from '../PostCategory';

const PostList = (props) => {
    const { hasFollowButton = true, postsList = [], categories, onCreate, onEdit } = props;
    const [currentVisibilityMode, setCurrentVisibilityMode] = useState(VISIBILITY_MODES.public)
    const [postCategory, setPostCategory] = useState(categories[0]);

    useEffect(() => {
        setPostCategory(categories[0])
    }, [categories])

    const handleVisibilityModeChange = (newMode) => {
        setCurrentVisibilityMode(newMode);
    }
    const handlePostCategoryChange = (id, option) => {
        setPostCategory(option);
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
                    <div className="flex flex-col my-2">
                        <CreatePostButton onCreate={onCreate} />
                    </div>
                </div>

                <div className='flex'>
                    <div className='mx-2'>
                        <PostVisibilitySelector onChange={handleVisibilityModeChange} currentMode={currentVisibilityMode} />
                    </div>

                    <div className='mx-2'>
                        <div className="flex text-sm p-2 bg-highlight rounded-md cursor-pointer mx-1">
                            <PostCategory category={postCategory} categoryList={categories} onChange={handlePostCategoryChange} />
                        </div>
                    </div>

                    <div className='mx-2'>
                        <span>Sort by</span>
                    </div>

                </div>

                <div className="flex w-full px-2 my-4 rounded-md h-screen overflow-scroll">
                    {!postsList.length ? (
                        <div className='flex flex-col w-full items-center'>
                            <Typography size='lg' type='h2'>No Blog Posts Available</Typography>
                            <Typography variant='secondary' size='sm' textVariant='default'>
                                It seems there aren't any blog posts to display right now.
                            </Typography>
                            <Typography variant='secondary' size='sm' textVariant='default'>
                                Start creating a new blog post to share your thoughts and ideas!
                            </Typography>

                            <div className='my-4'>
                                <CreatePostButton onCreate={onCreate} />
                            </div>
                        </div>
                    ) : (
                        <div className='flex content-start'>
                            <React.Fragment>
                                {postsList.map(postItem => <PostListItem key={postItem.id} postItem={postItem} onEdit={onEdit} hasFollowButton={hasFollowButton} />)}
                            </React.Fragment>
                        </div>
                    )}
                </div>
            </div>

        </React.Fragment>
    )
}

export default PostList;