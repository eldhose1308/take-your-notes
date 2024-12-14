import React from "react";

import TabPanel from "_components/Misc/TabPanel/TabPanel";

import renderForm from "./_utils/formRenderer";
import tabItems from "./_constants/tabItems";

const FeedbacksPage = () => {

    return (
        <div className="text-default m-5">
            <h1>Feedbacks Page</h1>

            <TabPanel tabItems={tabItems} renderForm={renderForm} />

        </div>
    );
}

export default FeedbacksPage;