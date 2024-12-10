import Typography from "_components/Misc/Typography/Typography";
import PostCategoryBadge from "_modules/postCategories/_components/PostCategoryBadge";
import CLIENT_ROUTES from "_routes/clientRoutes";
import React from "react";
import { Link } from "react-router-dom";

const MiniPostCategoryList = (props) => {
    const { categoriesList = [] } = props;

    return (
        <React.Fragment>
            {categoriesList.map((category) => {
                const { categoryName, categorySlug } = category;
                const categoryDetailRoute = CLIENT_ROUTES.CATEGORY_DETAIL(categorySlug);

                return (
                    <PostCategoryBadge categoryName={categoryName} linkUrl={categoryDetailRoute} />)

            })}
        </React.Fragment>
    )
}

export default MiniPostCategoryList;