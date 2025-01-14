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
import { Link } from "react-router-dom";
import CLIENT_ROUTES from "_routes/clientRoutes";
import { useToast } from "_contexts/ToastProvider";
import { getUserDetailsOfCurrentUser } from "_utils/userAuth";

const SettingsDrawer = () => {
    const dispatch = useDispatch();
    const { logout } = useAuth();
    const { getUserPreferences } = useUser();
    const { fontMode: currentFont } = getUserPreferences();
    const { userName } = getUserDetailsOfCurrentUser();

    const status = useSelector(state => state.drawers.settingsDrawer);
    const { toast } = useToast();

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

    const showLaterImplementationToast = () => {
        toast({
            heading: "This feature is coming soon!",
            description: "We haven't started yet, but this section will be available in the future. Stay tuned!",
            options: { position: 'top-right' }
        }).info()
    }

    if (!status) {
        return null;
    }

    return (
        <Drawer isActive={true} hide={closeDrawer}>
            <Flex justifyContent='none' className='my-2 text-sm'>
                <Separator variant='another' className='w-full' />
                <div className="flex my-3 w-full">
                    <div onClick={closeDrawer} className="flex justify-between w-full items-center border-another hover-custom text-default px-2 py-2 mx-1 rounded-md cursor-pointer">
                        <Link to={CLIENT_ROUTES.PROFILE} className="w-full">
                            <span>
                                My Profile
                            </span>
                        </Link>
                    </div>
                </div>
                <Separator variant='another' className='w-full' />
                <div className="flex my-3 w-full opacity-50">
                    <span className="text-xs text-secondary m-2">Based on your activity</span>
                    <div onClick={showLaterImplementationToast} className="flex justify-between w-full items-center border-another hover-custom text-default hover-text-info px-2 py-2 mx-1 rounded-md cursor-pointer">
                        <span>
                            Categories you may like
                        </span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flask-conical"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2" /><path d="M6.453 15h11.094" /><path d="M8.5 2h7" /></svg>
                        </span>
                    </div>
                    <div onClick={showLaterImplementationToast} className="flex justify-between w-full items-center border-another hover-custom text-default hover-text-info px-2 py-2 mx-1 rounded-md cursor-pointer">
                        <span>
                            Users you may like
                        </span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flask-conical"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2" /><path d="M6.453 15h11.094" /><path d="M8.5 2h7" /></svg>
                        </span>
                    </div>
                    <div onClick={showLaterImplementationToast} className="flex justify-between w-full items-center border-another hover-custom text-default hover-text-info px-2 py-2 mx-1 rounded-md cursor-pointer">
                        <span>
                            Contents you may like
                        </span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flask-conical"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2" /><path d="M6.453 15h11.094" /><path d="M8.5 2h7" /></svg>
                        </span>
                    </div>



                </div>
                <Separator variant='another' className='w-full' />

                <div className="flex my-3 w-full">
                    <div className="flex justify-between w-full items-center border-another hover-custom text-default px-2 py-2 mx-1 rounded-md cursor-pointer">
                        <span>
                            Help
                        </span>
                    </div>

                    <div onClick={closeDrawer} className="flex justify-between w-full items-center border-another hover-custom text-default px-2 py-2 mx-1 rounded-md cursor-pointer">
                        <Link to={CLIENT_ROUTES.FEEDBACKS} className="w-full">
                            <span>
                                Send Feedback
                            </span>
                        </Link>
                    </div>
                </div>

                <Separator variant='another' className='w-full' />

                <div className="flex w-full my-3">
                    <ThemeToggler />

                    <div className="flex justify-between w-full items-center border-another text-default px-2 py-2 mx-1 rounded-md">
                        <span>Font</span>
                        <ModeSelector modes={fontModes} onChange={handleModeChange} selectedValue={selectedFont} />
                    </div>


                    {/* 
                    <div className="flex justify-between w-full items-center border-another hover-custom text-default px-2 py-2 mx-1 rounded-md cursor-pointer">
                        <span>Save previous state</span>
                        <input type="checkbox" />
                    </div> */}

                </div>


                <Separator variant='another' className='w-full' />

                <div className="flex my-3 w-full">
                    {!!userName && <div onClick={logout} className="flex justify-between w-full items-center border-another hover-custom text-default hover-text-destructive px-2 py-2 mx-1 rounded-md cursor-pointer">
                        <span>
                            Logout
                        </span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M5 11H13V13H5V16L0 12L5 8V11ZM3.99927 18H6.70835C8.11862 19.2447 9.97111 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C9.97111 4 8.11862 4.75527 6.70835 6H3.99927C5.82368 3.57111 8.72836 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C8.72836 22 5.82368 20.4289 3.99927 18Z"></path></svg>
                        </span>
                    </div>}
                </div>


            </Flex>
        </Drawer>
    )
}

export default SettingsDrawer;