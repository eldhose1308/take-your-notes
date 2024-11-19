import { useState, useEffect } from "react";

import * as usersService from '_services/users.service';

const useUserPosts = ({ userName }) => {
    const [usersPostList, setUsersPostList] = useState([]);
    const [fetchStatus, setFetchStatus] = useState('none');


    const fetchUsersPost = async () => {
        try{
            setFetchStatus('loading');
            const usersPostData = await usersService.getUsersPost(userName);
            setUsersPostList(usersPostData);
            if(usersPostData.length === 0){
                setFetchStatus('empty');
            }else{
                setFetchStatus('success');
            }
        }catch(error){
            setFetchStatus('failure');
        }
    }

    useEffect(() => {
        if (!userName) {
            return;
        }

        fetchUsersPost();
    }, [userName]);

    return {
        fetchStatus,
        usersPostList,

        fetchUsersPost
    }
}

export default useUserPosts