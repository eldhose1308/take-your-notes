import React from "react";

import cva from '_utils/createVariantClassNames';


const separatorVariants = cva(
    'border',
    {
        variants: {
            variant: {
                default: 'border-default',
                another: 'border-another',
                accent: 'border-accent',
                secondary: 'border-secondary',
                custom: 'border-custom',
            },
        },
        defaultVariants: {
            variant: 'another',
        }
    }
)


const Separator = ({ variant, className, ...props}) => {
    const classNames = separatorVariants({
        variant,
        className,
    });

    return (
        <hr className={classNames} />
    )
}

export default Separator;