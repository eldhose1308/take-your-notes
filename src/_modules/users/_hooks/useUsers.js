import { useState } from "react";

import * as usersService from '_services/users.service';
import useAuth from "_hooks/useAuth";

const useUsers = () => {
    const [fetchStatus, setFetchStatus] = useState('none');
    const { logout } = useAuth();

    const fetchUsersData = async (filters) => {
        try{
            setFetchStatus('loading');
            const usersData = await usersService.getUsers(filters);
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
                logout();
            }else{
                setFetchStatus('failure');
            }
            throw error;
        }
    };

    return {
        fetchStatus,

        fetchUsersData
    }
}

export default useUsers;