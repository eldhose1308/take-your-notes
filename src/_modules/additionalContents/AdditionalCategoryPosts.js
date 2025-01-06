import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Stencil } from "_components/Loader";

import useComponentFetchState from "_hooks/useComponentFetchState";
import AdditionalContentSection from "_components/Misc/AdditionalContentSection";
import MiniUserPostsList from "./_components/MiniUserPostsList";
import CLIENT_ROUTES from "_routes/clientRoutes";
import SeeMoreButton from "_components/Misc/SeeMoreButton";
import usePosts from "_modules/posts/_hooks/usePosts";

const AdditionalCategoryPosts = (props) => {
    const { categorySlug, categoryName } = props;
    const { fetchPostsData, fetchStatus } = usePosts();
    const [postsData, setPostsData] = useState();

    const userDetailRoute = CLIENT_ROUTES.CATEGORY_DETAIL(categorySlug);

    const UserDetailComponentState = useComponentFetchState({
        fetchStatus,
        loading: <Stencil />,
        success: <MiniUserPostsList usersPostList={postsData} />
    });

    const fetchPosts = async () => {        
        try {
            const usersList = await fetchPostsData({ page: 1, limit: 6, category: categorySlug });
            setPostsData(usersList);
        } catch (error) {
            console.log(error);
        }
    }

      useEffect(() => {
            if (!categorySlug) {
                return;
            }
    
            fetchPosts();
        }, [categorySlug]);

    return (
        <React.Fragment>
            <AdditionalContentSection
                renderHeader={() => <span className="flex">More in <Link to={userDetailRoute} className="text-bold mx-2">{categoryName}</Link></span>}
                renderFooter={() => <SeeMoreButton linkUrl={userDetailRoute} />}
            >
                {UserDetailComponentState}
            </AdditionalContentSection>
        </React.Fragment>
    )
}

export default AdditionalCategoryPosts;