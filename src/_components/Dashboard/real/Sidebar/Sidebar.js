import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import Flex from "_components/Misc/Flex/Flex";
import Separator from "_components/Misc/Separator/Separator";

import { MENU_ITEMS } from "_constants/SidebarValues";

import Logo2 from "assets/logo/logo2.svg"

import './Sidebar.css'
import { useTemplateProvider } from "../Template/Template";
import SidebarItems from "./SidebarItems";
import { FolderItemsGroup } from "_modules/dashboard/_components/FolderItems";

const { top, middle, bottom } = MENU_ITEMS

const Sidebar = (props) => {
    const { isSidebarOpen } = useTemplateProvider()
    const location = useLocation();
    const pathname = location.pathname;
      
    const [showSub, setShowSub] = useState(false)

    return (
        <React.Fragment>
            {isSidebarOpen ? <div className="overlay z-10 xl:hidden"></div> : null}
            <div className={`sidebar max-w-60 min-w-sm border-r border-another text-default h-full overflow-scroll grow-1 h-screen relative ${isSidebarOpen ? 'translate-x-full-right sidebar-open z-10' : 'sidebar-closed sm:hidden md:hidden lg:hidden'} xl:display`}>
                <Flex direction='column' wrap='none' alignItems='none' justifyContent='none' width='none' className='bg-default rounded-md text-default p-3 text-sm'>
                    <div className="">

                        {top.map(menuItem => {
                            const { id, path } = menuItem
                            const isActive = pathname === path
                            return (
                                <SidebarItems key={`sidebar_top_item_${id}`} item={menuItem} isActive={isActive} />
                            )
                        })}


                    </div>

                    <Separator className="my-3" />

                    <div className="flex flex-col">
                        <span className="mx-2 my-2 text-secondary">
                            Your Collections
                        </span>

                        {/* <div className="p-4"> */}
                            <FolderItemsGroup />
                        {/* </div> */}

                        {/* {middle.map(menuItem => {
                            const { id, path } = menuItem
                            const isActive = pathname === path
                            return (
                                <SidebarItems key={`sidebar_middle_item_${id}`} item={menuItem} isActive={isActive} />
                            )
                        })} */}

                    </div>

                    <Separator className="my-3" />

                    <div className="flex flex-col">
                        <span className="mx-2 my-2 text-secondary">
                            Shared with you
                        </span>

                            <FolderItemsGroup />

                    </div>


                    <Separator className="my-3" />

                    <div className="flex flex-col">
                        <span className="mx-2 my-2 text-secondary">
                            Explore
                        </span>

                        {bottom.map(menuItem => {
                            const { id, path } = menuItem
                            const isActive = pathname === path
                            return (
                                <SidebarItems key={`sidebar_bottom_item_${id}`} item={menuItem} isActive={isActive} />
                            )
                        })}

                    </div>

                </Flex>
            </div>
        </React.Fragment>
    )

}

export default Sidebar;