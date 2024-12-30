import { useState, useEffect } from "react";

import * as usersService from '_services/users.service';
import useAuth from "_hooks/useAuth";

const useMyUserDetails = () => {
    const [userDetail, setUserDetail] = useState({});
    const [fetchStatus, setFetchStatus] = useState('none');
    const { logout } = useAuth();

    useEffect(() => {
        const fetchUsersPost = async () => {
            try{
                setFetchStatus('loading');
                const userDetailsRespnse = await usersService.getMyUserDetail();
                setUserDetail(userDetailsRespnse);
                setFetchStatus('success');
            }catch(error){
                const { statusCode } = error || {};
                if(statusCode === 401){
                    logout();
                    // setFetchStatus('empty');
                    return;
                }
                // alert(JSON.stringify(error))
                setFetchStatus('failure');
            }
        }

        fetchUsersPost();
    }, []);

    return {
        fetchStatus,
        userDetail,

        setUserDetail
    }
}

export default useMyUserDetails