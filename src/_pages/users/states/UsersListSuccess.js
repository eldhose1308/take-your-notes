import React from "react";

import Flex from "_components/Misc/Flex/Flex";
import UserCard from "_modules/users/_component/UserCard";

const UsersListSuccess = ({ usersList=[] }) => {

    return (
        <div className="w-full px-2 my-4 rounded-md overflow-scroll">
            <Flex justifyContent='none' alignItems='none' className='mb-3'>
                {usersList.map((userData, index) => {
                    return (<div className="min-w-sm"><UserCard key={index} userData={userData} /></div>)
                })}
            </Flex>
        </div>
    )
}

export default UsersListSuccess;