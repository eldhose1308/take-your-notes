import React, { useState, useEffect } from "react";

import Drawer from "./Drawer";

import useDrawer from "_hooks/useDrawer";

const ResponsiveDrawer = ({ children, ...props }) => {
    const { direction = 'right' } = props

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
    }, [isDrawerOpen]);

    return (
        <React.Fragment>

            {isHookVisible ? (

                <div className='drawer-hook h-full absolute right-0 w-1 border border-light-gray'>
                    <span onClick={openDrawer} className='absolute top-20 right-100 cursor-pointer bg-custom text-default border border-light-gray border-r-none p-1 rounded-x-md'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-left"><path d="m11 17-5-5 5-5"/><path d="m18 17-5-5 5-5"/></svg>                    
                    </span>
                </div>
            ) : !isDrawerOpen ? (
                children
            ) : null}

            {isDrawerOpen && (
                <Drawer isActive={isDrawerOpen}  {...props} hide={closeDrawer}>
                    {children}
                </Drawer>
            )}
        </React.Fragment>
    )
}

export default ResponsiveDrawer