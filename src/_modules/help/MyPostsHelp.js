import React from "react";

import Separator from "_components/Misc/Separator/Separator";
import { Alerts } from '_components/UI';
import Typography from "_components/Misc/Typography/Typography";
import HelpDialog from "./HelpDialog";

import { Link } from 'react-router-dom';
import CLIENT_ROUTES from '_routes/clientRoutes';

const MyPostsHelp = () => {

    return (
        <HelpDialog title='Help information about My Posts'>
            <React.Fragment>

                <div className="mb-4">

                    <Typography size='md' className='mb-2'>Posts Information:</Typography>

                    <Typography textVariant='light' size='xs'>- Public Posts: These posts are visible to everyone and can be accessed by all users.</Typography>
                    <Typography textVariant='light' size='xs'>- Private Posts: These posts are only visible to you until they are made public.</Typography>
                </div>

                
                <Alerts type='info'>
                    <Typography>Heads up!</Typography>
                    <Typography textVariant='light' size='xs'>
                        On list of posts created by you. The faded items are posts whose category has been created but not yet approved by the admin.
                    </Typography>
                </Alerts>

                <Separator className='my-4' />

                <div className="mb-4">

                    <Typography size='md' className='mb-2'>Create New Category Information:</Typography>

                    <Typography textVariant='light' size='xs'>- When creating a new post, you can type in the name of your desired category in the category dropdown.</Typography>
                    <Typography textVariant='light' size='xs'>- If no existing category matches your needs, you can create a new one.</Typography>
                    <Typography textVariant='light' size='xs'>- The new category will be submitted for admin approval. Until it's approved, it will be <b>only visible to you</b>.</Typography>
                </div>

                <Alerts type='error'>
                    <Typography>Important!</Typography>
                    <Typography textVariant='light' size='xs'>
                        Posts under unverified categories will only be visible on the home page and to users once the category is verified.
                    </Typography>
                    <Typography textVariant='light' size='xs'>
                        You can check the status of the category in the <Link to={CLIENT_ROUTES.MY_CATEGORY} className='text-bold underline'>my category</Link> section.
                    </Typography>
                </Alerts>

                <Separator className='my-4' />

                <div className="mb-4">

<Typography size='md' className='mb-2'>Managing Categories:</Typography>

<Typography textVariant='light' size='xs'>- You can create and manage your categories in the <Link to={CLIENT_ROUTES.MY_CATEGORY} className='text-bold underline'>MyCategories</Link> page.</Typography>
</div>

            </React.Fragment>

        </HelpDialog>
    )
}

export default MyPostsHelp;