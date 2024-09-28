import React from "react"

const ToolbarButton = ({ children, title, onClick, ...props }) => {

    return (
        <div onClick={onClick} className="flex items-center border-another hover-custom text-default px-1 mx-1 rounded-md">
            <span title={title} className={`flex items-center p-1 rounded-md cursor-pointer`}>
                {children}
            </span>
        </div>
    )
}

export default ToolbarButton