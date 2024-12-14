import React from "react";

import IdentityForm from "_pages/myProfile/forms/IdentityForm";
import ExtraInformationForm from "_pages/myProfile/forms/ExtraInformationForm";
import FeedbackForm from "_modules/feedbacks/_components/FeedbackForm";
import MyFeedbacks from "_modules/feedbacks/_components/MyFeedbacks";
import AllFeedbacks from "_modules/feedbacks/_components/AllFeedbacks";

const renderForm = (selectedTab, props) => {
    switch (selectedTab) {
        case 'feedbackForm':
            return <FeedbackForm {...props} />;
        case 'myFeedbacks':
            return <MyFeedbacks {...props} />;
        case 'allFeedbacks':
            return <AllFeedbacks {...props} />;
        default:
            return <p>No Form Available</p>
    }
}

export default renderForm;