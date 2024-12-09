import React from "react";

import Typography from "_components/Misc/Typography/Typography";

const EmptyAuthUserPosts = (props) => {
    const { children } = props;;

    return (
        <div className='flex flex-col w-full items-center my-12'>
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-open"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" /></svg>
            <div className="flex flex-col items-center my-4 text-center">
                <Typography size='lg' type='h2'>Hmm...</Typography>
                <Typography variant='secondary' size='sm' textVariant='default'>Nothing Here... Yet.</Typography>
                <Typography variant='secondary' size='sm' textVariant='default'>Everyone starts somewhere. You should post something !!</Typography>
            </div>
            <div className="flex flex-col items-center my-4 text-center">
                {children}
            </div>
        </div>
    )
}

export default EmptyAuthUserPosts;