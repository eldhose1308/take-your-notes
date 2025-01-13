import React from "react";

import Flex from "_components/Misc/Flex/Flex";
import UserCard from "_modules/users/_component/UserCard";

const UsersListSuccess = ({ usersList=[], hasSubscribeButton=false }) => {

    return (
        <div className="w-full px-2 my-4 rounded-md overflow-scroll">
            <Flex justifyContent='none' alignItems='none' className='mb-3'>
                {usersList.map((userData, index) => {
                    const { userName } = userData;
                    return (<div key={`userCard_${userName}`} className="min-w-sm"><UserCard userData={userData} hasSubscribeButton={hasSubscribeButton} /></div>)
                })}
            </Flex>
        </div>
    )
}

export default UsersListSuccess;