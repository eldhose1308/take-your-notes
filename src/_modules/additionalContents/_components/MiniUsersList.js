import UserInfo from "_modules/users/_component/UserInfo";
import CLIENT_ROUTES from "_routes/clientRoutes";
import React from "react";
import { Link } from "react-router-dom";

const MiniUsersList = (props) => {
    const { usersList = [] } = props;

    return (
        <React.Fragment>

            {usersList.map((userProfile) => {
                const { userName } = userProfile;
                const userDetailRoute = CLIENT_ROUTES.USER_DETAIL(userName);
                return (
                    <Link key={userName} to={userDetailRoute}>
                        <div className="border-b border-custom my-4">
                            <UserInfo userData={userProfile} hasFollowers />
                        </div>
                    </Link>
                )
            })}
        </React.Fragment>
    )
}

export default MiniUsersList;