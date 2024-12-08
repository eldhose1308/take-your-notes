import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import ResponsiveDrawer from "_components/UI/Drawer/ResponsiveDrawer";
import AdditionalContentSection from "_components/Misc/AdditionalContentSection";
import AdditionalUsersPosts from "_modules/additionalContents/AdditionalUsersPosts";
import AdditionalUsers from "_modules/additionalContents/AdditionalUsers";
import useComponentFetchState from "_hooks/useComponentFetchState";
import CardStencil from "_components/Loader/CardStencil";
import usePostsCategories from "_modules/posts/_hooks/usePostsCategories";
import UsersPostList from "_pages/users/UsersPostList";
import PostCategoryDetailCard from "_modules/posts/_components/PostCategoryDetailCard";
import Typography from "_components/Misc/Typography/Typography";
import CategoriesPostList from "./CategoriesPostList";


const PostsCategoriesPage = () => {
    const { categoryName } = useParams();

    const { categoryData, fetchStatus, fetchPostCategoryByName } = usePostsCategories();
    const UserDetailComponentState = useComponentFetchState({
        fetchStatus,
        loading: <CardStencil />,
        messages: {
            failure: {
                heading: 'Looks like this user is removed or no such user existed',
                description: 'Please recheck the url'
            }
        },
        success: <PostCategoryDetailCard categoryData={categoryData} />,
        failure: <PostCategoryDetailCard categoryData={categoryData} />
    });

    useEffect(() => {
        fetchPostCategoryByName(categoryName);
    }, [categoryName])

    return (
        <div className="text-default m-5">
        <div className="flex">
            <div className="flex flex-col mx-2 grow-3 basis-0">

                {UserDetailComponentState}
                <CategoriesPostList key={categoryName} categoryName={categoryName} />

            </div>

            <ResponsiveDrawer direction='right'>
                <div className="flex flex-col grow-1 basis-0">
                    <AdditionalContentSection
                        heading='People You Might Like'
                        renderFooter={() => <span className="flex w-full justify-center">See more</span>}
                    >
                        <AdditionalUsers />
                    </AdditionalContentSection>

                    <AdditionalContentSection
                        heading='Posts You Might Like'
                        renderFooter={() => <span className="flex w-full justify-center">See more</span>}
                    >
                        {/* <AdditionalUsersPosts userName={userName} /> */}
                    </AdditionalContentSection>

                </div>
            </ResponsiveDrawer>

        </div>
    </div>
    )
}

export default PostsCategoriesPage;