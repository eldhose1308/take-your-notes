import React, { useEffect, useState } from "react";

import Typography from "_components/Misc/Typography/Typography";
import Separator from "_components/Misc/Separator/Separator";


import { getUserSubscriberFeedPreferenceFromLocal, setUserSubscriberFeedPreferenceToLocal } from "_utils/user-localDB/usersSubFeedDB";

import { Checkbox } from "_components/Form";

const subscriberPreference = getUserSubscriberFeedPreferenceFromLocal();

const SubscribersFilter = (props) => {
    const { onSelect } = props;

    const [isChecked, setIsChecked] = useState(subscriberPreference || false);


    const handleChange = (checked, e) => {
        setUserSubscriberFeedPreferenceToLocal(checked);
        setIsChecked(checked);
    }


    const handleApplyFilters = () => {
        onSelect({ users: '', subscriptions: '', categories: '', subscribers: isChecked });
    }



    return (
        <React.Fragment>

            <div className="flex justify-between">

                <div className="flex flex-col ">
                    <Typography textVariant='h3' size='md' className='mx-4'>Your subscribers</Typography>
                    <Typography textVariant='p' variant='secondary' size='xs' className='mx-4'>
                        You can customize your feed by choosing whether you want to filter with your subscribers or not.
                    </Typography>
                </div>

                <div>
                    <div onClick={handleApplyFilters} className="text-center border border-another text-accent hover-accent hover-text-custom text-xs my-2 mx-1 p-2 px-2 cursor-pointer rounded-md">
                        <span className="flex">
                            Apply Filter
                        </span>
                    </div>
                </div>

            </div>

            <Separator className='my-2' />

            <div className="mx-4 mb-4 py-4 text-sm">

                <Separator className='my-2' />

                View Posts based on my subscribers

                <Checkbox onChange={handleChange} checked={isChecked} />

            </div>

        </React.Fragment>

    )
}

export default SubscribersFilter;