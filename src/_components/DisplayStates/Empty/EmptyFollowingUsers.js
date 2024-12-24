import React from "react";

import Typography from "_components/Misc/Typography/Typography";


const marginSizes = {
    'sm': 'my-4',
    'md': 'my-12',
}

const EmptyFollowingUsers = (props) => {
    const { size = 'md' } = props;

    return (
        <div className={`flex flex-col w-full items-center ${marginSizes[size]}`}>
            {size === 'md' &&
                <React.Fragment>
                    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-folder-open"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" /></svg>
                    <div className="flex flex-col items-center my-4 text-center">
                        <Typography size='lg' type='h2'>Let's Get You Connected!</Typography>
                        <Typography variant='secondary' size='sm' textVariant='default'>You're not following anyone yet. Time to start!</Typography>
                        <Typography variant='secondary' size='sm' textVariant='default'>You haven't followed anyone yet. Time to start stalking—uh, we mean following—some cool bloggers!</Typography>
                    </div>
                </React.Fragment>
            }

            {size === 'sm' &&
                <React.Fragment>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-folder-open"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" /></svg>
                    <div className="flex flex-col items-center my-4 text-center">
                        <Typography size='md' type='h2'>Let's Get You Connected!</Typography>
                        <Typography variant='secondary' size='xs' textVariant='default'>You're not following anyone yet. Time to start!</Typography>
                    </div>
                </React.Fragment>
            }
        </div>
    )
}

export default EmptyFollowingUsers;