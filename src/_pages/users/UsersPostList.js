import React from "react";
import { useParams } from "react-router-dom";

import PostsSuccess from "../posts/states/PostsSuccess";
import UsersPostEmpty from "./states/UsersPostEmpty";

import useUserPosts from "_modules/users/_hooks/useUserPosts";
import useTitle from "_hooks/useTitle";
import useComponentFetchState from "_hooks/useComponentFetchState";

// move it to modules
const UsersPostList = ({ userName }) => {
    // const { id: userName } = useParams();

    // useTitle(`${userName}'s Posts`);
    const { usersPostList, fetchStatus } = useUserPosts({ userName });

    const UsersPostComponentState = useComponentFetchState({ 
        fetchStatus, 
        empty: <UsersPostEmpty />, 
        success: <PostsSuccess usersPostList={usersPostList} /> 
    });


    return (
        <React.Fragment>

        {/* <div className="text-default m-5"> */}
            {/* <div className="flex w-full px-2 my-4 rounded-md h-screen overflow-scroll"> */}
                {UsersPostComponentState}
            {/* </div> */}
        {/* </div> */}
        </React.Fragment>
    )
}

export default UsersPostList