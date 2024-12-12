import React from "react";
import { Link } from "react-router-dom";

import { Stencil } from "_components/Loader";

import useUserPosts from "_modules/users/_hooks/useUserPosts";
import useComponentFetchState from "_hooks/useComponentFetchState";
import AdditionalContentSection from "_components/Misc/AdditionalContentSection";
import MiniUserPostsList from "./_components/MiniUserPostsList";
import CLIENT_ROUTES from "_routes/clientRoutes";
import SeeMoreButton from "_components/Misc/SeeMoreButton";

const AdditionalUsersPosts = (props) => {
    const { userName, fullName } = props;
    const { usersPostList, fetchStatus } = useUserPosts({ userName });

    const userDetailRoute = CLIENT_ROUTES.USER_DETAIL(userName);
    
    const UserDetailComponentState = useComponentFetchState({
        fetchStatus,
        loading: <Stencil />,
        success: <MiniUserPostsList usersPostList={usersPostList} />
    });


    return (
        <React.Fragment>
            <AdditionalContentSection
                renderHeader={() => <span className="flex">More from <Link to={userDetailRoute} className="text-bold mx-2">{fullName}</Link></span>}
                renderFooter={() => <SeeMoreButton linkUrl={userDetailRoute} />}
            >
                {UserDetailComponentState}
            </AdditionalContentSection>
        </React.Fragment>
    )
}

export default AdditionalUsersPosts;