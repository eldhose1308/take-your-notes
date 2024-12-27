import React from "react";

import Separator from "_components/Misc/Separator/Separator";

import { Alerts } from "_components/UI";
import Typography from "_components/Misc/Typography/Typography";
import HelpDialog from "./HelpDialog";


const MyCategoryHelp = () => {

    return (
        <HelpDialog title='Help information about My Categories'>
            <React.Fragment>

                <div className="mb-4">

                    <Typography size='md' className='mb-2'>Category Information:</Typography>


                    <Typography textVariant='light' size='xs'>- Pending Categories: Need admin verification before being visible.</Typography>
                    <Typography textVariant='light' size='xs'>- Verified Categories: Publicly visible.</Typography>
                    <Typography textVariant='light' size='xs'>- Rejected Categories: Cannot be edited; contact the admin for changes.</Typography>
                </div>

                <Alerts type='info'>
                    <Typography>Note!</Typography>
                    <Typography textVariant='light' size='xs'>
                        You can edit categories that are in the pending verification state.
                    </Typography>
                </Alerts>

                <Separator className='my-4' />

                <div className="mb-4">

                    <Typography size='md' className='mb-2'>Create New Category Information:</Typography>


                    <Typography textVariant='light' size='xs'>- You can add new categories, but they will need admin approval before being visible to the public.</Typography>
                </div>


                <Alerts type='error'>
                    <Typography>Important!</Typography>
                    <Typography textVariant='light' size='xs'>
                        Once a category is verified or rejected, you cannot alter it. For any changes, please contact the administrator.
                    </Typography>
                </Alerts>
            </React.Fragment>

        </HelpDialog>
    )
}

export default MyCategoryHelp;