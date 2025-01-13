import React from "react";

import ModeSelector from "_components/UI/ModeSelector/ModeSelector";

import { filterQueryParamMappings, followStatusModes } from "./_constants/subscriptionUnsubscription";


const currentMode = followStatusModes[0].id;
const SubscriptionToggler = ({ onChange }) => {
    
    const handleChange = (id) => {
        const filterQueryParams = filterQueryParamMappings[id];
        onChange(filterQueryParams);
    }

    return (
        <ModeSelector modes={followStatusModes} onChange={handleChange} selectedValue={currentMode} renderLabel />

    )
}

export default SubscriptionToggler;