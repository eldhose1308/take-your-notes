import React, { useEffect, useRef, useState } from "react"
import './TextBox.css'

const ValidationTextClass = {
    'INFO': 'text-info',
    'ERROR': 'text-destructive',
    'DEFAULT': 'text-default'
}

const labelVariants = {

}

const validationVariants = {

}

const textVariants = {

}

const TextBox = (props) => {
    const { labelName, validationMsg={}, ...otherProps } = props
    // rename validationMsg
    const { type: messageType, messages=[] } = validationMsg;
    const validationClass = ValidationTextClass[messageType]

    return (
        <React.Fragment>
            <div className="flex flex-col my-5 ">

                <div className="inline-flex max-w-sm w-full relative">
                    <input
                        className="flex h-12 w-full toggle-placeholders disabled-50
                            rounded-md border border-custom input border-input bg-default text-default
                            px-3 py-2 text-sm focus-border-2
                            ring-offset-background"
                        {...otherProps}    
                        />
                    {labelName ? <label className="label text-default absolute px-3 py-3 duration-400">{labelName}</label> : null}
                </div>
                {validationMsg ? (
                    <div className="flex flex-col mx-2 space-y-1">
                        {
                        messages.map((message, index) => {
                            return (<span key={index} className={`${validationClass} text-xs`}>{message}</span>)
                        })}
                    </div>
                ): null }
            </div>
        </React.Fragment>
    )
}

// TextBox.defaultProps = defaultProps
// TextBox.propTypes = propTypes;

export default React.memo(TextBox);