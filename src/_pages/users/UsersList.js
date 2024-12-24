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

import useComponentFetchState from "_hooks/useComponentFetchState";
import { Stencil } from "_components/Loader";
import EmptyFollowingUsers from "_components/DisplayStates/Empty/EmptyFollowingUsers";


const pageSize = 30;

const UsersList = () => {
    const { fetchUsersData, fetchStatus } = useUsers();
    const { currentPage, isAllDataFetched, incrementPagination, checkIfAllDataFetched, resetPagination } = useShowMorePagination({ pageSize });

    const [filters, setFilters] = useState({ filters: 'explore' });
    const [data, setData] = useState([]);

    // const CategoriesComponentState = useComponentFetchState({
    //     fetchStatus,
    //     empty: <EmptyFollowingUsers />,
    //     unauthorised: <FollowersUnAuthorised />,
    // });


    const { userName } = getUserDetailsOfCurrentUser();
    const authorisedForListing = !(filters.filters === 'following' && !userName) && fetchStatus !== 'unauthorised';

    const handleFiltersChange = async (newFilters) => {
        const userFilters = { ...filters, ...newFilters };
        setFilters(userFilters);
        setData([]);
        resetPagination();
        const usersFilter = { page: 1, limit: pageSize, ...userFilters };
        try{
            const users = await fetchUsersData(usersFilter);
            checkIfAllDataFetched(users);
            setData(users);
        }catch(err){
            console.error(err);
        }
    }

    const fetchUsers = async () => {
        const usersFilter = { page: currentPage + 1, limit: pageSize,  ...filters };
        try{

            const users = await fetchUsersData(usersFilter);
            setData((previousUsers) => [...previousUsers, ...users]);
            
            incrementPagination();
            checkIfAllDataFetched(users);
            return users;
        }catch(err){
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
                    <Typography size='lg' type='h2'>Users</Typography>
                    <div className="content-center mx-2">
                        <FollowUnfollowToggler onChange={handleFiltersChange} isAuthenticated={!!userName} renderLabel />
                    </div>
                </div>

                <div className="flex justify-between w-full my-2">
                    {authorisedForListing && (
                        <React.Fragment>
                            <UserFilters onChange={handleFiltersChange} />
                        </React.Fragment>
                    )}
                </div>
            </div>
            <div className="flex my-2">
                {/* {!(fetchStatus === 'loading' || fetchStatus === 'success'|| fetchStatus === 'none') && (CategoriesComponentState)} */}

                {/* {authorisedForListing ? ( */}
                    <ShowMorePaginationWrapper EmptyState={EmptyFollowingUsers} UnauthorisedState={FollowersUnAuthorised} key={`users_${stringifyJSON(filters)}`} isEmpty={fetchStatus !== 'success'} initialFetchStatus={fetchStatus} currentPage={currentPage} isAllDataFetched={isAllDataFetched} fetchDataMethod={fetchUsers}>
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

export default UsersList;