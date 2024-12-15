import React from "react";

import TabPanel from "_components/Misc/TabPanel/TabPanel";

import renderForm from "./_utils/formRenderer";
import tabItems from "./_constants/tabItems";
import { getUserDetailsOfCurrentUser } from "_utils/userAuth";
import FeedbackUnAuthorised from "_components/DisplayStates/Error/FeedbackUnAuthorised";
import Typography from "_components/Misc/Typography/Typography";

const FeedbacksPage = () => {

    const { userName } = getUserDetailsOfCurrentUser();

    return (
        <div className="text-default m-5">
            <Typography type='h3' size='xl' className='my-4 mx-2'>Feedbacks Page</Typography>

            <div className="bg-default p-1 text-sm rounded-md">
                {!userName ? (
                    <FeedbackUnAuthorised />
                ):(
                    <TabPanel tabItems={tabItems} renderForm={renderForm} />
                )}
            </div>
        </div>
    );
}

export default FeedbacksPage;