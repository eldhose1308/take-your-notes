import React from "react";


import ResponsiveDrawer from "_components/UI/Drawer/ResponsiveDrawer";
import AdditionalContentSection from "_components/Misc/AdditionalContentSection";
import AdditionalUsers from "_modules/additionalContents/AdditionalUsers";

import PostsHomeList from "./PostsHomeList";
import AdditionalCategories from "_modules/additionalContents/AdditionalCategories";


const PostsHome = () => {

    // const { fetchStatus, postsList, fetchPostsData } = usePosts();
    // const UsersPostComponentState = useComponentFetchState({
    //     fetchStatus,
    //     loading: <CardStencil count='3' />,
    //     empty: <UsersPostEmpty />,
    //     // success: <ShowMorePaginationWrapper initialData={postsList} fetchDataMethod={fetchPostsData} >{({ data }) => <PostsSuccess usersPostList={data} fetchDataMethod={fetchPostsData} />}</ShowMorePaginationWrapper>
    // });


    return (
        <div className="text-default m-5">
            <div className="flex w-full px-2 my-4 rounded-md">
                {/* <div className='flex content-start w-full'> */}
                <div className="flex flex-col mx-2 grow-3 basis-0">
                    <PostsHomeList />
                    {/* <PostFilters onChange={fetchPostsData} />
                    <ShowMorePaginationWrapper initialData={postsList} fetchDataMethod={fetchPostsData} >{({ data }) => <PostsSuccess usersPostList={data} fetchDataMethod={fetchPostsData} />}</ShowMorePaginationWrapper> */}
                    {/* {UsersPostComponentState} */}
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
                            heading="Series's You Might Like"
                            renderFooter={() => <span className="flex w-full justify-center">See more</span>}
                        >
                        </AdditionalContentSection>

                        <AdditionalContentSection
                            heading='Categories You Might Like'
                            renderFooter={() => <span className="flex w-full justify-center">See more</span>}
                        >
                            <AdditionalCategories />
                        </AdditionalContentSection>

                        <AdditionalContentSection
                            heading='Tags You Might Like'
                            renderFooter={() => <span className="flex w-full justify-center">See more</span>}
                        >
                        </AdditionalContentSection>


                        <AdditionalContentSection
                            heading='Recently searched by others'
                            renderFooter={() => <span className="flex w-full justify-center">See more</span>}
                        >
                        </AdditionalContentSection>



                    </div>
                </ResponsiveDrawer>

            </div>
        </div>
    )
}

export default PostsHome;