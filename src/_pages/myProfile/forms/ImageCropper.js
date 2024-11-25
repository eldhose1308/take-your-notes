import React, { useEffect, useRef, useState } from "react";
import Croppie from "croppie";
import "croppie/croppie.css";

import Avatar from "_components/UI/Avatar/Avatar";
import Typography from "_components/Misc/Typography/Typography";


const buttonStateValues = {
    none: 'Upload',
    loading: 'Uploading',
    failure: 'Failed',
    completed: 'Completed',
}


const ImageCropper = ({ imageUrl, onCancel = () => { }, onUpload = () => { } }) => {
    const croppieRef = useRef(null);
    const [croppieInstance, setCroppieInstance] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);
    const [isCropped, setIsCropped] = useState(false);

    const [responseObj, setResponseObj] = useState({ status: 'none', responseMessage: '' });
    const [buttonStatus, setButtonStatus] = useState('none');

    const { status, responseMessage } = responseObj;

    useEffect(() => {
        if (!imageUrl) return;

        const croppie = new Croppie(croppieRef.current, {
            viewport: { width: 200, height: 200, type: 'circle' },
            boundary: { width: 300, height: 300 },
            showZoomer: true,
        });

        setCroppieInstance(croppie);
        croppie.bind({ url: imageUrl });

        return () => {
            croppie.destroy();
        };
    }, [imageUrl]);


    const handleCancel = () => {
        onCancel();
    };

    const handleUpload = async () => {
        setButtonStatus('loading');
        try {
            const uploadResponse = await onUpload(croppedImage);
            setButtonStatus('completed');
            setResponseObj({ status: 'success', responseMessage: uploadResponse })
        } catch (err) {
            setButtonStatus('failure');
            setResponseObj({ status: 'error', responseMessage: err })
        } finally {
            setTimeout(() => {
                setButtonStatus('none');
            }, 1000)
        }
    }

    const handleCrop = () => {
        if (croppieInstance) {
            croppieInstance.result({ type: 'base64', size: { width: 300, height: 300 } }).then((croppedImage) => {
                setCroppedImage(croppedImage);
                setIsCropped(true);
            });
        }
    };

    return (
        <div>
            {!isCropped && <div ref={croppieRef}></div>}
            {croppedImage ? (
                <div>
                    <Typography className='my-2'>Confirm your new display picture</Typography>

                    {responseMessage && <div className="flex">
                        {responseMessage}
                    </div>}

                    <Avatar src={croppedImage} size='lg' />
                    <div className="flex text-sm my-2">
                        <span className='flex items-center px-2 py-1 mx-2 bg-custom text-destructive hover-destructive hover-text-default rounded-md cursor-pointer' onClick={handleCancel}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /></svg>
                            <span className="ml-2">Cancel</span>
                        </span>

                        <span className='flex items-center px-2 py-1 mx-2 bg-custom text-primary hover-primary hover-text-default rounded-md cursor-pointer' onClick={handleUpload}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-upload animate-bounce-y"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" x2="12" y1="3" y2="15" /></svg>
                            <span className="ml-2">
                                {buttonStateValues[buttonStatus]}
                            </span>
                        </span>

                    </div>
                </div>
            ) : (
                !isCropped && (
                    <div className="flex text-sm my-2">
                        <span className='flex items-center px-2 py-1 mx-2 bg-custom text-destructive hover-destructive hover-text-default rounded-md cursor-pointer' onClick={handleCancel}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /></svg>
                            <span className="ml-2">Cancel</span>
                        </span>

                        <span className='flex items-center px-2 py-1 mx-2 bg-custom text-primary hover-primary hover-text-default rounded-md cursor-pointer' onClick={handleCrop}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right animate-bounce-x"><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg>
                            <span className="ml-2">Proceed to preview</span>
                        </span>
                    </div>
                )
            )}
        </div>
    );
};

export default ImageCropper;
