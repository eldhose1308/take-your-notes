import React, { useState, createContext, useContext } from "react";

import Flex from "_components/Misc/Flex/Flex";

import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";

import './Template.css'

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
            <div class="grid-container">
      <Header />
      <Sidebar />
      <main class="main">
       {children}
      </main>
      {/* <footer class="footer">
        <div class="footer_copyright">&copy;2020</div>
        <div class="footer_byline">Made with &hearts;</div>
      </footer> */}
    </div>
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
