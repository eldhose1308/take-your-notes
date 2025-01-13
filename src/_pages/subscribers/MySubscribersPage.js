import React, { useEffect, useState } from "react";

import UserFilters from "_modules/users/_component/UserFilters";
import ShowMorePaginationWrapper from "_components/Pagination/ShowMorePaginationWrapper";
import Typography from "_components/Misc/Typography/Typography";

import UsersSubscriptionUnAuthorised from "_components/DisplayStates/Error/UsersSubscriptionUnAuthorised";
import EmptySubscribersUsers from "_components/DisplayStates/Empty/EmptySubscribersUsers";

import UsersListSuccess from "_pages/users/states/UsersListSuccess";

import useUsers from "_modules/users/_hooks/useUsers";
import useShowMorePagination from "_components/Pagination/_hooks/useShowMorePagination";


import { stringifyJSON } from "_utils/json";

const pageSize = 30;

const MySubscribersPage = () => {
    const { fetchUsersData, fetchStatus } = useUsers();
    const { currentPage, isAllDataFetched, incrementPagination, checkIfAllDataFetched, resetPagination } = useShowMorePagination({ pageSize });

    const [filters, setFilters] = useState({ filters: 'subscriber' });
    const [data, setData] = useState([]);

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


    const fetchUsers = async () => {
        const usersFilter = { page: currentPage + 1, limit: pageSize, ...filters };
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

    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <div className="text-default m-5">
            <div className="flex mx-8">
                <div className="flex justify-between w-full mx-4">
                    <Typography size='lg' type='h2'>My Subscribers</Typography>
                </div>

                <div className="flex justify-between w-full my-2">
                    <React.Fragment>
                        <UserFilters onChange={handleFiltersChange} />
                    </React.Fragment>
                </div>
            </div>
            <div className="flex my-2">
                {/* {!(fetchStatus === 'loading' || fetchStatus === 'success'|| fetchStatus === 'none') && (CategoriesComponentState)} */}

                {/* {authorisedForListing ? ( */}
                <ShowMorePaginationWrapper EmptyState={EmptySubscribersUsers} UnauthorisedState={UsersSubscriptionUnAuthorised} key={`users_${stringifyJSON(filters)}`} isEmpty={fetchStatus !== 'success'} initialFetchStatus={fetchStatus} currentPage={currentPage} isAllDataFetched={isAllDataFetched} fetchDataMethod={fetchUsers}>
                {/* {CategoriesComponentState} */}
                    <UsersListSuccess usersList={data} />
                </ShowMorePaginationWrapper>
                {/* ) : (
                    <FollowersUnAuthorised />
                )} */}
            </div>
        </div>
    )
}

export default MySubscribersPage;