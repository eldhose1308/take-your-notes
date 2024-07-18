import React, { useState } from "react";

const FolderItems = () => {
    const [showSub, setShowSub] = useState(false)
    return (
        <div className="">
            <div className="flex justify-between cursor-pointer hover-highlight px-3 py-2 rounded-md text-sm" onClick={() => setShowSub(prev => !prev)}>
                <div className="flex">
                    {showSub ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg> :
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                    }
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /></svg>
                    </span>
                    <span className="mx-2">
                        DSM
                    </span>
                </div>
                <span>

                </span>
            </div>
            {showSub && <div className="text-sm text-secondary">
                <div className="cursor-pointer px-8 py-1 rounded-md hover-highlight hover-text-default">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" /></svg>
                    <span className="mx-1">
                        Day 1
                    </span>
                </div>

                <div className="cursor-pointer px-8 py-1 rounded-md hover-highlight hover-text-default">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" /></svg>
                    <span className="mx-1">
                        Day 2
                    </span>
                </div>

                <div className="cursor-pointer px-8 py-1 rounded-md hover-highlight hover-text-default">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" /></svg>
                    <span className="mx-1">
                        Day 3
                    </span>
                </div>
               
            </div>}
        </div>
    )
}


const FolderItemsGroup = () => {

    return (
        <div>
            {[1, 2, 3,4,5,6,7].map((items) => {
                return (<FolderItems />)
            })}
        </div>
    )
}

export {
    FolderItems,
    FolderItemsGroup
}