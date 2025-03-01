import React, { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import SignInForm from "_modules/auth/_components/SignInForm";

import Flex from "_components/Misc/Flex/Flex";
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "_components/Misc/Card/Card";
import { Button } from '_components/Form';
import Template from "_components/Dashboard/Template/Template";
import Separator from "_components/Misc/Separator/Separator";
import AuthNavigations from "_modules/auth/_components/AuthNavigations";

import { useToast } from "_contexts/ToastProvider";
import useAuth from "_hooks/useAuth";
import { useTopLoader } from "_contexts/TopLoaderProvider";
import useButtonStatus from "_hooks/useButtonStatus";
import buttonStates from "_constants/buttonStates";


export default function SignIn() {
    const { toast } = useToast()
    const { login, googleAuth } = useAuth()
    const [buttonStatus, buttonStatusText, setButtonStatus] = useButtonStatus(buttonStates.signin);

    const handleGoogleSubmit = async (response) => {
        setButtonStatus('loading');
        try {
            const userData = await googleAuth(response);
            const { message } = userData;

            setButtonStatus('completed');
            toast({
                heading: message,
                description: 'You will be redirected in any moment now',
                options: { position: 'top-right' }
            }).success()
        } catch (error) {
            setButtonStatus('failure');
            const { message } = error;
            toast({
                heading: message,
                options: { position: 'top-right' }
            }).error()
        } finally {
            setTimeout(() => {
                setButtonStatus('none');
            }, 1000)
        }
    }

    const handleSubmit = async (formData) => {
        setButtonStatus('loading');
        const { email } = formData;
        toast({
            heading: 'Checking your credentials',
            description: `Please wait while we cross check the given password for ${email}`,
            options: { position: 'top-right' }
        }).loading()
        
        try {
            await login(formData);
            setButtonStatus('completed');
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
        <React.Fragment>
            <Template isRightbarNeeded={false} isSidebarNeeded={false} >
                <Flex direction='column' className='bg-secondary h-full'>
                    <Card size='sm' rounded='lg' className='animate-zoom-in-out'>
                        <CardHeader>
                            <CardTitle>
                                <AuthNavigations currentPage='Login' navigateTo='Register' navigateToLink='/signup' />
                            </CardTitle>
                            <CardDescription>Enter your email and password to create a new account and access further</CardDescription>
                        </CardHeader>

                        <CardContent>
                            <SignInForm onSubmit={handleSubmit} onGoogleSubmit={handleGoogleSubmit} buttonStatus={buttonStatus} buttonStatusText={buttonStatusText} />
                        </CardContent>

                        {/* <Separator className="my-5" />

                        <CardFooter>
                            <Link to="/user/home" className="w-full">
                                <Button variant='custom'>
                                    <span className="mx-2">
                                        Continue as Guest
                                    </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-off"><path d="m2 2 20 20" /><path d="M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71" /><path d="M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264" /></svg>
                                </Button>
                            </Link>
                        </CardFooter> */}
                    </Card>
                </Flex>
            </Template>

        </React.Fragment>
    )
}