import React, { useState } from "react"
import { useDispatch, useSelector } from 'react-redux';

import Flex from "_components/Misc/Flex/Flex";
import Separator from "_components/Misc/Separator/Separator";
import Drawer from "_components/UI/Drawer/Drawer";
import { openSettingsDrawer } from "store/actions/drawerActions";
import ThemeToggler from "_modules/settings/ThemeToggler";
import ModeSelector from "_components/UI/ModeSelector/ModeSelector";
import useAuth from "_hooks/useAuth";
import { setUserFont } from "store/actions/uiActions";
import useUser from "_hooks/useUser";

const SettingsDrawer = () => {
    const dispatch = useDispatch();
    const { logout } = useAuth();
    const { getUserPreferences } = useUser();
    const { fontMode: currentFont } = getUserPreferences();

    const status = useSelector(state => state.drawers.settingsDrawer);

    const closeDrawer = () => {
        dispatch(openSettingsDrawer(false));
    }



    const fontModes = [
        { id: 'classic-font', label: 'Classic', modeElement: 'Classic' },
        { id: 'modern-font', label: 'Modern', modeElement: 'Modern' }
    ]

    const [selectedFont, setSelectedFont] = useState(currentFont);


    const handleModeChange = (mode) => {
        setSelectedFont(mode);
        dispatch(setUserFont(mode));
    }


    if (!status) {
        return null;
    }

    return (
        <Drawer isActive={true} hide={closeDrawer}>
            <Flex justifyContent='none' className='my-2 text-sm'>
                <Separator variant='custom' className='w-full' />
                <div className="flex my-3 w-full">
                    <span className="text-xs text-secondary m-2">Show 'i' on all to give a small description</span>
                    <div className="flex justify-between w-full items-center border-another hover-custom text-default px-2 py-2 mx-1 rounded-md cursor-pointer">
                        <span>
                            Open
                        </span>
                        <span className="flex items-center text-secondary text-xs p-1 rounded-md cursor-pointer">
                            Cmnd + O
                        </span>
                    </div>
                    <div className="flex justify-between w-full items-center border-another hover-custom text-default px-2 py-2 mx-1 rounded-md cursor-pointer">
                        <span>
                            Save
                        </span>
                        <span className="flex items-center text-secondary text-xs p-1 rounded-md cursor-pointer">
                            Cmnd + S
                        </span>
                    </div>
                    <div className="flex justify-between w-full items-center border-another hover-custom text-default px-2 py-2 mx-1 rounded-md cursor-pointer">
                        <span>
                            Save to
                        </span>
                        <span className="flex items-center text-secondary text-xs p-1 rounded-md cursor-pointer">
                            Cmnd + Shift + S
                        </span>
                    </div>

                    <div className="flex justify-between w-full items-center border-another hover-custom text-default px-2 py-2 mx-1 rounded-md cursor-pointer">
                        <span>
                            Command Palette
                        </span>
                        <span className="flex items-center text-secondary text-xs p-1 rounded-md cursor-pointer">
                            Cmnd + /
                        </span>
                    </div>

                    <div className="flex justify-between w-full items-center border-another hover-custom text-default px-2 py-2 mx-1 rounded-md cursor-pointer">
                        <span>
                            Keyboard shortcuts
                        </span>
                        <span className="flex items-center text-secondary text-xs p-1 rounded-md cursor-pointer">
                            Cmnd + ?
                        </span>
                    </div>

                </div>
                <Separator variant='custom' className='w-full' />

                <div className="flex my-3 w-full">
                    <div className="flex justify-between w-full items-center border-another hover-custom text-default px-2 py-2 mx-1 rounded-md cursor-pointer">
                        <span>
                            Help
                        </span>
                    </div>

                    <div className="flex justify-between w-full items-center border-another hover-custom text-default px-2 py-2 mx-1 rounded-md cursor-pointer">
                        <span>
                            Send Feedback
                        </span>
                    </div>
                </div>

                <Separator variant='custom' className='w-full' />

                <div className="flex w-full my-3">
                    <ThemeToggler />

                    <div className="flex justify-between w-full items-center border-another hover-custom text-default px-2 py-2 mx-1 rounded-md cursor-pointer">
                        <span>Font</span>
                        <ModeSelector modes={fontModes} onChange={handleModeChange} selectedValue={selectedFont} />
                    </div>



                    <div className="flex justify-between w-full items-center border-another hover-custom text-default px-2 py-2 mx-1 rounded-md cursor-pointer">
                        <span>Save previous state</span>
                        <input type="checkbox" />
                    </div>

                </div>


                <Separator variant='custom' className='w-full' />

                <div className="flex my-3 w-full">
                    <div onClick={logout} className="flex justify-between w-full items-center border-another hover-custom text-default px-2 py-2 mx-1 rounded-md cursor-pointer">
                        <span>
                            Logout
                        </span>
                        <span>icon</span>
                    </div>
                </div>


            </Flex>
        </Drawer>
    )
}

export default SettingsDrawer;