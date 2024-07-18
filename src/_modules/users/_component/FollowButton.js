import React from "react";

import { Button } from '_components/Form';

const FollowButton = (props) => {

    return (
        <div className="flex mb-2">
            <Button variant='custom' size='sm'>
                <div className="flex pr-2 py-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round-plus"><path d="M2 21a8 8 0 0 1 13.292-6" /><circle cx="10" cy="8" r="5" /><path d="M19 16v6" /><path d="M22 19h-6" /></svg>
                </div>
                <span className="text-default">
                    Follow
                </span>
            </Button>
        </div>
    )
}

export default FollowButton