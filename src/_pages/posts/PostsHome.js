import React from "react";


import ResponsiveDrawer from "_components/UI/Drawer/ResponsiveDrawer";
import AdditionalContentSection from "_components/Misc/AdditionalContentSection";
import AdditionalUsers from "_modules/additionalContents/AdditionalUsers";

import PostsHomeList from "./PostsHomeList";
import AdditionalCategories from "_modules/additionalContents/AdditionalCategories";

import { Card, CardContent } from "_components/Misc/Card/Card";
import Typography from "_components/Misc/Typography/Typography";
import Separator from "_components/Misc/Separator/Separator";
import { Link } from "react-router-dom";
import CLIENT_ROUTES from "_routes/clientRoutes";


const PostsHome = () => {


    return (
        <div className="text-default m-5">
            <div className="flex w-full px-2 my-4 rounded-md">
                {/* <div className='flex content-start w-full'> */}

                <div className="flex flex-col grow-1 basis-0">

                    {/* Move to WelcomeCard component */}
                    <Card size='sm' rounded='lg' className='border hover-border-highlight mx-4 my-2'>
                        <CardContent>
                            <div className="p-2">
                                <Typography type='h3' size='lg' className='my-2'>Welcome to MakeMyBlogs</Typography>
                                <Typography type='h5' textVariant='normal' size='sm' className='my-2'>Your thoughts called — they want an audience!</Typography>
                                {/* Blogging: Because yelling your thoughts out the window isn’t effective. */}
                                <Typography textVariant='light' size='xs' className='my-2'>
                                    You've got ideas, stories, and opinions. We've got the platform. Together, we'll make blogging easier than deciding what to eat for dinner.
                                </Typography>
                            </div>

                            <Separator className="my-2" />

                            <div className="p-2">
                                <Link to={CLIENT_ROUTES.SIGNUP}>
                                    <div className="text-center border border-another text-accent hover-accent hover-text-custom text-xs my-2 mx-1 p-2 px-2 cursor-pointer rounded-md">
                                        <span className="">
                                            Join the Party
                                        </span>
                                    </div>
                                </Link>

                                <Link to={CLIENT_ROUTES.SIGNIN}>

                                    <div className="bg-custom text-accent hover-text-custom hover-accent text-center text-xs my-2 mx-1 p-2 px-2 cursor-pointer rounded-md">
                                        <span className="">
                                            Welcome Back
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </CardContent>

                    </Card>
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