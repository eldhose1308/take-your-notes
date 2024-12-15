import React from "react";

import { BasicInformationForm, SocialForm } from "_modules/publish/_components";


const renderForm = (selectedTab, props) => {
    switch(selectedTab){
        case 'basic_information':
            return <BasicInformationForm {...props} />;
        case 'social':
            return <SocialForm {...props} />;
        default:
            return <p>No Form Available</p>
    }
}

export default renderForm;