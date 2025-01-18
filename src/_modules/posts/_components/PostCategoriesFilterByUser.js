import React, { useState } from "react";

import Drawer from "_components/UI/Drawer/Drawer";
import Typography from "_components/Misc/Typography/Typography";
import Separator from "_components/Misc/Separator/Separator";

import TabPanel from "_components/Misc/TabPanel/TabPanel";

import renderForm from "./feedFilters/_utils/formRenderer";
import tabItems from "./feedFilters/_constants/tabItems";
import { getLastSavedPreference } from "_utils/user-localDB/feedPreferenceDB";


const PostCategoriesFilterByUser = (props) => {
    const { onSelect = () => { } } = props;

    const lastSavedPreference = getLastSavedPreference();
    const [isFeedFiltersVisible, setIsFeedFiltersVisible] = useState(false);

    const openCategoryInfo = () => {
        setIsFeedFiltersVisible(true);
    }

    const closeCategoryInfo = () => {
        setIsFeedFiltersVisible(false);
    }

    const handleSelectFilters = (queryParams) => {
        onSelect(queryParams);
        closeCategoryInfo();
    }

    // useEscClose(closeCategoryInfo, isFeedFiltersVisible);


    if (!isFeedFiltersVisible) {
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
        <Drawer isActive={isFeedFiltersVisible} width='full' hide={closeCategoryInfo}>
            <div className="flex justify-between">
                <Typography textVariant='h3' size='md' className='mx-4'>Filter your feed based on</Typography>
            </div>
            <Separator className='my-2' />

            <TabPanel initialTab={lastSavedPreference} tabItems={tabItems} renderForm={renderForm} additionalProps={{ onSelect: handleSelectFilters }} />

        </Drawer>
    )

}

export default PostCategoriesFilterByUser;