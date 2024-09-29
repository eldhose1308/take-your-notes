import React from "react"
import { Link } from "react-router-dom";
import { useTemplateProvider } from "../Template/Template";

const SidebarItems = (props) => {
    const { item = {}, isActive=false } = props;
    const { toggleSidebar } = useTemplateProvider()

    const { id, text, route, svg } = item;

    return (
        <Link to={route}>
            <div key={id} onClick={toggleSidebar} className={`flex py-2 px-3 text-sm rounded-md ${isActive ? 'bg-highlight' : 'hover-secondary'}`}>
                <span className="">
                    {svg}
                </span>
                <span className="mx-2">
                    {text}
                </span>
            </div>
        </Link>
    )
}

export default SidebarItems;