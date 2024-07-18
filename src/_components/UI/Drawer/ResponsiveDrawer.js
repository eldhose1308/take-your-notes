import React, { useState, useEffect } from "react";

import Drawer from "./Drawer";

import useDrawer from "_hooks/useDrawer";

const ResponsiveDrawer = ({ children, ...props }) => {
    const [isHookVisible, setIsHookVisible] = useState(false)
    const { isDrawerOpen, closeDrawer, openDrawer } = useDrawer()

    useEffect(() => {

        const handleResize = () => {
            const widthToCheck = 1012;
            const currentWidth = window.innerWidth;


            if (!isDrawerOpen && currentWidth <= widthToCheck) {
                setIsHookVisible(true)
            } else {
                setIsHookVisible(false)
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <React.Fragment>

            {isHookVisible ? (

                <div className='drawer-hook h-full bg-custom absolute right-0 w-3 border border-light-gray'>
                    <span onClick={openDrawer} className='absolute top-20 right-100 cursor-pointer bg-custom text-default border border-light-gray border-r-none p-1 rounded-x-md'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-align-left"><line x1="21" x2="3" y1="6" y2="6" /><line x1="15" x2="3" y1="12" y2="12" /><line x1="17" x2="3" y1="18" y2="18" /></svg>
                    </span>
                </div>
            ) : (
                children
            )}

            {isDrawerOpen && (
                <Drawer isActive={isDrawerOpen} hide={closeDrawer} {...props}>
                    {children}
                </Drawer>
            )}
        </React.Fragment>
    )
}

export default ResponsiveDrawer