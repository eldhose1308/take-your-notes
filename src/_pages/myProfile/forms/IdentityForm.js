import React from "react";

import { TextBox } from "_components/Form";
import Separator from "_components/Misc/Separator/Separator";
import Typography from "_components/Misc/Typography/Typography";

const IdentityForm = (props) => {
    const { identityData } = props;
    const { avatar, userName, fullName, email, bio, joinedAt, websiteLink, phone, postCounts, followers, following, rank } = identityData;


    return (
        <React.Fragment>

            <Typography variant='secondary' size='sm' textVariant='default'>This section requires current password to update.</Typography>
            <Separator variant='custom' className='my-3' />

            <div className="my-3">
                <TextBox
                    type='text'
                    labelName='Email'
                    placeHolder="Enter email"
                    value={email}
                // validationMsg={errors.email}
                // {...register('email')}
                />
            </div>


            <div className="my-3">
                <TextBox
                    type='text'
                    labelName='Full Name'
                    placeHolder="Enter full name"
                    value={fullName}
                // validationMsg={errors.email}
                // {...register('email')}
                />
            </div>

            <div className="my-3">
                <TextBox
                    type='text'
                    labelName='User Name'
                    placeHolder="Enter user name"
                    value={userName}
                // validationMsg={errors.email}
                // {...register('email')}
                />
            </div>

            <div className="my-3">
                <TextBox
                    type='password'
                    labelName='Password'
                    placeHolder="Enter password"
                // validationMsg={errors.email}
                // {...register('email')}
                />
            </div>

            {/* <Separator variant='custom' className='my-3' /> */}
        </React.Fragment>

    )
}

export default IdentityForm;