import React from "react";

import { TextBox } from "_components/Form";
import Separator from "_components/Misc/Separator/Separator";
import Typography from "_components/Misc/Typography/Typography";

const ExtraInformationForm = (props) => {
    const { identityData } = props;
    const { avatar, userName, fullName, email, bio, joinedAt, websiteLink, phone, postCounts, followers, following, rank } = identityData;


    return (
        <React.Fragment>

            <Typography variant='secondary' size='sm' textVariant='default'>You can directly update these information.</Typography>
            <Separator variant='custom' className='my-3' />

            <div className="my-3">
                <TextBox
                    type='text'
                    labelName='Website'
                    placeHolder="Enter website link"
                    value={websiteLink}
                // validationMsg={errors.email}
                // {...register('email')}
                />
            </div>


            <div className="my-3">
                <TextBox
                    type='text'
                    labelName='Phone'
                    placeHolder="Enter phone"
                    value={phone}
                // validationMsg={errors.email}
                // {...register('email')}
                />
            </div>



            {/* <Separator variant='custom' className='my-3' /> */}
        </React.Fragment>

    )
}

export default ExtraInformationForm;