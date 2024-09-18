import React from "react";

import { GoogleLogin } from "@react-oauth/google";

import { Button, TextBox } from "_components/Form";
import Flex from "_components/Misc/Flex/Flex";
import Typography from "_components/Misc/Typography/Typography";

import useForm from "_hooks/useForm";

import { SignUpSchema } from "../_utils/validation-rules";

const SignInForm = (props) => {
    const { onSubmit } = props;

    const { register, submit, errors, isSubmitting } = useForm({ schema: SignUpSchema })


    return (
        <React.Fragment>
            <div className="my-3">

                <TextBox
                    type='text'
                    labelName='Email'
                    placeHolder="Enter email"
                    validationMsg={errors.email}
                    // className='my-2'
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
                    // className='my-2'
                    {...register('password')}
                />
            </div>

            <Button variant='accent' isLoading={isSubmitting} disabled={isSubmitting} onClick={submit(onSubmit)}>
                Sign In with Email
            </Button>


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

        </React.Fragment>
    )
}

export default SignInForm