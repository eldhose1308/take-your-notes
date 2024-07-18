import React, { useState, useEffect, useRef } from "react";

import { Button } from "_components/Form";


const initBtnStatus = { rightBtn: true, leftBtn: false }
const Tabs = ({ hasNav = false, children }) => {
    const menuRef = useRef(null)
    const [buttonStatus, setButtonStatus] = useState(initBtnStatus)

    useEffect(() => {
        const menuNode = menuRef.current;

        const handleScroll = () => {
            const currentScroll = menuRef.current.scrollLeft;
            const maxScroll = menuRef.current.scrollWidth - menuRef.current.clientWidth;

            setButtonStatus({
                leftBtn: currentScroll > 20,
                rightBtn: currentScroll < maxScroll - 30
            });
        };

        menuNode.addEventListener('scroll', handleScroll);
        return () => {
            menuNode.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLeftScroll = () => {
        const currentScroll = menuRef.current.scrollLeft;
        const targetScroll = Math.max(0, currentScroll - 250);

        menuRef.current.scrollTo({
            left: targetScroll,
            behavior: 'smooth'
        })
    }
    const handleRightScroll = () => {
        const currentScroll = menuRef.current.scrollLeft;
        const targetScroll = currentScroll + 250;

        menuRef.current.scrollTo({
            left: targetScroll,
            behavior: 'smooth'
        })
    }



    // 'overflow-x-auto flex-nowrap scrollbar-none w-4.5/5' for next line
    return (
        <div className="tab-container flex justify-between items-center w-full bg-light">
            {hasNav ? (
                buttonStatus.leftBtn && (
                    <Button variant='ghost' size='xs' width='none' onClick={handleLeftScroll}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-arrow-left"><circle cx="12" cy="12" r="10" /><path d="M16 12H8" /><path d="m12 8-4 4 4 4" /></svg>
                    </Button>
                )
            ) : null}

            <div className={`${hasNav ? 'scrollable-tab-box grow-1 w-4' : '' }`}>
                <ul ref={menuRef} className={`tab-box list-none flex flex-1 overflow-x-auto flex-nowrap scrollbar-none text-center my-0 mx-3 p-2 items-center`}>
                    {children}
                </ul>
            </div>

            {hasNav ? (
                buttonStatus.rightBtn && (
                    <Button variant='ghost' size='xs' width='none' onClick={handleRightScroll}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-arrow-right"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="m12 16 4-4-4-4" /></svg>
                    </Button>
                )
            ) : null}
        </div>
    )
}

const TabItem = ({ isActive, onClick, children, ...props }) => {

    const className = `tab-item py-1 px-2 my-1 mx-2 rounded-md cursor-pointer border text-xs ${isActive ? 'bg-accent text-custom' : 'bg-another hover-highlight'}`;
    return (
        <li onClick={onClick} className={className} {...props}>{children}</li>
    )
}

export {
    Tabs,
    TabItem
};