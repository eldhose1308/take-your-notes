import React, { createContext, useContext, useState } from "react";

import Toast from "_components/UI/Toast/Toast";

const ToastContext = createContext()

const ToastProvider = ({ children }) => {
    const [isShown, setShownStatus] = useState(false)
    const [message, setMessage] = useState({})
    const [options, setOptions] = useState({})
    const [type, setType] = useState('')

    const [progress, setProgress] = useState(0)


    const hideToast = () => {
        setShownStatus(false)
        setMessage({})
        setType('default')
        setOptions({})
        setProgress(0)
    }

    const showToast = (type, heading, description, options = {}) => {
        setShownStatus(true)
        setMessage({ heading, description })
        setType(type)
        setOptions(options)
    }


    // info: (heading, { autoHide, position, className }) => {

    const toast = ({ heading, description='', options = {} }) => {
        return {
            default: () => {
                showToast('default', heading, description, options)
            },
            primary: () => {
                showToast('primary', heading, description, options)
            },
            success: () => {
                showToast('success', heading, description, options)
            },
            error: () => {
                showToast('error', heading, description, options)
            },
            warn: () => {
                showToast('warn', heading, description, options)
            },
            info: () => {
                showToast('info', heading, description, options)
            }
        }
    }

    return (
        <ToastContext.Provider value={{ toast, hideToast, setProgress }}>
            <Toast isShown={isShown} type={type} options={options} message={message} progress={progress} />
            {children}
        </ToastContext.Provider>
    )
}

const useToast = () => {
    const context = useContext(ToastContext)

    if (!context) {
        throw new Error('useToast must be used within ToastContext')
    }

    return context
}


export { useToast };
export default ToastProvider