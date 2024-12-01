import React, { useState, useEffect } from "react";

import Drawer from "./Drawer";

import useDrawer from "_hooks/useDrawer";

const openIcon = {
    right: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-left"><path d="m11 17-5-5 5-5"/><path d="m18 17-5-5 5-5"/></svg>,
    left: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-right"><path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/></svg>
}

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

                <div className={`drawer-hook h-full absolute border border-light-gray ${direction === 'right' ? 'right-0' : 'left-0'}`}>
                    <span onClick={openDrawer} className={`absolute top-20 cursor-pointer bg-custom text-default border border-light-gray p-1 ${direction === 'right' ? 'right-100 border-r-none rounded-x-md ' : 'left-100 border-l-none rounded-y-md '}`}>
                        {openIcon[direction]}           
                    </span>
                </div>
            ) : !isDrawerOpen ? (
                children
            ) : null}

            {isDrawerOpen && (
                <Drawer isActive={isDrawerOpen}  {...props} hide={closeDrawer}>
                    <div className="h-screen overflow-scroll">
                    {children}
                    </div>
                </Drawer>
            )}
        </React.Fragment>
    )
}

export default ResponsiveDrawer