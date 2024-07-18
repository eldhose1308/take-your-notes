import React, { useState, useEffect } from "react";

import { Card, CardHeader, CardContent, CardFooter } from "_components/Misc/Card/Card";
import { Button } from "_components/Form";



// create a key so that the toast re-mounts after every call
const Dialog = ({ children, ...props }) => {
    const { isShown = false, hasOverlay=false, type: defaultType = 'default', options = {}, message = {}, progress } = props;
    const { heading = 'Your request is processing', description = 'Please wait for some moment.' } = message;
    const { position = 'top-right', } = options;

    const [positionX, positionY] = position.split('-')

    if (!isShown) {
        return null
    }

    return (
        <div className="flex flex-col">
            {isShown && hasOverlay && <div className="overlay z-10 cursor-pointer"></div>}

            {/* {children} */}
            {/* <div className={`dialog dialog-${positionX} dialog-${positionY} z-50 fixed flex items-center justify-end animate-slide-in-y`}> */}
            <div className={`dialog dialog-center dialog-top z-50 fixed flex items-center justify-end animate-slide-in-y`}>
                <div className="max-w-sm min-w-sm">
                    <div className={`card bg-default rounded-lg m-3`}>

                        {children}

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Dialog;