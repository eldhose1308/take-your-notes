import React, { useState } from "react";

const FileTabItems = ({ item, selectedId, note, onDelete, onClick }) => {
    const isSelected = selectedId === item;
    const { title } = note || {};

    const [path, setPath] = useState();

    const handleHover = () => {
        const { folderLabel, fileLabel, title } = note || {};
        setPath(`${folderLabel} / ${fileLabel} / ${title}`)
    }


    return (
        // <div className="flex w-full">
         <div onMouseEnter={handleHover} onClick={(e) => onClick(item, e)} className={`flex flex-nowrap items-center group-hover text-xs py-2 mx-1 rounded-md cursor-pointer ${isSelected ? 'bg-another text-default' : 'bg-default text-secondary hover-text-default hover-another'}`}>
           {/* <span className="tab-item py-1 px-2 my-1 mx-2 rounded-md cursor-pointer border text-xs"> */}

            <span className="ml-2 whitespace-nowrap" title={path}>{title}</span>
            <span onClick={(e) => onDelete(item, e)} className={`flex cursor-pointer mx-2 bg-transparent text-default border hover-text-destructive hover-border-destructive rounded-md ${isSelected ? '' : 'invisible group-hover-item'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </span>
           {/* </span> */}
         </div>
        // </div>
    )
}

export default FileTabItems;