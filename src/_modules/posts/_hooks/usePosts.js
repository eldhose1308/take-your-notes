import { useState, useEffect } from "react";

import * as postsService from "_services/posts.service";

const usePosts = () => {
    const [postsList, setPostsList] = useState([]);
    const [fetchStatus, setFetchStatus] = useState('none');

    const fetchPostsData = postsService.getPosts;

    useEffect(() => {
        const fetchPosts = async () => {
            try{
                setFetchStatus('loading');
                const postsData = await postsService.getPosts();
                setPostsList(postsData);
                setFetchStatus('success');
            }catch(error){
                setFetchStatus('failure');
            }
        };


        fetchPosts();
    }, [])

    return {
        postsList,
        fetchStatus,
        fetchPostsData
    }
}

export default usePosts;