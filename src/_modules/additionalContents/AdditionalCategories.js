import React, { useState, useEffect } from "react";

import useComponentFetchState from "_hooks/useComponentFetchState";
import usePostsCategories from "_modules/posts/_hooks/usePostsCategories";

import MiniPostCategoryList from "./_components/MiniPostCategoryList";
import { Stencil } from "_components/Loader";
import AdditionalContentSection from "_components/Misc/AdditionalContentSection";
import SeeMoreButton from "_components/Misc/SeeMoreButton";
import CLIENT_ROUTES from "_routes/clientRoutes";
import CategoryFollowingsUnAuthorised from "_components/DisplayStates/Error/CategoryFollowingsUnAuthorised";
import EmptyFollowingCategories from "_components/DisplayStates/Empty/EmptyFollowingCategories";

const categoryListRoute = CLIENT_ROUTES.CATEGORY_LIST;

const headingMap = {
    following: "Categories You Follow",
    recommended: "Categories You Might Like",
    latest: "Just Added Categories",
    random: "Random Categories",
};

const AdditionalCategories = (props) => {
    const { type = 'recommended' } = props;

    const [data, setData] = useState([]);

    const { categories, fetchStatus, fetchPostCategories } = usePostsCategories();
    const CategoriesComponentState = useComponentFetchState({
        fetchStatus,
        loading: <Stencil />,
        empty: <EmptyFollowingCategories size='sm' />,
        unauthorised: <CategoryFollowingsUnAuthorised size='sm' />,
        success: <MiniPostCategoryList categoriesList={data} />
    });

    useEffect(() => {

        const fetchCategories = async () => {
            const filters = { page: 1, limit: 6, filters: type };
            try {
                const categories = await fetchPostCategories(filters);
                setData(categories);
            } catch (err) {
                console.error(err);
                throw err;
            }
        }
       
        fetchCategories();
    }, [type]);

    return (
        <React.Fragment>
            <AdditionalContentSection
                heading={headingMap[type] || ''}
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