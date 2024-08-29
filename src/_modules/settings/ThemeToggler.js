import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { MODES } from "_constants/UIPreferences";
import { setUserTheme } from "store/actions/uiActions";
import useUser from "_hooks/useUser";

const modeClass = 'flex items-center mx-1 py-1 px-1 rounded-md cursor-pointer';
const defaultClass = 'text-default hover-highlight';
const activeClass = ' bg-accent text-highlight'

const ThemeToggler = () => {
    const dispatch = useDispatch();
    const { getUserPreferences } = useUser();
    const { theme: currentTheme } = getUserPreferences();
    const mode = useSelector(state => state.preferences.theme);
    
    const handleModeSelect = (selectedMode) => {
        dispatch(setUserTheme(selectedMode));
    }


    return (
        <div className="flex justify-between w-full items-center border-another text-default px-1 mx-1 my-1 rounded-md">
            <span>
                Theme
            </span>
            <span className="flex items-center p-1 rounded-md border border-accent cursor-pointer">
                <span onClick={(e) => handleModeSelect(MODES.light)} title="Light Mode" className={`${modeClass} ${currentTheme === MODES.light ? activeClass : defaultClass}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
                </span>
                <span onClick={(e) => handleModeSelect(MODES.system)} title="System Mode" className={`${modeClass} ${currentTheme === MODES.system ? activeClass : defaultClass}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-laptop"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" /></svg>
                </span>
                <span onClick={(e) => handleModeSelect(MODES.dark)} title="Dark Mode" className={`${modeClass} ${currentTheme === MODES.dark ? activeClass : defaultClass}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
                </span>
            </span>
        </div>
    )
}

export default ThemeToggler;