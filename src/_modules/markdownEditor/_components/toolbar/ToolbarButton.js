import React from "react"

const ToolbarButton = ({ children, isActive=false, title, value, onClick, ...props }) => {

    const handleClick = () => {
        onClick(value);
    }

    return (
        <div onClick={handleClick} className={`flex items-center border-another px-1 mx-1 rounded-md ${isActive ? 'bg-accent text-highlight' : 'hover-highlight text-default'}`}>
            <span title={title} className={`flex items-center p-1 rounded-md cursor-pointer`}>
                {children}
            </span>
        </div>
    )
}

export default ToolbarButton