import React, { useEffect, useState } from "react";

import Typography from "_components/Misc/Typography/Typography";
import Separator from "_components/Misc/Separator/Separator";

import PostCategory from "../PostCategory";
import DragAndDrop from "_modules/postCategories/_components/DragAndDrop/DragAndDrop";

import { getCategoryFromLocal, removeCategoryFromLocal, setCategoryToLocal } from "_utils/user-localDB/categoryDB";


const formatCategoryToDragAndDrop = (category) => {
    const { id, categorySlug, categoryName } = category || {};
    const selectedOption = { id: categorySlug, categorySlug, categoryName, name: categoryName };
    return selectedOption;
}

const MAX_PREFERENCES = 10;

const CategoryFiltersWithDND = (props) => {
    const { onSelect } = props;
    
    const categoriesTracked = getCategoryFromLocal().map(formatCategoryToDragAndDrop);
    const [selectedCategories, setSelectedCategories] = useState(categoriesTracked);

    const handlePostCategoryChange = (categoryId, category) => {
        const { categorySlug } = category || {};
        if (!categorySlug) { return; }

        const selectedOption = formatCategoryToDragAndDrop(category);

        setSelectedCategories((previousCategories) => {
            const categoryIndex = previousCategories.findIndex((categoryItem) => categoryItem.categorySlug === categorySlug);
            if (categoryIndex === -1) {
                return [...previousCategories, selectedOption];
            }
            return previousCategories.filter((categoryItem) => categoryItem.categorySlug !== categorySlug);
        });

    }

    const handleCategoryIds = (categories) => {
        setSelectedCategories(categories);
    }

    const handleDeleteCategoryIdPreference = (deletedCategory, categories) => {
        setSelectedCategories(categories);
        removeCategoryFromLocal(deletedCategory);
    }

    const handleApplyFilters = () => {
        const categoryIds = selectedCategories.map((category) => category.id);
        onSelect({ users: '', subscribers: '', subscriptions: '', categories: categoryIds });
    }

    useEffect(() => {
        selectedCategories.map(setCategoryToLocal);
    }, [selectedCategories]);


    // useEffect(() => {
    //     setSelectedCategories(categoriesTracked);
    // }, []);

    return (
        <React.Fragment>

            <div className="flex justify-between">
                <div className="flex flex-col ">

                    <Typography textVariant='h3' size='md' className='mx-4'>Your selected categories</Typography>
                    <Typography textVariant='p' variant='secondary' size='xs' className='mx-4'>
                        You can customize your feed by selecting categories you are interested in.
                    </Typography>

                </div>

                <div>
                    <div onClick={handleApplyFilters} className="text-center border border-another text-accent hover-accent hover-text-custom text-xs my-2 mx-1 p-2 px-2 cursor-pointer rounded-md">
                        <span className="flex">
                            Apply Filter
                        </span>
                    </div>
                </div>
            </div>

            <Separator className='my-2' />

            <div className="mx-4 mb-4 py-4 text-sm">

                <div className="flex">

                    {selectedCategories.length < MAX_PREFERENCES ?
                        <div className="border border-custom rounded-md p-2">
                            <PostCategory my={false} onChange={handlePostCategoryChange} hasAddOption={false} />
                        </div>
                        :
                        <Typography variant='destructive' textVariant='span' size='xs' className='mb-4'>You can only select {MAX_PREFERENCES} maximum</Typography>
                    }

                </div>

                <Separator className='my-2' />
                <Typography textVariant='span' size='xs' className='mb-4'>Categories that will be filtered in your feed</Typography>


                <DragAndDrop items={selectedCategories} onReordered={handleCategoryIds} onDelete={handleDeleteCategoryIdPreference} />
            </div>

        </React.Fragment>

    )
}

export default CategoryFiltersWithDND;