import { TOOLBAR_MODES } from "_modules/markdownEditor/_constants/toolbar";
import React, { useState } from "react";
import EditorModeSelector from "./EditorModeSelector";
import ToolbarButton from "./ToolbarButton";

const TOOLBAR_FORMATS = [
    {
        title: 'Bold',
        value: 'bold',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bold"><path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8" /></svg>
    },
    {
        title: 'Italic',
        value: 'italic',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-italic"><line x1="19" x2="10" y1="4" y2="4" /><line x1="14" x2="5" y1="20" y2="20" /><line x1="15" x2="9" y1="4" y2="20" /></svg>
    },
    {
        title: 'Numbered List',
        value: 'numberedList',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list-ordered"><line x1="10" x2="21" y1="6" y2="6" /><line x1="10" x2="21" y1="12" y2="12" /><line x1="10" x2="21" y1="18" y2="18" /><path d="M4 6h1v4" /><path d="M4 10h2" /><path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" /></svg>
    },
    {
        title: 'Bulleted List',
        value: 'bulletedList',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list"><line x1="8" x2="21" y1="6" y2="6" /><line x1="8" x2="21" y1="12" y2="12" /><line x1="8" x2="21" y1="18" y2="18" /><line x1="3" x2="3.01" y1="6" y2="6" /><line x1="3" x2="3.01" y1="12" y2="12" /><line x1="3" x2="3.01" y1="18" y2="18" /></svg>
    },
    {
        title: 'Horizontal line',
        value: 'horizontalLine',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-separator-horizontal"><line x1="3" x2="21" y1="12" y2="12" /><polyline points="8 8 12 4 16 8" /><polyline points="16 16 12 20 8 16" /></svg>
    },
    {
        title: 'Checkbox items',
        value: 'checkboxItems',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-check-big"><path d="m9 11 3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
    },
    {
        title: 'Code',
        value: 'code',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
    },
];

const Toolbar = (props) => {
    const { onEditorModeChange = () => { }, onImageInsert = () => { }, onTextFormat = () => { } } = props;

    const [mode, setMode] = useState(TOOLBAR_MODES.EDIT_PREVIEW)
    const [activeFormat, setActiveFormat] = useState(null);

    const handleModeChange = (newMode) => {
        setMode(newMode);
        onEditorModeChange(newMode);
    }

    const handleTextFormatting = (formatAction) => {
        setActiveFormat(formatAction);
        onTextFormat(formatAction);
    }

    return (
        <div className="flex border border-custom rounded-md px-2 py-1 m-2">
            <EditorModeSelector mode={mode} onChange={handleModeChange} />


            {TOOLBAR_FORMATS.map((format) => {
                const { title, value, icon } = format;
                const isActive = activeFormat === value;
                return (
                    <ToolbarButton key={`Toolbar_btn_${value}`} isActive={isActive} title={title} value={value} onClick={handleTextFormatting}>
                        {icon}
                    </ToolbarButton>
                )
            })}

            <ToolbarButton title='Insert File' value='insertFile' onClick={onImageInsert}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-up"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M12 12v6" /><path d="m15 15-3-3-3 3" /></svg>
            </ToolbarButton>


        </div>
    )
}

export default Toolbar