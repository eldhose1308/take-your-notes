import React from "react";

import Avatar from "_components/UI/Avatar/Avatar";
import Typography from "_components/Misc/Typography/Typography";

const DisplayImageForm = (props) => {
    const { identityData } = props;
    const { avatar, userName, fullName, email, bio, joinedAt, websiteLink, phone, postCounts, followers, following, rank } = identityData;

    return (
        <div>
            <Avatar name={fullName} src={avatar} size='lg' />

            <div className="flex text-sm my-2">
                <span className='flex items-center px-2 py-1 mx-2 hover-custom hover-text-destructive rounded-md cursor-pointer' onClick={() => { }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /></svg>
                    <span className="ml-2">Remove</span>
                </span>

                <span className='flex items-center px-2 py-1 mx-2 hover-custom hover-text-primary rounded-md cursor-pointer' onClick={() => { }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" x2="12" y1="3" y2="15" /></svg>
                    <span className="ml-2">Upload new photo</span>
                </span>
            </div>

            <div className="border-2 border-another bg-light mt-8 p-4 rounded-md">
                <Typography textVariant='none'>Upload a new avatar.</Typography>
                <Typography textVariant='none'>You can crop as you wish.</Typography>
            </div>
        </div>
    )
}

export default DisplayImageForm;