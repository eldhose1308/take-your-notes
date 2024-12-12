import React from "react";
import { useParams } from "react-router-dom";

import TabPanel from "_components/Misc/TabPanel/TabPanel";
import CardStencil from "_components/Loader/CardStencil";
import ResponsiveDrawer from "_components/UI/Drawer/ResponsiveDrawer";
import AdditionalUsersPosts from "_modules/additionalContents/AdditionalUsersPosts";
import AdditionalUsers from "_modules/additionalContents/AdditionalUsers";
import UserDetailSuccess from "./states/UserDetailSuccess";

import useTitle from "_hooks/useTitle";
import useComponentFetchState from "_hooks/useComponentFetchState";
import useUserDetails from "_modules/users/_hooks/useUserDetails";

import renderForm from "./_utils/formRenderer";
import tabItems from "./_constants/tabItems";



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

                    <div className="flex flex-col my-4 grow-2 basis-auto">
                        <TabPanel tabItems={tabItems} renderForm={renderForm} additionalProps={{ userName, userDetail }} />
                    </div>

                </div>

                <ResponsiveDrawer direction='right'>
                    <div className="flex flex-col grow-1 basis-0">

                        <AdditionalUsers />

                        <AdditionalUsersPosts userName={userName} fullName='Show suggestions' />

                    </div>
                </ResponsiveDrawer>

            </div>
        </div>
    )
}

export default UserDetail;