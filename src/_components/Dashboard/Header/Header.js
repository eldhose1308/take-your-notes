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

const Header = (props) => {
    const dispatch = useDispatch();

    const { isSidebarNeeded = true } = props;

    const { toggleSidebar } = useTemplateProvider(null)
    const { isDrawerOpen, closeDrawer, openDrawer } = useDrawer()
    const { isAuthenticated } = useAuth()

    const handleSettingsClick = () => {
        dispatch(openSettingsDrawer());
    }

    return (
        <>

            <header className="header bg-default text-default">
                <div className="flex px-4">

                    <div className="menu-icon" onClick={toggleSidebar}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-align-left"><line x1="21" x2="3" y1="6" y2="6" /><line x1="15" x2="3" y1="12" y2="12" /><line x1="17" x2="3" y1="18" y2="18" /></svg>
                    </div>

                    {/* <div className="header_search">Search...</div> */}
                </div>
                <div onClick={handleSettingsClick} className="text-secondary hover-text-default cursor-pointer flex p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>
                </div>


            </header>

            <SettingsDrawer />
        </>
    )
    // return (
    //     <Flex direction='row' justifyContent='spaceBetween' className='header bg-default border-b border-another px-4 py-2 text-default sticky' style={{ zIndex: '11' }}>
    //         <div className="flex px-2">
    //             <div className="mx-1">
    //                 Logo
    //             </div>
    //             {isSidebarNeeded ? (
    //                 <div className="mx-1 hidden md:display sm:display md:display lg:display bar" onClick={toggleSidebar}>
    //                     <span className="cursor-pointer px-2 py-1">
    //                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bar-chart" transform="rotate(90)"><line x1="12" x2="12" y1="20" y2="10" /><line x1="18" x2="18" y1="20" y2="4" /><line x1="6" x2="6" y1="20" y2="16" /></svg>
    //                     </span>
    //                 </div>
    //             ) : null}
    //         </div>
    //         <div className="flex px-2">
    //             <span className="mx-2 my-2 cursor-pointer">
    //                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
    //             </span>
    //             <span className="mx-2 my-2 cursor-pointer">
    //                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>
    //             </span>


    //             <span className="cursor-pointer">
    //                 {isAuthenticated ? (
    //                     <React.Fragment>

    //                         <Button variant='link' size='xs' onClick={openDrawer}>
    //                             <Avatar size='xs' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu2whjzwoBz71waeE07wh1L_sfjpdm6IIf7g&amp;usqp=CAU" />
    //                         </Button>

    //                         {/* <Button variant='outline' size='sm' onClick={logout}>
    //                                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-in"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /><polyline points="10 17 15 12 10 7" /><line x1="15" x2="3" y1="12" y2="12" /></svg>
    //                                 <span className="mx-2">
    //                                     SignOut
    //                                 </span>
    //                             </Button> */}
    //                     </React.Fragment>
    //                 ) : (
    //                     <Link to="/signin" className="w-full">
    //                         <Button variant='outline' size='sm'>
    //                             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-in"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /><polyline points="10 17 15 12 10 7" /><line x1="15" x2="3" y1="12" y2="12" /></svg>
    //                             <span className="mx-2">
    //                                 SignIn
    //                             </span>
    //                         </Button>
    //                     </Link>
    //                 )}

    //             </span>
    //         </div>


    //         {isDrawerOpen ?
    //             (
    //                 <Drawer hide={closeDrawer}>
    //                     <UserProfileMenu />
    //                 </Drawer>
    //             ) : null
    //         }
    //     </Flex>
    // )
}

export default Header;