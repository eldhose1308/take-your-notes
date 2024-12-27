import React from "react";

import TabPanel from "_components/Misc/TabPanel/TabPanel";

import renderForm from "./_utils/formRenderer";
import tabItems from "./_constants/tabItems";

const UserOverviewTabs = (props) => {
    const { userDetail, initialTabIndex } = props;
    const { userName } = userDetail || {};

    const initialTab = tabItems[initialTabIndex] ? tabItems[initialTabIndex].id : null;

    return (
        <TabPanel initialTab={initialTab} tabItems={tabItems} renderForm={renderForm} additionalProps={{ userName, userDetail }} />
    )
}

export default UserOverviewTabs;