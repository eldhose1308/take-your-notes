import React from "react";

import Typography from "_components/Misc/Typography/Typography";
import FormattedTimestamp from "_modules/posts/_components/FormattedTimestamp";

const FeedbackItem = (props) => {
    const { feedbackData } = props;
    const { id, name, isAnonymous, createdAt, feedback } = feedbackData;

    return (
        <div className="bg-default border border-another p-2 rounded-md my-2">
            {isAnonymous && (
                <span title="Anonymous" className="flex items-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ghost"><path d="M9 10h.01"/><path d="M15 10h.01"/><path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"/></svg>
                </span>
            )}
            <Typography size='md'>{feedback}</Typography>
            <FormattedTimestamp createdTime={createdAt} />
        </div>
    )
}

const FeedbackItemList = (props) => {
    const { feedbacksList = [] } = props;

    return (
        <div className="w-full px-2 my-4 rounded-md overflow-scroll">
            {feedbacksList.map((feedbackData, index) => {
                return (<div className="min-w-sm"><FeedbackItem key={index} feedbackData={feedbackData} /></div>)
            })}
        </div>
    )
}

export default FeedbackItemList;