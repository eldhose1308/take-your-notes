import React from "react";

import ModeSelector from "_components/UI/ModeSelector/ModeSelector";

import { VISIBILITY_MODES, visibilityModes } from "../_constants/posts";


const PostVisibilitySelector = ({ currentMode, onChange }) => {

    return (
        <ModeSelector modes={visibilityModes} onChange={onChange} selectedValue={currentMode} renderLabel />

    )
}

export default PostVisibilitySelector;