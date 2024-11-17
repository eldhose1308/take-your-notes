import React from "react";
import { useParams } from "react-router-dom";

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
                    <UsersPostList userName={userName} />


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
                            <AdditionalUsersPosts userName={userName} />
                        </AdditionalContentSection>

                    </div>
                </ResponsiveDrawer>

            </div>
        </div>
    )
}

export default UserDetail;