import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { MODES } from "_constants/UIPreferences";
import { setUserTheme } from "store/actions/uiActions";
import useUser from "_hooks/useUser";
import ModeSelector from "_components/UI/ModeSelector/ModeSelector";


const themeModes = [
    { id: MODES.light, label: 'Light mode', modeElement: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg> },
    { id: MODES.system, label: 'System mode', modeElement: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-laptop"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" /></svg> },
    { id: MODES.dark, label: 'Dark mode', modeElement: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg> }
]

const ThemeToggler = () => {
    const dispatch = useDispatch();
    const { getUserPreferences } = useUser();
    const { theme: currentTheme } = getUserPreferences();
    
    const handleModeChange = (selectedMode) => {
        dispatch(setUserTheme(selectedMode));
    }


    return (
        <div className="flex justify-between w-full items-center border-another text-default px-1 mx-1 my-1 rounded-md">
            <span>
                Theme
            </span>
            <ModeSelector modes={themeModes} onChange={handleModeChange} selectedValue={currentTheme} />
        </div>
    )
}

export default ThemeToggler;