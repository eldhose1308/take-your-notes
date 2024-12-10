import { useState, useEffect } from "react";

import * as usersService from '_services/users.service';

const useUserDetails = ({ userName }) => {
    const [userDetail, setUserDetail] = useState({});
    const [fetchStatus, setFetchStatus] = useState('none');

    useEffect(() => {
        if (!userName) {
            return;
        }

        const fetchUsersDetails = async () => {
            try{
                setFetchStatus('loading');
                const userDetailsRespnse = await usersService.getUserDetail(userName);
                setUserDetail(userDetailsRespnse);
                setFetchStatus('success');
            }catch(error){
                setFetchStatus('failure');
            }
        }

        fetchUsersDetails();
    }, [userName]);

    return {
        fetchStatus,
        userDetail
    }
}

export default useUserDetails