import React, { useContext } from "react";

import { UsersContext } from "_contexts/UsersContext";
import useComponentFetchState from "_hooks/useComponentFetchState";
import UsersListSuccess from "./states/UsersListSuccess";

const UsersList = () => {
    const { usersList, fetchStatus } = useContext(UsersContext);
    const UsersComponentState = useComponentFetchState({ 
        fetchStatus, 
        success: <UsersListSuccess usersList={usersList} /> 
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