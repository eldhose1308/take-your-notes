import React from "react";

import UserDetailSuccess from "_pages/users/states/UserDetailSuccess";

import useAuth from "_hooks/useAuth";
import useMyUserDetails from "_modules/users/_hooks/useMyUserDetails";
import CardStencil from "_components/Loader/CardStencil";
import useComponentFetchState from "_hooks/useComponentFetchState";
import TabPanel from "_components/Misc/TabPanel/TabPanel";

import renderForm from "./_utils/formRenderer";
import tabItems from "./_constants/tabItems";


const MyProfile = () => {
    const { updateUserData } = useAuth()
    const { userDetail, fetchStatus } = useMyUserDetails();

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

    const handleUpdateProfileDetails = async (data) => {
        try {
            await updateUserData(data);
        } catch (err) {
            throw err;
        }
    }

    return (
        <div className="text-default m-5">
            <div className="flex">

                <div className="flex flex-col mr-2 my-4 grow-2 basis-0">
                    {UserDetailComponentState}
                </div>

                <div className="flex flex-col my-4 grow-2 basis-auto">

                    <div className="bg-default p-1 text-sm rounded-md">
                        <TabPanel tabItems={tabItems} renderForm={renderForm} additionalProps={{ identityData: userDetail, onSave: handleUpdateProfileDetails, onRemove: handleUpdateProfileDetails }} />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default MyProfile