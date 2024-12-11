import React, { useState } from "react";
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
import DisplayImageForm from "_pages/myProfile/forms/DisplayImageForm";
import IdentityForm from "_pages/myProfile/forms/IdentityForm";
import ExtraInformationForm from "_pages/myProfile/forms/ExtraInformationForm";
import UsersPostListTab from "./tabs/UsersPostListTab";


const tabItems = [
    { id: 'posts', label: 'Posts', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rss"><path d="M4 11a9 9 0 0 1 9 9" /><path d="M4 4a16 16 0 0 1 16 16" /><circle cx="5" cy="19" r="1" /></svg> },
    { id: 'followers', label: 'Followers', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round-pen"><path d="M2 21a8 8 0 0 1 10.821-7.487"/><path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/><circle cx="10" cy="8" r="5"/></svg> },
    { id: 'followings', label: 'Followings', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" /></svg> },
    { id: 'categories', label: 'Categories', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-menu"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M7 8h10" /><path d="M7 12h10" /><path d="M7 16h10" /></svg> },
];


const renderForm = (selectedTab, props) => {
    switch (selectedTab) {
        case 'posts':
            return <UsersPostListTab {...props} />;
        case 'identity':
            return <IdentityForm {...props} />;
        case 'extra':
            return <ExtraInformationForm {...props} />;
        default:
            return <p>Not Available</p>
    }
}

const UserDetail = () => {
    const { id: userName } = useParams();
    const { userDetail, fetchStatus } = useUserDetails({ userName });

    const [selectedTab, setSelectedTab] = useState('posts');

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
                    {/* <div className="flex flex-col mt-4 mx-1">
                        <Separator />

                        <Typography type='span' textVariant='default' className='my-2'>
                            Collected Works of 
                            <Typography type='span' className='ml-2 my-2'>{userName}</Typography>
                        </Typography>

                        <Separator />
                    </div> */}

                    <div className="flex flex-col my-4 grow-2 basis-auto">
                    <div className="flex w-full border border-custom rounded-md bg-default px-1 text-sm">
                        {tabItems.map((tabItem) => {
                            const { id, label, icon } = tabItem;
                            const isActive = selectedTab === id;
                            return (
                                <div key={id} onClick={() => setSelectedTab(id)} className={`flex cursor-pointer rounded-md px-4 py-2 mx-1 my-2 ${isActive ? 'bg-accent text-custom' : 'bg-default hover-highlight'}`}>
                                    <span className="flex items-center mr-2">{icon}</span>
                                    <span>{label}</span>
                                </div>
                            )
                        })}
                    </div>

                    <div className="my-2 border border-customs rounded-md">
                        <div className="flex flex-col p-4">
                            {renderForm(selectedTab, { userName, identityData: userDetail, onSave: ()=>{}, onRemove: ()=>{} })}
                        </div>
                    </div>

                </div>

                    {/* <UsersPostList key={userName} userName={userName} /> */}


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