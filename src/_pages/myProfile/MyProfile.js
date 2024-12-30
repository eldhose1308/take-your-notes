import React from "react";

import useAuth from "_hooks/useAuth";
import useMyUserDetails from "_modules/users/_hooks/useMyUserDetails";
import TabPanel from "_components/Misc/TabPanel/TabPanel";

import renderForm from "./_utils/formRenderer";
import tabItems from "./_constants/tabItems";
import UserOverviewTabs from "_modules/users/_component/UserOverviewTabs/UserOverviewTabs";
import Separator from "_components/Misc/Separator/Separator";
import ResponsiveDrawer from "_components/UI/Drawer/ResponsiveDrawer";
import UserProfileCard from "_modules/users/_component/UserProfileCard";


const MyProfile = () => {
    const { updateUserData } = useAuth()
    const { userDetail, fetchStatus, setUserDetail } = useMyUserDetails();

    const handleUpdateProfileDetails = async (data) => {
        try {
            const userData = await updateUserData(data);
            setUserDetail(previousState => ({ ...previousState, ...userData }));
        } catch (err) {
            throw err;
        }
    }

    return (
        <div className="text-default m-5">
            <div className="flex">

                <div className="flex flex-col mr-2 my-4 grow-2 basis-0">
                    
                    <UserProfileCard userDetail={userDetail} fetchStatus={fetchStatus} />
                    <Separator className='my-3' />

                    <ResponsiveDrawer direction='right'>
                        <div className="flex mx-4">
                            {fetchStatus === 'success' && <UserOverviewTabs initialTabIndex={2} userDetail={userDetail} />}
                        </div>
                    </ResponsiveDrawer>
                    
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