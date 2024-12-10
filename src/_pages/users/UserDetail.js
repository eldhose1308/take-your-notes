import React from "react";
import { useParams } from "react-router-dom";

import Separator from "_components/Misc/Separator/Separator";
import Typography from "_components/Misc/Typography/Typography";
import CardStencil from "_components/Loader/CardStencil";
import ResponsiveDrawer from "_components/UI/Drawer/ResponsiveDrawer";
import AdditionalContentSection from "_components/Misc/AdditionalContentSection";
import AdditionalUsersPosts from "_modules/additionalContents/AdditionalUsersPosts";
import AdditionalUsers from "_modules/additionalContents/AdditionalUsers";
import UserDetailSuccess from "./states/UserDetailSuccess";
import UsersPostList from "./UsersPostList";

import useTitle from "_hooks/useTitle";
import useComponentFetchState from "_hooks/useComponentFetchState";
import useUserDetails from "_modules/users/_hooks/useUserDetails";

const UserDetail = () => {
    const { id: userName } = useParams();
    const { userDetail, fetchStatus } = useUserDetails({ userName });

    useTitle(userName);

    const UserDetailComponentState = useComponentFetchState({
        fetchStatus,
        loading: <CardStencil />,
        messages: {
            failure: {
                heading: 'Looks like this user is removed or no such user existed',
                description: 'Please recheck the url'
            }
        },
        success: <UserDetailSuccess userData={userDetail} />
    });

    return (
        <div className="text-default m-5">
            <div className="flex">
                <div className="flex flex-col mx-2 grow-3 basis-0">

                    {UserDetailComponentState}
                    <div className="flex flex-col mt-4 mx-1">
                        <Separator />

                        <Typography type='span' textVariant='default' className='my-2'>
                            Collected Works of 
                            <Typography type='span' className='ml-2 my-2'>{userName}</Typography>
                        </Typography>

                        <Separator />
                    </div>

                    <UsersPostList key={userName} userName={userName} />


                </div>

                <ResponsiveDrawer direction='right'>
                    <div className="flex flex-col grow-1 basis-0">
                        
                        <AdditionalUsers />

                        <AdditionalContentSection
                            heading='Posts You Might Like'
                            renderFooter={() => <span className="flex w-full justify-center">See more</span>}
                        >
                            <AdditionalUsersPosts userName={userName} />
                        </AdditionalContentSection>

                    </div>
                </ResponsiveDrawer>

            </div>
        </div>
    )
}

export default UserDetail;