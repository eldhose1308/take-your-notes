import React from "react";

import Typography from "_components/Misc/Typography/Typography";
import { Button, TextBox } from "_components/Form";
import { Card, CardHeader, CardContent, CardFooter } from "_components/Misc/Card/Card";

const BasicInformationForm = () => {

    return (
        <Card variant='ghost' border='none' rounded='lg'>
            <CardHeader>
                <Typography className='my-4'>Set Up Your App Essentials</Typography>
                <Typography variant='secondary' size='sm' textVariant='default'>
                    Provide key details about your app to establish its identity. This information will help users understand your offering and improve engagement.
                </Typography>

                <Typography variant='secondary' size='sm' textVariant='default'>
                    Fill out the fields below to get started!
                </Typography>
            </CardHeader>

            <CardContent className='max-h-lg overflow-scroll'>
                <div className="my-3">
                    <TextBox
                        type='text'
                        labelName='App Name'
                        placeHolder="Enter app name"
                        isFocused
                        placeholderFocus='visibleOnFocus'
                    // validationMsg={errors.email}
                    // className='my-2'
                    // {...register('email')}
                    />
                </div>

                <div className="my-3">
                    <TextBox
                        type='text'
                        labelName='Custom URL'
                        placeHolder="Enter custom url"
                        placeholderFocus='visibleOnFocus'
                    // validationMsg={errors.email}
                    // className='my-2'
                    // {...register('email')}
                    />
                </div>

                <div className="my-3">
                    <TextBox
                        type='text'
                        labelName='Contact Email'
                        placeHolder="Enter email address"
                        placeholderFocus='visibleOnFocus'
                    // validationMsg={errors.email}
                    // className='my-2'
                    // {...register('email')}
                    />
                </div>

                <div className="my-3">
                    <TextBox
                        type='text'
                        labelName='Tagline'
                        placeHolder="Enter tag line"
                        placeholderFocus='visibleOnFocus'
                    // validationMsg={errors.email}
                    // className='my-2'
                    // {...register('email')}
                    />
                </div>

            </CardContent>

            <CardFooter className='p-0'>
                <div className="flex justify-end w-full">
                    <Button size='xs' width='none' variant='custom' className='mx-2' onClick={() => { }}>Reset</Button>
                    <Button size='xs' width='none' variant='accent' className='mx-2' onClick={() => { }}>Start Setup</Button>
                </div>

            </CardFooter>

        </Card>
    )
}

export default BasicInformationForm;