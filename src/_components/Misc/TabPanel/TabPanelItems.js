import React from "react";

const TabPanelItems = (props) => {
    const { tabItems, selectedTab, setSelectedTab } = props;

    return (
        <div className="flex w-full border border-custom rounded-md bg-default px-1 py-2 text-sm">

            {tabItems.map((tabItem) => {
                const { id, label, icon } = tabItem;
                const isActive = selectedTab === id;
                return (
                    <div key={id} onClick={() => setSelectedTab(id)} className={`flex cursor-pointer rounded-md px-4 py-2 mx-1 ${isActive ? 'bg-accent text-custom' : 'bg-default hover-highlight'}`}>
                        <span className="flex items-center mr-2">{icon}</span>
                        <span>{label}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default TabPanelItems;