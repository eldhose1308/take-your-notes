import React from "react";

import { useConfirmDeleteDialog } from "_contexts/ConfirmDeleteDialogProvider";

const SubscribeButton = (props) => {
    const { subscribeText = 'Subscribe', onClick=()=>{}, isSubscribed, textInputs } = props;
    const { buttonValues, message, heading } = textInputs || {};


    const { confirmDelete } = useConfirmDeleteDialog();

    const handleSubscribe = async () => {
       try{
           await onClick();
        }catch(err){
            throw err;
        }
    };

    const handleConfirmSubscription = async () => {
        const isConfirmed = await confirmDelete(handleSubscribe, { variant: 'primary', buttonStateValues: buttonValues, heading, message });

    }

    return (
        <div onClick={handleConfirmSubscription} className="content-center border border-another text-accent hover-accent hover-text-custom text-xs my-2 mx-1 p-2 px-2 cursor-pointer rounded-md">
            <span className="flex">
                <span className="flex items-center mr-2">
                    {isSubscribed ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell-ring"><path d="M10.268 21a2 2 0 0 0 3.464 0" /><path d="M22 8c0-2.3-.8-4.3-2-6" /><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" /><path d="M4 2C2.8 3.7 2 5.7 2 8" /></svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell"><path d="M10.268 21a2 2 0 0 0 3.464 0" /><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" /></svg>
                    }
                </span>
                {subscribeText}
            </span>
        </div>
    )
}

export default SubscribeButton;