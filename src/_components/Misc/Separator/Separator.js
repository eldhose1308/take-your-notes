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


const Separator = ({ variant, orientation='horizontal', className, ...props}) => {
    const isVertical = orientation === "vertical";
    const classNames = separatorVariants({
        variant,
        className,
    });

    if(isVertical){
        return (
            <span className="flex items-center justify-center mx-2">|</span>
        )
    }

    return (
        <hr className={classNames} />
    )
}

export default Separator;