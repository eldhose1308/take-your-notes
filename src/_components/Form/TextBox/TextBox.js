import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cva from '_utils/createVariantClassNames';

import './TextBox.css';

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
            sm: "h-9 px-4 py-1",
            md: "h-12 px-4",
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

const TextBox = ({ labelName, validationMsg = {}, variant, width, size, placeholderFocus, className, ...otherProps }) => {
    const { type: messageType = 'default', messages = [] } = validationMsg;

    const { labelProps, isFocused, onChange=()=>{}, onKeyDown=()=>{}, ...propsTextBox } = otherProps
    
    const inputRef = useRef(null);

    const validationClass = validationTextClass({ type: messageType });
    const inputClassNames = textBoxVariants({ variant, width, size, placeholderFocus, className, });

    const handleChange = (e) => {
        const { value } = e.target
        onChange(value, e)
    }

    const handleKeyDown = (e) => {
        const { value } = e.target
        onKeyDown(value, e)
    }

    useEffect(() => {
        if(isFocused){
            inputRef.current.focus();
        }
      }, [isFocused]);

    return (
        <div className="flex flex-col">
            <div className="inline-flex relative">
                <input
                    className={inputClassNames}
                    {...propsTextBox}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    ref={inputRef}
                />
                {labelName && (
                    <label className="label text-default absolute px-3 py-3 duration-400" {...labelProps}>
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
    );
};

TextBox.propTypes = {
    labelName: PropTypes.string,
    validationMsg: PropTypes.shape({
        type: PropTypes.oneOf(['info', 'error', 'default']),
        messages: PropTypes.arrayOf(PropTypes.string),
    }),
    state: PropTypes.oneOf(['default', 'error', 'success']),
    className: PropTypes.string,
};

TextBox.defaultProps = {
    validationMsg: {
        type: 'default',
        messages: [],
    },
    state: 'default',
    className: '',
};

export default TextBox;
