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
import { filterQueryParamMappings } from "_modules/posts/_components/PostCategoryFilters";

const categoryListRoute = CLIENT_ROUTES.CATEGORY_LIST;

const headingMap = {
    following: "Categories You Follow",
    related: "Related Categories",
    recommended: "Categories You Might Like",
    latest: "Just Added Categories",
    random: "Random Categories",
};

const typesSupportingRefreshButton = {
    related: true,
}

const categoryFilters = filterQueryParamMappings;

const AdditionalCategories = (props) => {
    const { type = 'recommended', categorySlug } = props;
    const hasRefreshButton = !!typesSupportingRefreshButton[type];

    const [data, setData] = useState([]);
    const [counter, setCounter] = useState(0);

    const { fetchStatus, fetchPostCategories } = usePostsCategories();
    const CategoriesComponentState = useComponentFetchState({
        fetchStatus,
        loading: <Stencil />,
        empty: <EmptyFollowingCategories size='sm' />,
        unauthorised: <CategoryFollowingsUnAuthorised size='sm' />,
        success: <MiniPostCategoryList categoriesList={data} />
    });


    const fetchCategories = async (filterArgument=[]) => {
        const filters = { page: 1, limit: 6, filters: type, ...filterArgument };
        if(type === 'related') {
            if(!categorySlug){
                return;
            }
            filters.related = categorySlug;
        }
        try {
            const categories = await fetchPostCategories(filters);
            setData(categories);
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    const handleRefresh = () => {
        const randomFilters = Object.values(categoryFilters)[counter];
        setCounter(previousCounter => (previousCounter + 1) % (Object.keys(categoryFilters).length - 1));

        fetchCategories(randomFilters);
    }

    useEffect(() => {
        fetchCategories();
    }, [type, categorySlug]);

    return (
        <React.Fragment>
            <AdditionalContentSection
                renderHeader={() => <div className="flex justify-between">
                    <span>{headingMap[type]}</span>
                    {hasRefreshButton && <span onClick={handleRefresh} className="flex items-center text-secondary hover-text-default cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rotate-cw"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /></svg>
                    </span>}
                </div>}
                // heading={headingMap[type] || ''}
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