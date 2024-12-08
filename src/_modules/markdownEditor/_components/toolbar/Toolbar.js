import { TOOLBAR_MODES } from "_modules/markdownEditor/_constants/toolbar";
import React, { useState } from "react";
import EditorModeSelector from "./EditorModeSelector";
import ToolbarButton from "./ToolbarButton";

const Toolbar = (props) => {
    const { textFormats = [], activeTextFormat = {}, onEditorModeChange = () => { }, onImageInsert = () => { }, onTextFormat = () => { }, onHelpOpen=()=>{} } = props;

    const [mode, setMode] = useState(TOOLBAR_MODES.EDIT_PREVIEW);
    // const [activeFormat, setActiveFormat] = useState(null);

    const handleModeChange = (newMode) => {
        setMode(newMode);
        onEditorModeChange(newMode);
    }

    const handleTextFormatting = (formatAction) => {
        // setActiveFormat(formatAction);
        onTextFormat(formatAction);
    }

    return (
        <div className="flex justify-between border border-custom rounded-md px-2 py-1 m-2">
            <EditorModeSelector mode={mode} onChange={handleModeChange} />


            <div className="flex">

                {textFormats.map((format) => {
                    const { title, value, icon } = format;
                    const isActive = activeTextFormat[value];
                    return (
                        <ToolbarButton key={`Toolbar_btn_${value}`} isActive={isActive} title={title} value={value} onClick={handleTextFormatting}>
                            {icon}
                        </ToolbarButton>
                    )
                })}

                <ToolbarButton title='Insert File' value='insertFile' onClick={onImageInsert}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-up"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M12 12v6" /><path d="m15 15-3-3-3 3" /></svg>
                </ToolbarButton>

                <ToolbarButton title='Info' value='info' onClick={onHelpOpen}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                </ToolbarButton>


            </div>


        </div>
    )
}

export default Toolbar