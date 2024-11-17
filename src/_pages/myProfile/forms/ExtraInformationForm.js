import React from "react";

import { Button, TextBox } from "_components/Form";
import Separator from "_components/Misc/Separator/Separator";
import Typography from "_components/Misc/Typography/Typography";
import useForm from "_hooks/useForm";
import { ExtraInformationSchema } from "./_utils/validation-rules";

const ExtraInformationForm = (props) => {
    const { identityData, onSave = () => { } } = props;
    const { avatar, userName, fullName, email, bio, joinedAt, websiteLink, phone, postCounts, followers, following, rank } = identityData;
    const initialValues = { websiteLink, phone, bio };
    
    const { register, submit, errors, isSubmitting } = useForm({ schema: ExtraInformationSchema, initialValues });

    const handleSave = async (formData) => {
        try{
            await onSave(formData);
        }catch(err){
            console.log(err)
        }
    }

    return (
        <React.Fragment>

            <Typography variant='secondary' size='sm' textVariant='default'>You can directly update these information.</Typography>
            <Separator variant='custom' className='my-3' />

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

            <div>
                <Button size='xs' width='none' variant='accent' className='mx-2' disabled={isSubmitting} onClick={submit(handleSave)}>
                    Update Profile
                </Button>
            </div>

        </React.Fragment>

    )
}

export default ExtraInformationForm;