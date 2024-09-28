import React, { useState, useRef } from "react";

import Separator from "_components/Misc/Separator/Separator";
import UploadedFilePreview from "./UploadedFilePreview";

const FileUpload = (props) => {
    const { allowMultiple = false } = props;

    const [fileData, setFileData] = useState([]);
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files) || [];
        const newFileData = files.map((file) => {
            const { lastModified, name, size, type } = file;
            const uId = `${name[0]}_${lastModified}}`;
            return {
                id: btoa(uId),
                name: name,
                size: size > (1024 * 1024)
                    ? (size / (1024 * 1024)).toFixed(2) + ' MB'
                    : (size / 1024).toFixed(2) + ' KB',
                format: type,
                preview: URL.createObjectURL(file),
            }
        });

        setFileData((prevData) => [...prevData, ...newFileData]);
    };

    const handleRemoveFile = (idToRemove) => {
        const updatedFileData = fileData.filter(({ id }) => id !== idToRemove);
        setFileData(updatedFileData);
    };

    const handleRemoveAllFiles = () => {
        setFileData([]);
        fileInputRef.value = null;
    }

    const handleOpenFileUpload = () => {
        fileInputRef.current.click();
    }

    return (
        <React.Fragment>
            <div onClick={handleOpenFileUpload} className="flex bg-custom text-default hover-accent hover-text-custom p-2 rounded-md cursor-pointer">
                <span className="flex items-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-paperclip"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>
                </span>
                <span>Upload from Device</span>
            </div>
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                multiple={allowMultiple}
            />


            {!!fileData.length && (
                <div className="flex flex-col my-4 text-default">
                    {fileData.length > 1 && (
                        <div className="flex justify-between text-xs mb-2">

                            <div onClick={() => { alert('Upload all') }} className="flex bg-accent text-custom hover-default border hover-border-accent hover-text-default items-center justify-center cursor-pointer rounded-md p-2">
                                <span className="flex items-center mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" x2="12" y1="3" y2="15" /></svg>
                                </span>
                                <span>Upload All</span>
                            </div>
                            <div onClick={handleRemoveAllFiles} className="flex bg-destructive text-custom hover-destructive items-center justify-center cursor-pointer rounded-md p-2">
                                <span className="flex items-center mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /></svg>
                                </span>
                                <span>Remove All</span>
                            </div>
                        </div>
                    )}
                    <Separator variant='custom' className='w-full my-3' />

                    <UploadedFilePreview fileData={fileData} onRemoveFile={handleRemoveFile} />

                    <Separator variant='custom' className='w-full mt-3' />

                </div>
            )}
        </React.Fragment>
    )
}

export default FileUpload;