import UserInfo from "_modules/users/_component/UserInfo";
import React from "react";

const userProfile = {
    fullName: 'Someone', userName: 'someone'
}
const AdditionalUsers = () => {

    return (
        <React.Fragment>
            <div className="border-b border-custom">
                <UserInfo userData={userProfile} hasFollowers />
            </div>

            <div className="border-b border-custom">
                <UserInfo userData={userProfile} hasFollowers />
            </div>

        </React.Fragment>
    )
}

export default AdditionalUsers;