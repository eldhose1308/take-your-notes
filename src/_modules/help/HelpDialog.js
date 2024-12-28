import React, { useState } from "react";

import Dialog from "_components/UI/Dialog/Dialog";
import Typography from "_components/Misc/Typography/Typography";
import Separator from "_components/Misc/Separator/Separator";

const HelpDialog = (props) => {
    const { title, children } = props;
    const [isHelpInfoOpen, setIsHelpInfoOpen] = useState(null);

    const openHelpInfo = () => {
        setIsHelpInfoOpen(true);
    }

    const closeHelpInfo = () => {
        setIsHelpInfoOpen(false);
    }

    if (!isHelpInfoOpen) {
        return (
            <span onClick={openHelpInfo} className="flex hover-text-info items-center cursor-pointer pl-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
            </span>
        )
    }

    return (
        <Dialog isShown={isHelpInfoOpen} hasOverlay size='xl'>

            <div className="my-4">
                <div className="flex justify-between">

                    <Typography textVariant='h3' size='md' className='my-4 mx-4'>{title}</Typography>

                    <button onClick={closeHelpInfo} type="button" data-drawer-hide="drawer-example" aria-controls="drawer-example" className="text-default bg-transparent rounded-lg text-sm flex items-center justify-center mx-4" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                    </button>
                </div>

                <Separator className='my-2' />
            </div>

            <div className="mx-4 mb-4 py-4 text-sm">

                {children}

            </div>

        </Dialog>
    )
}

export default HelpDialog;