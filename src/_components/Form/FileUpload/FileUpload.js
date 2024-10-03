import React, { useState, useEffect, useRef } from "react";

import Separator from "_components/Misc/Separator/Separator";
import UploadedFilePreview from "./UploadedFilePreview";
import { preProcessImage } from "./_utils/processImage";

import * as fileUpload from "_services/fileUpload.service";


const buttonUploadStateValues = {
    none: 'Upload', 
    loading: 'Uploading', 
    failure: 'Failed', 
    completed: 'Uploaded', 
}

const FileUpload = (props) => {
    const { pastedFiles, onSuccess, allowMultiple = false } = props;

    const [buttonStatus, setButtonStatus] = useState('none');

    const [fileData, setFileData] = useState([]);
    const [fileUploadStatus, setFileUploadStatus] = useState({});
    const fileInputRef = useRef(null);

    const uploadCount = Object.keys(fileUploadStatus).length / fileData.length;

    const handleUploadSingleFile = async (formData, fileInfo, index) => {
        try{
            setFileUploadStatus((prev) => ({...prev, [fileInfo.id]: { isUploading: true } }))
            const response = await fileUpload.upload(formData);
            setFileUploadStatus((prev) => ({...prev, [fileInfo.id]: { isUploading: false, isUploaded: true, status: true } }))
            onSuccess(response)
        }catch(err){
            const { message } = err;
            const { message: errMessage } = message;
            setFileUploadStatus((prev) => ({...prev, [fileInfo.id]: { isUploading: false, status: false, canRetry: false, message: errMessage } }))
            throw err;
        }

    }

    const handleUploadFiles = async () => {
        const failureFiles = [];
        setButtonStatus('loading');
        try{
            for (let [index, fileInfo] of fileData.entries()) {
                const { file } = fileInfo;
                const formData = new FormData();
                formData.append(`file`, file);
                try{
                    await handleUploadSingleFile(formData, fileInfo, index);
                }catch(err){
                    setButtonStatus('failure');
                    failureFiles.push(fileInfo)
                }
            }
        }finally{
            setButtonStatus('completed');
            setTimeout(() => {
                setButtonStatus('none');
            }, 1000)
        }
        setFileData(failureFiles);
    }

    const handleFileChange = (e) => {
        const newFileData = preProcessImage(e.target.files);
        setFileData((prevData) => [...prevData, ...newFileData]);
    };

    const handleRemoveFile = (idToRemove) => {
        const updatedFileData = fileData.filter(({ id }) => id !== idToRemove);
        setFileData(updatedFileData);
    };

    const handleRemoveAllFiles = () => {
        setFileData([]);
        setFileUploadStatus({})
        fileInputRef.value = null;
    }

    const handleOpenFileUpload = () => {
        fileInputRef.current.click();
    }

    const handlePaste = (e) => {
        const clipboardFiles = e.clipboardData.files;
        if (clipboardFiles.length > 0) {
            const newFileData = preProcessImage(clipboardFiles);
            setFileData((prevData) => [...prevData, ...newFileData]);
        }
    };

    useEffect(() => {
        if (pastedFiles) {
            const newFileData = preProcessImage(pastedFiles);
            setFileData((prevData) => [...prevData, ...newFileData]);
        }
    }, [pastedFiles])

    useEffect(() => {
        // add paste listener to the div which supports drag and drop.
        document.addEventListener('paste', handlePaste);

        return () => {
            document.removeEventListener('paste', handlePaste);
        };
    }, []);

    return (
        <React.Fragment>
            <div onClick={handleOpenFileUpload} className="flex bg-custom text-default hover-accent hover-text-custom p-2 rounded-md cursor-pointer">
                <span className="flex items-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-paperclip"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>
                </span>
                <span>Upload from Device</span>
            </div>
            <div>
                Drag and drop here
            </div>
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                multiple={allowMultiple}
            />



            <div className="flex flex-col my-4 text-default">
                <div className="flex justify-between text-xs mb-2">

                    <div onClick={handleUploadFiles} className="flex bg-accent text-custom hover-default border hover-border-accent hover-text-default items-center justify-center cursor-pointer rounded-md p-2">
                        <span className="flex items-center mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" x2="12" y1="3" y2="15" /></svg>
                        </span>
                        <span>
                            {buttonUploadStateValues[buttonStatus]} 
                            {/* {uploadCount || ''} */}
                            {/* {fileData.length > 1 ? 'All' : ''} */}
                        </span>
                    </div>
                    {fileData.length > 1 && (
                        <div onClick={handleRemoveAllFiles} className="flex border border-destructive hover-destructive items-center justify-center cursor-pointer rounded-md p-2">
                            <span className="flex items-center mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /></svg>
                            </span>
                            <span>Remove All</span>
                        </div>
                    )}
                </div>
                {!!fileData.length && (
                    <React.Fragment>

                        <Separator variant='custom' className='w-full my-3' />

                        <UploadedFilePreview fileData={fileData} fileUploadStatus={fileUploadStatus} onRemoveFile={handleRemoveFile} />

                        <Separator variant='custom' className='w-full mt-3' />
                    </React.Fragment>
                )}

            </div>
        </React.Fragment>
    )
}

export default FileUpload;