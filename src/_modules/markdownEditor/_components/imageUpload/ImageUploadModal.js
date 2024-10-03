import React, { useEffect, useState } from "react";

import Drawer from "_components/UI/Drawer/Drawer";
import Flex from "_components/Misc/Flex/Flex";
import Separator from "_components/Misc/Separator/Separator";

import Typography from "_components/Misc/Typography/Typography";
import FileUpload from "_components/Form/FileUpload/FileUpload";
import UploadedImagesItem from "./UploadedImagesItem";

import copyToCliboard from "_utils/clipboardAPI";
import { useToast } from "_contexts/ToastProvider";

import * as fileUpload from "_services/fileUpload.service";



const ImageUploadModal = (props) => {
    const { onClose, onInsertFileToEditor, pastedFiles } = props;
    const { toast } = useToast()

    const [uploadedFiles, setUploadedFiles] = useState([]);

    const handleSubmitClick = () => {

    }

    const handleFileUploadSuccess = (data) => {
        setUploadedFiles((previousFiles => [data, ...previousFiles]));

        const preview = `${data.basePath}${data.fileName}`;
        data.filePath = preview;
        onInsertFileToEditor(data)
    }

    const handleCopyFilePath = async (filePath, file, e) => {
        e.stopPropagation();
        const hasCopied = await copyToCliboard(filePath);
        if(hasCopied){
            toast({
                heading: 'Copied to Clipboard',
                options: { position: 'top-right' }
            }).success();
            file.filePath = filePath;
            onInsertFileToEditor(file);
            onClose();
            return;
        }

        alert('Not Copied')
    }

    useEffect(() => {
        const getUploadedFiles = async () => {
            const response = await fileUpload.getFileUploads();
            setUploadedFiles(response);
        }

        getUploadedFiles();
    }, [])


    return (
        <Drawer isActive={true} hide={onClose}>
            <Flex justifyContent='none' className='my-2 text-sm'>
                <Separator variant='custom' className='w-full' />
                <div className="flex my-3 w-full">
                    <div className="flex flex-col w-full px-2 py-2 mx-2">

                        <Typography size='md'>Upload File</Typography>

                        <Typography size='xs' textVariant='default'>Upload the file by clicking `Upload from device` to our server and paste the file url into the editor</Typography>

                        <div className="flex my-3">

                            <div className="my-3">
                                <FileUpload onSuccess={handleFileUploadSuccess} pastedFiles={pastedFiles} allowMultiple />
                            </div>


                        </div>

                    </div>

                </div>
                <Separator variant='custom' className='w-full' />

                <div className="flex flex-col w-full px-2 py-2 mx-2">
                    <div className="flex flex-col my-2">
                        <Typography size='md'>Your Files</Typography>
                        <Typography size='xs' textVariant='default'>Files uploaded by you</Typography>
                        <Typography size='xs' textVariant='default' className='text-secondary'>Click on the file to copy the url to clipboard</Typography>
                    </div>

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
                             <UploadedImagesItem key={index} file={uploadedFile} onCopy={handleCopyFilePath} />
                        )}
                    </div>

                </div>





            </Flex>
        </Drawer>
    )
}

export default ImageUploadModal;