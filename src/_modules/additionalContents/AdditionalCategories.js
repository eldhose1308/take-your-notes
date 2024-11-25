import useComponentFetchState from "_hooks/useComponentFetchState";
import usePostsCategories from "_modules/posts/_hooks/usePostsCategories";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import MiniPostCategoryList from "./_components/MiniPostCategoryList";
import { Stencil } from "_components/Loader";

const AdditionalCategories = () => {

    const { categories, fetchStatus, fetchPostCategories } = usePostsCategories();
    const CategoriesComponentState = useComponentFetchState({
        fetchStatus,
        loading: <Stencil />,
        success: <MiniPostCategoryList categoriesList={categories} />
    });

    useEffect(() => {
        const filters = { page: 1, limit: 7 };
        fetchPostCategories(filters);
    },[])

    return (
        <React.Fragment>
            <div className="border-b border-custom">
                {CategoriesComponentState}
            </div>
        </React.Fragment>
    )
}

export default AdditionalCategories;