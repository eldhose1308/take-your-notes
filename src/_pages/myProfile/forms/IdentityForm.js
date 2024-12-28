import React from "react";

import { Button, TextBox } from "_components/Form";
import Separator from "_components/Misc/Separator/Separator";
import Typography from "_components/Misc/Typography/Typography";
import useForm from "_hooks/useForm";
import { IdentitySchema } from "./_utils/validation-rules";
import { Alerts } from "_components/UI";

const messages = {
    success: { heading: 'Profile Updated', description: 'Your profile has been updated successfully' },
    error: { heading: 'Profile Update Failed', description: 'There was an error updating your profile' }
};

const IdentityForm = (props) => {
    const { identityData, onSave = () => { } } = props;
    const { avatar, userName, fullName, email, bio, joinedAt, websiteLink, phone, postCounts, followers, following, rank } = identityData;
    const initialValues = { userName, fullName };

    const { register, submit, errors, errorMessages, isSubmitting } = useForm({ schema: IdentitySchema, initialValues, messages });

    const handleSave = async (formData) => {
        const { fullName: full_name, userName: user_name, password } = formData;
        const formPayload = {
            full_name,
            user_name,
            password
        };
        try {
            await onSave({ basicInfo: formPayload });
        } catch (err) {
            throw err;
        }
    }

    return (
        <React.Fragment>

            <Alerts type='info'>
                <Typography textVariant='light' size='xs'>This section requires current password to update.</Typography>
                <Typography textVariant='light' size='xs'>If you logged in with google, then password is not needed.</Typography>
            </Alerts>

            <Separator variant='another' className='my-3' />

            {/* <div className="my-3">
                <TextBox
                    type='text'
                    labelName='Email'
                    placeHolder="Enter email"
                    validationMsg={errors.email}
                    {...register('email')}
                />
            </div> */}


            <div className="my-3">
                <TextBox
                    type='text'
                    labelName='Full Name'
                    placeHolder="Enter full name"
                    validationMsg={errors.fullName}
                    {...register('fullName')}
                />
            </div>

            <div className="my-3">
                <TextBox
                    type='text'
                    labelName='User Name'
                    placeHolder="Enter user name"
                    validationMsg={errors.userName}
                    {...register('userName')}
                />
            </div>

            <div className="my-3">
                <TextBox
                    type='password'
                    labelName='Password'
                    placeHolder="Enter password"
                    validationMsg={errors.password}
                    {...register('password')}
                />
            </div>

            <div>
                <Button size='xs' width='none' variant='accent' className='mx-2' onClick={submit(handleSave)}>Update Profile</Button>
            </div>

        </React.Fragment>

    )
}

export default IdentityForm;