import React from "react";

import ModeSelector from "_components/UI/ModeSelector/ModeSelector";

import { filterQueryParamMappings, verifiedStatusModes } from "./_constants/verifiedNonVerified";


const currentMode = verifiedStatusModes[0].id;
const VerifiedNonVerifiedToggler = ({ onChange }) => {
    
    const handleChange = (id) => {
        const filterQueryParams = filterQueryParamMappings[id];
        onChange(filterQueryParams);
    }

    return (
        <ModeSelector modes={verifiedStatusModes} onChange={handleChange} selectedValue={currentMode} renderLabel />

    )
}

export default VerifiedNonVerifiedToggler;