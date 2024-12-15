import React from "react";

import Typography from "_components/Misc/Typography/Typography";
import { Button, TextBox } from "_components/Form";
import useForm from "_hooks/useForm";
import usePublishBasicInformation from "../_hooks/usePublishBasicInformation";
import { BasicInformationFormSchema } from "../_utils/validation-rules";
import { useToast } from "_contexts/ToastProvider";

const BasicInformationForm = () => {
    const initialValues = { appName: '', subdomainName: '', contactEmail: '', tagLine: '' };
    const { register, reset, submit, errors } = useForm({ schema: BasicInformationFormSchema, initialValues });
    const { toast } = useToast()

    const { savePublishBasicInformation, fetchStatus } = usePublishBasicInformation();

    const handleSave = async (formData) => {
        try{
            savePublishBasicInformation(formData);
            toast({
                heading: 'Basic Information details submitted successfully!',
                description: 'Your changes will be visible now!',
                options: { position: 'top-right' }
            }).success()
        }catch(error){
            const { message } = error;
            toast({
                heading: 'Oops! There was an error submitting your basic information details.',
                description: message,
                options: { position: 'top-right' }
            }).error()
        }
    }

    return (
        <React.Fragment>
            <div className="mb-4">

                <Typography className='mb-4'>Set Up Your App Essentials</Typography>
                <Typography variant='secondary' size='sm' textVariant='default'>
                    Provide key details about your app to establish its identity. This information will help users understand your offering and improve engagement.
                </Typography>

                <Typography variant='secondary' size='sm' textVariant='default'>
                    Fill out the fields below to get started!
                </Typography>

            </div>
            <div className="flex flex-col mt-4">
                <div className="my-3">
                    <TextBox
                        type='text'
                        labelName='App Name'
                        placeHolder="Enter app name"
                        isFocused
                        placeholderFocus='visibleOnFocus'
                        validationMsg={errors.appName}
                        // className='my-2'
                        {...register('appName')}
                    />
                </div>

                <div className="my-3">
                    <TextBox
                        type='text'
                        labelName='Subdomain Name'
                        placeHolder="Enter subdomain name"
                        placeholderFocus='visibleOnFocus'
                        validationMsg={errors.subdomainName}
                        {...register('subdomainName')}
                    />
                </div>

                {/* <div className="my-3">
                    <TextBox
                        type='text'
                        labelName='Custom URL'
                        placeHolder="Enter custom url"
                        placeholderFocus='visibleOnFocus'
                        className='opacity-50 cursor-not-allowed'
                    // validationMsg={errors.email}
                    // className='my-2'
                    // {...register('email')}
                    />
                </div> */}

                <div className="my-3">
                    <TextBox
                        type='text'
                        labelName='Contact Email'
                        placeHolder="Enter email address"
                        placeholderFocus='visibleOnFocus'
                        validationMsg={errors.contactEmail}
                        {...register('contactEmail')}
                    />
                </div>

                <div className="my-3">
                    <TextBox
                        type='text'
                        labelName='Tagline'
                        placeHolder="Enter tag line"
                        placeholderFocus='visibleOnFocus'
                        validationMsg={errors.tagLine}
                        {...register('tagLine')}
                    />
                </div>

            </div>

            <div className="my-3">
                <div className="flex justify-end w-full">
                    <Button size='xs' width='none' variant='custom' className='mx-2' onClick={reset}>Reset</Button>
                    <Button size='xs' width='none' variant='accent' className='mx-2' buttonStatus={fetchStatus} onClick={submit(handleSave)}>Start Setup</Button>
                </div>
            </div>

        </React.Fragment>
    )
}

export default BasicInformationForm;