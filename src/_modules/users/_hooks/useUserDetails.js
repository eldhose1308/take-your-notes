import { useState, useEffect } from "react";

import * as usersService from '_services/users.service';

const useUserDetails = ({ userName }) => {
    const [userDetail, setUserDetail] = useState({});
    const [fetchStatus, setFetchStatus] = useState('none');

    useEffect(() => {
        if (!userName) {
            return;
        }

        const fetchUsersPost = async () => {
            try{
                setFetchStatus('loading');
                const userDetailsRespnse = await usersService.getUserDetail(userName);
                setUserDetail(userDetailsRespnse);
                setFetchStatus('success');
            }catch(error){
                setFetchStatus('failure');
            }
        }

        fetchUsersPost();
    }, [userName]);

    return {
        fetchStatus,
        userDetail
    }
}

export default useUserDetails