import React, { useEffect, useState } from "react";

import Typography from "_components/Misc/Typography/Typography";
import Separator from "_components/Misc/Separator/Separator";

import DragAndDrop from "_modules/postCategories/_components/DragAndDrop/DragAndDrop";

import { getUserFeedPreferenceFromLocal, removeUserFeedPreferenceFromLocal, setUserFeedPreferenceToLocal } from "_utils/user-localDB/usersFeedDB";
import UsersDropdown from "_modules/users/_component/UsersDropdown";


const formatCategoryToDragAndDrop = (category) => {
    const { id, userName, fullName } = category || {};
    const selectedOption = { id, userName, fullName, name: fullName };
    return selectedOption;
}

const categoriesTracked = getUserFeedPreferenceFromLocal().map(formatCategoryToDragAndDrop);
const MAX_PREFERENCES = 10;

const UsersFiltersWithDND = (props) => {
    const { onSelect } = props;

    const [selectedCategories, setSelectedCategories] = useState([]);

    const handlePostCategoryChange = (categoryId, category) => {
        const { userName: id } = category || {};
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

    const handleDeleteCategoryIdPreference = (deletedCategory, categories) => {
        setSelectedCategories(categories);
        removeUserFeedPreferenceFromLocal(deletedCategory);
    }

    const handleApplyFilters = () => {
        const categoryIds = selectedCategories.map((category) => category.id);
        onSelect({ categories: '', subscribers: '', subscriptions: '', users: categoryIds });
    }

    useEffect(() => {
        selectedCategories.map(setUserFeedPreferenceToLocal);
    }, [selectedCategories]);


    useEffect(() => {
        setSelectedCategories(categoriesTracked);
    }, []);

    return (
        <React.Fragment>

            <div className="flex justify-between">

                <div className="flex flex-col ">
                    <Typography textVariant='h3' size='md' className='mx-4'>Your selected users</Typography>
                    <Typography textVariant='p' variant='secondary' size='xs' className='mx-4'>
                        You can customize your feed by selecting users you are interested in.
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
                            <UsersDropdown my={false} onChange={handlePostCategoryChange} />
                        </div>
                        :
                        <Typography variant='destructive' textVariant='span' size='xs' className='mb-4'>You can only select {MAX_PREFERENCES} maximum</Typography>
                    }

                </div>

                <Separator className='my-2' />
                <Typography textVariant='span' size='xs' className='mb-4'>Users that will be filtered in your feed</Typography>
                {selectedCategories.length >= MAX_PREFERENCES && <Typography variant='destructive' textVariant='span' size='xs' className='mb-4'>You can only select {MAX_PREFERENCES} maximum</Typography>}


                <DragAndDrop items={selectedCategories} onReordered={handleCategoryIds} onDelete={handleDeleteCategoryIdPreference} />
            </div>

        </React.Fragment>

    )
}

export default UsersFiltersWithDND;