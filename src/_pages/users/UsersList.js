import React, { useState, useEffect } from "react";

import UsersListSuccess from "./states/UsersListSuccess";
import UserFilters from "_modules/users/_component/UserFilters";
import ShowMorePaginationWrapper from "_components/Pagination/ShowMorePaginationWrapper";
import Typography from "_components/Misc/Typography/Typography";

import useUsers from "_modules/users/_hooks/useUsers";
import useShowMorePagination from "_components/Pagination/_hooks/useShowMorePagination";

import { stringifyJSON } from "_utils/json";
import ModeSelector from "_components/UI/ModeSelector/ModeSelector";
import { VISIBILITY_MODES } from "_modules/posts/_constants/posts";
import FollowUnfollowToggler from "_modules/togglers/FollowUnfollowToggler";


export const visibilityModes = [
    { id: VISIBILITY_MODES.private, label: 'Private', modeElement: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye-off"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" /><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" /><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" /><path d="m2 2 20 20" /></svg> },
    { id: VISIBILITY_MODES.public, label: 'Public', modeElement: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx="12" cy="12" r="3" /></svg> },
]
const pageSize = 30;
const UsersList = () => {
    const { fetchUsersData, usersList, fetchStatus } = useUsers();
    const { currentPage, incrementPagination, resetPagination } = useShowMorePagination();

    const [filters, setFilters] = useState();
    const [data, setData] = useState([]);

    const handleFiltersChange = async (newFilters) => {
        const userFilters = { ...filters, ...newFilters };
        setFilters(userFilters);
        setData([]);
        const usersFilter = { page: 1, limit: pageSize, filters: 'following', ...userFilters };
        const users = await fetchUsersData(usersFilter);
        resetPagination();
        setData(users);
    }

    const fetchUsers = async () => {
        const usersFilter = { page: currentPage + 1, limit: pageSize, filters: 'following', ...filters };
        const users = await fetchUsersData(usersFilter);
        setData((previousUsers) => [...previousUsers, ...users]);

        incrementPagination();
        return users;
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <div className="text-default m-5">
            <div className="flex justify-between mx-8">
                <Typography size='lg' type='h2'>Users</Typography>
                <div className="flex">
                    <div className="content-center mx-2">
                        <FollowUnfollowToggler onChange={handleFiltersChange} renderLabel />
                    </div>
                    <UserFilters onChange={handleFiltersChange} />
                    <span>Search</span>
                </div>
            </div>
            <div className="flex my-2">
                <ShowMorePaginationWrapper key={`users_${stringifyJSON(filters)}`} initialFetchStatus={fetchStatus} currentPage={currentPage} fetchDataMethod={fetchUsers}>
                    <UsersListSuccess usersList={data} />
                </ShowMorePaginationWrapper>
            </div>
        </div>
    )
}

export default UsersList;