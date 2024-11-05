import { useState, useEffect } from "react";

import * as postsService from '_services/posts.service';

const useUserPostItems = ({ userName, postSlug }) => {
    const [usersPostItem, setUsersPostItem] = useState([]);
    const [fetchStatus, setFetchStatus] = useState('none');

    useEffect(() => {
        if (!(userName && postSlug)) {
            return;
        }

        const fetchUsersPostItem = async () => {
            try{
                setFetchStatus('loading');
                const usersPostData = await postsService.getPostBySlug({userName, postSlug});
                setUsersPostItem(usersPostData);
                setFetchStatus('success');
            }catch(error){
                setFetchStatus('failure');
            }
        }

        fetchUsersPostItem();
    }, [userName, postSlug]);

    return {
        fetchStatus,
        usersPostItem
    }
}

export default useUserPostItems;