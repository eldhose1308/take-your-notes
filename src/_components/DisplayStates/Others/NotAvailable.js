import React from "react";

import Typography from "_components/Misc/Typography/Typography";

const marginSizes = {
    'sm': 'my-4',
    'md': 'my-12',
}

const NotAvailable = (props) => {
    const { size = 'md' } = props;

    return (
        <div className={`flex flex-col w-full items-center ${marginSizes[size]}`}>
            {size === 'md' &&
                <React.Fragment>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-circle-minus"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /></svg>
                    <div className="flex flex-col items-center my-4 text-center">
                        <Typography size='lg' type='h2'>Coming Soon!</Typography>
                        <Typography variant='secondary' size='sm' textVariant='default'>This feature is just around the corner.</Typography>
                    </div>
                </React.Fragment>
            }
            {size === 'sm' &&
                <React.Fragment>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-circle-minus"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /></svg>
                    <div className="flex flex-col items-center my-4 text-center">
                        <Typography size='md' type='h2'>Coming Soon!</Typography>
                        <Typography variant='secondary' size='xs' textVariant='default'>This feature is just around the corner.</Typography>
                    </div>
                </React.Fragment>
            }
        </div >
    )
}

export default NotAvailable;