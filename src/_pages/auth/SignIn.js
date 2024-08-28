import React, { useState } from "react";
import { Link } from "react-router-dom";

import { GoogleLogin } from '@react-oauth/google';

import Flex from "_components/Misc/Flex/Flex";
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "_components/Misc/Card/Card";
import { Button, TextBox } from '_components/Form';
import Typography from "_components/Misc/Typography/Typography";
import Separator from "_components/Misc/Separator/Separator";

import useForm from "_hooks/useForm";

import { signupUser } from "./_actions";

import { createSchema, defineRule } from "_utils/validation-library";

import { useTopLoader } from "_contexts/TopLoaderProvider";
import Template from "_components/Dashboard/Template/Template";
import { useToast } from "_contexts/ToastProvider";


const FormSchema = createSchema({
    email: defineRule().required().email().min(8).max(32).build(),
    password: defineRule().required().password().min(8).max(32).build(),
})

export default function SignIn() {
    const { register, submit, errors } = useForm({ schema: FormSchema })

    const { toast, setProgress } = useToast()

    const handleSubmit = (formValues) => {
        toast({
            message: 'This is a success',
            options: { position: 'top-right' }
        }).success()

        // const start = 1;
        // const end = 10;
        // let current = start;

        // const interval = setInterval(() => {
        //     console.log(current);
        //     current++;
        //     setProgress(current)
        //     if (current > end) {
        //         clearInterval(interval);
        //     }
        // }, 100);
        // console.log('Success', formValues)
        // toast({ 
        //     message: 'This is a success' ,
        //     options: { position: 'bottom-right' }
        // }).success()
    }

    return (
        <React.Fragment>
            <Template isRightbarNeeded={false} isSidebarNeeded={false} >

                <Flex direction='column' className='bg-default'>

                {/* className='animate-rotate-x' */}
                    <Card size='sm' className='animate-zoom-in-out'> 
                        <CardHeader>
                            <CardTitle>
                                <Flex justifyContent='spaceBetween' className='mb-3'>
                                    <Typography size='xl'>
                                        Login
                                    </Typography>
                                    <Typography size='lg' variant='secondary'>
                                        <Link to='/signup'>
                                            <Flex className='hover-text-default'>
                                                <span className="mx-2 text-md">
                                                    Register
                                                </span>
                                                <svg className="lucide lucide-circle-arrow-right animate-bounce-x" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="m12 16 4-4-4-4" /></svg>
                                            </Flex>
                                        </Link>
                                    </Typography>
                                </Flex>
                            </CardTitle>
                            <CardDescription>Enter your email and password to create a new account and access further</CardDescription>
                        </CardHeader>

                        <CardContent>
                            <TextBox
                                type='text'
                                labelName='Email'
                                placeholder="Enter email"
                                validationMsg={errors.email}
                                {...register('email')}
                            />

                            <TextBox
                                type='password'
                                labelName="Password"
                                placeholder="Enter password"
                                validationMsg={errors.password}
                                autoComplete='new-password'
                                {...register('password')}
                            />

                            {/* <Button variant='accent' onClick={submit(handleSubmit)}>Sign In</Button> */}
                            <Button variant='accent' onClick={handleSubmit}>Sign In</Button>

                            <div className="border-b border-another my-5 text-center leading-1">
                                <span className="bg-default text-secondary px-3">or</span>
                            </div>


                            <Flex direction='column'>

                                <GoogleLogin
                                    text="signup_with"
                                    onSuccess={(credentialResponse) => { console.log(credentialResponse) }}
                                    onError={() => { alert('Error') }}
                                />

                            </Flex>

                            <Typography variant='secondary' className='my-2'>
                                By clicking continue, you agree to our Terms of Service and Privacy Policy.
                            </Typography>



                        </CardContent>

                        <Separator className="my-5" />

                        <CardFooter>
                            <Link to="/user/home" className="w-full">
                                <Button variant='custom'>
                                    <span className="mx-2">
                                        Continue as Guest
                                    </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-off"><path d="m2 2 20 20" /><path d="M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71" /><path d="M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264" /></svg>
                                </Button>
                            </Link>
                        </CardFooter>




                    </Card>
                </Flex>

            </Template>

        </React.Fragment>
    )
}