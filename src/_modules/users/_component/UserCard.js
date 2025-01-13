import React from "react";

import Flex from "_components/Misc/Flex/Flex";
import { Card, CardContent } from "_components/Misc/Card/Card";
import UserProfileInfo from "./UserProfileInfo";

const UserCard = ({ hasSubscribeButton=false, userData }) => {

    return (
        <Card size='sm' rounded='lg' className='border hover-border-highlight mx-4 my-2 group-hover'>
            <CardContent>
                <Flex direction='' alignItems='none' justifyContent='spaceBetween'>
                    <UserProfileInfo userData={userData} hasFollowers hasFollowButton={false} hasSubscribeButton={hasSubscribeButton} />
                </Flex>
            </CardContent>
        </Card>
    )
}

export default UserCard;