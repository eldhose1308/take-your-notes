import React from "react";
import UsersPostListTab from "../tabs/UsersPostListTab";
import IdentityForm from "_pages/myProfile/forms/IdentityForm";
import ExtraInformationForm from "_pages/myProfile/forms/ExtraInformationForm";


const renderForm = (selectedTab, props) => {
    switch (selectedTab) {
        case 'posts':
            return <UsersPostListTab {...props} />;
        case 'identity':
            return <IdentityForm {...props} />;
        case 'extra':
            return <ExtraInformationForm {...props} />;
        default:
            return <p>Not Available</p>
    }
}

export default renderForm;