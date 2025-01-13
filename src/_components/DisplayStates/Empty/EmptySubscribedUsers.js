import React from "react";

import Typography from "_components/Misc/Typography/Typography";
import { Link } from "react-router-dom";
import CLIENT_ROUTES from "_routes/clientRoutes";


const marginSizes = {
    'sm': 'my-4',
    'md': 'my-12',
}

const EmptySubscribedUsers = (props) => {
    const { size = 'md' } = props;

    return (
        <div className={`flex flex-col w-full items-center ${marginSizes[size]}`}>
            {size === 'md' &&
                <React.Fragment>
                    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-folder-open"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" /></svg>
                    <div className="flex flex-col items-center my-4 text-center">
                        <Typography size='lg' type='h2'>Discover, Subscribe, Enjoy!</Typography>
                        <Typography variant='secondary' size='sm' textVariant='default'>Time to Connect with Awesome Bloggers</Typography>
                        <Typography variant='secondary' size='sm' textVariant='default'>Subscribe to your favorite creators to get notified whenever they post!</Typography>
                    </div>

                    <div>

                        <Link to={CLIENT_ROUTES.USER_LIST} className="text-xs py-2 px-2 border-2 border-custom text-default border border-secondary hover-custom hover-text-accent flex justify-center rounded-md w-full cursor-pointer">
                                Explore users
                            <span className='flex ml-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right animate-bounce-x"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
                            </span>
                        </Link>
                    </div>
                </React.Fragment>
            }

            {size === 'sm' &&
                <React.Fragment>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-folder-open"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" /></svg>
                    <div className="flex flex-col items-center my-4 text-center">
                        <Typography size='md' type='h2'>Discover, Subscribe, Enjoy!</Typography>
                        <Typography variant='secondary' size='xs' textVariant='default'>No subscriptions yet.</Typography>
                    </div>
                </React.Fragment>
            }
        </div>
    )
}

export default EmptySubscribedUsers;