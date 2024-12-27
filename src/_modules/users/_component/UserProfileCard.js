import React from "react";

import useComponentFetchState from "_hooks/useComponentFetchState";
import CardStencil from "_components/Loader/CardStencil";
import UserDetailCard from "_modules/users/_component/UserDetailCard/UserDetailCard";

const UserProfileCard = (props) => {
    const { userDetail, fetchStatus } = props;

    const UserDetailComponentState = useComponentFetchState({
        fetchStatus,
        loading: <CardStencil />,
        messages: {
            failure: {
                heading: 'Looks like this user is removed or no such user existed',
                description: 'Please recheck the url'
            }
        },
        success: <UserDetailCard userData={userDetail} />
    });

    return (
        <React.Fragment>
            {UserDetailComponentState}
        </React.Fragment>
    )
}

export default UserProfileCard;