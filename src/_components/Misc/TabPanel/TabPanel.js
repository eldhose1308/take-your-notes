import React, { useState } from "react";

import Separator from "_components/Misc/Separator/Separator";
import TabPanelItems from "./TabPanelItems";

const TabPanel = (props) => {
    const { tabItems, renderForm, additionalProps } = props;
    const [selectedTab, setSelectedTab] = useState('posts');

    return (
        <React.Fragment>
            <Separator className='my-3' />
            
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