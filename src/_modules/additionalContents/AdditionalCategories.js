import useComponentFetchState from "_hooks/useComponentFetchState";
import usePostsCategories from "_modules/posts/_hooks/usePostsCategories";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import MiniPostCategoryList from "./_components/MiniPostCategoryList";
import { Stencil } from "_components/Loader";
import AdditionalContentSection from "_components/Misc/AdditionalContentSection";
import SeeMoreButton from "_components/Misc/SeeMoreButton";
import CLIENT_ROUTES from "_routes/clientRoutes";

const categoryListRoute = CLIENT_ROUTES.CATEGORY_LIST;

const AdditionalCategories = () => {

    const { categories, fetchStatus, fetchPostCategories } = usePostsCategories();
    const CategoriesComponentState = useComponentFetchState({
        fetchStatus,
        loading: <Stencil />,
        success: <MiniPostCategoryList categoriesList={categories} />
    });

    useEffect(() => {
        const filters = { page: 1, limit: 6 };
        fetchPostCategories(filters);
    }, [])

    return (
        <React.Fragment>
            <AdditionalContentSection
                heading='Categories You Might Like'
                renderFooter={() => <SeeMoreButton linkUrl={categoryListRoute} />}
            >
                <div className="border-b border-custom">
                    {CategoriesComponentState}
                </div>
            </AdditionalContentSection>
        </React.Fragment>
    )
}

export default AdditionalCategories;