import React, { useEffect, useState } from 'react'

import Typography from "_components/Misc/Typography/Typography";
import PostListItem from '_modules/posts/_components/list/PostListItem';
import PostVisibilitySelector from '_modules/posts/_components/PostVisibilitySelector';
import { VISIBILITY_MODES } from '_modules/posts/_constants/posts';
import CreatePostButton from '_modules/posts/_components/CreatePostButton';
import PostCategory from '_modules/posts/_components/PostCategory';
import usePostsNavigation from '_modules/posts/_hooks/usePostsNavigation';
import useMyPosts from '_modules/posts/_hooks/useMyPosts';
import useShowMorePagination from '_components/Pagination/_hooks/useShowMorePagination';
import ShowMorePaginationWrapper from '_components/Pagination/ShowMorePaginationWrapper';
import { stringifyJSON } from '_utils/json';
import PostFilters from '_modules/posts/_components/PostFilters';
import EmptyAuthUserPosts from '_components/DisplayStates/Empty/EmptyAuthUserPosts';

const pageSize = 30;

const categories = [];
const MyPostList = (props) => {
    const { navigateToCreate, navigateToEdit } = usePostsNavigation();

    const { currentPage, isAllDataFetched, incrementPagination, checkIfAllDataFetched, resetPagination } = useShowMorePagination({ pageSize });
    const { fetchStatus, fetchMyPostsData } = useMyPosts();

    const [filters, setFilters] = useState(null);
    const [data, setData] = useState([]);

    const { hasFollowButton = true, onEdit } = props;
    const [currentVisibilityMode, setCurrentVisibilityMode] = useState(VISIBILITY_MODES.public)


    const handleFiltersChange = async (newFilters) => {
        const postFilters = { ...filters, ...newFilters };
        setFilters(postFilters);
        setData([]);
        resetPagination();
        const postsFilter = { page: 1, limit: pageSize, ...postFilters };
        const posts = await fetchMyPostsData(postsFilter);
        checkIfAllDataFetched(posts);
        setData(posts);
    }

    const fetchMyPosts = async () => {
        const postsFilter = { page: currentPage + 1, limit: pageSize, ...filters };
        const posts = await fetchMyPostsData(postsFilter);
        setData((previousPosts) => [...previousPosts, ...posts]);

        incrementPagination();
        checkIfAllDataFetched(posts);
        return posts;
    }


    useEffect(() => {
        fetchMyPosts();
    }, [])


    const handleCreate = () => {
        navigateToCreate();
    }


    const handleVisibilityModeChange = (newMode) => {
        setCurrentVisibilityMode(newMode);
    }
    const handlePostCategoryChange = (id, option) => {
        // setSelectedCategory(option);
    }


    return (
        <React.Fragment>
            <div className="text-default m-5">
                <div className='flex justify-between'>
                    <div className="flex flex-col mx-2 my-2">
                        <Typography size='lg' type='h2'>Your Posts</Typography>
                        <Typography variant='secondary' size='sm' textVariant='default'>
                            List of all the posts published by you
                        </Typography>
                    </div>
                    <div className="flex flex-col my-2">
                        <CreatePostButton onCreate={handleCreate} />
                    </div>
                </div>

                <div className='flex'>
                    <div className='content-center mx-2'>
                        <PostVisibilitySelector onChange={handleVisibilityModeChange} currentMode={currentVisibilityMode} />
                    </div>

                    {/* <div className='mx-2'>
                        <div className="flex text-sm p-2 bg-highlight rounded-md cursor-pointer mx-1">
                            <PostCategory category={selectedCategory} categoryList={categories} onChange={handlePostCategoryChange} />
                        </div>
                    </div> */}

                    <PostFilters onChange={handleFiltersChange} />


                </div>

                <ShowMorePaginationWrapper key={`posts_${stringifyJSON(filters)}`} initialFetchStatus={fetchStatus} currentPage={currentPage} isAllDataFetched={isAllDataFetched} fetchDataMethod={fetchMyPosts}>

                    {fetchStatus !== 'empty' ? (
                        <div className='flex content-start w-full'>
                            <React.Fragment>
                                {data.map(postItem => <PostListItem key={postItem.id} postItem={postItem} onEdit={navigateToEdit} hasFollowButton={hasFollowButton} />)}
                            </React.Fragment>
                        </div>
                    ) : (
                        <EmptyAuthUserPosts>
                            <CreatePostButton onCreate={handleCreate} />
                        </EmptyAuthUserPosts>
                    )}

                </ShowMorePaginationWrapper>
            </div>

        </React.Fragment>
    )
}

export default MyPostList;