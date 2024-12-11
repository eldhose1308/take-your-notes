import React, { useState, useRef } from "react";

import Avatar from "_components/UI/Avatar/Avatar";
import Typography from "_components/Misc/Typography/Typography";
import Separator from "_components/Misc/Separator/Separator";
import ImageCropper from "./ImageCropper";
import { USER_AVATAR_URL } from "_constants/API";


const buttonStateValues = {
    none: 'Remove',
    loading: 'Removing',
    failure: 'Failed',
    completed: 'Removed',
}


const DisplayImageForm = (props) => {
    const { identityData, onSave=()=>{}, onRemove=()=>{} } = props;
    const { avatar, userName, fullName, email, bio, joinedAt, websiteLink, phone, postCounts, followers, following, rank } = identityData;

    const [imageUrl, setImageUrl] = useState(null);
    const fileInputRef = useRef(null);

    const [responseObj, setResponseObj] = useState({ status: 'none', responseMessage: '' });
    const [buttonStatus, setButtonStatus] = useState('none');

    const handleOpenFileUpload = () => {
        fileInputRef.current.click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleCancel = () => {
        setImageUrl(null);
    };

    const handleRemoveImage = async() => {
        setButtonStatus('loading');
        try {
            const uploadResponse = await onRemove({ removeAvatar: true });
            setButtonStatus('completed');
            setResponseObj({ status: 'success', responseMessage: uploadResponse });
        } catch (err) {
            setButtonStatus('failure');
            setResponseObj({ status: 'error', responseMessage: err })
        } finally {
            setTimeout(() => {
                setButtonStatus('none');
            }, 1000)
        }
    }

    const handleUpload = async (data) => {
        try{
            await onSave({ avatar: data });
            setImageUrl(null);
        }catch(err){
            const { message } = err;
            throw message;
            // console.log(err)
        }
        // setImageUrl(null);
        // set upload button fetchStatuses
        // call api
        // show error/success message
        // save the data to global state & localStorage
    }

    return (
        <div>
            <Typography variant='secondary' size='sm' textVariant='default'>Change your display picture here.</Typography>
            <Separator variant='another' className='my-3' />

            {imageUrl ?
                (
                    <ImageCropper imageUrl={imageUrl} onCancel={handleCancel} onUpload={handleUpload} />
                ) : (
                    <React.Fragment>
                        <Avatar key={avatar} name={fullName} src={`${USER_AVATAR_URL}${avatar}`} size='lg' />
                        <div className="flex text-sm my-2">
                            <span className='flex items-center px-2 py-1 mx-2 bg-custom text-destructive hover-destructive hover-text-default rounded-md cursor-pointer' onClick={handleRemoveImage}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /></svg>
                                <span className="ml-2">                                
                                    {buttonStateValues[buttonStatus]}
                                </span>
                            </span>

                            <span className='flex items-center px-2 py-1 mx-2 bg-custom text-primary hover-primary hover-text-default rounded-md cursor-pointer' onClick={handleOpenFileUpload}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" x2="12" y1="3" y2="15" /></svg>
                                <span className="ml-2">Upload new photo</span>
                            </span>

                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                className="hidden"
                            />

                        </div>
                    </React.Fragment>

                )}

            <div className="border-2 border-another bg-light mt-8 p-4 rounded-md">
                <Typography textVariant='none'>Upload a new avatar.</Typography>
                <Typography textVariant='none'>You can crop as you wish.</Typography>
            </div>
        </div>
    )
}

export default DisplayImageForm;