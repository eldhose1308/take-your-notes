import React, { createContext, useState, useEffect, useMemo } from 'react';

import * as usersService from '_services/users.service';

import { useToast } from './ToastProvider';

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
    const [usersList, setUsersList] = useState([]);
    const { toast } = useToast()

    // const normalisedPosts = useMemo(() => postsList.reduce((acc, postItem) => ({ ...acc, [postItem.id]: postItem }), {}), [postsList])

    useEffect(() => {
        const fetchUsers = async () => {
            const usersData = await usersService.getUsers();
            setUsersList(usersData);
        };


        fetchUsers();
    }, []);

    return (
        <UsersContext.Provider value={{ usersList }}>
            {children}
        </UsersContext.Provider>
    );
};
