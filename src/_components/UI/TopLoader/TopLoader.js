import React from "react";

import Portal from "_components/Misc/Portal";

import './TopLoader.css'

const TopLoader = ({ progress, isLoading = true }) => {
    if(!isLoading){
        return null
    }


    return (
        <Portal>
            <div id="top-loading"  style={{ width: `${progress}%` }}>
                <span id="loader"></span>
            </div>
        </Portal>
    )
}

export default TopLoader;

