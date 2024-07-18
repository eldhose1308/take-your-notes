import React from "react";

import './Tooltip.css'

const Tooltip = ({ children }) => {

    return (
        <div className="tooltip">
            {children}
        </div>
    )
}

const TooltipTrigger = ({ children }) => {

    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}

const TooltipContent = ({ children }) => {

    return (
        <div className={`tooltip-content border border-another my-5 min-w-xs rounded-md bg-secondary absolute`}>
            <div className="flex flex-col my-1 px-3 py-2 text-sm">
                {children}
            </div>
        </div>
    )
}

export {
    Tooltip,
    TooltipTrigger,
    TooltipContent
}