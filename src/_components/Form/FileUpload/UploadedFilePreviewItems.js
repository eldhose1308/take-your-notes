import React from "react";
import FileWithPreview from "./FileWithPreview";

const UploadedFilePreviewItems = ({ onRemoveFile, onRetryFile, fileUploadStatusInfo, id, name, size, format, preview }) => {
    const { message, canRetry, isUploading, isUploaded, status=true } = fileUploadStatusInfo || {};

    return (
        <div className={`border border-${status ? isUploaded ? 'success' : 'secondary' : 'destructive'} rounded-md  text-xs my-2 p-2 w-sm`}>
            
            {isUploading && <span className="text-default"><svg className="lucide lucide-loader-circle mx-2 animate-spin" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg></span>}
            {isUploaded && <span className="text-success"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg></span>}
            {!status && <span className="text-destructive"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ban"><circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/></svg></span>}
            
            
            <span className="text-destructive">{message}</span>
            <div className={`flex flex-nowrap space-between my-2`}>
                <div className="flex border border-custom items-center justify-center rounded-md m-1 py-2 px-2 w-1/4">
                    <FileWithPreview preview={preview} format={format} />
                </div>

                <div className="flex w-3/4 mx-1">
                    <div className="flex flex-col border border-custom rounded-md w-full m-1 p-2">
                        <span className="w-3/4 font-bold text-ellipsis overflow-hidden">{name}</span>
                        <span className="">{size}</span>
                        <span className="text-secondary">{format}</span>
                    </div>
                    <div className="flex flex-col items-center justify-center px-4 mt-1 w-full">
                        {(!isUploading && onRemoveFile) && <div onClick={(e) => onRemoveFile(id, e)} className="flex items-center justify-between border border-destructive hover-destructive cursor-pointer rounded-md px-1 py-1 my-1">
                            <span className="flex items-center mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-x"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /><line x1="15" x2="9" y1="9" y2="15" /><line x1="9" x2="15" y1="9" y2="15" /></svg>
                            </span>
                            <span>Remove</span>
                        </div>}
                        {canRetry && <div onClick={(e) => onRetryFile(id, e)} className="flex items-center justify-center bg-transparent text-default border border-accent hover-accent hover-text-custom cursor-pointer rounded-md px-1 py-1 my-1">
                            <span className="flex items-center mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rotate-cw"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /></svg>
                            </span>
                            <span>Retry</span>
                        </div>}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UploadedFilePreviewItems;