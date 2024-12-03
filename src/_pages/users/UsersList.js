import React, { useState, useEffect } from "react";

import UsersListSuccess from "./states/UsersListSuccess";
import UserFilters from "_modules/users/_component/UserFilters";
import ShowMorePaginationWrapper from "_components/Pagination/ShowMorePaginationWrapper";
import Typography from "_components/Misc/Typography/Typography";
import FollowersUnAuthorised from "_components/DisplayStates/Error/FollowersUnAuthorised";

import useUsers from "_modules/users/_hooks/useUsers";
import useShowMorePagination from "_components/Pagination/_hooks/useShowMorePagination";

import { stringifyJSON } from "_utils/json";
import FollowUnfollowToggler from "_modules/togglers/FollowUnfollowToggler";
import { getUserDetailsOfCurrentUser } from "_utils/userAuth";


const pageSize = 30;

const UsersList = () => {
    const { fetchUsersData, fetchStatus } = useUsers();
    const { currentPage, incrementPagination, resetPagination } = useShowMorePagination();

    const [filters, setFilters] = useState({ filters: 'following' });
    const [data, setData] = useState([]);

    const { userName } = getUserDetailsOfCurrentUser();
    const unAuthorisedForListing = !(filters.filters === 'following' || !!userName);

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
                        <FollowUnfollowToggler onChange={handleFiltersChange} isAuthenticated={!!userName} renderLabel />
                    </div>

                    {unAuthorisedForListing && (
                        <React.Fragment>
                            <UserFilters onChange={handleFiltersChange} />
                            <span>Search</span>
                        </React.Fragment>
                    )}
                </div>
            </div>
            <div className="flex my-2">
                {unAuthorisedForListing ? (
                    <ShowMorePaginationWrapper key={`users_${stringifyJSON(filters)}`} initialFetchStatus={fetchStatus} currentPage={currentPage} fetchDataMethod={fetchUsers}>
                        <UsersListSuccess usersList={data} />
                    </ShowMorePaginationWrapper>
                ) : (
                    <FollowersUnAuthorised />
                )}
            </div>
        </div>
    )
}

export default UsersList;