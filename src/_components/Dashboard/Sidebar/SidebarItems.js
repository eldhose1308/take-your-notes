import React from "react"
import { Link } from "react-router-dom";
import { useTemplateProvider } from "../Template/Template";

const SidebarItems = (props) => {
    const { item = {}, isActive=false, isAuthenticated=false } = props;
    const { toggleSidebar } = useTemplateProvider()

    const { id, text, route, svg, path, needsAuth } = item;
    const allowRoute = isAuthenticated ? true : !needsAuth;

    return (
        <Link to={allowRoute ? route : '/signin'}>
            <div key={id} onClick={toggleSidebar} className={`flex py-2 px-3 text-sm rounded-md ${isActive ? 'bg-highlight' : 'hover-secondary'} ${!allowRoute ? 'opacity-50' : ''}`}>
                <span className="">
                    {svg}
                </span>
                <span className="mx-2">
                    {text}
                </span>
                {!allowRoute && <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock-keyhole"><circle cx="12" cy="16" r="1"/><rect x="3" y="10" width="18" height="12" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/></svg>
                </span>}
            </div>
        </Link>
    )
}

export default SidebarItems;