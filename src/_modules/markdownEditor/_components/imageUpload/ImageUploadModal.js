import React, { useEffect, useState } from "react";

import Drawer from "_components/UI/Drawer/Drawer";
import Flex from "_components/Misc/Flex/Flex";
import Separator from "_components/Misc/Separator/Separator";

import Typography from "_components/Misc/Typography/Typography";
import FileUpload from "_components/Form/FileUpload/FileUpload";

import * as fileUpload from "_api/fileUpload.api";

const ImageUploadModal = (props) => {
    const { onClose, pastedFiles } = props;

    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [buttonStatus, setButtonStatus] = useState('none');


    const handleSubmitClick = () => {

    }

    useEffect(() => {
        const getUploadedFiles = async () => {
            const response = await fileUpload.get();
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
                                <FileUpload pastedFiles={pastedFiles} allowMultiple />
                            </div>


                        </div>

                    </div>

                </div>
                <Separator variant='custom' className='w-full' />

                <div className="flex flex-col w-full px-2 py-2 mx-2">
                    <div className="flex flex-col my-2">
                        <Typography size='md'>Your Files</Typography>
                        <Typography size='xs' textVariant='default'>Files uploaded by you</Typography>
                    </div>

                        <div className="flex text-default">
                            <div>
                                <span>PDF</span>
                            </div>,
                            <div>
                                <span>Image</span>
                            </div>
                        </div>

                    <div className="flex justify-between w-full items-center border-another hover-custom text-default px-2 py-2 mx-1 rounded-md cursor-pointer">
                        <span>
                            Uploded File 1
                        </span>
                    </div>

                    <div className="flex justify-between w-full items-center border-another hover-custom text-default px-2 py-2 mx-1 rounded-md cursor-pointer">
                        <span>
                            Uploded File 2
                        </span>
                    </div>
                </div>





            </Flex>
        </Drawer>
    )
}

export default ImageUploadModal;