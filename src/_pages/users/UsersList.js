import React, { useContext } from "react";

import { UsersContext } from "_contexts/UsersContext";
import useComponentFetchState from "_hooks/useComponentFetchState";
import UsersListSuccess from "./states/UsersListSuccess";
import PaginationWrapper from "_components/Pagination/PaginationWrapper";

const UsersList = () => {
    // move to hook
    const { fetchUsers, usersList, fetchStatus } = useContext(UsersContext);
    const UsersComponentState = useComponentFetchState({ 
        fetchStatus, 
        success: <PaginationWrapper initialData={usersList} fetchDataMethod={fetchUsers} >{({ data }) => <UsersListSuccess usersList={data} />}</PaginationWrapper> 
    });


    return (
        <div className="text-default m-5">
            <div className="flex my-2">
                {UsersComponentState}
            </div>
        </div>
    )
}

export default UsersList;