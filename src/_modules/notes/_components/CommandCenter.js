import React from "react";

const CommandCenter = (props) => {

    return (
        <div className="mx-2 text-secondary flex flex-col justify-center items-center h-screen-1/2">
            <div className="flex items-center px-2 py-1 text-md">
                <span className="command-name mx-2">
                    Show all Commands
                </span>
                <span className="command-shortcut text-sm opacity-50">
                    ⌘ + Enter
                </span>
            </div>

            <div className="flex items-center px-2 py-1 text-md">
                <span className="command-name mx-2">
                    Go to File
                </span>
                <span className="command-shortcut text-sm opacity-50">
                    ⌘ + P
                </span>
            </div>

            <div className="flex items-center px-2 py-1 text-md">
                <span className="command-name mx-2">
                    Find in Files
                </span>
                <span className="command-shortcut text-sm opacity-50">
                    ⌘ + F
                </span>
            </div>

        </div>
    )
}

export default CommandCenter;