import React from "react";

import * as postsCategoriesService from '_services/postsCategories.service';

const FOLLOW_STATE = {
    'true': {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round-check"><path d="M2 21a8 8 0 0 1 13.292-6"/><circle cx="10" cy="8" r="5"/><path d="m16 19 2 2 4-4"/></svg>,
        text: 'Unfollow'
    },
    'false': {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round-plus"><path d="M2 21a8 8 0 0 1 13.292-6" /><circle cx="10" cy="8" r="5" /><path d="M19 16v6" /><path d="M22 19h-6" /></svg>,
        text: 'Follow'
    }
}

const FollowButton = (props) => {
    const { categorySlug, categoryId, isFollowing=false, updateCategory=()=>{}, onFollow = () => { }, onUnFollow = () => { } } = props;


    const handleFollow = async () => {
        try{
            await postsCategoriesService.followCategory(categoryId);
            updateCategory(previousUserState => ({ ...previousUserState, followers: Number(previousUserState.followers) + 1, isFollowing: !previousUserState.isFollowing }));
            // await onFollow();
        }catch(err){
            alert(err.message);
        }
    }

    const handleUnFollow = async () => {
        try{
            await postsCategoriesService.unFollowCategory(categoryId);
            updateCategory(previousUserState => ({ ...previousUserState, followers: Number(previousUserState.followers) - 1, isFollowing: !previousUserState.isFollowing }));
            // await onFollow();
        }catch(err){
            alert(err.message);
        }
    }

    const handleClick = async () => {
        if(!categoryId){
            alert('Nopeee')
            return;
        }
        if(isFollowing){
            handleUnFollow();
        }else{
            handleFollow();
        }
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