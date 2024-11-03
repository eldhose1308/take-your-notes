import { useState, useEffect } from "react";

import * as usersService from '_services/users.service';

const useUserPosts = ({ userName }) => {
    const [usersPostList, setUsersPostList] = useState([]);
    const [fetchStatus, setFetchStatus] = useState('none');

    useEffect(() => {
        if (!userName) {
            return;
        }

        const fetchUsersPost = async () => {
            try{
                setFetchStatus('loading');
                const usersPostData = await usersService.getUsersPost(userName);
                setUsersPostList(usersPostData);
                setFetchStatus('success');
            }catch(error){
                setFetchStatus('failure');
            }
        }

        fetchUsersPost();
    }, [userName]);

    return {
        fetchStatus,
        usersPostList
    }
}

export default useUserPosts