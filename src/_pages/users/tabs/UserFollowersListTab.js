import React from "react";

import Separator from "_components/Misc/Separator/Separator";
import Typography from "_components/Misc/Typography/Typography";

import UserConnections from "_modules/users/_component/UserConnections";

const UserFollowersListTab = (props) => {
    const { userName, userDetail } = props;


    return (
        <div>

            <div className="flex flex-col mt-4 mx-1">
                <Separator />

                <Typography type='span' textVariant='default' className='my-2'>
                    People who follows
                    <Typography type='span' className='ml-2 my-2'>{userName}</Typography>
                </Typography>

                <Separator />
            </div>

            <UserConnections userName={userName} userDetail={userDetail} />

        </div>
    )
}

export default UserFollowersListTab;