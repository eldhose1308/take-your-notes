import React, { useState, useEffect } from "react";

import UsersListSuccess from "./states/UsersListSuccess";
import UserFilters from "_modules/users/_component/UserFilters";
import ShowMorePaginationWrapper from "_components/Pagination/ShowMorePaginationWrapper";

import useUsers from "_modules/users/_hooks/useUsers";
import useShowMorePagination from "_components/Pagination/_hooks/useShowMorePagination";

import { stringifyJSON } from "_utils/json";

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
        const usersFilter = { page: 1, limit: pageSize, ...userFilters };
        const users = await fetchUsersData(usersFilter);
        resetPagination();
        setData(users);
    }

    const fetchUsers = async () => {
        const usersFilter = { page: currentPage + 1, limit: pageSize, ...filters };
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
            <div className="flex my-2">
                <UserFilters onChange={handleFiltersChange} />
                <ShowMorePaginationWrapper key={`users_${stringifyJSON(filters)}`} initialFetchStatus={fetchStatus} currentPage={currentPage} fetchDataMethod={fetchUsers}>
                    <UsersListSuccess usersList={data} />
                </ShowMorePaginationWrapper>
            </div>
        </div>
    )
}

export default UsersList;