import React, { useState } from "react";


import Dialog from "_components/UI/Dialog/Dialog";
import { Card, CardHeader, CardContent, CardFooter } from "_components/Misc/Card/Card";
import Typography from "_components/Misc/Typography/Typography";
import { Button, TextBox } from "_components/Form";

import * as authService from "_services/auth.service";
import useForm from "_hooks/useForm";
import { ResetPasswordEmailSchema } from "_modules/auth/_utils/validation-rules";


const buttonStateValues = {
    none: 'Send OTP',
    loading: 'Sending OTP',
    failure: 'Failed to send OTP',
    completed: 'OTP Sent',
}
const ResetPassword = ({ maskedEmail = '', onClose, onOtpDialogOpen, onSuccess }) => {
    const [buttonStatus, setButtonStatus] = useState('none');

    const { register, submit, errors, isSubmitting } = useForm({ schema: ResetPasswordEmailSchema })


    const handleSubmitOtp = async (formData) => {
        setButtonStatus('loading');
        try {
            await authService.sendResetPasswordEmail(formData);
            setButtonStatus('completed');
            setTimeout(() => {
                onOtpDialogOpen(formData.email);
            }, 1500)
        } catch (error) {
            setButtonStatus('failure');
            throw error;
        } finally {
            setTimeout(() => {
                setButtonStatus('none');
            }, 1000)
        }
    }

    return (

        <Dialog isShown hasOverlay >

            <Card variant='ghost' rounded='lg'>
                <CardHeader>
                    <Typography size='lg'>Email Verification OTP</Typography>
                </CardHeader>

                <CardContent>

                    <Typography size='xs' variant='secondary' textVariant='default' className='mb-4'>Please enter the email address of your account. We will sent an OTP for resetting the password.</Typography>

                    <div className="my-3">
                        <TextBox
                            labelName='Email address'
                            placeHolder='Enter email address'
                            type='text'
                            validationMsg={errors.email}
                            {...register('email')}
                        />
                    </div>

                </CardContent>

                <CardFooter className='p-0 flex justify-between'>
                    <Button size='xs' width='none' variant='custom' onClick={onClose}>Cancel</Button>
                    <Button size='xs' width='none' variant="primary" buttonStatus={buttonStatus} disabled={isSubmitting} onClick={submit(handleSubmitOtp)}>
                        {buttonStateValues[buttonStatus]}
                    </Button>

                </CardFooter>

                <div className="text-secondary hover-text-default text-xs text-right mb-2 mr-3">
                    <span className="cursor-pointer" onClick={onOtpDialogOpen}>Already have an OTP?</span>
                </div>
            </Card>



        </Dialog>
    )
}

export default ResetPassword;