import React, { createContext, useState, useEffect, useMemo } from 'react';

import * as usersService from '_services/users.service';

import { useToast } from './ToastProvider';

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
    const [usersList, setUsersList] = useState([]);
    const [fetchStatus, setFetchStatus] = useState('none');

    const { toast } = useToast()

    // const normalisedPosts = useMemo(() => postsList.reduce((acc, postItem) => ({ ...acc, [postItem.id]: postItem }), {}), [postsList])

    useEffect(() => {
        const fetchUsers = async () => {
            try{
                setFetchStatus('loading');
                const usersData = await usersService.getUsers();
                setUsersList(usersData);
                setFetchStatus('success');
            }catch(error){
                setFetchStatus('failure');
            }
        };


        fetchUsers();
    }, []);

    return (
        <UsersContext.Provider value={{ usersList, fetchStatus }}>
            {children}
        </UsersContext.Provider>
    );
};
