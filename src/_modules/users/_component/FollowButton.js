import React from "react";

import { getUserDetailsOfCurrentUser, isUserDataSameAsLoggedInUser } from "_utils/userAuth";

import * as usersService from '_services/users.service';

const FOLLOW_STATE = {
    'true': {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round-check"><path d="M2 21a8 8 0 0 1 13.292-6"/><circle cx="10" cy="8" r="5"/><path d="m16 19 2 2 4-4"/></svg>,
        text: 'Unfollow'
    },
    'false': {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round-plus"><path d="M2 21a8 8 0 0 1 13.292-6" /><circle cx="10" cy="8" r="5" /><path d="M19 16v6" /><path d="M22 19h-6" /></svg>,
        text: 'Follow'
    }
}

const FollowButton = (props) => {
    const { userName, userId, isFollowing=false, updateUser=()=>{}, onFollow = () => { }, onUnFollow = () => { } } = props;

    const isCurrentUserDetail = userName ? isUserDataSameAsLoggedInUser(userName) : false;

    const handleFollow = async () => {
        try{
            await usersService.followUser(userId);
            updateUser(previousUserState => ({ ...previousUserState, followers: Number(previousUserState.followers) + 1, isFollowing: !previousUserState.isFollowing }));
            // await onFollow();
        }catch(err){
            alert('err');
        }
    }

    const handleUnFollow = async () => {
        try{
            await usersService.unFollowUser(userId);
            updateUser(previousUserState => ({ ...previousUserState, followers: Number(previousUserState.followers) - 1, isFollowing: !previousUserState.isFollowing }));
            // await onFollow();
        }catch(err){
            alert('err');
        }
    }

    const handleClick = async () => {
        if(!userId){
            alert('Nopeee')
            return;
        }
        if(isFollowing){
            handleUnFollow();
        }else{
            handleFollow();
        }
    }

    if (isCurrentUserDetail) {
        return null;
    }

    return (
        <div onClick={handleClick} className="flex bg-custom text-accent hover-text-custom hover-accent text-xs my-2 mr-2 ml-4 p-2 px-2 cursor-pointer rounded-md">
            <span className="flex items-center">
                <span className="flex items-center mr-2">
                    {FOLLOW_STATE[isFollowing].icon}
                </span>
                {FOLLOW_STATE[isFollowing].text}
            </span>
        </div>
    )
}

export default FollowButton