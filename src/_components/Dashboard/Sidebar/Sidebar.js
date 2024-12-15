import React, { useState } from "react";
import { useLocation } from 'react-router-dom';

import { MENU_ITEMS } from "_constants/SidebarValues";

// import './Sidebar.css'
import { useTemplateProvider } from "../Template/Template";
import SidebarItems from "./SidebarItems";
import { useClientAuth } from "_contexts/AuthProvider";

const { top, middle, bottom } = MENU_ITEMS

const Sidebar = (props) => {
    const { isSidebarOpen, toggleSidebar, hideSidebar } = useTemplateProvider()
    const { pathname } = useLocation();
    const { isAuthenticated } = useClientAuth()


    return (
        <React.Fragment>
            {isSidebarOpen ? <div onClick={hideSidebar} className="overlay z-10"></div> : null}

            <aside className={`aside bg-default text-default ${isSidebarOpen ? 'active' : ''}`}>
                <div className="flex justify-between px-4 py-4">

                Logo

                <div className="aside_close-icon" onClick={toggleSidebar}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left-from-line"><path d="m9 6-6 6 6 6"/><path d="M3 12h14"/><path d="M21 19V5"/></svg>
                </div>

                </div>

                <div className="aside_divst">
                    {top.map(menuItem => {
                        const { id, path, needsAuth } = menuItem
                        return (<SidebarItems key={id} item={menuItem} isActive={pathname === path} isAuthenticated={isAuthenticated} />)
                    })}
                    {middle.map(menuItem => {
                        const { id, text, path, needsAuth } = menuItem
                        return (<SidebarItems key={id} item={menuItem} isActive={pathname === path} isAuthenticated={isAuthenticated} />)
                    })}
                    {bottom.map(menuItem => {
                        const { id, text, path, needsAuth } = menuItem
                        return (<SidebarItems key={id} item={menuItem} isActive={pathname === path} isAuthenticated={isAuthenticated} />)
                    })}
                </div>
            </aside>
        </React.Fragment>
    )

}

export default Sidebar;