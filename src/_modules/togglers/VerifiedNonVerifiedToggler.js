import React from "react";

import ModeSelector from "_components/UI/ModeSelector/ModeSelector";

import { filterQueryParamMappings, verifiedStatusModes } from "./_constants/verifiedNonVerified";


const defaultMode = verifiedStatusModes[0].id;
const VerifiedNonVerifiedToggler = ({ onChange, currentMode=defaultMode }) => {
    
    const handleChange = (id) => {
        const filterQueryParams = filterQueryParamMappings[id];
        onChange(filterQueryParams);
    }

    return (
        <ModeSelector modes={verifiedStatusModes} onChange={handleChange} selectedValue={currentMode} renderLabel />

    )
}

export default VerifiedNonVerifiedToggler;