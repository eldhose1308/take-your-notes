import React from "react";
import { Link } from "react-router-dom";

const MiniPostCategoryList = (props) => {
    const { categoriesList = [] } = props;

    return (
        <React.Fragment>
            {categoriesList.map((category) => {
                const { categoryName, categorySlug } = category;
                return (<Link key={categorySlug} to=''>
                    <div className="flex flex-col my-3 p-1 border-b border-custom hover-custom rounded-md">
                        <span className="text-bold my-1">{categoryName}</span>
                    </div>
                </Link>)

            })}
        </React.Fragment>
    )
}

export default MiniPostCategoryList;