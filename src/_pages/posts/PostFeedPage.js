
import React from "react";


import ResponsiveDrawer from "_components/UI/Drawer/ResponsiveDrawer";
import AdditionalUsers from "_modules/additionalContents/AdditionalUsers";

import PostsHomeList from "./PostsHomeList";
import AdditionalCategories from "_modules/additionalContents/AdditionalCategories";

import WelcomeCard from "_modules/posts/_components/WelcomeCard";
import AdditionalSeries from "_modules/additionalContents/AdditionalSeries";
import AdditionalRecentSearch from "_modules/additionalContents/AdditionalRecentSearch";


const PostFeedPage = () => {


    return (
        <div className="text-default m-5">
            <div className="flex w-full px-2 my-4 rounded-md">

                <div className="flex flex-col grow-1 basis-0">

                    <WelcomeCard />
                </div>

                <div className="flex flex-col mx-2 grow-2 basis-0">
                    <PostsHomeList hasMultipleCategoryFilter />
                </div>

                <ResponsiveDrawer direction='right'>
                    <div className="flex flex-col grow-1 basis-0">

                        <AdditionalCategories type='following' />

                        <AdditionalUsers />

                        <AdditionalSeries />

                        <AdditionalCategories type='latest' />

                        <AdditionalRecentSearch />

                    </div>
                </ResponsiveDrawer>

            </div>
        </div>
    )
}

export default PostFeedPage;