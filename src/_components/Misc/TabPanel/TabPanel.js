import React, { useState } from "react";

import Separator from "_components/Misc/Separator/Separator";
import TabPanelItems from "./TabPanelItems";

const TabPanel = (props) => {
    const { fetchStatus, tabItems, renderForm, additionalProps, initialTab } = props;
    const [selectedTab, setSelectedTab] = useState(initialTab || tabItems[0].id);

    console.log('@fetchStatus', fetchStatus);

    return (
        <React.Fragment>
            {/* <Separator className='my-3' /> */}
            
            <TabPanelItems
                tabItems={tabItems}
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
            />

            <div className="border border-customs rounded-md">
                <div className="flex flex-col p-4">
                    {renderForm(selectedTab, additionalProps)}
                </div>
            </div>
        </React.Fragment>
    )
}

export default TabPanel;