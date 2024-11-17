import { useState, useEffect } from "react";

import * as usersService from '_services/users.service';

const useMyUserDetails = () => {
    const [userDetail, setUserDetail] = useState({});
    const [fetchStatus, setFetchStatus] = useState('none');

    useEffect(() => {
        const fetchUsersPost = async () => {
            try{
                setFetchStatus('loading');
                const userDetailsRespnse = await usersService.getMyUserDetail();
                setUserDetail(userDetailsRespnse);
                setFetchStatus('success');
            }catch(error){
                setFetchStatus('failure');
            }
        }

        fetchUsersPost();
    }, []);

    return {
        fetchStatus,
        userDetail
    }
}

export default useMyUserDetails