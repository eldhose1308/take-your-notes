import React, { useState } from "react";
import ResetPasswordOTP from "./ResetPasswordOTP";
import ResetPassword from "./ResetPassword";
import { useToast } from "_contexts/ToastProvider";

const ForgotPassword = () => {
    const [isOtpDialogOpen, setIsOtpDialogOpen] = useState(false);
    const [isResetPasswordDialogOpen, setIsResetPasswordDialogOpen] = useState(false);

    const [email, setEmail] = useState('');

    const { toast } = useToast()

    const closeOtpDialog = () => {
        setIsResetPasswordDialogOpen(false);
        setIsOtpDialogOpen(false);
    }

    const handleOpenOtpDialog = (emailArg) => {
        setIsOtpDialogOpen(true);
        setIsResetPasswordDialogOpen(false);
        if(emailArg && typeof emailArg === 'string') {
            setEmail(emailArg);
        }
    }

    const handleForgotPassword = () => {
        setIsResetPasswordDialogOpen(true);
    }

    const handlePasswordChanged = () => {
        closeOtpDialog();
        toast({
            heading: 'Password changed successfully',
            description: 'You can now login with your new password',
            options: { position: 'top-right' }
        }).success()
    }

    return (
        <React.Fragment>
        <div className="text-secondary hover-text-default text-xs text-right mb-2">
            <span className="cursor-pointer" onClick={handleForgotPassword}>Forgot Password?</span>
        </div>
        
        {isOtpDialogOpen && <ResetPasswordOTP email={email} onClose={closeOtpDialog} onSuccess={handlePasswordChanged} />}
        {isResetPasswordDialogOpen && <ResetPassword onClose={closeOtpDialog} onOtpDialogOpen={handleOpenOtpDialog} />}

        </React.Fragment>
    )
}

export default ForgotPassword;