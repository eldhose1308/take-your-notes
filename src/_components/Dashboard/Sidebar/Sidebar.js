import React, { useState } from "react";

import { MENU_ITEMS } from "_constants/SidebarValues";

// import './Sidebar.css'
import { useTemplateProvider } from "../Template/Template";
import SidebarItems from "./SidebarItems";

const { top, middle, bottom } = MENU_ITEMS

const Sidebar = (props) => {
    const { isSidebarOpen, toggleSidebar } = useTemplateProvider()


    return (
        <React.Fragment>
            {/* {isSidebarOpen ? <div className="overlay z-10 xl:hidden"></div> : null} */}

            <aside className={`aside bg-default text-default ${isSidebarOpen ? 'active' : ''}`}>
                <div className="flex justify-between px-4 py-4">

                Logo

                <div className="aside_close-icon" onClick={toggleSidebar}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left-from-line"><path d="m9 6-6 6 6 6"/><path d="M3 12h14"/><path d="M21 19V5"/></svg>
                </div>

                </div>

                <div className="aside_divst">
                    {top.map(menuItem => {
                        const { id } = menuItem
                        return (<SidebarItems key={id} item={menuItem} />)
                    })}
                    {middle.map(menuItem => {
                        const { id, text, path } = menuItem
                        return (<SidebarItems key={id} item={menuItem} />)
                    })}
                    {bottom.map(menuItem => {
                        const { id, text, path } = menuItem
                        return (<SidebarItems key={id} item={menuItem} />)
                    })}
                </div>
            </aside>
        </React.Fragment>
    )

}

export default Sidebar;