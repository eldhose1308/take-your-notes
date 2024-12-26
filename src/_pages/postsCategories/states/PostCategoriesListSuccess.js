import React from "react";

import Flex from "_components/Misc/Flex/Flex";
import PostCategoryCard from "_modules/posts/_components/PostCategoryCard";

const PostCategoriesListSuccess = ({ categoriesList=[], hasAuthActions }) => {

    return (
        <div className="w-full px-2 my-4 rounded-md overflow-scroll">
            <Flex justifyContent='none' alignItems='none' className='mb-3'>
                {categoriesList.map((categoryData, index) => {
                    return (<div key={index} className="min-w-sm"><PostCategoryCard key={index} categoryData={categoryData} hasAuthActions={hasAuthActions} /></div>)
                })}
            </Flex>
        </div>
    )
}

export default PostCategoriesListSuccess;