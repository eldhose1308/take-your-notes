import React, { useState } from "react";

import UserDetailSuccess from "_pages/users/states/UserDetailSuccess";
import IdentityForm from "./forms/IdentityForm";
import ExtraInformationForm from "./forms/ExtraInformationForm";
import DisplayImageForm from "./forms/DisplayImageForm";
import useAuth from "_hooks/useAuth";
import useMyUserDetails from "_modules/users/_hooks/useMyUserDetails";
import CardStencil from "_components/Loader/CardStencil";
import useComponentFetchState from "_hooks/useComponentFetchState";



const tabItems = [
    { id: 'avatar', label: 'Avatar', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg> },
    { id: 'identity', label: 'Identity', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round-pen"><path d="M2 21a8 8 0 0 1 10.821-7.487"/><path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/><circle cx="10" cy="8" r="5"/></svg> },
    { id: 'extra', label: 'Extra', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" /></svg> },
    { id: 'change_password', label: 'Change Password', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-key-round"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" /><circle cx="16.5" cy="7.5" r=".5" fill="currentColor" /></svg> },
];


const renderForm = (selectedTab, props) => {
    switch (selectedTab) {
        case 'avatar':
            return <DisplayImageForm {...props} />;
        case 'identity':
            return <IdentityForm {...props} />;
        case 'extra':
            return <ExtraInformationForm {...props} />;
        default:
            return <p>No Form Available</p>
    }
}

const userProfile = {
    avatar: "https://example.com/images/profile-picture.jpg",
    fullName: "John Doe",
    userName: "john_doe",
    followers: 218,
    following: 426,
    bio: "Passionate blogger and tech enthusiast. Always exploring new ideas.",
    email: "johndoe@example.com",
    phone: "+1234567890",
    joinedAt: "2023-01-15",
    websiteLink: "https://johndoeportfolio.com",
    postCounts: 42,
    rank: "Gold Blogger",
};

const MyProfile = () => {
    const [selectedTab, setSelectedTab] = useState('extra');
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
        try{
            await updateUserData(data);
        }catch(err){
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

                    <div className="my-2 bg-default rounded-md">
                        <div className="flex flex-col p-4">
                            {renderForm(selectedTab, { identityData: userDetail, onSave: handleUpdateProfileDetails, onRemove: handleUpdateProfileDetails })}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default MyProfile