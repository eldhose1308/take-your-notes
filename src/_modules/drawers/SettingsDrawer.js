import React from "react"

import Flex from "_components/Misc/Flex/Flex";
import Separator from "_components/Misc/Separator/Separator";
import Drawer from "_components/UI/Drawer/Drawer";

const SettingsDrawer = () => {

    const closeDrawer = () => {

    }

    return (
        <Drawer isActive={false} hide={closeDrawer}>
            <Flex justifyContent='none' className='my-2 text-sm'>
                <Separator variant='custom' className='w-full' />
                <div className="flex my-3 w-full">
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
                    <div className="flex justify-between w-full items-center border-another text-default px-1 mx-1 my-1 rounded-md">
                        <span>
                            Theme
                        </span>
                        <span className="flex items-center p-1 rounded-md border border-accent cursor-pointer">
                            <span onClick={(e) => { }} title="Light Mode" className="flex items-center py-1 px-2 rounded-md cursor-pointer bg-accent text-custom">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
                            </span>
                            <span onClick={(e) => { }} title="System Mode" className="flex items-center py-1 px-2 rounded-md cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-laptop"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" /></svg>
                            </span>
                            <span onClick={(e) => { }} title="Dark Mode" className="flex items-center py-1 px-2 rounded-md cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
                            </span>
                        </span>
                    </div>
                </div>

            </Flex>
        </Drawer>
    )
}

export default SettingsDrawer;