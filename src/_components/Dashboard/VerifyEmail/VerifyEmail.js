import React, { useState } from "react";

import VerifyEmailOTP from "./VerifyEmailOTP";

import { useConfirmDeleteDialog } from "_contexts/ConfirmDeleteDialogProvider";
import useAuth from "_hooks/useAuth";

import * as authService from "_services/auth.service";

const maskEmail = (email) => {
    const [localPart, domain] = email.split("@");
    const maskedLocalPart = localPart[0] + "*".repeat(Math.max(1, localPart.length - 2)) + localPart.slice(-1);
    return `${maskedLocalPart}@${domain}`;
}



const VerifyEmail = () => {
    const [isOtpDialogOpen, setIsOtpDialogOpen] = useState(false);

    const { user, updateUser } = useAuth();
    const { confirmDelete } = useConfirmDeleteDialog();

    const { email, isVerified } = user || {};

    const openOtpDialog = () => {
        setIsOtpDialogOpen(true);
    }

    const closeOtpDialog = () => {
        setIsOtpDialogOpen(false);
    }

    const verifyEmail = async () => {
        try {
            await authService.sendEmailVerification({ email });
        } catch (error) {
            throw error;
        }

    }

    const handleConfirmVerifyEmail = async () => {
        const buttonValues = {
            none: 'Send Email',
            loading: 'Sending Email',
            failure: 'Failed to send email',
            completed: 'Email Sent',
        }
        const heading = `Verify Email`;
        const message = `A verification email has been sent to your email address(${maskEmail(email)}). Please check your email and verify your email address.`;
        await confirmDelete(() => verifyEmail(), { variant: 'primary', buttonStateValues: buttonValues, heading, message });

        setTimeout(() => {
            openOtpDialog();
        }, 1000)
    }

    if (!email) {
        return null;
    }

    if (isVerified) {
        return null;
    }

    return (
        <React.Fragment>
            <div className="flex bg-info text-default text-xs px-2 py-1 mx-4 rounded-md">
                <span>Your email is not verified. Please verify your email to access all features.</span>

                <span onClick={handleConfirmVerifyEmail} className="flex text-custom ml-4 text-bold hover-text-primary cursor-pointer">Verify now
                    <span className="flex ml-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg>
                    </span>
                </span>

                <span onClick={openOtpDialog} className="flex text-custom ml-4 text-bold hover-text-primary cursor-pointer">Enter OTP
                    <span className="flex ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-key-round"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"/><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"/></svg>
                    </span>
                </span>

            </div>

            {isOtpDialogOpen && <VerifyEmailOTP maskedEmail={maskEmail(email)} onClose={closeOtpDialog} onSuccess={updateUser} />}

        </React.Fragment>
    )
}

export default VerifyEmail;