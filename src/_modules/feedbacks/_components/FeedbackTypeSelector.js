import React from "react";

import ModeSelector from "_components/UI/ModeSelector/ModeSelector";

import { filterQueryParamMappings, feedbackTypeModes } from "../_constants/feedbackTypes";

const FeedbackTypeSelector = (props) => {
    const { selectedValue, onChange = () => { } } = props;

    const handleChange = (id) => {
        const filterQueryParams = filterQueryParamMappings[id];
        onChange(filterQueryParams, id);
    }

    return (
        <ModeSelector
            modes={feedbackTypeModes}
            selectedValue={selectedValue}
            onChange={handleChange}
        />
    )
}

export default FeedbackTypeSelector;