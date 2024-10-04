import React, { useState, useEffect } from "react";

import Typography from "_components/Misc/Typography/Typography";
import UploadedImagesItem from "./UploadedImagesItem";

import * as fileUpload from "_services/fileUpload.service";

const filesListAccordionIcon = {
    true: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up"><path d="m18 15-6-6-6 6" /></svg>,
    false: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
}

const UploadedImages = ({ uploadedFiles, onCopy, setUploadedFiles }) => {
    const [isFilesListOpen, setIsFilesListOpen] = useState(false);

    const toggleFilesList = () => {
        setIsFilesListOpen((previousState) => !previousState);
    }

    useEffect(() => {
        const getUploadedFiles = async () => {
            const response = await fileUpload.getFileUploads();
            setUploadedFiles(response);
        }

        getUploadedFiles();
    }, [setUploadedFiles])

    return (
        <div className="flex flex-col w-full px-2 py-2 mx-2">
            <div className="flex justify-between w-full my-2">
                <div className="flex flex-col">
                    <Typography size='md'>
                        Your Files
                        <span className="ml-4 cursor-pointer" onClick={toggleFilesList}>
                            {filesListAccordionIcon[isFilesListOpen]}
                        </span>
                    </Typography>
                    <Typography size='xs' textVariant='default'>Files uploaded by you</Typography>
                    <Typography size='xs' textVariant='default' className='text-secondary'>Click on the file to copy the url to clipboard</Typography>
                </div>

            </div>

            <div className="flex text-default">
                {isFilesListOpen && (
                    <React.Fragment>

                        <div className="flex text-default">
                            <div>
                                <span>PDF</span>
                            </div>,
                            <div>
                                <span>Image</span>
                            </div>
                        </div>


                        <div className="h-48 overflow-scroll pr-4">
                            {uploadedFiles.map((uploadedFile, index) =>
                                <UploadedImagesItem key={index} file={uploadedFile} onCopy={onCopy} />
                            )}
                        </div>
                    </React.Fragment>
                )}


            </div>
        </div>
    )
}

export default UploadedImages;