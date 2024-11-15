import React from "react";

import Typography from "_components/Misc/Typography/Typography";

const UsersPostEmpty = () => {

    return (
        <div className='flex flex-col w-full items-center'>
                <Typography size='lg' type='h2'>No Blog Posts Available</Typography>
                <Typography variant='secondary' size='sm' textVariant='default'>
                    It seems there aren't any blog posts to display right now.
                </Typography>
                <Typography variant='secondary' size='sm' textVariant='default'>
                    This user has not created any posts.
                </Typography>

            </div>
    )
}

export default UsersPostEmpty;