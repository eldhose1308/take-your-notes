import React from "react";


import ResponsiveDrawer from "_components/UI/Drawer/ResponsiveDrawer";
import AdditionalContentSection from "_components/Misc/AdditionalContentSection";
import AdditionalUsers from "_modules/additionalContents/AdditionalUsers";

import PostsHomeList from "./PostsHomeList";
import AdditionalCategories from "_modules/additionalContents/AdditionalCategories";

import WelcomeCard from "_modules/posts/_components/WelcomeCard";


const PostsHome = () => {


    return (
        <div className="text-default m-5">
            <div className="flex w-full px-2 my-4 rounded-md">
                {/* <div className='flex content-start w-full'> */}

                <div className="flex flex-col grow-1 basis-0">

                    {/* Move to WelcomeCard component */}
                    <WelcomeCard />
                </div>

                <div className="flex flex-col mx-2 grow-2 basis-0">
                    <PostsHomeList />
                </div>

                <ResponsiveDrawer direction='right'>
                    <div className="flex flex-col grow-1 basis-0">

                        <AdditionalContentSection
                            heading="Followed Categories"
                            renderFooter={() => <span className="flex w-full justify-center">See more</span>}
                        >
                        </AdditionalContentSection>



                        <AdditionalUsers />

                        <AdditionalContentSection
                            heading="Series's You Might Like"
                            renderFooter={() => <span className="flex w-full justify-center">See more</span>}
                        >
                        </AdditionalContentSection>


                        <AdditionalCategories />

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