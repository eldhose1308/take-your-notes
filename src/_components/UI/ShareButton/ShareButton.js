import React from "react";

import { useToast } from "_contexts/ToastProvider";

import { getBaseURL } from "_utils/helpers";
import { shareContent } from "_utils/shareContent";

const ShareButton = (props) => {
    const { shareText='Share', shareDetails, messages } = props;
    const { title, text, urlRoute } = shareDetails || {};
    const { success='Link copied to clipboard!', error='Oops! Unable to copy the link!' } = messages || {};

    const { toast } = useToast();

    const handleShare = async () => {
        const baseURL = getBaseURL();
        try {
            const shareType = await shareContent({ title, text , url: `${baseURL}/#${urlRoute}` });
            if (shareType === 'clipboard') {
                toast({
                    heading: success,
                    options: { position: 'top-center' }
                }).success()
            }
        } catch (err) {
            toast({
                heading: error,
                description: err.toString(),
                options: { position: 'top-center' }
            }).error()
        }
    };

    return (
        <div onClick={handleShare} className="content-center border border-secondary text-accent hover-accent hover-text-custom text-xs my-2 mx-1 p-2 px-2 cursor-pointer rounded-md">
            <span className="flex">
                <span className="flex items-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-share-2"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" x2="15.42" y1="13.51" y2="17.49" /><line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>
                </span>
                {shareText}
            </span>
        </div>
    )
}

export default ShareButton;