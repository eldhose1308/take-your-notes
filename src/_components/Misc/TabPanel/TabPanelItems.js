import React from "react";

const TabItem = ({ tabItem, isActive, onClick }) => {
    const { id, label, icon } = tabItem;

    return (
        <div key={id} onClick={() => onClick(id)} className={`flex  items-center text-xs cursor-pointer rounded-md px-2 py-2 mx-1 ${isActive ? 'bg-accent text-custom' : 'bg-default hover-highlight'}`}>
            <span className="flex items-center mr-2">{icon}</span>
            <span>{label}</span>
        </div>
    )
}


const TabPanelItems = (props) => {
    const { tabItems, selectedTab, setSelectedTab } = props;

    return (
        <div className="flex w-full border border-custom rounded-md bg-default px-1 py-2 text-sm">

            {tabItems.map((tabItem) => {
                const { id } = tabItem;
                const isActive = selectedTab === id;
                return <TabItem key={id} tabItem={tabItem} isActive={isActive} onClick={setSelectedTab} />
            })}
        </div>
    )
}

export default TabPanelItems;