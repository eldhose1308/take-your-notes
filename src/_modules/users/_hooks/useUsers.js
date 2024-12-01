import { useState } from "react";

import * as usersService from '_services/users.service';

const useUsers = () => {
    const [fetchStatus, setFetchStatus] = useState('none');

    const fetchUsersData = async (filters) => {
        try{
            setFetchStatus('loading');
            const usersData = await usersService.getUsers(filters);
            setFetchStatus('success');
            return usersData;
        }catch(error){
            setFetchStatus('failure');
        }
    };

    return {
        fetchStatus,

        fetchUsersData
    }
}

export default useUsers;