import React, { useState, useEffect } from "react";

import { Card, CardHeader, CardContent, CardFooter } from "_components/Misc/Card/Card";
import { Button } from "_components/Form";

import './Dialog.css'

// create a key so that the toast re-mounts after every call
const Dialog = ({ children, ...props }) => {
    const { isShown = false, hasOverlay=false, size='md', type: defaultType = 'default', options = {}, message = {}, progress } = props;
    const { heading = 'Your request is processing', description = 'Please wait for some moment.' } = message;
    const { position = 'top-right', } = options;

    const [positionX, positionY] = position.split('-')

    if (!isShown) {
        return null
    }

    return (
        <div className="flex flex-col w-full">
            {isShown && hasOverlay && <div className="overlay z-50 cursor-pointer"></div>}

            {/* {children} */}
            {/* <div className={`dialog dialog-${positionX} dialog-${positionY} z-50 fixed flex items-center justify-end animate-slide-in-y`}> */}
            <div className={`dialog dialog-centers w-full dialog-top z-250 fixed flex items-center justify-center animate-slide-in-y`}>
                <div className={`min-w-sm dialog-${size}`}>
                {/* <div className="max-w-sm min-w-sm"> */}
                    <div className={`card bg-default rounded-lg m-3`}>

                        {children}

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Dialog;