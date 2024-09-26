import React from "react";

import Typography from "_components/Misc/Typography/Typography";
import { Button, TextBox } from "_components/Form";
import { Card, CardHeader, CardContent, CardFooter } from "_components/Misc/Card/Card";

/*
    Add links with plus button for icon, name, url (icon, github, githubURL)
*/
const SocialForm = () => {

    return (
        <React.Fragment>
            <div className="mb-4">

                <Typography className='my-4'>Connect and Engage with Your Audience</Typography>
                <Typography variant='secondary' size='sm' textVariant='default'>
                    Add your social media links and contact information to enhance communication and build a community around your portal.
                </Typography>

                <Typography variant='secondary' size='sm' textVariant='default'>
                    This section helps users stay connected and informed, fostering stronger engagement.
                </Typography>
            </div>

            <div className="flex flex-col">
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



            </div>
        </React.Fragment>
    )
}

export default SocialForm;