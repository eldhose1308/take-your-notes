import React, { useEffect, useContext } from "react";

import { Stencil } from "_components/Loader";
import Flex from "_components/Misc/Flex/Flex";
import UserCard from "../../_modules/users/_component/UserCard";
import { UsersContext } from "_contexts/UsersContext";

const UsersList = () => {
    const { usersList, fetchStatus } = useContext(UsersContext);

    const fetchingUsersComponent = {
        loading: <Stencil count='3' />,
        failure: <div>Failed</div>,
        success: <div className="w-full px-2 my-4 rounded-md h-screen overflow-scroll">
            <Flex justifyContent='none' alignItems='none' className='mb-3'>
                {usersList.map((userData, index) => {
                    return (<div className="min-w-sm"><UserCard key={index} userData={userData} /></div>)
                })}
            </Flex>
        </div>
    }

    return (
        <div className="text-default m-5">
            <div className="flex my-2">
                {fetchingUsersComponent[fetchStatus]}
            </div>
        </div>
    )
}

export default UsersList;