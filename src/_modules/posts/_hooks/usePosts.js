import { useState, useEffect } from "react";

import * as postsService from "_services/posts.service";

const usePosts = () => {
    const [postsList, setPostsList] = useState([]);
    const [fetchStatus, setFetchStatus] = useState('none');
// console.log('@fetchStatus', fetchStatus)
    const fetchPostsData = async (filters) => {
        try{
            setFetchStatus('loading');
            const postsData = await postsService.getPosts(filters);
            setPostsList(postsData);
            setFetchStatus('success');
            setTimeout(() => {
                setFetchStatus('none');
            }, 1000);
            return postsData;
        }catch(error){
            setFetchStatus('failure');
        }
    }

    useEffect(() => {
        fetchPostsData();
    }, [])

    return {
        postsList,
        fetchStatus,
        fetchPostsData,

        setPostsList
    }
}

export default usePosts;