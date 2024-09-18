import React, { useState, useEffect } from "react";

import { useToast } from "_contexts/ToastProvider";

const ToastIcons = {
    default: null,
    primary: null,
    success: <svg viewBox="0 0 24 24" width="20" height="20" fill="var(--success)"><path d="M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"></path></svg>,
    error: <svg viewBox="0 0 24 24" width="20" height="20" fill="var(--destructive)"><path d="M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"></path></svg>,
    warn: null,
    info: null,

    loading: <svg className="lucide lucide-loader-circle animate-spin" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
}

// create a key so that the toast re-mounts after every call
const Toast = (props) => {
    const { isShown = false, type: defaultType = 'default', options = {}, message = {}, progress } = props;
    const { heading = 'Your request is processing', description = 'Please wait for some moment.' } = message;
    const { position = 'top-right', } = options;

    const [positionX, positionY] = position.split('-')
    const type = !(progress === 0 || progress >= 100) ? 'loading' : defaultType

    const currentToastIcon = ToastIcons[type]

    const { hideToast } = useToast()


    if (!isShown && !progress) {
        return null
    }

    return (
        <div className="flex flex-col">
            <div className={`dialog dialog-${positionX} dialog-${positionY} z-50 fixed flex items-center justify-end animate-slide-in-y`}>
                <div className="max-w-sm min-w-sm">
                    <div className={`card border  border-custom bg-default rounded-lg m-3`}>

                        <div className="card-body flex flex-col px-3 py-1">
                            {/* <div className="conic"></div> */}
                            <div className="flex flex-nowrap justify-between">
                                <div className="flex flex-col my-2">
                                    <span className="text-default">
                                        {currentToastIcon}
                                    </span>
                                    <span className={`text-default text-xs text-center`}>
                                        {progress ? `${progress}%` : ''}
                                    </span>
                                </div>
                                <div className="grow-2 my-2 px-3">
                                    <p className={`text-default text-sm`}>{heading}</p>
                                    {description ? <p className="text-secondary space-y-1 text-xs">{description}</p> : null}
                                </div>
                                <div className="my-2">
                                    <button className="text-default bg-transparent" onClick={hideToast}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                    </button>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Toast;