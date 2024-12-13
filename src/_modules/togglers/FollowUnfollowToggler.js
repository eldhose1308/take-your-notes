import React from "react";

import ModeSelector from "_components/UI/ModeSelector/ModeSelector";

import { filterQueryParamMappings, followStatusModes } from "./_constants/followUnfollow";


const currentMode = followStatusModes[1].id;
const FollowUnfollowToggler = ({ onChange }) => {
    
    const handleChange = (id) => {
        const filterQueryParams = filterQueryParamMappings[id];
        onChange(filterQueryParams);
    }

    return (
        <ModeSelector modes={followStatusModes} onChange={handleChange} selectedValue={currentMode} renderLabel />

    )
}

export default FollowUnfollowToggler;