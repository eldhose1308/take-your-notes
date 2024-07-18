import React from "react";

import useAuth from "_hooks/useAuth";

import Flex from "_components/Misc/Flex/Flex";
import UserProfileItems from "./UserProfileItems";
import Separator from "_components/Misc/Separator/Separator";
import { profileIcons } from "../_utils/profile-items";


const UserProfileMenu = () => {
    const { logout } = useAuth()

    return (
        <React.Fragment>
            <Flex justifyContent='none' className='my-5'>
                <Separator variant='custom' className='w-full' />

                <UserProfileItems text='View Profile' icon={profileIcons.profile} />
                <UserProfileItems text='Availability Status' icon={profileIcons.status} />
                <UserProfileItems text='Focus Mode' icon={profileIcons.focus} />
                <UserProfileItems text='Text Content Mode' icon={profileIcons.text} />
                <UserProfileItems text='Account Settings' icon={profileIcons.account} />
                <UserProfileItems text='Sign Out' icon={profileIcons.signOut} onClick={logout} />

                <Separator variant='another' className='w-full' />
                   
            </Flex>
            {/* <ol>
                <li>View Profile</li>
                <li>Availablility Status</li>
                <li>Focus mode (Entertain, Focus)</li>
                <li>Text mode (Normal, Sarcastic, Dark Humor)</li>
                <li>Account Settings</li>
                <li onClick={logout}>Sign Out</li>
            </ol> */}
        </React.Fragment>
    )
}

export default UserProfileMenu