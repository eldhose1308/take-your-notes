import React from "react";

import IdentityForm from "_pages/myProfile/forms/IdentityForm";
import ExtraInformationForm from "_pages/myProfile/forms/ExtraInformationForm";
import DisplayImageForm from "../forms/DisplayImageForm";


const renderForm = (selectedTab, props) => {
    switch (selectedTab) {
        case 'avatar':
            return <DisplayImageForm {...props} />;
        case 'identity':
            return <IdentityForm {...props} />;
        case 'extra':
            return <ExtraInformationForm {...props} />;
        default:
            return <p>No Form Available</p>
    }
}

export default renderForm;