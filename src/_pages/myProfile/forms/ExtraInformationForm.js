import React, { useState } from "react";

import { Button, TextBox, TextArea } from "_components/Form";
import Separator from "_components/Misc/Separator/Separator";
import Typography from "_components/Misc/Typography/Typography";
import useForm from "_hooks/useForm";
import { ExtraInformationSchema } from "./_utils/validation-rules";
import { Alerts } from "_components/UI";


const buttonStateValues = {
    none: 'Update Profile',
    loading: 'Updating your profile',
    failure: 'Failed to update',
    completed: 'Updated successfully',
}

const ExtraInformationForm = (props) => {
    const { identityData, onSave = () => { } } = props;
    const { avatar, userName, fullName, email, bio, joinedAt, websiteLink, phone, postCounts, followers, following, rank } = identityData;
    const initialValues = { websiteLink, phone, bio };

    const [buttonStatus, setButtonStatus] = useState('none');
    const { register, submit, errors, isSubmitting } = useForm({ schema: ExtraInformationSchema, initialValues });

    const handleSave = async (formData) => {
        const { websiteLink: website_link, bio } = formData;
        const formPayload = {
            website_link,
            bio
        };
        setButtonStatus('loading');
        try {
            await onSave({ extraInfo: formPayload });
            setButtonStatus('completed');
        } catch (err) {
            setButtonStatus('failure');
            throw err;
            console.log(err)
        }finally {
            setTimeout(() => {
                setButtonStatus('none');
            }, 1000)
        }
    }

    return (
        <React.Fragment>

            <Alerts type='info'>
                <Typography textVariant='light' size='xs'>You can directly update these information without password.</Typography>
            </Alerts>

            <Separator variant='another' className='my-3' />

            <div className="my-3">
                <TextBox
                    type='text'
                    labelName='Website'
                    placeHolder="Enter website link"
                    // value={websiteLink}
                    validationMsg={errors.websiteLink}
                    {...register('websiteLink')}
                />
            </div>


            <div className="my-3">
                <TextBox
                    type='text'
                    labelName='Phone'
                    placeHolder="Enter phone"
                    // value={phone}
                    validationMsg={errors.phone}
                    {...register('phone')}
                />
            </div>

            <div className="my-3">
                <TextArea
                    labelName='Bio'
                    placeHolder="Enter a small summary about yourself"
                    validationMsg={errors.bio}
                    {...register('bio')}
                />
            </div>

            <div>
                <Button size='xs' width='none' variant='accent' className='mx-2' disabled={isSubmitting} onClick={submit(handleSave)} buttonStatus={buttonStatus}>
                    {buttonStateValues[buttonStatus]}
                </Button>
            </div>

        </React.Fragment>

    )
}

export default ExtraInformationForm;