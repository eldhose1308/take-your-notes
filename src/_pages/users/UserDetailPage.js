import React from "react";
import { useParams } from "react-router-dom";

import Separator from "_components/Misc/Separator/Separator";
import ResponsiveDrawer from "_components/UI/Drawer/ResponsiveDrawer";
import AdditionalUsers from "_modules/additionalContents/AdditionalUsers";

import useTitle from "_hooks/useTitle";
import useUserDetails from "_modules/users/_hooks/useUserDetails";

import UserOverviewTabs from "_modules/users/_component/UserOverviewTabs/UserOverviewTabs";
import UserProfileCard from "_modules/users/_component/UserProfileCard";


const UserDetailPage = () => {
    const { id: userName } = useParams();
    const { userDetail, fetchStatus } = useUserDetails({ userName });


    useTitle(userName);


    return (
        <div className="text-default m-5">
            <div className="flex">
                <div key={userName} className="flex flex-col mx-2 grow-3 basis-0">

                    <UserProfileCard userDetail={userDetail} fetchStatus={fetchStatus} />

                    <div className="flex flex-col my-4 grow-2 basis-auto">
                        <Separator className='my-3' />

                        {fetchStatus === 'success' && <UserOverviewTabs userDetail={userDetail} />}
                    </div>

                </div>

                <ResponsiveDrawer direction='right'>
                    <div className="flex flex-col grow-1 basis-0">

                    {fetchStatus === 'success' && <AdditionalUsers type='related' userName={userName} /> }

                    {fetchStatus === 'success' && <AdditionalUsers /> }


                        {/* <AdditionalUsersPosts userName={userName} fullName='Show suggestions' /> */}

                    </div>
                </ResponsiveDrawer>

            </div>
        </div>
    )
}

export default UserDetailPage;