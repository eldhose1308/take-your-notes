import React, { useState, createContext, useContext } from "react";

import Flex from "_components/Misc/Flex/Flex";

import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";

import './Template.css'

const TemplateContext = createContext();


const Template = ({ children, ...props }) => {
    const { isSidebarNeeded = true, isRightbarNeeded = true, isFooterNeeded = true } = props;
    const [isSidebarOpen, setSidebarOpen] = useState(false)

    const toggleSidebar = () => {
        setSidebarOpen(currentStatus => !currentStatus)
    }

    const hideSidebar = () => {
        setSidebarOpen(false)
    }

    return (
        <TemplateContext.Provider value={{ isSidebarOpen, hideSidebar, toggleSidebar }}>
            <div className="grid-container">
                <Header isSidebarNeeded={isSidebarNeeded} />
                <Sidebar />
                <main className="main overflow-scroll mb-12s bg-secondary">
                    {children}
                </main>
                {/* <footer className="footer"> */}
        {/* <div className="footer_copyright">&copy;2024</div> */}
        {/* <div className="text-sm footer_byline">Made with &hearts;</div> */}
      {/* </footer> */}
            </div>
        </TemplateContext.Provider>
    )
}


const useTemplateProvider = () => {
    const context = useContext(TemplateContext);

    if (!context) {
        throw new Error('useTemplateProvider must be used within TemplateContext')
    }

    return context
}

export { useTemplateProvider }
export default Template
