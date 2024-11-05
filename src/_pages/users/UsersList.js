import React, { useEffect, useContext } from "react";

import Flex from "_components/Misc/Flex/Flex";
import UserCard from "../../_modules/users/_component/UserCard";
import { UsersContext } from "_contexts/UsersContext";

const UsersList = () => {
    const { usersList } = useContext(UsersContext);


    return (
        <div className="text-default m-5">
            <div className="flex my-2">
                <div className="w-full px-2 my-4 rounded-md h-screen overflow-scroll">
                    <Flex justifyContent='none' alignItems='none' className='mb-3'>
                        {usersList.map((userData, index) => {
                            return (<div className="min-w-md"><UserCard key={index} userData={userData} /></div>)
                        })}
                    </Flex>
                </div>
            </div>
        </div>
    )
}

export default UsersList;