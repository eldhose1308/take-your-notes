import React from "react";


import { Card, CardContent } from "_components/Misc/Card/Card";
import Typography from "_components/Misc/Typography/Typography";
import Separator from "_components/Misc/Separator/Separator";
import { Link } from "react-router-dom";
import CLIENT_ROUTES from "_routes/clientRoutes";
import useAuth from "_hooks/useAuth";

const WelcomeCard = () => {
    const { isAuthenticated } = useAuth()

    return (
        <Card size='sm' rounded='lg' className='border hover-border-highlight mx-4 my-2'>
            {!isAuthenticated ? (<CardContent>
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
            ) : (
                <CardContent>
                    <div className="p-2">
                        <Typography type='h3' size='lg' className='my-2'>Welcome to MakeMyBlogs</Typography>
                        <Typography type='h5' textVariant='normal' size='sm' className='my-2'>Hi Eldhose, ready to blog today?</Typography>
                        {/* Blogging: Because yelling your thoughts out the window isn’t effective. */}
                        <Typography textVariant='light' size='xs' className='my-2'>
                            Your blog is waiting, and so is your audience. Ready to share your next big idea?
                        </Typography>
                    </div>

                    <Separator className="my-2" />

                    <div className="p-2">
                        <Link to={CLIENT_ROUTES.MY_POST}>
                            <div className="text-center border border-another text-accent hover-accent hover-text-custom text-xs my-2 mx-1 p-2 px-2 cursor-pointer rounded-md">
                                <span className="">
                                    See What I've Shared
                                </span>
                            </div>
                        </Link>

                        <Link to={CLIENT_ROUTES.POST_CREATE}>

                            <div className="bg-custom text-accent hover-text-custom hover-accent text-center text-xs my-2 mx-1 p-2 px-2 cursor-pointer rounded-md">
                                <span className="">
                                    Write Your Next Story
                                </span>
                            </div>
                        </Link>
                    </div>
                </CardContent>
            )}
        </Card>
    )
}

export default WelcomeCard;