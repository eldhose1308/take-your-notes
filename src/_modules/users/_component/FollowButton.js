import React from "react";


const FollowButton = (props) => {

    return (
        <div className="flex bg-custom text-accent hover-text-custom hover-accent text-xs my-2 mr-2 ml-4 p-2 px-2 cursor-pointer rounded-md">
            <span className="flex items-center">
                <span className="flex items-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round-plus"><path d="M2 21a8 8 0 0 1 13.292-6" /><circle cx="10" cy="8" r="5" /><path d="M19 16v6" /><path d="M22 19h-6" /></svg>
                </span>
                Follow
            </span>
        </div>
    )
}

export default FollowButton