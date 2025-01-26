import React, { useState } from "react";


import Dialog from "_components/UI/Dialog/Dialog";
import { Card, CardHeader, CardContent, CardFooter } from "_components/Misc/Card/Card";
import Typography from "_components/Misc/Typography/Typography";
import { Button, TextBox } from "_components/Form";

import * as authService from "_services/auth.service";


const buttonStateValues = {
    none: 'Verify Email',
    loading: 'Verifying Email',
    failure: 'Failed to verify email',
    completed: 'Email Verified',
}
const VerifyEmailOTP = ({ maskedEmail = '', onClose, onSuccess }) => {
    const [buttonStatus, setButtonStatus] = useState('none');
    const [error, setError] = useState('');

    const [otp, setOtp] = useState('');

    const handleOtpChange = (value) => {
        setOtp(value);
    }

    const handleSubmitOtp = async () => {
        setButtonStatus('loading');
        setError('');
        try {
            await authService.verifyEmailOtp({ otp });
            setButtonStatus('completed');
            setTimeout(() => {
                onSuccess({ isVerified: true });
                onClose();
            }, 1500)
        } catch (error) {
            const { message } = error;
            setError(message);
            setButtonStatus('failure');
            // throw error;
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

                    <Typography size='xs' variant='secondary' textVariant='default' className='mb-4'>Please enter the OTP sent to your email address({maskedEmail}) to verify your email address.</Typography>

                    <div className="my-3">
                        <TextBox
                            labelName='OTP'
                            placeHolder='Enter OTP'
                            type='text'
                            value={otp}
                            onChange={handleOtpChange}
                            validationMsg={{
                                type: 'error',
                                messages: [error]
                            }}
                        />
                    </div>

                </CardContent>

                <CardFooter className='p-0 flex justify-between'>
                    <Button size='xs' width='none' variant='custom' onClick={onClose}>Cancel</Button>
                    <Button size='xs' width='none' variant="primary" onClick={handleSubmitOtp} buttonStatus={buttonStatus} disabled={otp.length < 5}>
                        {buttonStateValues[buttonStatus]}
                    </Button>
                </CardFooter>
            </Card>

        </Dialog>
    )
}

export default VerifyEmailOTP;