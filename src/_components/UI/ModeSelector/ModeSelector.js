import React, { useState } from "react";


const modeClass = 'flex items-center mx-1 py-1 px-1 rounded-md cursor-pointer';
const defaultClass = 'text-default hover-highlight';
const activeClass = ' bg-accent text-highlight'


const ModeSelector = (props) => {
    const { modes = [], selectedValue, onChange, renderLabel } = props;
    const { id: firstMode } = modes[0] || {};

    const [activeMode, setActiveMode] = useState(selectedValue || firstMode);

    const handleModeChange = (id, selectedMode, e) => {
        setActiveMode(id);
        onChange && onChange(id, selectedMode, e);
    }

    return (
        <span className="flex items-center p-1 rounded-md border border-accent cursor-pointer">
            {modes.map(mode => {
                const { id, label, modeElement } = mode;
                const isActive = activeMode === id;
                return (
                    <span key={id} onClick={(e) => handleModeChange(id, mode, e)} title={label} className={`${modeClass} ${isActive ? activeClass : defaultClass}`}>
                        {renderLabel && isActive ? (
                            <React.Fragment>
                                <span className="text-xs">{label}</span>
                                <span className="flex items-center">
                                    {modeElement}
                                </span>
                            </React.Fragment>
                        ) : (
                            modeElement
                        )}
                    </span>
                )
            })}
        </span>
    )
}

export default ModeSelector;