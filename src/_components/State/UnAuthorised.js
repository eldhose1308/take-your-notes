import React from "react";
import Typography from "_components/Misc/Typography/Typography";

const UnAuthorised = () => {

    return (
        <div className='flex flex-col w-full items-center my-12'>
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-ban"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m4.243 5.21 14.39 12.472" /></svg>
            <div className="flex flex-col items-center my-4 text-center">
                <Typography size='lg' type='h2'>Oops!</Typography>
                <Typography variant='secondary' size='sm' textVariant='default'>It looks like you're not logged in yet.</Typography>
                <Typography variant='secondary' size='sm' textVariant='default'>Log in to see your followers and grow your community!!</Typography>
            </div>
        </div>
    )
}

export default UnAuthorised;