import useTitle from "_hooks/useTitle";
import CLIENT_ROUTES from "_routes/clientRoutes";
import React from "react";
import { Link, useParams } from "react-router-dom";

const UserDetail = () => {
    const { id: userName } = useParams();
    useTitle(userName);

    const userDetailRoute = CLIENT_ROUTES.USER_POSTS(userName);

    return (
        <div className="text-default m-5">
            <div className="flex flex-col">
                UserName: {userName}
                <Link to={userDetailRoute}>
                    See Posts
                </Link>
            </div>
        </div>
    )
}

export default UserDetail;