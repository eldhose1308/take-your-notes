import React from "react"

import { ACTIVE_MODE_CLASS, TOOLBAR_MODES } from "_modules/markdownEditor/_constants/toolbar"
import ToolbarButton from "./ToolbarButton"
import ModeSelector from "_components/UI/ModeSelector/ModeSelector"


const editorModes = [
    { id: TOOLBAR_MODES.EDIT, label: 'Edit', modeElement: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil-line"><path d="M12 20h9" /><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" /><path d="m15 5 3 3" /></svg> },
    { id: TOOLBAR_MODES.PREVIEW, label: 'Preview', modeElement: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-laptop-minimal"><rect width="18" height="12" x="3" y="4" rx="2" ry="2" /><line x1="2" x2="22" y1="20" y2="20" /></svg> },
    { id: TOOLBAR_MODES.EDIT_PREVIEW, label: 'Both', modeElement: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-columns-2"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M12 3v18" /></svg> }
]

const EditorModeSelector = ({ mode, onChange=()=>{} }) => {

    const handleChange = (newMode,e) => {
        onChange(newMode, e)
    }

    return (
        // <ToolbarButton>
            <ModeSelector modes={editorModes} onChange={handleChange} selectedValue={mode} renderLabel />
        // </ToolbarButton>
    )

}

export default EditorModeSelector