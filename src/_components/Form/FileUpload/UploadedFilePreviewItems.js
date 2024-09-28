import React from "react";

const UploadedFilePreviewItems = ({ onRemoveFile, id, name, size, format, preview  }) => {

    return (
        <div className="flex flex-nowrap space-between text-xs border border-secondary rounded-md my-2 p-2 w-sm">

                    <div className="flex border border-custom items-center justify-center rounded-md m-1 py-2 px-2 w-1/4">
                        {format.startsWith("image/") ? (
                            <div className="flex border border-accent rounded-md p-1 cursor-pointer">
                                <img src={preview} alt="preview" className="h-10 w-10" />
                            </div>
                        ) : (
                            <div className="flex border border-accent rounded-md p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /></svg>
                            </div>
                        )}
                    </div>

                    <div className="flex w-3/4 mx-1">
                        <div className="flex flex-col border border-custom rounded-md w-full m-1 p-2">
                            <span className="w-3/4 font-bold text-ellipsis overflow-hidden">{name}</span>
                            <span className="">{size}</span>
                            <span className="text-secondary">{format}</span>

                        </div>
                        <div className="flex items-center justify-center px-4 mt-1 w-full">
                            <div onClick={(e) => onRemoveFile(id, e)} className="flex items-center justify-center w-full border border-destructive hover-destructive cursor-pointer rounded-md px-1 py-1 my-1">
                                <span className="flex items-center mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-x"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /><line x1="15" x2="9" y1="9" y2="15" /><line x1="9" x2="15" y1="9" y2="15" /></svg>
                                </span>
                                <span>Remove</span>
                            </div>
                        </div>
                    </div>

                </div>
    )
}

export default UploadedFilePreviewItems;