import React from "react";

import Typography from "_components/Misc/Typography/Typography";
import TabPanel from "_components/Misc/TabPanel/TabPanel";

import renderForm from "./_utils/formRenderer";
import tabItems from "./_constants/tabItems";


const PublishPage = () => {

    return (
        <React.Fragment>
            <div className="flex text-default m-5">
                <div className="flex w-full flex-col">

                    <div className="flex flex-col my-2">
                        <Typography size='lg' type='h2'>Publish Your App</Typography>
                        <Typography variant='secondary' size='xs' textVariant='default'>
                            Easily build your portal/app and personalize your settings to connect with your audience effectively. Start customizing today!
                        </Typography>
                    </div>

                    {/* <div className="flex flex-nowrap bg-default w-full px-2 my-4 rounded-md"> */}
                    <div className="bg-default p-1 text-sm rounded-md">

                    <TabPanel tabItems={tabItems} renderForm={renderForm} />


                    </div>


                </div>
            </div>
        </React.Fragment>
    )
}

export default PublishPage