import React, { useEffect, useState } from "react";

import Drawer from "_components/UI/Drawer/Drawer";
import Typography from "_components/Misc/Typography/Typography";
import Separator from "_components/Misc/Separator/Separator";

import useEscClose from "_hooks/useEscClose";
import DragAndDrop from "_modules/postCategories/_components/DragAndDrop/DragAndDrop";
import PostCategory from "./PostCategory";
import { getCategoryFromLocal, setCategoryToLocal } from "_utils/user-localDB/categoryDB";


const formatCategoryToDragAndDrop = (category) => {
    const { id, categorySlug, categoryName } = category || {};
    const selectedOption = { id, categorySlug, categoryName, name: categoryName };
    return selectedOption;
}

const categoriesTracked = getCategoryFromLocal().map(formatCategoryToDragAndDrop);
const PostCategoriesFilterByUser = (props) => {
    const { onSelect = () => { } } = props;

    const [isSelectedCategoriesVisible, setIsSelectedCategoriesVisible] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState([]);

    const openCategoryInfo = () => {
        setIsSelectedCategoriesVisible(true);
    }

    const closeCategoryInfo = () => {
        setIsSelectedCategoriesVisible(false);
    }

    // useEscClose(closeCategoryInfo, isSelectedCategoriesVisible);

    const handlePostCategoryChange = (categoryId, category) => {
        const { id } = category || {};
        if (!id) { return; }

        const selectedOption = formatCategoryToDragAndDrop(category);

        setSelectedCategories((previousCategories) => {
            const categoryIndex = previousCategories.findIndex((categoryItem) => categoryItem.id === id);
            if (categoryIndex === -1) {
                return [...previousCategories, selectedOption];
            }
            return previousCategories.filter((categoryItem) => categoryItem.id !== id);
        });

    }

    const handleCategoryIds = (categories) => {
        setSelectedCategories(categories);
    }


    useEffect(() => {
        const categoryIds = selectedCategories.map((category) => category.id);
        onSelect({ categories: categoryIds });
        selectedCategories.map(setCategoryToLocal);
    }, [selectedCategories]);


    useEffect(() => {
        setSelectedCategories(categoriesTracked);
    }, []);

    if (!isSelectedCategoriesVisible) {
        return (
            <div onClick={openCategoryInfo} className="flex items-center cursor-pointer mx-2 my-1 text-xs">
                <div className="flex items-center py-1 px-2 hover-custom rounded-md">
                    Customize your feed
                    <span className="flex items-center pl-2 hover-text-info">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wrench"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
                    </span>
                </div>
            </div>
        )
    }


    return (
        <Drawer isActive={isSelectedCategoriesVisible} width='full' hide={closeCategoryInfo}>

            <div className="flex justify-between">

                <Typography textVariant='h3' size='md' className='mx-4'>Your selected categories</Typography>
                <Typography textVariant='p' variant='secondary' size='xs' className='mx-4'>
                    You can customize your feed by selecting categories you are interested in.
                </Typography>

            </div>

            <Separator className='my-2' />

            <div className="mx-4 mb-4 py-4 text-sm">

                <div className="flex">

                    <div className="border border-custom rounded-md p-2">

                        <PostCategory my={false} onChange={handlePostCategoryChange} />
                    </div>
                </div>

                <Separator className='my-2' />
                <Typography textVariant='span' size='xs' className='mb-4'>Categories that will be filtered in your feed</Typography>


                <DragAndDrop items={selectedCategories} onReordered={handleCategoryIds} />
            </div>

        </Drawer>
    )

}

export default PostCategoriesFilterByUser;