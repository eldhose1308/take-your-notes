import React from "react";

import Typography from "_components/Misc/Typography/Typography";

const NotAvailable = () => {

    return (
        <div className='flex flex-col w-full items-center my-12'>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-minus"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /></svg>            <div className="flex flex-col items-center my-4 text-center">
                <Typography size='lg' type='h2'>Coming Soon!</Typography>
                <Typography variant='secondary' size='sm' textVariant='default'>This feature is just around the corner.</Typography>
            </div>
        </div>
    )
}

export default NotAvailable;