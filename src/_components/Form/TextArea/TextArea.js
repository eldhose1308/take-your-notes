import React from "react";

import './TextArea.css';
import cva from '_utils/createVariantClassNames';


const validationTextClass = cva('', {
    variants: {
        type: {
            info: 'text-info',
            error: 'text-destructive',
            default: 'text-default',
        },
    },
    defaultVariants: {
        type: 'default',
    },
});

const textBoxVariants = cva('flex h-12 toggle-placeholders disabled-50 rounded-md border border-custom input border-input bg-default text-default px-3 py-2 focus-border-2 ring-offset-background', {
    variants: {
        variant: {
            default: '',
            ghost: 'border-none',
            dashed: 'border-dashed',
            error: 'border-red-500',
            success: 'border-green-500',
        },
        width: {
            none: '',
            half: 'w-half',
            full: 'w-full',
        },
        size: {
            default: "h-10 px-4 py-2",
            xs: "h-7 px-2 py-1",
            sm: "h-22 px-4 py-1",
            md: "h-26 px-4",
            lg: "h-11 px-8",
            icon: "h-10 w-10",
        },
        placeholderFocus: {
            default: '',
            visibleOnFocus: 'placeholder-visible-focus'
        }
    },
    defaultVariants: {
        variant: 'default',
        width: 'full',
        size: 'md',
        placeholderFocus: 'visibleOnFocus'
    },
});

const TextArea = (props) => {
    const { variant, width, size, validationMsg={}, onChange=()=>{}, placeholderFocus, className, labelName, labelClassName, labelProps, ...remainingProps } = props;
    const { type: messageType = 'default', messages = [] } = validationMsg;

    const inputClassNames = textBoxVariants({ variant, width, size, placeholderFocus, className, });
    const validationClass = validationTextClass({ type: messageType });

    const handleChange = (e) => {
        const { value } = e.target
        onChange(value, e)
    }


    return (
        <div className="flex flex-col">
            <div className="inline-flex relative">
                <textarea  
                    className={inputClassNames}
                    onChange={handleChange}
                    {...remainingProps}
                />
                {labelName && (
                    <label className={`label text-default absolute px-3 py-3 duration-400 ${labelClassName}`} {...labelProps}>
                        {labelName}
                    </label>
                )}
            </div>

            {messages.length > 0 && (
                <div className="flex flex-col mx-2 space-y-1">
                    {messages.map((message, index) => (
                        <span key={index} className={`${validationClass} text-xs`}>
                            {message}
                        </span>
                    ))}
                </div>
            )}
        </div>
    )
}

export default TextArea;