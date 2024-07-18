import React, { useState } from "react"

import './OptionsMenu.css'

const OptionsMenu = ({ children, ...props }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const hide = () => setIsMenuOpen(false)
    const toggle = (e) => {
        e.stopPropagation()
        setIsMenuOpen((prevState) => !prevState)
    }

    return (
        <div className="note-menus menu inline-flex relative" tabIndex={0} onBlur={hide}>
            <div className="menu-dots invisible group-hover-item" onClick={toggle}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
            </div>
            {isMenuOpen && (
            <div className="absolute top-100 right-0 text-xs flex flex-col bg-default rounded-md border border-another px-1 py-1">
                {children}
            </div>
            )}
        </div>
    )
}

export default OptionsMenu
