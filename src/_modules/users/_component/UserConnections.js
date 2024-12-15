import React, { useState, useEffect } from "react";

import UsersListSuccess from "_pages/users/states/UsersListSuccess";

import useShowMorePagination from "_components/Pagination/_hooks/useShowMorePagination";
import useComponentFetchState from "_hooks/useComponentFetchState";
import { Stencil } from "_components/Loader";
import EmptyFollowingUsers from "_components/DisplayStates/Empty/EmptyFollowingUsers";
import FollowersUnAuthorised from "_components/DisplayStates/Error/FollowersUnAuthorised";
import ShowMorePaginationWrapper from "_components/Pagination/ShowMorePaginationWrapper";
import UserFilters from "_modules/users/_component/UserFilters";
import useUserConnections from "_modules/users/_hooks/useUserConnections";

const pageSize = 30;

const UserConnections = (props) => {
    const { userName, userDetail, type } = props;
    const { id: userId } = userDetail || {};

    const { fetchUsersData, fetchStatus } = useUserConnections({ userId, type });
    const { currentPage, isAllDataFetched, incrementPagination, checkIfAllDataFetched, resetPagination } = useShowMorePagination({ pageSize });

    const [filters, setFilters] = useState({});
    const [data, setData] = useState([]);


    const CategoriesComponentState = useComponentFetchState({
        fetchStatus,
        loading: <Stencil />,
        empty: <EmptyFollowingUsers />,
        unauthorised: <FollowersUnAuthorised />,
        success: <UsersListSuccess usersList={data} />
    });



    const fetchUsers = async () => {
        const usersFilter = { page: currentPage + 1, limit: pageSize };
        try {

            const users = await fetchUsersData(usersFilter);
            setData((previousUsers) => [...previousUsers, ...users]);

            incrementPagination();
            checkIfAllDataFetched(users);
            return users;
        } catch (err) {
            console.error(err);
        }
    }

    const handleFiltersChange = async (newFilters) => {
        const userFilters = { ...filters, ...newFilters };
        setFilters(userFilters);
        setData([]);
        resetPagination();
        const usersFilter = { page: 1, limit: pageSize, ...userFilters };
        try {
            const users = await fetchUsersData(usersFilter);
            checkIfAllDataFetched(users);
            setData(users);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <React.Fragment>
            {fetchStatus !== 'unauthorised' && <div className="flex justify-between w-full my-2">
                <UserFilters onChange={handleFiltersChange} />
            </div>}

            <div className='flex content-start w-full'>
                <React.Fragment>
                    <ShowMorePaginationWrapper key={`users_${userName}`} isEmpty={fetchStatus !== 'success'} initialFetchStatus={fetchStatus} currentPage={currentPage} isAllDataFetched={isAllDataFetched} fetchDataMethod={fetchUsers}>
                        {CategoriesComponentState}
                    </ShowMorePaginationWrapper>
                </React.Fragment>
            </div>
        </React.Fragment>
    )
}

export default UserConnections;