import { useState } from "react";

import * as feedbacks from "_services/feedbacks.service";

const useFeedbacks = () => {
    const [fetchStatus, setFetchStatus] = useState('none');

    const fetchFeedbacksData = async (filters) => {
        try{
            setFetchStatus('loading');
            const usersData = await feedbacks.getFeedbacks(filters);
            // setFetchStatus('success');
            if(usersData.length === 0){
                setFetchStatus('empty');
            }else{
                setFetchStatus('success');
            }
            return usersData;
        }catch(error){
            const { statusCode } = error || {};
            if(statusCode === 401){
                setFetchStatus('unauthorised');
                throw error;
            }else{
                setFetchStatus('failure');
            }
        }
    };

    return {
        fetchStatus,

        fetchFeedbacksData
    }
}

export default useFeedbacks;