import React from "react";

const CreatePostButton = ({ onCreate=()=>{} }) => {

    return (
        <div onClick={onCreate} className="bg-accent border border-accent hover-text-default hover-border-accent hover-transparent text-custom text-sm p-1 px-2 cursor-pointer rounded-md">
            <span className="flex">
                Start Writing
                <span className="flex items-center ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-plus"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>
                </span>
            </span>
        </div>
    )
}

export default CreatePostButton;