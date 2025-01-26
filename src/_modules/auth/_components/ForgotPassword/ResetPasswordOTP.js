import React, { useState } from "react";


import Dialog from "_components/UI/Dialog/Dialog";
import { Card, CardHeader, CardContent, CardFooter } from "_components/Misc/Card/Card";
import Typography from "_components/Misc/Typography/Typography";
import { Button, TextBox } from "_components/Form";

import * as authService from "_services/auth.service";
import useForm from "_hooks/useForm";
import { ResetPasswordSchema } from "_modules/auth/_utils/validation-rules";


const buttonStateValues = {
    none: 'Reset password',
    loading: 'Changing new password',
    failure: 'Failed to reset password',
    completed: 'Password reset successfully',
}
const ResetPasswordOTP = ({ email = '', onClose, onSuccess }) => {
    const [buttonStatus, setButtonStatus] = useState('none');

    const { register, submit, errors, isSubmitting } = useForm({ schema: ResetPasswordSchema, initialValues: { email } })


    const handleIsPasswordSame = (formData) => {
        const { newPassword, confirmPassword } = formData;
        return newPassword === confirmPassword;
    }

    const handleSubmitOtp = async (formData) => {
        if (!handleIsPasswordSame(formData)) {
            throw new Error('Password does not match');
        }
        setButtonStatus('loading');
        const { newPassword: new_password, confirmPassword: confirm_password, otp, email } = formData;
        const payload = {
            otp, new_password, confirm_password, email
        }

        try {
            await authService.resetPasswordOtp(payload);
            setButtonStatus('completed');
            setTimeout(() => {
                onSuccess({ isVerified: true });
                onClose();
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
                    <Typography size='lg'>Reset Password OTP</Typography>
                </CardHeader>

                <CardContent>

                    <Typography size='xs' variant='secondary' textVariant='default' className='mb-4'>Please enter the OTP sent to your email address and new password to change.</Typography>

                    <div className="my-3">
                        <TextBox
                            labelName='Email address'
                            placeHolder='Enter email address'
                            type='text'
                            validationMsg={errors.email}
                            {...register('email')}
                        />
                    </div>

                    <div className="my-3">
                        <TextBox
                            labelName='OTP'
                            placeHolder='Enter OTP'
                            type='text'
                            validationMsg={errors.otp}
                            {...register('otp')}

                        // value={otp}
                        // onChange={handleOtpChange}
                        // validationMsg={{
                        //     type: 'error',
                        //     messages: [error]
                        // }}
                        />
                    </div>

                    <div className="my-3">
                        <TextBox
                            labelName='New Password'
                            placeHolder='Enter new password'
                            type='password'
                            validationMsg={errors.newPassword}
                            {...register('newPassword')}
                        // value={password.newPassword}
                        // onChange={handleNewPasswordChange}
                        // validationMsg={{
                        //     type: 'error',
                        //     messages: [error]
                        // }}
                        />
                    </div>

                    <div className="my-3">
                        <TextBox
                            labelName='Confirm New Password'
                            placeHolder='Enter new password again'
                            type='password'
                            validationMsg={errors.confirmPassword}
                            {...register('confirmPassword')}
                        // value={password.confirmPassword}
                        // onChange={handleConfirmPasswordChange}
                        // validationMsg={{
                        //     type: 'error',
                        //     messages: [passwordStatus]
                        // }}
                        />
                    </div>


                </CardContent>

                <CardFooter className='p-0 flex justify-between'>
                    <Button size='xs' width='none' variant='custom' onClick={onClose}>Cancel</Button>
                    <Button size='xs' width='none' variant="primary" buttonStatus={buttonStatus} disabled={isSubmitting} onClick={submit(handleSubmitOtp)}>
                        {buttonStateValues[buttonStatus]}
                    </Button>
                </CardFooter>
            </Card>

        </Dialog>
    )
}

export default ResetPasswordOTP;