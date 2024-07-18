import React, { useState, createContext, useContext } from "react";

import Flex from "_components/Misc/Flex/Flex";

import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";

const TemplateContext = createContext();

const Template = ({ children, ...props }) => {
    const { isSidebarNeeded=true, isRightbarNeeded=true, isFooterNeeded=true } = props;
    const [ isSidebarOpen, setSidebarOpen ] = useState(false)

    const toggleSidebar = () => {
        setSidebarOpen(currentStatus => !currentStatus)
    }

    const hideSidebar = () => {
        setSidebarOpen(false)
    }

    return (
        <TemplateContext.Provider value={{ isSidebarOpen, hideSidebar, toggleSidebar }}>
            <Flex justifyContent='spaceBetween'>
                <Header isSidebarNeeded={isSidebarNeeded} />
                <Flex wrap='none' justifyContent='spaceBetween' alignItems='start'>
                    {isSidebarNeeded && <Sidebar /> }
                    <div className="content border-r border-another px-3 text-default grow-4 overflow-scroll h-screen bg-light">
                        {children}
                    </div>
                    {/* {isRightbarNeeded && <div className="sidebar p-3 text-default w-80 grow-1 overflow-scroll h-screen sm:hidden md:hidden lg:display"> This is sidebar </div>} */}
                </Flex>
            </Flex>
        </TemplateContext.Provider>
    )
}


const useTemplateProvider = () => {
    const context = useContext(TemplateContext);

    if(!context){
        throw new Error('useTemplateProvider must be used within TemplateContext')
    }

    return context
}

export { useTemplateProvider }
export default Template
