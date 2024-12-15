import { useState } from "react";

import * as usersService from '_services/users.service';

const useUserConnections = (props) => {
    const { userId, type='followers' } = props;
    const [fetchStatus, setFetchStatus] = useState('none');

    const fetchUsersData = async (filters) => {
        try{
            setFetchStatus('loading');
            const usersData = (type === 'followers') ? await usersService.getUserFollowers(userId, filters) :  await usersService.getUserFollowings(userId, filters);
            if(usersData.length === 0){
                setFetchStatus('empty');
            }else{
                setFetchStatus('success');
            }
            return usersData;
        }catch(error){
            const { statusCode } = error || {};
            if(statusCode === 401){
                setFetchStatus('unauthorised');
                throw error;
            }else{
                setFetchStatus('failure');
            }
        }
    };

    return {
        fetchStatus,

        fetchUsersData
    }
}

export default useUserConnections;