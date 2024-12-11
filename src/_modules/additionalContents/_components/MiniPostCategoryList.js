import React from "react";
import PostCategoryBadge from "_modules/postCategories/_components/PostCategoryBadge";

const MiniPostCategoryList = (props) => {
    const { categoriesList = [] } = props;

    return (
        <React.Fragment>
            {categoriesList.map((category) => {
                const { categoryName, categorySlug } = category;

                return (
                    <PostCategoryBadge categoryName={categoryName} categorySlug={categorySlug} />)

            })}
        </React.Fragment>
    )
}

export default MiniPostCategoryList;