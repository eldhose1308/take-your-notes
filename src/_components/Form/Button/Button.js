import React from 'react'

import cva from '_utils/createVariantClassNames';

// import { defaultProps } from './props/defaultProps';
// import { propTypes } from './props/propTypes';

import './Button.css'

const buttonVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap disabled-50',
    {
        variants: {
            variant: {
                default: 'btn bg-default text-custom',
                accent: 'btn bg-accent text-custom',
                secondary: 'btn bg-secondary text-default',
                custom: 'btn bg-custom text-default hover-accent hover-text-custom',
                destructive: 'btn bg-destructive text-white',
                outline: 'btn bg-outline text-default border border-secondary hover-custom',
                link: 'btn bg-transparent',
                ghost: 'bg-transparent text-default hover-accent hover-text-custom'
            },
            size: {
                default: "h-10 px-4 py-2",
                xxs: "h-6 px-1 py-1",
                xs: "h-8 px-2 py-2",
                sm: "h-9 px-4 py-1",
                md: "h-10 px-4",
                lg: "h-11 px-8",
                icon: "h-10 w-10",
            },
            width: {
                none: '',
                full: 'w-full'
            },
            rounded: {
                default: '',
                md: 'rounded-md',
                xl: 'rounded-xl',
                full: 'rounded-full'
            },
        },
        defaultVariants: {
            variant: '',
            size: 'md',
            width: 'full',
            rounded: 'md',
        }
    }
)

const Button = ({ variant, size, width, rounded, className, isLoading, buttonStatus, children, ...props }) => {
    const classNames = buttonVariants({
        variant, size, width, rounded,
        className,
    });


    return (
        <button
            className={classNames}
            {...props}
        >
            {buttonStatus === 'loading' && <svg className="lucide lucide-loader-circle mx-2 animate-spin" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>}
            {buttonStatus === 'completed' && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>}
            {buttonStatus === 'failure' && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ban"><circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/></svg>}
            <span className='ml-2'>
            {children}
            </span>
        </button>
    )
}

// Button.defaultProps = defaultProps
// Button.propTypes = propTypes;

export default React.memo(Button)