import React from "react";

import { Button, TextBox } from "_components/Form";
import Separator from "_components/Misc/Separator/Separator";
import Typography from "_components/Misc/Typography/Typography";
import useForm from "_hooks/useForm";
import { IdentitySchema } from "./_utils/validation-rules";

const IdentityForm = (props) => {
    const { identityData, onSave = () => { } } = props;
    const { avatar, userName, fullName, email, bio, joinedAt, websiteLink, phone, postCounts, followers, following, rank } = identityData;
    const initialValues = { userName, fullName };

    const { register, submit, errors, isSubmitting } = useForm({ schema: IdentitySchema, initialValues });

    const handleSave = async (formData) => {
        const { fullName: full_name, userName: user_name  } = formData;
        const formPayload = {
            full_name,
            user_name
        };
        try{
            await onSave({ basicInfo: formPayload });
        }catch(err){
            console.log(err)
        }
    }

    return (
        <React.Fragment>

            <Typography variant='secondary' size='sm' textVariant='default'>This section requires current password to update.</Typography>
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