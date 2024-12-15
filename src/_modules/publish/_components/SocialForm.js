import React from "react";

import Typography from "_components/Misc/Typography/Typography";
import { Button, TextBox } from "_components/Form";
import useForm from "_hooks/useForm";

/*
    Add links with plus button for icon, name, url (icon, github, githubURL)
*/
const SocialForm = () => {
    const { register, submit, errors, isSubmitting } = useForm({});

    return (
        <React.Fragment>
            <div className="mb-4">

                <Typography className='mb-4'>Connect and Engage with Your Audience</Typography>
                <Typography variant='secondary' size='sm' textVariant='default'>
                    Add your social media links and contact information to enhance communication and build a community around your portal.
                </Typography>

                <Typography variant='secondary' size='sm' textVariant='default'>
                    This section helps users stay connected and informed, fostering stronger engagement.
                </Typography>
            </div>

            <div className="flex flex-col mt-4">
                <div className="my-3">
                    <TextBox
                        type='text'
                        labelName='Contact Information phone'
                        placeHolder="Enter phone"
                        isFocused
                    // validationMsg={errors.email}
                    // className='my-2'
                    // {...register('email')}
                    />
                </div>

                <div className="my-3">
                    <TextBox
                        type='text'
                        labelName='Contact Information email'
                        placeHolder="Enter email"
                    // validationMsg={errors.email}
                    // className='my-2'
                    // {...register('email')}
                    />
                </div>

                <div className="my-3">
                    <div className="flex justify-end w-full">
                        <Button size='xs' width='none' variant='accent' className='mx-2' disabled={isSubmitting} onClick={submit(() => { })}>
                            Send Feedback
                        </Button>
                    </div>
                </div>


            </div>
        </React.Fragment>
    )
}

export default SocialForm;