import React from "react";
import { useDispatch } from 'react-redux';

import Flex from "_components/Misc/Flex/Flex";
import { Button } from '_components/Form';
import Combobox, { ComboboxContent, ComboboxTrigger } from "_components/UI/Combobox/Combobox";
import { useTemplateProvider } from "../Template/Template";

import useAuth from "_hooks/useAuth";
import Avatar from "_components/UI/Avatar/Avatar";
import Drawer from "_components/UI/Drawer/Drawer";
import UserProfileMenu from "_modules/profile/_components/UserProfileMenu";

import useDrawer from "_hooks/useDrawer";
import SettingsDrawer from "_modules/drawers/SettingsDrawer";
import { openSettingsDrawer } from "store/actions/drawerActions";
import { Link } from "react-router-dom";
import CLIENT_ROUTES from "_routes/clientRoutes";
import { USER_AVATAR_URL } from "_constants/API";

const Header = (props) => {
    const dispatch = useDispatch();

    const { isSidebarNeeded = true } = props;

    const { toggleSidebar } = useTemplateProvider(null)
    const { isDrawerOpen, closeDrawer, openDrawer } = useDrawer()
    const { isAuthenticated, user } = useAuth()
    const { userName, fullName, avatar } = user || {};

    const handleSettingsClick = () => {
        dispatch(openSettingsDrawer());
    }

    // if (!isSidebarNeeded) {
    //     return null;
    // }

    return (
        <>

            <header className="header bg-default text-default">
                <div className="flex px-4">

                    {isSidebarNeeded && <div className="menu-icon" onClick={toggleSidebar}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-align-left"><line x1="21" x2="3" y1="6" y2="6" /><line x1="15" x2="3" y1="12" y2="12" /><line x1="17" x2="3" y1="18" y2="18" /></svg>
                    </div>}

                    {/* <div className="header_search">Search...</div> */}
                </div>

                {isSidebarNeeded && <div className="flex justify-center items-center">
                    <Link to={isAuthenticated ? CLIENT_ROUTES.POST_CREATE : CLIENT_ROUTES.SIGNIN} className="flex mr-2">
                        <span title="Signin to start writing" className={`text-center border border-another text-accent hover-accent hover-text-custom text-xs my-2 mx-1 p-2 px-2 cursor-pointer rounded-md ${isAuthenticated ? '' : 'opacity-50'}`}>
                            <span className="flex items-center">
                                Start Writing
                                <span className="flex items-center ml-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-plus"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>
                                </span>
                            </span>
                        </span>
                    </Link>

                    {isAuthenticated ? (
                        <React.Fragment>
                            <Link to={CLIENT_ROUTES.PROFILE} >
                                <Avatar key={avatar} src={`${USER_AVATAR_URL}${avatar}`} name={fullName} size='xs' />
                            </Link>
                        </React.Fragment>
                    ) : (
                        <Link to={CLIENT_ROUTES.SIGNIN} className="flex">
                            <span className="bg-custom text-accent hover-text-custom hover-accent text-center text-xs my-2 mx-1 p-2 px-2 cursor-pointer rounded-md">
                                <span className="flex items-center pr-2">
                                    Sign In
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M10 11V8L15 12L10 16V13H1V11H10ZM2.4578 15H4.58152C5.76829 17.9318 8.64262 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C8.64262 4 5.76829 6.06817 4.58152 9H2.4578C3.73207 4.94289 7.52236 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C7.52236 22 3.73207 19.0571 2.4578 15Z"></path></svg>
                                </span>
                            </span>
                        </Link>
                    )}
                    <div className="mx-2"></div>
                    <div onClick={handleSettingsClick} className="text-secondary hover-text-default cursor-pointer flex p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>
                    </div>
                </div>}


            </header>

            <SettingsDrawer />
        </>
    )
}

export default Header;