import React, { useState } from "react";

import Drawer from "_components/UI/Drawer/Drawer";
import Flex from "_components/Misc/Flex/Flex";
import Separator from "_components/Misc/Separator/Separator";

import { Card, CardHeader, CardContent, CardFooter } from "_components/Misc/Card/Card";
import Typography from "_components/Misc/Typography/Typography";
import { Button, TextBox } from "_components/Form";
import FileUpload from "_components/Form/FileUpload/FileUpload";

const ImageUploadModal = (props) => {
    const { onClose } = props;
    const [buttonStatus, setButtonStatus] = useState('none');


    const handleSubmitClick = () => {

    }


    return (
        <Drawer isActive={true} hide={onClose}>
            <Flex justifyContent='none' className='my-2 text-sm'>
                <Separator variant='custom' className='w-full' />
                <div className="flex my-3 w-full">
                    <div className="flex flex-col w-full px-2 py-2 mx-2">

                        <Typography size='md'>Upload Image</Typography>

                        <Typography size='xs' textVariant='default'>Upload the image by clicking `Upload from device` to our server and paste the image url into the editor</Typography>

                        <div className="flex my-3">

                            <div className="my-3">
                                <FileUpload allowMultiple />
                            </div>


                        </div>

                        <div className="flex justify-between">
                            {/* <Button size='xs' width='none' variant='custom' onClick={handleResetClick}>Reset</Button> */}
                            <Button size='xs' width='none' variant='accent' onClick={handleSubmitClick} buttonStatus={buttonStatus}>
                                Upload Image
                            </Button>
                        </div>

                    </div>

                </div>
                <Separator variant='custom' className='w-full' />

                <div className="flex flex-col w-full px-2 py-2 mx-2">
                    <div className="flex flex-col my-2">
                        <Typography size='md'>Your Images</Typography>
                        <Typography size='xs' textVariant='default'>Images uploaded by you</Typography>
                    </div>

                    <div className="flex justify-between w-full items-center border-another hover-custom text-default px-2 py-2 mx-1 rounded-md cursor-pointer">
                        <span>
                            Uploded Image 1
                        </span>
                    </div>

                    <div className="flex justify-between w-full items-center border-another hover-custom text-default px-2 py-2 mx-1 rounded-md cursor-pointer">
                        <span>
                            Uploded Image 2
                        </span>
                    </div>
                </div>





            </Flex>
        </Drawer>
    )
}

export default ImageUploadModal;