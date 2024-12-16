import React from "react";

import { GoogleLogin } from "@react-oauth/google";

import { Button, TextBox } from "_components/Form";
import Flex from "_components/Misc/Flex/Flex";

import useForm from "_hooks/useForm";

import { SignInSchema } from "../_utils/validation-rules";
import useButtonStatus from "_hooks/useButtonStatus";
import buttonStates from "_constants/buttonStates";
import { Link } from "react-router-dom";

const SignInForm = (props) => {
    const { onSubmit, buttonStatus, buttonStatusText } = props;

    const { register, submit, errors, isSubmitting } = useForm({ schema: SignInSchema })


    return (
        <React.Fragment>
            <div className="my-3">

                <TextBox
                    type='text'
                    labelName='Email'
                    placeHolder="Enter email"
                    validationMsg={errors.email}
                    {...register('email')}
                />
            </div>

            <div className="my-3">
                <TextBox
                    type='password'
                    labelName="Password"
                    placeHolder="Enter password"
                    validationMsg={errors.password}
                    autoComplete='new-password'
                    {...register('password')}
                />
            </div>

            <Button variant='accent' buttonStatus={buttonStatus} disabled={isSubmitting} onClick={submit(onSubmit)}>
                <span className="flex items-center">
                    {buttonStatusText}
                    <span className="flex ml-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right animate-bounce-x"><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg>
                    </span>
                </span>
            </Button>


            <div className="border-b border-another my-5 text-center leading-1">
                <span className="bg-default text-secondary px-3">or</span>
            </div>


            <Flex direction='column' className='mb-4'>

                <GoogleLogin
                    text="signup_with"
                    onSuccess={(credentialResponse) => { console.log(credentialResponse) }}
                    onError={() => { alert('Error') }}
                />

                <Link to={'/'} className="w-full mt-4">
                    <div className="bg-custom text-default hover-text-custom hover-accent text-center text-xs my-2 mx-1 p-2 px-2 cursor-pointer rounded-md">
                        <span className="">
                            Continue as Guest
                        </span>
                    </div>
                </Link>
            </Flex>
            {/* 
            <Typography variant='secondary' className='my-2'>
                By clicking continue, you agree to our Terms of Service and Privacy Policy.
            </Typography> */}

        </React.Fragment>
    )
}

export default SignInForm