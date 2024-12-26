import { useState, useEffect } from "react";

import * as postsService from "_services/posts.service";

const usePosts = () => {
    const [fetchStatus, setFetchStatus] = useState('none');

    const fetchPostsData = async (filters) => {
        try{
            setFetchStatus('loading');
            const postsData = await postsService.getPosts(filters);
            // setFetchStatus('success');
            if(postsData.length === 0){
                setFetchStatus('empty');
            }else{
                setFetchStatus('success');
                // setTimeout(() => {
                //     setFetchStatus('none');
                // }, 1000);
            }
            
            return postsData;
        }catch(error){
            setFetchStatus('failure');
        }
    }

    // useEffect(() => {
    //     fetchPostsData();
    // }, [])

    return {
        fetchStatus,
        fetchPostsData,
    }
}

export default usePosts;